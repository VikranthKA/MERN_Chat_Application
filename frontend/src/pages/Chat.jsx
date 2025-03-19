import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chat = () => {
    const [chats,setChats] = useState([])

    useEffect(()=>{
        fetchChats()
    },[])
    const fetchChats = async()=>{
        const data  = await axios.get('http://localhost:3333/api/chat')
        setChats(data)
        console.log(data,'data')
    }
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
