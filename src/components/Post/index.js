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
      user.avatar = `https://source.unsplash.com/random/40x40`
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
  
  return (
    <Container>
      <PostHeader
        user={currentUser ? currentUser : null}
      />
      <PostBody
        user={currentUser ? currentUser : null}
        randomUsers={randomUsersArr}
      />
    </Container>
  )
}