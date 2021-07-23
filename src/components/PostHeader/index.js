import React from 'react';

import { Container } from './styled';

export default function PostHeader(props) {
  console.log(props.user)
  return (
    <Container>
      <div className="left">
        <img
          src={props.user ? props.user.avatar : null}
          alt={props.user ? `Avatar de ${props.user.username}.` : null}
        />

        <span>{props.user ? props.user.username : null}</span>
      </div>
      <svg aria-label="Mais opções" class="_8-yf5 " fill="#262626" height="16" role="img" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
    </Container>
  )
}