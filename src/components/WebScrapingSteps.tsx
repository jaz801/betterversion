import React, { useState } from 'react';
import { Lightbulb, Edit2, MoreVertical } from 'lucide-react';

interface Step {
  id: number;
  description: string;
  active: boolean;
}

const WebScrapingSteps: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, description: 'Navigate to website', active: true },
    { id: 2, description: 'Click on element', active: false },
    { id: 3, description: 'Extract data', active: false },
  ]);

  const [selectedSteps, setSelectedSteps] = useState<number[]>([]);
  const [isLooping, setIsLooping] = useState(false);
  const [loopSettings, setLoopSettings] = useState('');

  const toggleStepSelection = (id: number) => {
    setSelectedSteps(prev =>
      prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
    );
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
    if (!isLooping) {
      setLoopSettings('');
    }
  };

  return (
    <div className="p-4 animate-slideIn">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Web Scraping Steps</h2>
        <button
          onClick={toggleLoop}
          className={`btn ${isLooping ? 'btn-primary' : 'bg-gray-700 text-white'}`}
        >
          {isLooping ? 'Cancel Loop' : 'Create Loop'}
        </button>
      </div>
      {isLooping && (
        <div className="mb-4">
          <input
            type="text"
            value={loopSettings}
            onChange={(e) => setLoopSettings(e.target.value)}
            placeholder="Enter loop settings (e.g., number of iterations)"
            className="input"
          />
        </div>
      )}
      <div className="space-y-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center p-2 rounded-md transition-all duration-300 ease-in-out ${
              selectedSteps.includes(step.id) ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
            onClick={() => toggleStepSelection(step.id)}
          >
            <Lightbulb
              className={`w-5 h-5 mr-2 ${
                step.active ? 'text-yellow-400' : 'text-gray-400'
              } transition-all duration-300 ease-in-out`}
            />
            <span className="flex-grow">{step.description}</span>
            <Edit2 className="w-5 h-5 text-silver cursor-pointer hover:text-white transition-colors duration-300" />
            <MoreVertical className="w-5 h-5 text-gray-400 cursor-move ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebScrapingSteps;