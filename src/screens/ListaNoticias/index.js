import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Texto, Botao} from './styles';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Texto>...</Texto>
      <Botao
        title="ir pra editar"
        onPress={() => {
          navigation.navigate('EditarNoticias');
        }}
      />
    </Container>
  );
};
