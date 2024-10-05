import React, { useState } from 'react';
import { Paperclip, Settings, Send } from 'lucide-react';

const ChatWindow: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="w-1/3 bg-gray-900 shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Chat messages would go here */}
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <Paperclip className="w-5 h-5 text-silver mr-2 cursor-pointer hover:text-white transition-colors duration-300" />
          <Settings className="w-5 h-5 text-silver mr-2 cursor-pointer hover:text-white transition-colors duration-300" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow input"
          />
          <button onClick={handleSend} className="ml-2 text-silver hover:text-white transition-colors duration-300">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;