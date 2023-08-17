require('dotenv').config()

const algorithmia = require('algorithmia');
const algorithmiaApiKey = process.env.ALGORITHMIA_API_KEY;
const sentenceBoundaryDetection = require('sbd');

const watsonApiKey = process.env.WATSON_APIKEY;
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const nlu = new NaturalLanguageUnderstandingV1({
  iam_apikey: watsonApiKey,
  version: '2018-04-05',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});

class Robot {

  start(content) {
    return new Promise(async (next, reject) => {
      try {
        // ... (resto del código sin cambios)
      } catch (error) {
        reject(error ? error.message : "Unknown error occurred");
      }
    });
  }

  fetchContentFromWikipedia(articleName, lang) {
    return new Promise(async (next, reject) => {
      try {
        // ... (resto del código sin cambios)
      } catch (error) {
        reject(error ? error.message : "Unknown error occurred");
      }
    });
  }

  // ... (resto del código sin cambios)

  async fetchWatsonAndReturnKeywords(sentence) {
    return new Promise((resolve, reject) => {
      nlu.analyze({
        text: sentence,
        features: {
          keywords: {}
        }
      }, (error, response) => {
        if (error) {
          console.log(error)
          reject(error ? error.message : "Unknown error occurred");
        } else {
          const keywords = response.keywords.map(keyword => keyword.text);
          console.log(keywords)
          resolve(keywords);
        }
      })
    })
  }

}

module.exports = new Robot();
