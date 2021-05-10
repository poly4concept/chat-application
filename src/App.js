import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
    height="100vh"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    projectID="0279190a-51a8-448b-815d-7e599d953bb8"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
