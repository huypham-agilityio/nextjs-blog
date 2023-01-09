import { getPost } from '@services/posts';
import { Post } from 'types/index';

const fetchPost = async (slug: string) => {
  return getPost(slug);
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function Head({ params }: Props) {
  const data: Post[] = await fetchPost(params.slug);
  const post = data.length ? data[0] : null;

  return (
    <>
      <title>{`${post?.title} | Yoora`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:site_name" content="Yoora" />
      <meta name="og:type" content="article" />
      <meta name="og:title" content={post?.title} />
      <meta property="og:image" content={post?.image.src} />
      <meta
        property="og:url"
        content={`https://yoora.vercel.app/${post?.slug}`}
      />
      <meta
        property="og:description"
        content="Bringing companies and customers together, anywhere"
      />
    </>
  );
}
