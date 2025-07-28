
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
        <div className="p-6 border rounded shadow">
            <input
                type="file"
                accept="audio/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="border p-2"
            />
            <button
                onClick={handleUpload}
                className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
            >
                Upload & transcribe
            </button>
        </div>
    );
};

export default FileUpload;
