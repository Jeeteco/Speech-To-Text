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
        <div className="p-4 border rounded shadow mt-4">
            <button
                className={`px-4 py-2 rounded ${recording ? 'bg-red-500' : 'bg-green-500'} text-white`}
                onClick={recording ? stopRecording : startRecording}
            >Tap&Speak</button>
        </div>
    )
}

export default AudioRecorder;