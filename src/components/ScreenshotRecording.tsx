import React, { useState } from 'react';
import { PlayCircle, PauseCircle } from 'lucide-react';

const ScreenshotRecording: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 animate-slideIn">
      <h2 className="text-xl font-semibold mb-4">Screenshot/Recording</h2>
      <div className="bg-gray-900 rounded-lg shadow-md p-4">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            src="https://source.unsplash.com/random/800x450?website"
            alt="Website Screenshot"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={togglePlayPause}
            className="btn btn-primary flex items-center"
          >
            {isPlaying ? (
              <>
                <PauseCircle className="w-5 h-5 mr-2" />
                Pause
              </>
            ) : (
              <>
                <PlayCircle className="w-5 h-5 mr-2" />
                Play
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotRecording;