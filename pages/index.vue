<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        PWA Sample
      </h1>

      <!--      <div class="links">-->
      <!--        <button @click="addToHomeScreen" class="button&#45;&#45;green">-->
      <!--          HOMEに追加-->
      <!--        </button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  // data() {
  //   return {
  //     deferredPrompt: { type: String, default: '' }
  //   }
  // },
  // mounted() {
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //     console.log('beforeinstallprompt')
  //     // Prevent Chrome 67 and earlier from automatically showing the prompt
  //     e.preventDefault()
  //     // Stash the event so it can be triggered later.
  //     this.deferredPrompt = e
  //     this.deferredPrompt.prompt()
  //   })
  // },
  methods: {
    addToHomeScreen() {
      let deferredPrompt
      console.log('Button is pressed! Show install banner.')
      console.log(deferredPrompt)

      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt')
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        deferredPrompt = e
        // deferredPrompt.prompt()
        if (deferredPrompt) {
          deferredPrompt.prompt()
          deferredPrompt.userChoice.then(function(choiceResult) {
            if (choiceResult.outcome === 'dismissed') {
              console.log('User canncelled')
            } else {
              window.alert('Thank You!')
            }
          })
          deferredPrompt = null
        }
      })
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