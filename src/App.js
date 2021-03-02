import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';


export default function App() {
  return (
    <ChatEngine
    height='100vh'
    userName='krool_horse'
    userSecret='1234'
    projectID='9eec610c-070a-4c97-ad46-c2a06003d32d'
    renderChatFeed={(chatAppProps) => <ChatFeed  { ...chatAppProps } />}
  />
  )
}
