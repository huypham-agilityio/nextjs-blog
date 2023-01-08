import React from 'react';
import { CategoryNav } from '@components/layout/CategoryNav';
import { getCategories } from '@services/posts';
import { BlogIntroduction } from '@components/blog/BlogIntroduction';

async function fetchCategories() {
  return getCategories();
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();

  return (
    <>
      <BlogIntroduction />
      <CategoryNav categories={categories} />
      <div style={{ minHeight: 'calc(100vh - 580px)' }}>{children}</div>
    </>
  );
}
