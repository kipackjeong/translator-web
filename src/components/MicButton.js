import React from 'react'
import micIcon from '../images/mic-icon.ico'
const Microphone = ({
  onMicClick,
  browserSupportsSpeechRecognition,
  styles,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  return (
    <button className={styles.btn} onClick={onMicClick}>
      <img src={micIcon} alt="mic-icon" />
    </button>
  )
}

export default Microphone
