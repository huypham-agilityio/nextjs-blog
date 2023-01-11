import { Category, PageInput, Post } from 'types/index';

export const fetchRequest = async (url: string, option?: any) => {
  try {
    const res = await fetch(url, option);

    if (!res?.ok) {
      return res;
    }

    return await res.json();
  } catch (e) {
    return e;
  }
};

export const getFeaturedPosts = async (): Promise<{
  data: Post[];
}> => {
  const data = await fetchRequest(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?isFeatured=true`,
    {
      next: { revalidate: 3600 }, // revalidate 1 hour
    }
  );

  return { data };
};

export const getPosts = async (
  pagination: PageInput
): Promise<{
  data: Post[];
  total: number;
}> => {
  const { page, limit } = pagination;
  const data = await fetchRequest(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?p=${page}&l=${limit}`,
    {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    }
  );

  // total is known by the DB
  return { data, total: 30 };
};

export const getPostsByCategory = async (
  category: string,
  pagination: PageInput
): Promise<{
  data: Post[];
  total: number;
}> => {
  const { page, limit } = pagination;
  const data = await fetchRequest(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?category=${category}&p=${page}&l=${limit}`,
    {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    }
  );

  // total is known by the DB
  return { data, total: 15 };
};

export const getCategories = async (): Promise<{
  data: Category[];
}> => {
  const data = await fetchRequest(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/categories`
  );
  return { data };
};

export const getPost = async (slug: string) => {
  const data = await fetchRequest(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?slug=${slug}`
  );

  return data;
};
