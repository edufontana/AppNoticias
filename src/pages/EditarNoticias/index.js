import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  TitleInput,
  BodyInput,
  AuthorInput,
  Save,
  SaveImage,
  Close,
  CloseImage,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const noticias = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key != undefined && noticias[route.params.key]) {
      setStatus('edit');
      setTitle(noticias[route.params.key].title);
      setBody(noticias[route.params.key].body);
      setAuthor(noticias[route.params.key].author);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status == 'new' ? 'Nova notícia' : 'Edita Notícia',

      headerLeft: () => (
        <Close underlayColor="transparent" onPress={handleClose}>
          <CloseImage source={require('../../assets/close.png')} />
        </Close>
      ),

      headerRight: () => (
        <Save underlayColor="transparent" onPress={handleSave}>
          <SaveImage source={require('../../assets/save.png')} />
        </Save>
      ),
    });
  }, [status, title, body, author]);

  const handleSave = () => {
    if (title != '' && body != '' && author != '') {
      if (status == 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title,
            body,
            author,
          },
        });
        navigation.goBack();
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {title, body, author},
        });
        navigation.goBack();
      }
    } else {
      alert('preencha a notícia');
    }
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={(e) => setTitle(e)}
        placeholder="Digite o título da notícia"
        placeholderTextColor="#ccc"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={(e) => setBody(e)}
        placeholder="Digite o corpo da notícia"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
      />
      <AuthorInput
        value={author}
        onChangeText={(e) => setAuthor(e)}
        placeholder="Digite o nome do autor"
        placeholderTextColor="#ccc"
      />
    </Container>
  );
};
