'use client';

// libs
import { Tabs, TabList, Tab, Box, Container } from '@chakra-ui/react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

// types
import { Category } from 'types/index';

type Props = {
  categories: Category[];
};

export const CategoryNav = ({ categories }: Props) => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <Box bg="bg.primary">
      <Container>
        <Tabs
          defaultIndex={
            categories?.map((i) => i.slug).indexOf(selectedLayoutSegments) + 1
          }
        >
          <TabList
            px="150px"
            bg="bg.primary"
            color="#777"
            borderColor="bg.primary"
          >
            <Tab
              _selected={{
                color: 'black',
                fontWeight: 'semibold',
                borderColor: 'whatsapp.500',
              }}
            >
              <Link href="/blog/1">All Articles</Link>
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
      </Container>
    </Box>
  );
};
