import { notFound } from 'next/navigation';
import { getPost, getPosts } from 'services/posts';
import { PostDetail } from './PostDetail';
import { LIMIT } from '@constants/pagination';

const fetchPostDetail = async (slug: string) => {
  return getPost(slug);
};

export async function generateStaticParams() {
  const { data } = await getPosts({ page: 1, limit: LIMIT });

  return data?.map(({ slug }) => ({
    slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data } = await fetchPostDetail(params.slug);
  const post = data?.find(({ slug }) => slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <PostDetail data={post} />;
};

export default Page;
