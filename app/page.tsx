// libs
import { Suspense } from 'react';

// components
import { Benefits } from '@components/home/Benefits';
import { Hero } from '@components/home/Hero';
import { Integrations } from '@components/home/Integrations';
import Loading from './loading';
import { Featured } from './Featured';

const Home = () => (
  <>
    <Hero />
    <Benefits />
    <Integrations />
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Server Component */}
      <Featured />
    </Suspense>
  </>
);

export default Home;
