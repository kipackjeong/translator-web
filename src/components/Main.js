import React from 'react'

import LangSelection from './LangSelection'
import InputForm from './InputForm'

import useMic from '../hooks/useMic'

import styles from './Main.module.css'
import titleImg from '../images/title.png'
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
      <LangSelection onSelectionChange={onSelectionChange} styles={styles} />
      <InputForm
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
        onMicClickHandler={onMicClickHandler}
        resetTranscript={resetTranscript}
        userInput={userInput}
        transcript={transcript}
        isMicOn={isMicOn}
        listening={listening}
        browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
        styles={styles}
      ></InputForm>
    </div>
  )
}

export default Main
