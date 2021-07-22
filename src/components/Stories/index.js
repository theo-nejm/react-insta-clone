import React, { useEffect, useState } from 'react';
import Container from './styled';
import Story from '../Story';

export default function Stories() {
  const [currentUsernames, setCurrentUsernames] = useState()

  useEffect(() => {
    async function fetchData() {
      const dataArr = []
    
      for(let i = 0; i < 15; i++) {
        const user = {}
        const received = await fetch('https://random-data-api.com/api/users/random_user');
        const data = await received.json();
        user.username = data.username;
        user.avatar = `https://source.unsplash.com/random/${60 + i}x${60 + i}`
        dataArr.push(user)
      }

      setCurrentUsernames(dataArr)
    }
    fetchData()
  }, [])

  return (
    <Container>
      {
        currentUsernames ?
        currentUsernames.map(user =>
          <Story username={user.username} avatar={user.avatar} key={user.username}/>
        )
        : ''
      }
      
    </Container>
  )
}