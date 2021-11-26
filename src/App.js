import Main from './components/Main'
import Results from './components/Results'
import useTranslator from './hooks/useTranslator'

import titleImg from './images/title.png'
import styles from './App.module.css'

function App() {
  const {
    onInputChange,
    onFormSubmit,
    onSelectionChange,
    updateTranslation,
    setTranslatedText,
    setTransliteratedText,
    isLoading,
    userInput,
    fromLanguage,
    translatedText,
    transliteratedText,
  } = useTranslator()

  return (
    <div className={styles.App}>
      <img className={styles['title-img']} src={titleImg} alt="title" />
      <Main
        userInput={userInput}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
        onSelectionChange={onSelectionChange}
        updateTranslation={updateTranslation}
        setTranslatedText={setTranslatedText}
        setTransliteratedText={setTransliteratedText}
        listeningLanguage={fromLanguage}
      />
      <Results
        isLoading={isLoading}
        translatedText={translatedText}
        transliteratedText={transliteratedText}
      />
    </div>
  )
}

export default App
