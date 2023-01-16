// libs
import { notFound } from 'next/navigation';

// utils
import { getPost, getPosts } from 'services/posts';

// components
import { PostDetail } from './PostDetail';

// constans
import { LIMIT } from '@constants/pagination';

// types
import { Category } from 'types/index';

const fetchPostDetail = async (slug: string) => {
  return getPost(slug);
};

export const generateStaticParams = async () => {
  const { data } = await getPosts({ page: 1, limit: LIMIT });

  if (data?.status === 404) {
    return [];
  }

  return data.map(({ slug }: Category) => ({
    slug,
  }));
};

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data } = await fetchPostDetail(params.slug);

  if (!data) {
    notFound();
  }

  return <PostDetail data={data} />;
};

export default Page;
