<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderNav from '@/components/header/Header.vue';
@Component({
  components: {
    HeaderNav
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .view {
    @include Mwh(100vw, calc(100vh - 60px));
    @extend %displaycenter;
  }
}
</style>
