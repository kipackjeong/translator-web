import axios from 'axios'

class TranslatorAPI {
  static async translate(userInput, tolanguage) {
    const options = {
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
      params: {
        to: tolanguage,
        'api-version': '3.0',
        profanityAction: 'NoAction',
        textType: 'plain',
      },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
        'x-rapidapi-key': 'bb7c540eafmsh899ae8ebf5b34fbp14f87bjsn2c5edbb60724',
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
        url: 'https://microsoft-translator-text.p.rapidapi.com/transliterate',
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
            'bb7c540eafmsh899ae8ebf5b34fbp14f87bjsn2c5edbb60724',
        },
        data: [{ Text: text }],
      }

      const result = (await axios.request(options)).data[0].text
      return result
    }
  }

  static breakSentence(userInput) {
    this.options.data = [
      { Text: 'How are you? I am fine. What did you do today?' },
    ]
    axios
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}

export default TranslatorAPI
