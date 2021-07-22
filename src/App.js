import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Posts from './components/Posts';

import GlobalStyle from './styles/globalStyles';
import { Container } from './styles/globalStyles';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Stories />
      <Posts />
    </Container>
  );
}
