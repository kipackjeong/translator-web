import React, { useEffect, useState } from 'react'
import MicButton from './MicButton'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import LangSelection from './LangSelection'
import styles from './Main.module.css'
import useMic from '../hooks/useMic'
import useTranslator from '../hooks/useTranslator'
const Main = ({
  userInput,
  onInputChange,
  onFormSubmit,
  onSelectionChange,
  updateTranslation,
  setTranslatedText,
  setTransliteratedText,
  listeningLanguage,
}) => {
  const {
    onMicClickHandler,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicOn,
    transcript,
    listening,
  } = useMic(
    updateTranslation,
    onInputChange,
    listeningLanguage,
    setTranslatedText,
    setTransliteratedText,
  )

  return (
    <div className={styles.main}>
      <LangSelection onSelectionChange={onSelectionChange} />
      <form onSubmit={onFormSubmit}>
        <input
          id="text-input"
          type="text"
          name="input"
          value={isMicOn ? transcript : userInput}
          onChange={onInputChange}
        ></input>
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
    </div>
  )
}

export default Main
