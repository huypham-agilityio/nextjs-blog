import { LIMIT } from '@constants/pagination';
import { getPosts } from 'services/posts';
import { BlogPage } from '../BlogPage';

const fetchPosts = async (page: number) => {
  return getPosts({ page, limit: LIMIT });
};

export async function generateStaticParams() {
  // generate two pages at build time: "/blog/1", "/blog/2"
  return [{ page: '1' }, { page: '2' }];
}

const Page = async ({ params }: { params: { page: string } }) => {
  const { data, total } = await fetchPosts(Number(params.page));

  return <BlogPage data={data} params={params} total={total} />;
};

export default Page;
