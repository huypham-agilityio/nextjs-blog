// libs
import React from 'react';

// utils
import { getCategories } from '@services/posts';

// components
import { CategoryNav } from '@components/layouts/CategoryNav';
import { BlogIntroduction } from '@components/BlogIntroduction/index';

async function fetchCategories() {
  return getCategories();
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await fetchCategories();

  return (
    <>
      <BlogIntroduction />
      <CategoryNav categories={data?.status === 404 ? [] : data} />
      {children}
    </>
  );
}
