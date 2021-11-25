import React from 'react'
import styles from './Results.module.css'
import isLoadingImg from '../images/basicloader.gif'

const Results = ({ isLoading, translatedText, transliteratedText }) => {
  const translationResult = isLoading ? (
    <img src={isLoadingImg} alt="isLoading" />
  ) : (
    <>
      <p>{translatedText} </p>
      <br />
      <p>{transliteratedText}</p>
    </>
  )
  return (
    <div className={styles.results}>
      <div className={styles.results__container}>{translationResult}</div>
    </div>
  )
}

export default Results
