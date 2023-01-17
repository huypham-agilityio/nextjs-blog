import { BASE_API_URL } from '@constants/api';
import { PageInput } from 'types/index';

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

export const getFeaturedPosts = async () => {
  const data = await fetchRequest(`${BASE_API_URL}/posts?isFeatured=true`, {
    next: { revalidate: 3600 }, // revalidate 1 hour
  });

  return { data };
};

export const getPosts = async (pagination: PageInput) => {
  const { page, limit } = pagination;
  const data = await fetchRequest(
    `${BASE_API_URL}/posts?p=${page}&l=${limit}`,
    {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    }
  );

  // mock total value - total is known by the DB
  return { data, total: 30 };
};

export const getPostsByCategory = async (
  category: string,
  pagination: PageInput
) => {
  const { page, limit } = pagination;
  const data = await fetchRequest(
    `${BASE_API_URL}/posts?category=${category}&p=${page}&l=${limit}`,
    {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    }
  );

  // mock total value - total is known by the DB
  return { data, total: 15 };
};

export const getCategories = async () => {
  const data = await fetchRequest(`${BASE_API_URL}/categories`);
  return { data };
};

export const getPost = async (slug: string) => {
  const data = await fetchRequest(`${BASE_API_URL}/posts?slug=${slug}`);

  return { data: data?.length ? data[0] : null };
};
