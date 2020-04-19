<template>
  <div id="app">
    <div id="nav">
      <main-header/>
    </div>
    <router-view class="container"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainHeader from './components/Header.vue'

Component.registerHooks([
  'beforeRouteUpdate',
])

@Component({
  name: 'App',
  components: {
    MainHeader,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'css/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<style lang="scss" scoped>
@import 'css/variables/grid';

.container {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 30px 0;

  @media #{$media-to-md} {
    width: 90%;
  }

  @media #{$media-to-xs} {
    width: 100%;
  }
}
</style>
