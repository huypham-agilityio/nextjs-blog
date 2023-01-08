import { Box, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { benefits } from '@constants/mockData';
import BenefitCard from './BenefitCard';

export const Benefits = () => {
  return (
    <Box bg="bg.secondary">
      <Container>
        <Stack spacing="80px" px="150px" py="120px">
          <HStack>
            <Heading color="textColors.secondary" size="2xl" flexBasis={600}>
              Here&apos;s how Yoora can benefit your business
            </Heading>
            <Text color="textColors.secondary" fontSize="lg" maxW={487}>
              Build more meaningful and lasting relationships — better
              understand their needs, identify new opportunities to help,
              address any problems faster.
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            {benefits.map((item, index) => (
              <BenefitCard key={item.id} data={item} active={index === 0} />
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
