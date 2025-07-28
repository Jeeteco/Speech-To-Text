import React ,{ useState } from 'react';
import axios from 'axios';
import './App.css'
// import AudioRecorder from "../components/AudioRecorder"
import FileUpload from '../components/fileUpload'
import { transcribeAudio } from '../utils/transcribeAudio';

import TranscriptDisplay from '../components/TranscriptDisplay';

function App() {
  const [transcript, setTranscript] = useState('');

  const handleAudioBlob = async (blob) => {
    
      const formData = new FormData();
      formData.append('audio', blob, 'recorded_audio.webm');

      const response = await axios.post("http://localhost:5000/api/audio/upload", formData);

      setTranscript(response.data.transcript);

 
  };

  return (
    <>
      <div className="p-6 max-w-xl mx-auto space-y-6 bg-pink-100 w-full">
        <h1 className="text-2xl font-bold text-center"> Speech to Text App</h1>
        <FileUpload onTranscript={setTranscript} />
        {/* <AudioRecorder onAudioReady={handleAudioBlob} /> */}
       <TranscriptDisplay transcript={transcript}/>
      </div>

    </>
  )
}

export default App
