import React, {useLayoutEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Container, Adicionar, ImageMais, ListaNoticias} from './styles';

import Noticiasitems from '../../components/Noticiasitems';

export default () => {
  const navigation = useNavigation();
  const noticias = useSelector((state) => state.notes.list);

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

  const handdleNoticiasPress = (index) => {
    navigation.navigate('EditarNoticias', {
      key: index,
    });
  };

  return (
    <Container>
      {noticias.length > 0 && (
        <ListaNoticias
          data={noticias}
          renderItem={({item, index}) => (
            <Noticiasitems
              data={item}
              index={index}
              onPress={handdleNoticiasPress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {noticias.length == 0 && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: 'white'}}>Nenhuma Notícia</Text>
        </View>
      )}
    </Container>
  );
};
