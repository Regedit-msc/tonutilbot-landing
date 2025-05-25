---
title: "Testing Image Support in Blog Posts"
description: "A comprehensive test of the blog system's image support capabilities, including hero images, in-post images, and various markdown image features."
image: "/blog/test-images/hero-image.jpg"
publishedAt: "2025-05-25"
updatedAt: "2025-05-25"
category: "Technical"
author:
  name: "TonderLabs Team"
  avatar: "/team/tonderlabs-avatar.png"
  bio: "The innovative team behind TonderBot and TonderLabs, dedicated to building next-generation Web3 solutions on the TON Network."
slug: "test-image-support"
---

# Testing Image Support in Blog Posts

This blog post demonstrates the comprehensive image support capabilities of our blog system. We'll explore different ways to include images, from hero images to in-post images with captions.

## Hero Image Support

The hero image for this post is defined in the frontmatter using the `image` field. It appears prominently at the top of the post and is used for social media sharing.

## In-Post Images

Our blog system supports markdown images that are automatically optimized and styled. Here are some examples:

### Basic Image Example

![TonderBot Interface](https://via.placeholder.com/800x400/3DB3FC/FFFFFF?text=TonderBot+Interface)

This image demonstrates the basic markdown image syntax. The alt text becomes a caption below the image.

### TON Network Architecture

![TON Network Architecture Diagram](https://via.placeholder.com/800x300/5C80FA/FFFFFF?text=TON+Network+Architecture)

Images are automatically optimized using Next.js Image component for better performance and loading times.

## Image Features

### 1. Automatic Optimization

All images are processed through Next.js Image component, which provides:

- **Lazy loading** for better performance
- **Responsive sizing** that adapts to different screen sizes
- **Modern formats** with automatic WebP conversion when supported
- **Placeholder handling** during loading

### 2. Styling and Layout

Images receive consistent styling:

- **Rounded corners** for a modern appearance
- **Full width** within the content area
- **Proper spacing** with margin above and below
- **Caption support** using the alt text

### 3. Accessibility

Our image implementation prioritizes accessibility:

- **Alt text** is required and displayed as captions
- **Semantic markup** for screen readers
- **Proper contrast** in caption text

## Examples with Different Aspect Ratios

### Wide Landscape Image

![Wide Landscape Example](https://via.placeholder.com/800x200/936BF9/FFFFFF?text=Wide+Landscape+Image)

### Square Image

![Square Image Example](https://via.placeholder.com/400x400/FF6B6B/FFFFFF?text=Square+Image)

### Portrait Image

![Portrait Image Example](https://via.placeholder.com/400x600/4ECDC4/FFFFFF?text=Portrait+Image)

## Technical Implementation

The image rendering is handled by a custom ReactMarkdown component:

```tsx
img: ({ src, alt }) => (
  <div className="my-8">
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-lg w-full h-auto"
    />
    {alt && (
      <p className="text-center text-sm text-gray-400 mt-2 italic">{alt}</p>
    )}
  </div>
);
```

## Best Practices for Blog Images

### 1. File Organization

Store blog images in the `/public/blog/` directory:

```
public/
  blog/
    post-name/
      image1.jpg
      image2.png
    shared/
      common-graphics.svg
```

### 2. Optimal Dimensions

- **Hero images**: 1200x630 (ideal for social sharing)
- **In-post images**: 800x400 or larger
- **Thumbnails**: 400x200

### 3. File Formats

- **Photos**: Use JPEG for better compression
- **Graphics**: Use PNG for transparency
- **Icons**: Use SVG for scalability

## Conclusion

The blog system provides robust image support that balances performance, accessibility, and visual appeal. The automatic optimization and consistent styling ensure that all images look great and load quickly across different devices.

Whether you're showcasing product features, explaining technical concepts, or adding visual interest to your content, the image support system makes it easy to create engaging blog posts.

## Future Enhancements

Potential future improvements could include:

- **Gallery support** for multiple related images
- **Zoom functionality** for detailed images
- **Lazy loading animations** for better UX
- **Image compression settings** for different use cases

![Footer Image](https://via.placeholder.com/600x150/2C3E50/FFFFFF?text=Thank+You+for+Reading!)
