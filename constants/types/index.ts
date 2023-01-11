export type ImageType = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Post = {
  id: string;
  title: string;
  image: ImageType;
  content: string;
  slug: string;
  author?: string;
  publishedTime?: string;
  category?: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type PageInput = {
  page: number;
  limit: number;
};
