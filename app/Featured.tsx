// utils
import { getFeaturedPosts } from '@services/posts';

// components
import { FeaturedPosts } from '@components/home/FeaturedPosts';

const fetchFeaturedPosts = async () => {
  return getFeaturedPosts();
};

export const Featured = async () => {
  const { data } = await fetchFeaturedPosts();

  return <FeaturedPosts data={data} />;
};
