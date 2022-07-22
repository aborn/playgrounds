<template>
  <div>
    <p>{{ vMsg }}</p>
    <button @click="onClickVMsg">MsgBtn</button>
  </div>
</template>

<script setup>
const vMsg = ref("hello msg")
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
