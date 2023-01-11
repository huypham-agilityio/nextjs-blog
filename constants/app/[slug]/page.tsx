// libs
import { notFound } from 'next/navigation';

// utils
import { getPost, getPosts } from 'services/posts';

// components
import { PostDetail } from './PostDetail';

// constans
import { LIMIT } from '@constants/pagination';

// types
import { Post } from 'types/index';

const fetchPostDetail = async (slug: string) => {
  return getPost(slug);
};

export const generateStaticParams = async () => {
  const { data } = await getPosts({ page: 1, limit: LIMIT });

  return data?.map(({ slug }) => ({
    slug,
  }));
};

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const data: Post[] = await fetchPostDetail(params.slug);
  const post = data.length && data[0];

  if (!post) {
    return notFound();
  }

  return <PostDetail data={post} />;
};

export default Page;
