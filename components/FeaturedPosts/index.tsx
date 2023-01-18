// utils
import { getFeaturedPosts } from '@services/posts';

// components
import { FeaturedSection } from '@components/FeaturedPosts/FeaturedSection';

const fetchFeaturedPosts = async () => {
  return getFeaturedPosts();
};

export const FeaturedPosts = async () => {
  const { data } = await fetchFeaturedPosts();

  return <FeaturedSection data={data} />;
};
