import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css'
import ChatFeed from './components/ChatFeed';

const projectID = '9eec610c-070a-4c97-ad46-c2a06003d32d'

export default function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  return (
    <ChatEngine
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
  )
}
