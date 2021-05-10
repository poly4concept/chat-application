import { React, useState } from 'react';
import axios from 'axios';


function LoginForm() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "0279190a-51a8-448b-815d-7e599d953bb8", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem( 'username', username );
            localStorage.setItem( 'password', password );

            window.location.reload();
        } catch (error) {
            seterror('Oops, wrong login info');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={ (e) => setusername(e.target.value)} required placeholder="Username" className="input" />
                    <input type="password" value={password} onChange={ (e) => setpassword(e.target.value)} required placeholder="Password" className="input" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h3 className="error">{error}</h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
