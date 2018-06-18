<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<script>
import { destroyMixin } from '~/mixins'

export default {
  mixins: [
    destroyMixin,
  ],

  data () {
    return {
      name: 'SSS',
    }
  },

  asyncData ({ app }) {
    // NOTE: plugin の inject を使用する
    app.$_hello.world('asyncData')
  },

  fetch ({ app }) {
    // NOTE: plugin の inject を使用する
    app.$_hello.world('fetch')
  },

  created () {
    // NOTE: plugin の inject を使用する
    this.$_hello.world('created')
  },

  // NOTE: beforeMount からは inject しなくても
  beforeMount () {
    this.$_hello.world('beforeMount')
  },

  beforeDestroy () {
    this.$_greet(this.name)
  },
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
