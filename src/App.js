import { ChatEngine } from 'react-chat-engine';

import './App.css';
import LoginFrom from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginFrom/>
    return (
        <ChatEngine
            height="100vh"
            projectID="2e7def28-b1ad-463f-9637-a009de808df0"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;