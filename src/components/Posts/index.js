import React from 'react';

import  { Container } from './styled';
import Post from '../Post';

export default function Posts() {
  const postsArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  return (
    <Container>
    {
      postsArr.map(item => <Post key={item}/>)
    }
    </Container>
  )
}