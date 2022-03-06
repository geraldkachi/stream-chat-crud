import React, { useState } from 'react';
import { Chat } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { ChannelContainer, ChannelListContainer, Auth } from '.'
import Cookies from 'universal-cookie/es6';
import './stream.css'

const cookies = new Cookies()

const apiKey = `kvvd8hubkp8d`
const authToken = cookies.get("token")

// const authToken = false

const client = StreamChat.getInstance(apiKey)

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    // token: cookies.get('token'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const StreamChatApp = () => {
 
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
  
    // const client = StreamChat.getInstance(apiKey)
  
    if (!authToken) return <Auth />
  
    return (
      <div className="app__wrapper">
        <Chat {...{ client }} theme="team light" >
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
  
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
        </Chat>
      </div>
    );
}

export default StreamChatApp