import React from 'react';
import { Container, Avatar, AvatarBG } from './styled';

export default function Story(props) {
  return (
    <Container>
      <AvatarBG>
        <Avatar src={props.avatar}></Avatar>
      </AvatarBG>
      <span>{
        props.username.length > 14
        ? props.username.slice(0, 11) + '...'
        : props.username
      }</span>
    </Container>
  )
}