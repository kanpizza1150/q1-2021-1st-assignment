const express = require('express')
const axios = require('axios')
const router = express.Router()
const getWord = async () => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt'
    )
    return response.data.split('\r\n')
  } catch (error) {
    console.error(error)
    return error
  }
}

router.get('/', async (req, res) => {
  const words = await getWord()
  res.send({ length: words.length, list: words })
})

router.get('/:word', async (req, res) => {
  const words = await getWord()
  const keyword = req.params.word
  const startWith = new RegExp('^' + keyword, 'g')
  const wordList = words.filter((word) => startWith.test(word))
  res.send({ length: wordList.length, list: wordList })
})

module.exports = router
