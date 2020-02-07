import './assets/style.scss'
import insurrection from './automatic_insurrection'

const title = document.getElementById('title')
title.innerHTML = insurrection.title

const rant = document.getElementById('rant')
rant.innerHTML = insurrection.babble

let pull_quote = document.createElement('div')
pull_quote.setAttribute('id', 'pull_quote')
pull_quote.innerHTML = insurrection.pull_quote
rant.prepend(pull_quote)

// const rant = document.getElementById('rant')
// rant.innerHTML = insurrection.pull_quote

const morerant = document.getElementById('morerant')
morerant.innerHTML = insurrection.more_babble

const evenmorerant = document.getElementById('evenmorerant')
evenmorerant.innerHTML = insurrection.even_more_babble