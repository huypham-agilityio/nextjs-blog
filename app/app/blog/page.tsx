import { LIMIT } from '@constants/pagination';
import { getPosts } from 'services/posts';
import { BlogPage } from './BlogPage';

const fetchPosts = async () => {
  return getPosts({ page: 1, limit: LIMIT });
};

const Page = async () => {
  const { data, total } = await fetchPosts();

  return <BlogPage data={data} total={total} />;
};

export default Page;
