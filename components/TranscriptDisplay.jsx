// src/components/TranscriptDisplay.jsx
import React from 'react';

const TranscriptDisplay = ({ transcript }) => {
  return (

    // <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-800 flex items-center justify-center text-center overflow-hidden">
    //   {/* Background Glow */}
    //   <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -top-40 -left-40"></div>
    //   <div className="absolute w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-2xl bottom-0 right-0"></div>

    //   {/* Main Content */}
    //   <div className="z-10 px-6">
    //     <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
    //       <span className="text-blue-400">आवाज़</span> – Speech to Text AI
    //     </h1>
    //     <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
    //       Convert your voice into accurate text instantly. Upload or record audio
    //       and watch the magic happen in real time.
    //     </p>

    //     {/* Buttons */}
    //     <div className="flex gap-4 justify-center">
    //       <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
    //         🎤 Start Recording
    //       </button>
    //       <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold">
    //         ⬆️ Upload Audio
    //       </button>
    //     </div>
    //   </div>

    //   {/* Illustration Mic Icon */}
    //   <div className="absolute bottom-10 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="w-10 h-10 text-blue-300"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M12 18v4m0-4c-3.314 0-6-2.686-6-6V9a6 6 0 1112 0v3c0 3.314-2.686 6-6 6z"
    //       />
    //     </svg>
    //   </div>
    // </div>


    <div className="mt-2 backdrop-blur-lg bg-gradient-to-br from-violet-100/30 to-blue-100/30 to-green-100/30 border border-white/30 rounded-xl shadow-xl p-6 border rounded shadow-">
      <h2 className="font-extrabold text-l mb-2 underline text-center text-gray-800 ">Transcribe Data shown here</h2>
      {/* <div>
                <p className="whitespace-pre-wrap text-l text-white h-1/4  ">{transcript}</p>
        </div> */}

      <div className="w-full  h-64 overflow-y-auto text-blue-50 p-4 rounded-lg shadow-md">
        <p>
          {transcript}
        </p>
      </div>

    </div>
  );
};

export default TranscriptDisplay;
