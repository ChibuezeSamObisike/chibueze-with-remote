import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type TypographyProps = TextProps & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3';
};

const Typography = ({ variant = 'h1', ...rest }: TypographyProps) => {
  return <Text textStyle={variant} {...rest} />;
};

export default Typography;
