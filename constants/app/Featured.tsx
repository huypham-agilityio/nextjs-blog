// utils
import { getFeaturedPosts } from '@services/posts';

// components
import { FeaturedPosts } from '@components/home/FeaturedPosts';

// types
import { Post } from 'types/index';

const fetchFeaturedPosts = async () => {
  return getFeaturedPosts();
};

export const Featured = async () => {
  const { data }: { data: Post[] } = await fetchFeaturedPosts();

  return <FeaturedPosts data={data} />;
};
