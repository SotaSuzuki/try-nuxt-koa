<template>
  <section class="container">
    <div>
      <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
      <h1 class="title">
        This page is loaded from the {{ name }}
      </h1>
      <h2 class="info" v-if="name === 'client'">
        Please refresh the page
      </h2>
      <nuxt-link class="button" to="/">
        Home page
      </nuxt-link>
    </div>

    <vk-card type="primary">
      <vk-card-title>Nuxt + Vuikit</vk-card-title>
      <div class="uk-inline">
        <vk-button>Hover</vk-button>
        <vk-dropdown>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </vk-dropdown>
      </div>
      <div class="uk-inline">
        <vk-button>Click</vk-button>
        <vk-dropdown mode="click">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </vk-dropdown>
      </div>
      <hr class="uk-divider-icon">
      <vk-icon icon="heart"></vk-icon>
    </vk-card>

    <vk-card>
      <vk-button class="uk-margin-small-right" @click="show = true">Open</vk-button>

      <vk-modal :show.sync="show">
        <vk-modal-title>Headline</vk-modal-title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="uk-text-right">
          <vk-button @click="show = false" class="uk-margin-small-right">Cancel</vk-button>
          <vk-button type="primary">Save</vk-button>
        </p>
      </vk-modal>
    </vk-card>

    <vk-card type="secondary">
      <form>
        <input class="uk-input">
        <select class="uk-select">
          <option>宮城県</option>
          <option>東京都</option>
        </select>
        <textarea class="uk-textarea"></textarea>
        <input class="uk-radio" type="radio">
        <input class="uk-checkbox" type="checkbox">
        <input class="uk-range" type="range">
      </form>
    </vk-card>
  </section>
</template>
<script>
export default {
  head () {
    return {
      title: `About Page (${this.name}-side)`,
    }
  },

  data () {
    return {
      show: false,
    }
  },

  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client',
    }
  },
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
