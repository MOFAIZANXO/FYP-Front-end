// OwnerAgent.js
import React, { useState } from 'react';

const OwnerAgent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const agents = ['Agent 1', 'Agent 2', 'Agent 3'];
  
  return (
    <div>
      <h2>Chat with Agents</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." />
      <button onClick={() => setMessages([...messages, { text: message, sender: 'user' }])}>Send</button>
    </div>
  );
};

export default OwnerAgent;