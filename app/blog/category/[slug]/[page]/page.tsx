import { getCategories, getPostsByCategory } from '@services/posts';
import { LIMIT } from '@constants/pagination';
import { BlogPage } from 'app/blog/BlogPage';

const fetchPostsByCategory = async (category: string, page: number) => {
  return getPostsByCategory(category, { page, limit: LIMIT });
};

export const generateStaticParams = async () => {
  const { data } = await getCategories();

  return data.map(({ slug }) => ({
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

  return <BlogPage data={data} params={params} total={total} />;
};

export default Page;
