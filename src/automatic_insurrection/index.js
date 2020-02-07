import sentences from './sentences.js'

export default {
  title: sentences.title(),
  pull_quote: sentences.sentences[0],
  babble: sentences.shuffled_sentences.slice(0, 4),
  more_babble: sentences.shuffled_sentences.slice(4, 8),
  even_more_babble: sentences.shuffled_sentences.slice(8, sentences.shuffled_sentences.length)
}