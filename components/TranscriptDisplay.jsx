// src/components/TranscriptDisplay.jsx
import React from 'react';

const TranscriptDisplay = ({ transcript }) => {
  return (

   


    <div className="mt-2 backdrop-blur-lg bg-gradient-to-br from-violet-100/30 to-blue-100/30 to-green-100/30 border border-white/30 rounded-xl shadow-xl p-6 border rounded shadow-">
      <h2 className="font-bold text-xl mb-2 underline text-center text-green-200 ">Transcribe Data shown here</h2>
     

      <div className="w-full  h-45 overflow-y-auto text-blue-50 p-4 rounded-lg shadow-md">
        <p>
          {transcript}
        </p>
      </div>

    </div>
  );
};

export default TranscriptDisplay;
