import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { memo } from 'react';
import { ImageType } from 'types/index';
import Image from 'next/image';
import isEqual from 'react-fast-compare';

type Props = {
  data: {
    title: string;
    description: string;
    image: ImageType;
  };
  active?: boolean;
};

const BenefitCard = ({ data, active }: Props) => {
  const { title, description, image } = data;

  return (
    <Card
      borderRadius="12px"
      maxW="374px"
      minH="439px"
      bg={active ? '#ffe377' : 'rgba(255, 255, 255, 0.04)'}
    >
      <CardBody px="32px" py="64px">
        <Box minH="110px">
          <Image
            src={image?.src}
            alt={image?.alt}
            width={image?.width}
            height={image?.height}
          />
        </Box>
        <Divider borderColor={active ? 'black' : 'white'} />
        <Stack mt="6" spacing="3">
          <Heading color={active ? 'black' : 'textColors.secondary'} size="md">
            {title}
          </Heading>
          <Text color={active ? 'black' : 'textColors.secondary'}>
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default memo(BenefitCard, isEqual);
