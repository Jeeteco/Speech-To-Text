import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import AudioRecorder from '../components/AudioRecorder';
import FileUpload from '../components/FileUpload';
import TranscriptDisplay from '../components/TranscriptDisplay';



// import HistoryBox from '../components/HistoryBox';
const backendUrl = import.meta.env.VITE_BACKEND_URL;


function App() {
  const [transcript, setTranscript] = useState('');

  const handleAudioBlob = async (blob) => {

    try {
      const formData = new FormData();
      formData.append('audio', blob, 'recorded_audio.webm');

      const response = await axios.post(`${backendUrl}/api/audio/upload`, formData);



      const audioId = response?.data?.audioId;
      // console.log(audioId);

      if (!audioId) {
        console.error("audio not recorded propely ");
      }

      const res = await axios.post(`${backendUrl}/api/audio/transcribe`, { audioId });

      const transcriptData = res?.data?.transcript?.transcript;

      // console.log(res.data)

      if (!transcriptData || transcriptData.trim() === "") {
        alert("no Speech avaible for transcription");

      }
      else {
        setTranscript(transcriptData);
      }

    } catch (error) {

      console.error("Error in the  HandleAudio blob", error);

    }



  };

  return (
    <>
      <div className='bg-gray-800 h-screen  w-screen  flex '>
        <div className='w-1/3 bg-gray-900 '>
          <div className="h-screen flex flex-wrap items-center justify-center bg-gradient-to-br from-yellow-900/50 to-blue-600/40  to-indigo-800/40    text-white text-4xl font-semibold text-center ">

            <h1 className='text-4xl text-orange-600/80'><i>WELCOME IN  <span className='text-red-400/70 text-5xl'> आवाज़</span></i></h1>

            🎤 Your voice, transformed into words effortlessly
          </div>

        </div>


        <div className='w-2/3 h-full flex flex-wrap item-center justify-center'>

          <h1 className="text-green-300  text-shadow-lg text-center mt-6  "> <span className='
            text-blue-300 text-6xl  font-extrabold'>आवाज़ </span> <i className='text-6xl  font-extrabold'>- Speech to Text App</i> <br />
            <p className='text-blue-100 text-'>Convert your voice into accurate text instantly. Upload or record audio and watch the magic happen in real time.</p>
          </h1>
          <div className=" p-2 w-150 h-fit bg-blue-950/20 rounded  ">

            <FileUpload onTranscript={setTranscript} />
            <AudioRecorder onAudioReady={handleAudioBlob} />
            <TranscriptDisplay transcript={transcript} />
          </div>

        </div>



      </div>

    </>
  )
}

export default App
