import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface InitialScreenProps {
  onStart: (input: string) => void;
}

const InitialScreen: React.FC<InitialScreenProps> = ({ onStart }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(input);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={handleSubmit} className="w-full max-w-md animate-fadeIn">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you want to web scrape/automate?"
            className="input pr-12"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-silver hover:text-white transition-colors duration-300"
          >
            <Play className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InitialScreen;