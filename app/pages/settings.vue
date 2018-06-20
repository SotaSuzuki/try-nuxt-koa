<template>
  <div>
    <h1>設定画面</h1>

    <hr>

    <h2>Instagram 連携</h2>
    <div>
      <button v-if="!connected" @click="handleClickConnect" type="button" name="button">Instagram と連携する</button>
      <button v-else @click="handleClickDisConnect" type="button" name="button">連携解除</button>
    </div>
    <ul>
      <li v-for="gram in grams" :key="gram.id">
        <img
          :src="gram.images.thumbnail.url"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      connected: false,
      grams: [],
    }
  },

  async beforeMount () {
    const accessToken = null

    if (!accessToken) {
      return
    }

    const INSTAGRAM_API_ENDPOINT = 'https://api.instagram.com/v1'
    const apiClient = axios.create({
      baseURL: INSTAGRAM_API_ENDPOINT,
      params: {
        access_token: accessToken,
      },
    })

    try {
      const response = await apiClient.get('/users/self/media/recent', {
        params: { count: 10 },
      })

      this.grams = response.data.data
      this.connected = true
    } catch (err) {
      console.error(err) // eslint-disable-line
    }
  },

  methods: {
    handleClickConnect () {
      location.replace('/api/oauth/instagram')
    },

    handleClickDisConnect () {
      this.connected = false
    },
  },
}
</script>

<style lang="css">
</style>
