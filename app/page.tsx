import { Post } from 'types/index';
import { getFeaturedPosts } from 'services/posts';
import { HomePage } from './HomePage';

const fetchFeaturedPosts = async () => {
  return getFeaturedPosts();
};

const Home = async () => {
  const { data }: { data: Post[] } = await fetchFeaturedPosts();

  return (
    <>
      <HomePage featuredPosts={data} />
    </>
  );
};

export default Home;
