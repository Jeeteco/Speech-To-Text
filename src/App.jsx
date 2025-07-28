import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import AudioRecorder from "../components/AudioRecorder"
import FileUpload from '../components/fileUpload'


import TranscriptDisplay from '../components/TranscriptDisplay';
import AllAudio from '../components/AllAudio';

function App() {
  const [transcript, setTranscript] = useState('');

  const handleAudioBlob = async (blob) => {

    const formData = new FormData();
    formData.append('audio', blob, 'recorded_audio.webm');

    const response = await axios.post("http://localhost:5000/api/audio/upload", formData);


    const audioId = response.data.audioId;
    // console.log(audioId);

    const res = await axios.post("http://localhost:5000/api/audio/transcribe", { audioId });

    //console.log(res);




    setTranscript(res.data.transcript.transcript);
    //  console.log(response.data);

  };

  return (
    <>
      <div className=' h-screen  w-screen m-auto flex item-center justify-center'>
        <div className="p-6 w-2/3 bg-pink-100 ">
           <h1 className="text-black text-3xl font-extrabold shadow-white-4 text-center underline "> Speech to Text App</h1>
          <FileUpload onTranscript={setTranscript} />
          <AudioRecorder onAudioReady={handleAudioBlob} />
          <TranscriptDisplay transcript={transcript} />
          <AllAudio />
        </div>

      </div>
    </>
  )
}

export default App
