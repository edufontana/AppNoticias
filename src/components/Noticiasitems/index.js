import React from 'react';
import {View, Text} from 'react-native';

import {Box, Title} from './styles';

export default ({data, index, onPress}) => {
  return (
    <Box onPress={() => onPress(index)}>
      <Title>{data.title}</Title>
    </Box>
  );
};
