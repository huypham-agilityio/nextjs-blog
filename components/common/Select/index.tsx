'use client';

import {
  HStack,
  Image,
  Select as SelectChakra,
  SelectProps,
} from '@chakra-ui/react';

interface Props extends SelectProps {
  options?: { value: string; label: string }[];
  iconUrl?: string;
}

export const Select = ({ options, iconUrl, ...props }: Props) => {
  return (
    <HStack spacing="1.5">
      <Image src={iconUrl} alt="Select icon" width="20px" height="20px" />
      <SelectChakra {...props}>
        {options?.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectChakra>
    </HStack>
  );
};
