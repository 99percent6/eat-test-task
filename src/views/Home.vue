<template>
  <div class="home">
    <div class="buttons">
      <app-button
        class="button"
        title="Сгенерировать данные"
        @click="generateSampleProducts"
      />
      <app-button
        class="button"
        title="Создать заказ"
        :link="{ name: 'CreateOrder' }"
      />
      <app-button
        class="button"
        title="Оплатить заказ"
        :link="{ name: 'PayOrder' }"
      />
    </div>
    <div
      v-if="errorMessage !== ''"
      class="error"
    >
      {{ errorMessage }}
    </div>
    <product-list/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { Location } from 'vue-router'
import { result as resultType } from '../lib/task/types'
import { Product } from '../store/product/types'
import AppButton from '../components/ui/AppButton.vue'
import ProductList from '../components/ProductList.vue'
import { isValidRoutePage } from '../helpers'

@Component({
  name: 'Home',
  components: {
    AppButton,
    ProductList,
  },
})
export default class Home extends Vue {
  private errorMessage = ''

  @Action('product/generateSamples') private generateSamplesAction: () => Promise<resultType>

  @Action('product/list') private getProductListAction: (payload: { page?: number; size?: number; useCache?: boolean }) => Promise<Product[]>

  @Action('ui/changeHeaderTitle') private changeHeaderTitleAction: (payload: { title: string }) => void

  private created() {
    const page = Number(this.$route.query.page) || 1
    this.fetchProducts({ page })
    this.setHeaderTitle()
  }

  private beforeRouteUpdate(to: Location, from: Location, next: any): void {
    if (from.query.page !== to.query.page) {
      this.fetchProducts({ page: Number(to.query.page), useCache: false })
    }
    next()
  }

  private async generateSampleProducts(): Promise<void> {
    this.errorMessage = ''
    const [error] = await this.generateSamplesAction()
    if (error) {
      this.errorMessage = error.message || error
    }
  }

  private fetchProducts(
    { page = 1, useCache = true }: { page?: number; useCache?: boolean },
  ): void {
    const validatedPage = isValidRoutePage(page) ? page : 1
    this.getProductListAction({ page: validatedPage, useCache })
  }

  private setHeaderTitle(): void {
    this.changeHeaderTitleAction({ title: 'Главная' })
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables/grid';
@import '../css/variables/colors';
$danger: map-get($colors, danger);

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .button {
    margin-bottom: 15px;
  }

  @media #{$media-to-xs} {
    flex-direction: column;
    align-items: center;
  }
}
</style>
