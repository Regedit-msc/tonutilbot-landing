import { BlogType } from "@/types";

const testPost: BlogType = {
  slug: "test-post",
  title: "Test Post",
  description: "A test blog post",
  image: "/blog/test.jpg",
  publishedAt: "2025-01-01",
  updatedAt: "2025-01-01",
  category: "Test",
  author: {
    name: "Test Author",
    avatar: "/team/test.png",
    bio: "Test bio",
  },
  content: "# Test Content",
};

export function getBlogPost(slug: string) {
  return testPost;
}

export function getAllBlogSlugs() {
  return ["test-post"];
}

export function getAllBlogPosts() {
  return [testPost];
}

export function getBlogPostsByCategory(category: string) {
  return [testPost];
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
) {
  return [testPost];
}

export function calculateReadTime(content: string) {
  return 5;
}

export function extractExcerpt(content: string, maxLength: number = 150) {
  return "Test excerpt";
}
