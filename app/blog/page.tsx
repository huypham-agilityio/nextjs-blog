// utils
import { getPosts } from 'services/posts';

// components
import { BlogPage } from './BlogPage';

// constants
import { LIMIT } from '@constants/pagination';
import { notFound } from 'next/navigation';

const fetchPosts = async () => {
  return getPosts({ page: 1, limit: LIMIT });
};

const Page = async () => {
  const { data, total } = await fetchPosts();

  if (data?.status === 404) {
    notFound();
  }

  return <BlogPage data={data} total={total} />;
};

export default Page;
