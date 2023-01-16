// libs
import { notFound } from 'next/navigation';

// utils
import { getPosts } from 'services/posts';

// constants
import { LIMIT } from '@constants/pagination';

// components
import { BlogPage } from '../BlogPage';

const fetchPosts = async (page: number) => {
  return getPosts({ page, limit: LIMIT });
};

export const generateStaticParams = async () => {
  // generate two pages at build time: "/blog/1", "/blog/2"
  return [{ page: '1' }, { page: '2' }];
};

const Page = async ({ params }: { params: { page: string } }) => {
  const { data, total } = await fetchPosts(Number(params.page));

  if (data?.status === 404) {
    notFound();
  }

  return <BlogPage data={data} params={params} total={total} />;
};

export default Page;
