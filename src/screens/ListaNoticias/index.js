import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Container, Adicionar, ImageMais} from './styles';

export default () => {
  const navigation = useNavigation();
  const noticias = useSelector((item) => item.notes.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Notícias',
      headerRight: () => (
        <Adicionar
          onPress={() => {
            navigation.navigate('EditarNoticias');
          }}>
          <ImageMais source={require('../../assets/more.png')} />
        </Adicionar>
      ),
    });
  }, []);

  return <Container />;
};
