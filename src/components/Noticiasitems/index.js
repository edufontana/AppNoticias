import React from 'react';
import {View, Text} from 'react-native';

import {Box, Title} from './styles';

export default ({data, index, onPress}) => {
  return (
    <Box onPress={() => onPress(index)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Title style={{fontSize: 24, flex: 1}}>{data.title}</Title>
        <Title
          style={{
            fontSize: 14,
            width: 140,
            marginLeft: 15,
          }}>{`Autor: ${data.author}`}</Title>
      </View>
    </Box>
  );
};
