'use client';

import { Benefits } from '@components/home/Benefits';
import { FeaturedPosts } from '@components/home/FeaturedPosts';
import { Hero } from '@components/home/Hero';
import { Integrations } from '@components/home/Integrations';
import { Post } from 'types/index';

type Props = {
  featuredPosts?: Post[];
};

export const HomePage = ({ featuredPosts }: Props) => {
  return (
    <>
      <Hero />
      <Benefits />
      <Integrations />

      {/* @ts-expect-error Server Component */}
      <FeaturedPosts data={featuredPosts} />
    </>
  );
};
