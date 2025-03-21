import React, { useState } from 'react'
import {Container,Box,Text,Tabs} from "@chakra-ui/react"
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'

const Home = () => {
  const [value, setValue] = useState("login")

  return (
    <Container maxW='xl' centerContent>
      <Box 
        d='flex'
        justifyContent='center'
        p={3}
        bg='white'
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth="1px"
      >
        <Text
          fontSize="4xl " 
          fontFamily="sans-serif"
          colores='black'
        >Chit-Chat</Text>
      </Box>

      <Box
        bg='white'
        w='100%'
        p={4}
        borderRadius="lg"
        borderWidth='1px'
        
      >
         <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)} variant='outline'>
      <Tabs.List md='1em'>
        <Tabs.Trigger width='50%' value="login">Login</Tabs.Trigger>
        <Tabs.Trigger width='50%' value="signup">Sign up</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="login">
        <Login/>
      </Tabs.Content>
      <Tabs.Content value="signup">
        hi
        <SignUp/>
        </Tabs.Content>
    </Tabs.Root>

      </Box>

    </Container>
  )
}

export default Home
