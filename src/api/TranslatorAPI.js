import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 'https://microsoft-translator-text.p.rapidapi.com/'


class TranslatorAPI {
  static async translate(userInput, tolanguage) {
    const options = {
      method: 'POST',
      url: API_URL + 'translate',
      params: {
        to: tolanguage,
        'api-version': '3.0',
        profanityAction: 'NoAction',
        textType: 'plain',
      },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
      },
      data: [{ Text: userInput }],
    }
    const result = (await axios.request(options)).data
    return result
  }
  static async transliterate(text, fromLanguage, toLanguage) {
    const langScripts = {
      ko: 'Kore',
      ja: 'Jpan',
      es: 'Latn',
      en: 'Latn',
      fr: 'Latn',
      'zh-Hans': 'Hans',
    }
    if (langScripts[toLanguage] === 'Latn') {
      console.log('latn')
      return ''
    } else if (langScripts[fromLanguage] === langScripts[toLanguage]) {
      console.log('===')
      return ''
    } else {
      console.log('X')
      var options = {
        method: 'POST',
        url: API_URL + 'transliterate',
        params: {
          'api-version': '3.0',
          toScript: langScripts[fromLanguage],
          fromScript: langScripts[toLanguage],
          language: toLanguage,
        },
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
          'x-rapidapi-key':
            API_KEY,
        },
        data: [{ Text: text }],
      }

      const result = (await axios.request(options)).data[0].text
      return result
    }
  }
}

export default TranslatorAPI
