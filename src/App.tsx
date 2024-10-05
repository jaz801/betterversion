import React, { useState } from 'react';
import { Play, Paperclip, Settings, Send, Folder, History, GitCompare, Download, PauseCircle, PlayCircle } from 'lucide-react';
import InitialScreen from './components/InitialScreen';
import ChatWindow from './components/ChatWindow';
import TabView from './components/TabView';
import WebScrapingSteps from './components/WebScrapingSteps';
import DataDisplay from './components/DataDisplay';
import ScreenshotRecording from './components/ScreenshotRecording';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'initial' | 'main'>('initial');
  const [activeTab, setActiveTab] = useState<'steps' | 'data' | 'screenshot'>('steps');

  const handleStart = (input: string) => {
    console.log('Starting with input:', input);
    setCurrentScreen('main');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {currentScreen === 'initial' ? (
        <InitialScreen onStart={handleStart} />
      ) : (
        <div className="flex flex-col h-screen">
          <header className="bg-gray-900 shadow-sm p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Web Scraper & Automation Tool</h1>
            <div className="flex space-x-4">
              <Folder className="w-6 h-6 text-silver cursor-pointer hover:text-white transition-colors duration-300" />
              <History className="w-6 h-6 text-silver cursor-pointer hover:text-white transition-colors duration-300" />
              <GitCompare className="w-6 h-6 text-silver cursor-pointer hover:text-white transition-colors duration-300" />
            </div>
          </header>
          <main className="flex-grow flex">
            <div className="w-2/3 p-4">
              <TabView activeTab={activeTab} onTabChange={setActiveTab} />
              {activeTab === 'steps' && <WebScrapingSteps />}
              {activeTab === 'data' && <DataDisplay />}
              {activeTab === 'screenshot' && <ScreenshotRecording />}
            </div>
            <ChatWindow />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;