import React, { useState } from 'react';

import { Container } from './styled';

import Actions from './actions';


export default function PostBody(props) {
  return (
    <Container>
      {
        props.user 
        ? <img src={`https://source.unsplash.com/random/${600 + props.getRandomInt(0, 200)}x${500 + props.getRandomInt(0, 100)}`} alt={`Foto de ${props.user.username}`}></img>
        : null
      }

      <Actions /> 

      <div className="body-foot">
        <p className="liked-by">Curtido por <b>${props.randomUsers ? props.randomUsers[0] : null}</b> e <b>outras {props.getRandomInt(150, 2000)} pessoas</b></p>

        <p className="owner-comment"><b>{props.user ? props.user.username : null}</b> random comment</p>

        <p className="see-all">Ver todos os {props.getRandomInt(2, 120)} comentários</p>
      
        <p className="user-comment 1"><b>{props.randomUsers ? props.randomUsers[0] : null}</b> random comment</p>

        <p className="user-comment 2"><b>{props.randomUsers ? props.randomUsers[1] : null}</b> random comment</p>
      </div>
    </Container>
  )
}