
import React, { useState } from 'react';
// import axios from 'axios';
import { transcribeAudio } from '../utils/transcribeAudio';
import TranscriptDisplay from './TranscriptDisplay';

const FileUpload = ({ onTranscript }) => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return alert("Please select a file.");

        try {
            const transcript = await transcribeAudio(file);

            // console.log (transcript);

            TranscriptDisplay(transcript);

            if (typeof onTranscript === 'function') {
                onTranscript(transcript);
            }
        } catch (err) {
            console.error(err);
            if (typeof onTranscript === 'function') {
                onTranscript("Transcription failed.");
            }
        }

    };


    return (
        <div className=" backdrop-blur-lg bg-gradient-to-br from-violet-100/30 to-blue-100/30 to-green-100/30 border border-white/30 rounded-xl shadow-xl p-6 border rounded shadow-">
            <input
                type="file"
                accept="audio/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="backdrop-blur-lg bg-white border p-2 w-full "
            />
            <button
                onClick={handleUpload}
                className=" border w-1/2 mt-4 p-2 bg-blue-500 text-white rounded-full"
            >
                Upload & transcribe
            </button>
                              
        </div>
    );
};

export default FileUpload;
