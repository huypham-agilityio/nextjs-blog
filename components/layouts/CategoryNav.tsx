'use client';

// libs
import { Tabs, TabList, Tab, Box, Container } from '@chakra-ui/react';
import { Select } from '@components/common/Select';
import { ROUTES } from '@constants/routes';
import Link from 'next/link';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';

// types
import { Category } from 'types/index';

type Props = {
  categories: Category[];
};

export const CategoryNav = ({ categories }: Props) => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const router = useRouter();

  return (
    <Box bg="bg.primary">
      <Container px={{ md: '60px', lg: '150px' }}>
        <Tabs
          display={{ base: 'none', md: 'block' }}
          defaultIndex={
            categories?.map((i) => i.slug).indexOf(selectedLayoutSegments) + 1
          }
        >
          <TabList bg="bg.primary" color="#777" borderColor="bg.primary">
            <Tab
              _selected={{
                color: 'black',
                fontWeight: 'semibold',
                borderColor: 'whatsapp.500',
              }}
            >
              <Link href={ROUTES.BLOG}>All Articles</Link>
            </Tab>
            {categories.map(({ id, name, slug }) => (
              <Tab
                key={id}
                _selected={{
                  color: 'black',
                  fontWeight: 'semibold',
                  borderColor: 'whatsapp.500',
                }}
              >
                <Link href={`/blog/category/${slug}/1`}>{name}</Link>
              </Tab>
            ))}
          </TabList>
        </Tabs>

        <Select
          bg="white"
          my="24px"
          onChange={(e) => router.push(e.target.value)}
          display={{ md: 'none' }}
          options={[
            {
              value: ROUTES.BLOG,
              label: 'All Articles',
            },
            ...categories.map(({ name, slug }) => ({
              value: `/blog/category/${slug}/1`,
              label: name,
            })),
          ]}
        />
      </Container>
    </Box>
  );
};
