<template>
  <div id="main">
    <div class="title" v-html="title"></div>
    <div class="rant" v-html="rant"></div>
    <div class="morerant" v-html="morerant"></div>
    <div class="evenmorerant" v-html="evenmorerant"></div>
  </div>
</template>

<script>
import ai from '@/automatic_insurrection'

export default {
  name: "App",
  computed: {
    title () {
      return ai.title
    },
    rant () {
      return `<div class="pull_quote">${this.pull_quote}</div>${ai.babble.join(' ')}`
    },
    pull_quote () {
      return ai.pull_quote
    },
    morerant () {
      return ai.more_babble.join(' ')
    },
    evenmorerant () {
      return ai.even_more_babble.join(' ')
    }
  }
}
</script>

<style lang="scss">
$media-lg-size: 1000px;
$media-sm-size: 650px;
$media-xs-size: 550px;

$font-lg: 4em;
$font-md: 1.4em;
$font-rg: 1.1em;

#main {
  font-size: 15px;
  padding: 6.6em 0;
  max-width: 50%;
  margin: 0 auto;

  @media (max-width: $media-lg-size) {
    max-width: 80%;
  }

  @media (max-width: $media-sm-size) {
    max-width: 90%;
    font-size: 13px;
    padding: 3em 0;
  }

  .title {
    font-size: $font-lg;
    font-family: sans-serif;
    font-weight: 900;

    @media (max-width: $media-sm-size) {
      font-size: 3.2em;
    }
  }

  .evenmorerant,
  .morerant,
  .rant {
    margin-top: 2.6em;
    font-family: sans-serif;
    text-align: justify;
    font-size: $font-rg;

    @media (max-width: $media-sm-size) {
      margin-top: 1.5em;
    }
  }

  .pull_quote {
    float: right;
    width: 250px;
    margin-left: 2.6em;
    margin-bottom: 1.3em;
    font-size: $font-md;
    text-align: right;
    font-weight: 900;

    @media (max-width: $media-xs-size) {
      float: none;
      width: auto;
      margin: 2.6em 1em;
    }
  }
}
</style>