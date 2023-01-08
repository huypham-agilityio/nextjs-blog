import { getPosts } from 'services/posts';
import { BlogPage } from './BlogPage';

const fetchPosts = async () => {
  return getPosts();
};

const Page = async () => {
  const { data, total } = await fetchPosts();

  return <BlogPage data={data} total={total} />;
};

export default Page;
