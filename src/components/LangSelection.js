import Select from 'react-select'

const LangSelection = ({ onSelectionChange }) => {
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
    <>
      <Select
        onChange={onFromSelectionChangeHandler}
        options={options}
        defaultValue={options[0]}
      />
      <Select
        onChange={onToSelectionChangeHandler}
        options={options}
        defaultValue={options[1]}
      />
    </>
  )
}

export default LangSelection
