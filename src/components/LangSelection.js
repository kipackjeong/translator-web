import Select from 'react-select'
import arrowIcon from '../images/white-arrow.ico'

const LangSelection = ({ onSelectionChange, styles }) => {
  const options = [
    { value: 'ko', label: 'Korean' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'ja', label: 'Japanese' },
    { value: 'zh-Hans', label: 'Chinese' },
    { value: 'es', label: 'Spanish' },
  ]
  function onFromSelectionChangeHandler(e) {
    onSelectionChange(e, 'from')
  }
  function onToSelectionChangeHandler(e) {
    onSelectionChange(e, 'to')
  }

  return (
    <div className={styles['lang-selection']}>
      <Select
        className={styles.select}
        onChange={onFromSelectionChangeHandler}
        options={options}
        defaultValue={options[0]}
      />
      <img src={arrowIcon} alt="white-arrow" />
      <Select
        className={styles.select}
        onChange={onToSelectionChangeHandler}
        options={options}
        defaultValue={options[1]}
      />
    </div>
  )
}

export default LangSelection
