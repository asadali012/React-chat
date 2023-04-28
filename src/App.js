import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import { Button } from '@mui/material';



function App() {
  const [name, setName] = useState('')

  //these wil the array of chats in form of objects coming from api which will be diff by the means of name property
  const [chats, setChats] = useState([
    {
      name: 'user1',
      message: 'message1'
    },
    {
      name: 'dummyUser',
      message: 'message1'
    }
  ])

  const [msg, setMsg] = useState('')
  const sendChat = () => {
    const newChat = [...chats]
    newChat.push({ name, message: msg });
    setChats(newChat)
    setMsg('')
  }

  return (
    <>
      {/* if the we have the name is not present then show this */}

      {name ? null : <div>
        <input type="text" placeholder='Enter UserName...' onBlur={e => setName(e.target.value)} />
      </div>}
      <h3>User: {name}</h3>

      {/* if the we have the name then show this */}
      {name ? <div>
        <div className="chat-container">
          {/* chats will be mapper and upon className the name coming from the object of chat it will check is the name is same as login user ther 'me' class will be applied */}
          {chats.map(chat => <div className={`conatiner ${chat.name === name ? 'me' : ''}`}>
            <p className='chatbox'>
              <strong>{chat.name}:</strong>
              <span>{chat.message}</span>
            </p>
          </div>)}
        </div>
        <div className="btm">
          <input type="text" className="input-container" placeholder='Enter your message...' onInput={e => setMsg(e.target.value)} value={msg} />
          <Button variant="contained" endIcon={<SendIcon />} onClick={e => sendChat()} />
        </div>
      </div> : null}
    </>
  );
}

export default App;
