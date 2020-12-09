import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fff;
  border-style: solid;
  border-bottom-color: #222;
  border-bottom-width: 1px;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 15px;
`;

export const AuthorInput = styled.TextInput`
  height: 60px;
  color: #fff;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: #222;
  border-style: solid;
  border-top-color: #222;
  border-top-width: 1px;
`;

export const Save = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const SaveImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Close = styled.TouchableHighlight`
  margin-left: 15px;
`;

export const CloseImage = styled.Image`
  width: 13px;
  height: 13px;
`;

export const DeleteButton = styled.TouchableHighlight`
  height: 50px;
  background-color: #ff3333;
  justify-content: center;
  align-items: center;
`;

export const DeleteTexto = styled.Text`
  font-size: 14px;
  color: #fff;
`;
