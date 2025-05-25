import { getBlogPost, getAllBlogSlugs } from "../../../lib/blog";

console.log("Testing blog imports:");
console.log("getBlogPost:", typeof getBlogPost);
console.log("getAllBlogSlugs:", typeof getAllBlogSlugs);

export default function TestImport() {
  return <div>Test Import</div>;
}
