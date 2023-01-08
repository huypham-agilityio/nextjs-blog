import { FIRST_PAGE, LIMIT } from '@constants/pagination';
import { PageInput, Post } from 'types/index';

export const getFeaturedPosts = async (): Promise<{
  data?: Post[];
  errors?: Response;
}> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/posts?isFeatured=true`, {
      next: { revalidate: 3600 }, // revalidate this page every 1 hour
    });

    if (!res?.ok) {
      return { errors: res };
    }
    const data = await res.json();

    return { data };
  } catch (e: any) {
    return e;
  }
};

export const getPosts = async (
  option?: PageInput
): Promise<{ data?: Post[]; total?: number; errors?: Response }> => {
  try {
    const { page = FIRST_PAGE, limit = LIMIT } = option || {};
    const res = await fetch(
      `${process.env.BASE_URL}/posts?p=${page}&l=${limit}`,
      {
        next: { revalidate: 3600 }, // revalidate this page every 1 hour
      }
    );

    if (!res?.ok) {
      return { errors: res };
    }
    const data = await res.json();

    // total is known by the DB
    return { data, total: 30 };
  } catch (e: any) {
    return e;
  }
};

export const getPostsByCategory = async (
  category: string,
  option?: PageInput
): Promise<{ data?: Post[]; total?: number; errors?: Response }> => {
  try {
    const { page = FIRST_PAGE, limit = LIMIT } = option || {};
    const res = await fetch(
      `${process.env.BASE_URL}/posts?category=${category}&p=${page}&l=${limit}`,
      {
        next: { revalidate: 3600 }, // revalidate this page every 1 hour
      }
    );

    if (!res?.ok) {
      return { errors: res };
    }
    const data = await res.json();

    // total is known by the DB
    return { data, total: 15 };
  } catch (e: any) {
    return e;
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/categories?p=1&l=10`);

    return res.json();
  } catch (e: any) {
    return e;
  }
};

export const getPost = async (
  slug: string
): Promise<{ data?: Post[]; errors?: Response }> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/posts?slug=${slug}`);

    if (!res?.ok) {
      return { errors: res };
    }
    const data = await res.json();
    return { data };
  } catch (e: any) {
    return e;
  }
};
