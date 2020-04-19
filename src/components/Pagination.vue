<template>
  <div class="pagination">
    <div
      class="number"
      :class="{ active: currentPage === num }"
      v-for="num in pageCount"
      :key="num"
      @click="changePage(num)"
    >
      {{ num }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  name: 'Pagination',
})
export default class Pagination extends Vue {
  @Getter('product/pageCount') private readonly pageCount: number

  private get currentPage(): number {
    return Number(this.$route.query.page) || 1
  }

  private changePage(page: number): void {
    const currentRouteName = (this.$route.name as string)
    const query = { ...this.$route.query, page: String(page) }
    this.$router.push({ name: currentRouteName, query })
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables/colors';
$purple: map-get($colors, purple);
$white: map-get($colors, white);

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.number {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: $purple;
    color: $white;
    font-weight: 500;
  }
}
</style>
