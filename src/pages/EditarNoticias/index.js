import React, {useState} from 'react';

import {Container, TitleInput, BodyInput, AuthorInput} from './styles';

export default () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

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
