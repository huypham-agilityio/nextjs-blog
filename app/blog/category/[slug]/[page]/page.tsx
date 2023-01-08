import { getCategories, getPostsByCategory } from '@services/posts';
import { Category } from 'types/index';
import { FIRST_PAGE, LIMIT } from '@constants/pagination';
import { BlogPage } from 'app/blog/BlogPage';

const fetchPostsByCategory = async (category: string, page: number) => {
  return getPostsByCategory(category, { page, limit: LIMIT });
};

export async function generateStaticParams() {
  const categories: Category[] = await getCategories();

  return categories.map(({ slug }) => ({
    slug: slug,
    page: FIRST_PAGE.toString(),
  }));
}

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
