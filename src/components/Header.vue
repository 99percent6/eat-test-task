<template>
  <div id="header" class="header">
    <arrow-back
      v-if="!isMainPage"
      class="arrow-back"
      @click="goBack"
    />
    <div class="title">
      {{ title }}
      <transition name="fade">
        <app-loader
          v-if="loader"
          class="loader-wrapper"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import ArrowBack from 'vue-material-design-icons/ArrowLeft.vue'
import { RootState } from '../store/types/RootState'
import AppLoader from './ui/AppLoader.vue'

@Component({
  name: 'Header',
  components: {
    ArrowBack,
    AppLoader,
  },
})
export default class Header extends Vue {
  @State((state: RootState) => state.ui.headerTitle) private readonly title: string

  @State((state: RootState) => state.ui.loader) private readonly loader: boolean

  private get isMainPage(): boolean {
    return this.$route.name === 'Home'
  }

  private goBack(): void {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
@import "../css/variables/colors";

$black: map-get($colors, black);

.header {
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 6px 5px 0px rgba(181,172,181,1);
  -moz-box-shadow: 0px 6px 5px 0px rgba(181,172,181,1);
  box-shadow: 0px 6px 5px 0px rgba(181,172,181,1);
}

.arrow-back {
  position: absolute;
  left: 30px;
  cursor: pointer;
}

.title {
  position: relative;
}

.loader-wrapper {
  position: absolute;
  top: -10px;
  right: -60px;
}
</style>
