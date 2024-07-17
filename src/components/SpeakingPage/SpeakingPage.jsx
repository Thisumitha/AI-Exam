import React, { useState, useRef } from 'react';

export default function AudioRecorder(props,{ onSubmit }) {
  // State and refs for managing recording and audio data
  const [isRecording, setIsRecording] = useState(false); // State to track if recording is active
  const [audioBlob, setAudioBlob] = useState(null); // State to hold the recorded audio data
  const mediaRecorder = useRef(null); // Ref to hold the MediaRecorder instance
  const audioChunks = useRef([]); // Ref to store chunks of audio data received during recording

  // Function to start recording audio
  const startRecording = async () => {
    // Request access to user's microphone
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create a new MediaRecorder instance with the stream
    mediaRecorder.current = new MediaRecorder(stream);

    // Event handler when data is available from MediaRecorder
    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data); // Store each chunk of audio data
    };

    // Event handler when recording is stopped
    mediaRecorder.current.onstop = () => {
      // Combine all recorded chunks into a single Blob
      const blob = new Blob(audioChunks.current, { type: 'audio/wav' });
      setAudioBlob(blob); // Set the Blob as state to be displayed
      audioChunks.current = []; // Reset chunks for next recording
    };

    // Start recording
    mediaRecorder.current.start();
    setIsRecording(true); // Update state to indicate recording is active
  };

  // Function to stop recording
  const stopRecording = () => {
    mediaRecorder.current.stop(); // Stop the MediaRecorder
    setIsRecording(false); // Update state to indicate recording has stopped
  };

  // Function to handle submission of recorded audio
  const handleSubmit = () => {
    if (audioBlob) {
      onSubmit(audioBlob); // Pass the recorded audio Blob to the onSubmit function prop
    }
  };

  // Render UI components
  return (
    <div>

      <div className=" w-21 p-10 border rounded-lg shadow-sm">
        <h1 className="text-xl font-bold mb-10 text-left text-4xl "></h1>

        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-1 text-left text-3xl">Question</h2>
          <input
            type="text"
            className="w-full p-2 border rounded bg-gray-200"
            value={props.question}
            disabled
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-10 text-left text-3xl">Your Answer here</h2>


          {/* Display the recorded audio if available */}
          {audioBlob && (
            <div>
              <audio controls src={URL.createObjectURL(audioBlob)} className="mb-4"></audio>
            </div>
          )}

        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-[#55AD9B] text-white py-2 px-4 rounded font-medium text-xl w-36 h-12" onClick={handleSubmit}>Done</button>
          <button className="bg-[#E26188] text-white py-2 px-4 rounded font-medium text-xl w-36 h-12">Later</button>
          <div className="mb-4">
            {/* Button to start or stop recording based on the current recording state */}
            {isRecording ? (
              <button onClick={stopRecording} className="px-4 py-2 bg-red-500 text-white rounded-md rounded font-medium text-xl w-52 h-12">
                Stop Recording
              </button>
            ) : (
              <button onClick={startRecording} className="px-4 py-2 bg-green-500 text-white rounded-md rounded font-medium text-xl w-52 h-12">
                Start Recording
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
