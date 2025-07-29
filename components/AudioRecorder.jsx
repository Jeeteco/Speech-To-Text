import React, { useRef, useState } from 'react'

const AudioRecorder = ({ onAudioReady }) => {
    const [recording, setRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunks.current = [];

        mediaRecorderRef.current.ondataavailable = e => audioChunks.current.push(e.data);

        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(audioChunks.current, { type: 'audio/webm' })
            onAudioReady(blob);
        }
        mediaRecorderRef.current.start();

        setRecording(true);

    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setRecording(false);
    };




    return (
        <div className="backdrop-blur-md bg-gradient-to-br from-red-300/20 to-blue-200/20 border border-white/30 rounded-xl shadow-xl mt-2 p-6">
           
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg "  onClick={recording ? stopRecording : startRecording}>
            🎤 Start Recording
          </button>

        </div>

    )
}

export default AudioRecorder;