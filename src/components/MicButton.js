import React from 'react'

const Microphone = ({ onMicClick, browserSupportsSpeechRecognition }) => {
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  return (
    <button className="btn btn-light" onClick={onMicClick}>
      Mic
    </button>
  )
}

export default Microphone
