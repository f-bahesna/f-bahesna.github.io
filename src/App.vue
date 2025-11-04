<template>
  <div class="app mx-auto" :class="mode">
    <Navbar :mode="mode" @toggle="toggle" />
    <router-view v-slot="{ Component }">
      <component :is="Component" :mode="mode" />
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/base/Navbar.vue";
export default {
  data() {
    let display = localStorage.getItem("display")

    return {
      mode: display ?? "light"
    }
  },
  components: { Navbar },
  created() {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress(e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light"
        localStorage.setItem("display", this.mode)
      } else {
        this.mode = "dark"
        localStorage.setItem("display", this.mode)
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  max-width: 100%;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #E8E8E8;
}
</style>
