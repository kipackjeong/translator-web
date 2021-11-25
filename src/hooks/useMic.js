import React, { useState, useEffect } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
const useMic = (
  updateTranslation,
  onInputChange,
  listeningLanguage,
  setTranslatedText,
  setTransliteratedText,
) => {
  const [isMicOn, setIsMicOn] = useState(false)

  const {
    resetTranscript,
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  useEffect(() => {
    if (!listening) {
      setIsMicOn(false)
      if (transcript !== '') {
        updateTranslation()
      }
    }
  }, [listening])
  useEffect(() => {
    async function changeInput() {
      await onInputChange(null, transcript)
    }
    changeInput()
  }, [transcript])

  async function onMicClickHandler(e) {
    setTranslatedText('')
    setTransliteratedText('')
    // start recording
    if (!isMicOn) {
      setIsMicOn(true)
      SpeechRecognition.startListening({ language: listeningLanguage })
    } else {
      // stop recording
      SpeechRecognition.stopListening()
      SpeechRecognition.abortListening()
      updateTranslation()
      resetTranscript()
      setIsMicOn(false)
    }
  }

  return {
    onMicClickHandler,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicOn,
    transcript,
    listening,
  }
}

export default useMic
