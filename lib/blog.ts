import { BlogType } from "@/types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content", "blog");

// Function to get default gradient image if no image is provided
function getDefaultBlogImage(): string {
  return "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' style='stop-color:%233DB3FC'/%3e%3cstop offset='50%25' style='stop-color:%235C80FA'/%3e%3cstop offset='100%25' style='stop-color:%23936BF9'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23gradient)'/%3e%3c/svg%3e";
}

// Function to parse markdown frontmatter and content
function parseMarkdownFile(filePath: string): BlogType | null {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug,
      title: data.title,
      description: data.description,
      image: data.image || getDefaultBlogImage(),
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt || data.publishedAt,
      category: data.category,
      author: data.author,
      content: content,
    };
  } catch (error) {
    console.error(`Error parsing markdown file ${filePath}:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => name.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogType | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    return parseMarkdownFile(filePath);
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogType[]> {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    const posts = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const filePath = path.join(contentDirectory, name);
        return parseMarkdownFile(filePath);
      })
      .filter((post): post is BlogType => post !== null)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );

    return posts;
  } catch (error) {
    console.error("Error getting all blog posts:", error);
    return [];
  }
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogType[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): Promise<BlogType[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function extractExcerpt(
  content: string,
  maxLength: number = 150
): string {
  const plainText = content
    .replace(/#{1,6}\s/g, "") // Remove markdown headers
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
    .replace(/\*(.*?)\*/g, "$1") // Remove italic markdown
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links, keep text
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`(.*?)`/g, "$1") // Remove inline code
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + "...";
}
