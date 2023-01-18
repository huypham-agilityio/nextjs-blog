// libs
import { Suspense } from 'react';

// components
import { Benefits } from '@components/Benefits';
import { Hero } from '@components/Hero';
import { Integrations } from '@components/Integrations';
import Loading from './loading';
import { FeaturedPosts } from '../components/FeaturedPosts';

const Home = () => (
  <>
    <Hero />
    <Benefits />
    <Integrations />
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </Suspense>
  </>
);

export default Home;
