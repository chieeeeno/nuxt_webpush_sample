<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        PWA Sample
      </h1>
      <p v-if="isStandalone">
        PWAモードです
      </p>
      <p v-else>
        通常モードです
      </p>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      isStandalone: { type: Boolean, default: false }
    }
  },
  mounted() {
    this.isStandalone = this.$route.query.mode === 'pwa'
  },
  methods: {}
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
