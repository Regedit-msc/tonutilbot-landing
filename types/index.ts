export type BlogTabType = {
  attributes: {
    name: string;
    slug: string;
  };
};

export type BlogType = {
  slug: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: string;
};

export type NextSearchParams = { [key: string]: string };

export type RevealType = {
  title: string;
  content: string;
};
