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
