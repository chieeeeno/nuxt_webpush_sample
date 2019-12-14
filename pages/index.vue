<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        PWA Sample
      </h1>

      <div class="links">
        <button @click="addToHomeScreen" class="button--green">
          HOMEに追加
        </button>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    addToHomeScreen() {
      console.log('addToHomeScreen')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @include sp-layout() {
    font-size: 7vw;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  @include sp-layout() {
    font-size: 7vw;
  }
}

.links {
  padding-top: 15px;
}
</style>
