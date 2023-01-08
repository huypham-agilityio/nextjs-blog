import { getFeaturedPosts } from 'services/posts';
import { HomePage } from './HomePage';

const fetchData = async () => {
  return getFeaturedPosts();
};

const Home = async () => {
  const res = await fetchData();
  const { data } = res;

  return (
    <>
      <HomePage featuredPosts={data} />
    </>
  );
};

export default Home;
