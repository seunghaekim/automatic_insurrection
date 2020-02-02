const WORD_LISTS = {
  things_we_like: [
      "rupture",
      "insurrection",
      "crisis",
      "social war",
      "zones of indistinction which need no justification",
      "indifference"
  ],
  things_we_dont_like: [
      "activism",
      "representation",
      "humanism",
      "totality",
      "passivity",
      "banality",
      "fossilization of our desires",
      "mobilization",
      "impotentiality",
      "normalization",
      "absence"
  ],
  people_we_dont_like: [
      "the milieu",
      "liberalism",
      "the bureaucrats of revolt",
      "anarcho-liberalism"
  ],
  things_we_do: [
      "desire",
      "riot",
      "occupy everything"
  ],
  our_things: [
      "communes",
      "multiplicities",
      "encounters","becomings",
      "zones of offensive opacity",
      "desiring-bodies"
  ],
  symbolic_things: [
      "burning dumpster",
      "smashed window",
      "moment of friendship",
      "car set aflame",
      "barricaded hallway"
  ],
  things_we_do_to_things: [
      "destroy",
      "shatter",
      "negate",
      "reject"
  ],
  things_we_dont_do: [
      "organize",
      "negotiate",
      "make demands",
      "be productive"
  ],
  how_we_do_things: [
      "in secret",
      "without illusions",
      "for once and for all",
      "absolutely"
  ],
  describing_good_things: [
      "singular",
      "immanent",
      "inoperative",
      "radical"
  ],
  describing_bad_things: [
      "homogenous",
      "pathetic",
      "compulsive"
  ],
  fancy_words: [
      "logic",
      "structure",
      "being",
      "temporality",
      "teleology"
  ],
  happiness: [
      "joy",
      "ecstasy"
  ],
  sadness: [
      "misery",
      "catastrophe"
  ],
  really: [
      "by any means necessary",
      "with every weapon at our disposal",
      "without looking back",
      "at all costs"
  ],
  making_things: [
      "articulation",
      "construction",
      "elaboration",
      "setting forth",
      "realization"
  ],
  plans: [
      "plan",
      "project",
      "concept"
  ],
  antiplans: [
      "a <i>state of exception</i>",
      "a <i>line of flight</i>",
      "an <i>event</i>"
  ],
  events: [
      "orgies",
      "festivals",
      "conspiracies"
  ],
  fun_stuff: [
      "destruction",
      "negation"
  ],
  get_along: [
      "dialogue",
      "criticism",
      "sympathy"
  ],
  go_away: [
      "scorn",
      "contempt",
      "derision"
  ],
  dont_do: [
      "refuse",
      "neglect",
      "fail"
  ],
  preposition: [
      "on",
      "towards"
  ]
}

const lists = () => {
  return Object.assign({}, WORD_LISTS)
}

const word = list_name => {
  let list = lists()[list_name]
  return list[Math.floor(Math.random() * list.length)];
}

const symbols = () => {
  return `To those who deride the ${word('describing_good_things')} ${word('happiness')} in a ${word('symbolic_things')} or a ${word('symbolic_things')}, we propose nothing less than to ${word('things_we_do_to_things')} their ${word('describing_bad_things')} ${word('things_we_dont_like')}, ${word('really')}.`
}

const necessary = () => {
  return `It is necessary to commence ${word('how_we_do_things')}; not to dream of new ways to ${word('things_we_dont_do')}, but to make manifest the subterranean ${word('our_things')} in the heart of each ${word('symbolic_things')}.`
}

const joke = () => {
  return `The ${word('describing_bad_things')} ${word('things_we_dont_like')} proposed to us is like a bad joke, and instead of laughter we respond with ${word('things_we_like')}.`
}

const every_what = () => {
  return `Every ${word('symbolic_things')} is a refusal to ${word('things_we_dont_do')}, a blow against the ${word('fancy_words')} of ${word('people_we_dont_like')}, a recognition of the ${word('describing_good_things')} ${word('fancy_words')} inherent in the articulation of ${word('our_things')}.`
}

const recognize = () => {
  return `Confronted with those who ${word('dont_do')} to recognize themselves in our ${word('events')} of ${word('fun_stuff')}, we offer neither ${word('get_along')} nor ${word('get_along')} but only our ${word('go_away')}.`
}

const do_something = () => {
  return `Our need to ${word('things_we_do')} is less the ${word('making_things')} of a ${word('plans')} than the ${word('making_things')} of ${word('antiplans')}.`
}

const in_the = () => {
  return `In the ${word('making_things')} of ${word('our_things')}, we ${word('things_we_do_to_things')} those who would have us give up the ${word('describing_good_things')} ${word('happiness')} of ${word('things_we_like')} for the ${word('sadness')} of ${word('things_we_dont_like')}.`
}

const title = () => {
  return `Leaving ${word('things_we_dont_like')} behind: Notes ${word('preposition')} ${word('things_we_like')}`
}

const break_things = () => {
  return `We must ${word('things_we_do_to_things')} all ${word('things_we_dont_like')}—<i>${word('how_we_do_things')}</i>.`
}

const this_call = () => {
  return `This is a call to ${word('things_we_like')}, not an insistence on ${word('things_we_dont_like')}.`
}

const whats_needed = () => {
  return `What's needed is not ${word('things_we_dont_like')}, and even far less <i>${word('things_we_dont_like')}</i>, but a putting-into-practice of ${word('describing_good_things')} ${word('things_we_like')}, a rejection in all forms of the ${word('fancy_words')} of ${word('things_we_dont_like')}.`
}

const array_shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const sentences = (() => {
  return array_shuffle([
    (recognize)(),
    (do_something)(),
    (in_the)(),
    (joke)(),
    (break_things)(),
    (this_call)(),
    (whats_needed)(),
    (every_what)(),
    (necessary)(),
    (symbols)()
  ])
})()

const shuffled_sentences = array_shuffle(sentences)

export default {
  title: title(),
  pull_quote: sentences[0],
  babble: shuffled_sentences.slice(0, 4),
  more_babble: shuffled_sentences.slice(4, 8),
  even_more_babble: shuffled_sentences.slice(8, shuffled_sentences.length)
}