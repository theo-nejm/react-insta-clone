import React, { useState, useEffect } from 'react';

import { Container } from './styled';
import PostHeader from '../PostHeader';
import PostBody from '../PostBody';

export default function Post() {
  const [currentUser, setCurrentUser] = useState()
  const [randomUsersArr, setRandomUsersArr] = useState()

  useEffect(() => {
    async function fetchData() {
      const user = {}
      const received = await fetch('https://random-data-api.com/api/users/random_user');
      const data = await received.json();
      user.username = data.username;
      user.avatar = `https://source.unsplash.com/random/4${getRandomInt(0, 9)}x4${getRandomInt(0, 9)}`
      setCurrentUser(user)
    }
    fetchData()

    async function fetchRandom() {
      const randomUsers = []
      for(let i = 0; i < 2; i++) {
        const received = await fetch('https://random-data-api.com/api/users/random_user');
        const data = await received.json();
        randomUsers.push(data.username)
      }
      setRandomUsersArr(randomUsers)
    }
    fetchRandom()

  }, [])
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Container>
      <PostHeader
        user={currentUser ? currentUser : null}
      />
      <PostBody
        user={currentUser ? currentUser : null}
        randomUsers={randomUsersArr}
        getRandomInt={getRandomInt}
      />
    </Container>
  )
}