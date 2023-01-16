// utils
import { getCategories, getPostsByCategory } from '@services/posts';

// components
import { BlogPage } from 'app/blog/BlogPage';

// constants
import { LIMIT } from '@constants/pagination';

// types
import { Category } from 'types/index';
import { notFound } from 'next/navigation';

const fetchPostsByCategory = async (category: string, page: number) => {
  return getPostsByCategory(category, { page, limit: LIMIT });
};

export const generateStaticParams = async () => {
  const { data } = await getCategories();

  if (data?.status === 404) {
    return [];
  }

  return data.map(({ slug }: Category) => ({
    slug: slug,
    page: '1',
  }));
};

type Props = {
  params: {
    slug: string;
    page: string;
  };
};

const Page = async ({ params }: Props) => {
  const { slug, page } = params;
  const { data, total } = await fetchPostsByCategory(slug, Number(page));

  if (data?.status === 404) {
    notFound();
  }

  return <BlogPage data={data} params={params} total={total} />;
};

export default Page;
