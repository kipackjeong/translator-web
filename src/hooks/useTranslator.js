import TranslatorAPI from '../api/TranslatorAPI'
import React, { useState } from 'react'

const useTranslator = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [fromLanguage, setFromLanguage] = useState('ko')
  const [toLanguage, setToLanguage] = useState('en')
  const [userInput, setUserInput] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [transliteratedText, setTransliteratedText] = useState('')

  //#region helpersZ
  async function getTranslation(textInput) {
    setIsLoading(true)

    const translatedData = (
      await TranslatorAPI.translate(textInput, toLanguage)
    )[0].translations[0].text

    return translatedData
  }
  async function getTransliteration(translatedData) {
    const transliteratedData = await TranslatorAPI.transliterate(
      translatedData,
      fromLanguage,
      toLanguage,
    )
    return transliteratedData
  }

  //#endregion
  async function updateTranslation() {
    const translatedData = await getTranslation(userInput)
    const transliteratedData = await getTransliteration(translatedData)
    console.log(translatedData)
    console.log(transliteratedData)
    setIsLoading(false)
    setTranslatedText(translatedData)
    setTransliteratedText(transliteratedData)
  }

  //#region handlers
  async function onInputChange(e = null, transcript = null) {
    setTransliteratedText('')
    setTranslatedText('')

    if (transcript) {
      setUserInput(transcript)
    } else {
      if (e !== null) {
        const newInput = e.target.value
        setUserInput(newInput)
      }
    }
  }
  async function onFormSubmit(e = null) {
    if (e) {
      e.preventDefault()
    }

    updateTranslation(userInput)
  }

  function onSelectionChange(e, type) {
    setTranslatedText('')
    setTransliteratedText('')
    if (type === 'from') {
      setFromLanguage(e.value)
    } else if (type === 'to') {
      setToLanguage(e.value)
    }
  }

  //#endregion

  return {
    onInputChange,
    onFormSubmit,
    onSelectionChange,
    updateTranslation,
    setTranslatedText,
    setTransliteratedText,
    isLoading,
    fromLanguage,
    toLanguage,
    userInput,
    translatedText,
    transliteratedText,
  }
}

export default useTranslator
