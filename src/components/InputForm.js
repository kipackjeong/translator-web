import React from 'react'
import MicButton from './MicButton'
import translateIcon from '../images/translate-icon.ico'
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

      <div className={styles['btn-container']}>
        <button className={styles.btn} type="submit">
          <img src={translateIcon} alt="translate-icon" />
        </button>
        <MicButton
          onMicClick={onMicClickHandler}
          resetTranscript={resetTranscript}
          listening={listening}
          browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
          styles={styles}
        />
      </div>
    </form>
  )
}
export default InputForm
