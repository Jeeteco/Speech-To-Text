// src/utils/transcribeAudio.js
import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const transcribeAudio = async (file) => {
  try {
    // Upload the file
    const formData = new FormData();
    formData.append('audio', file);

    const uploadRes = await axios.post(`${backendUrl}/api/audio/upload`, formData);
    const audioId = uploadRes.data.audioId;

    // console.log(uploadRes);

    if (!audioId) throw new Error('Upload succeeded but no audioId returned');

   

    // Send to /transcribe route
    const transcriptRes = await axios.post(`${backendUrl}/api/audio/transcribe`, {
      audioId,
    });
    // console.log( transcriptRes.data.transcript.transcript)

    return transcriptRes?.data?.transcript?.transcript;

  } catch (error) {
    // console.error("Error during transcription:", error);
    return "No Speech avaible for transcriotion";
  }
};
