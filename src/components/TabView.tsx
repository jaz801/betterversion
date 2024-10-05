import React from 'react';

interface TabViewProps {
  activeTab: 'steps' | 'data' | 'screenshot';
  onTabChange: (tab: 'steps' | 'data' | 'screenshot') => void;
}

const TabView: React.FC<TabViewProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-[#DADADA]">
      <button
        className={`tab ${activeTab === 'steps' ? 'tab-active' : ''}`}
        onClick={() => onTabChange('steps')}
      >
        Web Scraping Steps
      </button>
      <button
        className={`tab ${activeTab === 'data' ? 'tab-active' : ''}`}
        onClick={() => onTabChange('data')}
      >
        Data Display
      </button>
      <button
        className={`tab ${activeTab === 'screenshot' ? 'tab-active' : ''}`}
        onClick={() => onTabChange('screenshot')}
      >
        Screenshot/Recording
      </button>
    </div>
  );
};

export default TabView;