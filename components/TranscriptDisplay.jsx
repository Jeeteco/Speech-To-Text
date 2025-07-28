// src/components/TranscriptDisplay.jsx
import React from 'react';

const TranscriptDisplay = ({ transcript }) => {
  return (
    <div className=" p-4 bg-darkgreen-100 rounded shadow mt-4">
      <h2 className="font-bold-500 text-xl mb-2 ">Text Content of Uploaded File</h2>
      <p className="whitespace-pre-wrap text-l">{transcript || "No transcript yet."}</p>
    </div>
  );
};

export default TranscriptDisplay;
