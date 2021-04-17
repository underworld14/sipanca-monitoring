import React from 'react';
import { Text } from 'react-native';

const Index = ({ size, children, ...props }) => {
  props = { ...props, style: size ? { fontSize: size } : props?.style };

  return <Text {...props}>{children}</Text>;
};

export default Index;
