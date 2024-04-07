export type BlogTabType = {
  attributes: {
    name: string;
    slug: string;
  };
};

export type BlogType = {
  attributes: {
    title: string;
    description: string;
    content: string;
    image: string;
    slug: string;
    categories: BlogTabType[];
    author?: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    bannerImage?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    createdAt: string;
    updatedAt: string;
  };
};

export type NextSearchParams = { [key: string]: string };

export type RevealType = {
  title: string;
  content: string;
};
