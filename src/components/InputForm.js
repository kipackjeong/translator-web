import React from 'react'
import MicButton from './MicButton'

const InputForm = ({
  onFormSubmit,
  onInputChange,
  onMicClickHandler,
  resetTranscript,
  isMicOn,
  transcript,
  userInput,
  listening,
  browserSupportsSpeechRecognition,
  styles,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <textarea
        id="text-input"
        type="text"
        name="input"
        value={isMicOn ? transcript : userInput}
        onChange={onInputChange}
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <div className={styles['btn-container']}>
        <button
          className={`btn btn-light ${styles['translate-btn']}`}
          type="submit"
        >
          translate
        </button>
        <MicButton
          onMicClick={onMicClickHandler}
          resetTranscript={resetTranscript}
          listening={listening}
          browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
        />
      </div>
    </form>
  )
}
export default InputForm
