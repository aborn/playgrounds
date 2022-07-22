<template>
  <div>
    <div>
      Nuxt OpenID-Connect playground!
    </div>
    <p>isLoggedIn: {{ $oidc.isLoggedIn }}</p>
    <p>user: {{ $oidc.user }}</p>
    <button v-if="!$oidc.isLoggedIn" @click="$oidc.login()">
      Login
    </button>
    <button v-else @click="$oidc.logout()">
      Logout
    </button>

    <p>{{ vMsg }}</p>
    <button @click="onClickVMsg">MsgBtn</button>
  </div>
</template>

<script setup>
// alternatively, you can also use it here
const { $oidc } = useNuxtApp()
console.log('isLogIn:', $oidc.isLoggedIn)
const vMsg = ref("hello msg")
// const user = useState('useState')
</script>

<script>
export default {
  methods: {
    onClickVMsg() {
      console.log(this.vMsg)
      this.vMsg = 'currentTime==>' + new Date()
    }
  }
}
</script>
