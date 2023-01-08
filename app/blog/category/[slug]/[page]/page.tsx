import { getCategories, getPostsByCategory } from '@services/posts';
import { FIRST_PAGE, LIMIT } from '@constants/pagination';
import { BlogPage } from 'app/blog/BlogPage';

const fetchPostsByCategory = async (category: string, page: number) => {
  return getPostsByCategory(category, { page, limit: LIMIT });
};

export async function generateStaticParams() {
  const { data } = await getCategories();

  return data.map(({ slug }) => ({
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
