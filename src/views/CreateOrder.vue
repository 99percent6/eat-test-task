<template>
  <div>
    <app-input
      placeholder="Введите id товаров через запятую..."
      :value="productIds"
      @input="setProductIds"
      @keyup.enter="createOrder"
    />
    <div
      v-if="errorMessage !== ''"
      class="error"
    >
      {{ errorMessage }}
    </div>
    <div
      v-if="successMessage !== ''"
      class="success"
    >
      {{ successMessage }}
    </div>
    <div class="buttons">
      <app-button
        class="button"
        title="Создать заказ"
        @click="createOrder"
      />
      <app-button
        v-if="isCreateOrder && orderId"
        class="button"
        title="Оплатить заказ"
        :link="{ name: 'PayOrder', query: { orderId } }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import logger from '../lib/logger'
import { result as resultType } from '../lib/task/types'
import AppInput from '../components/ui/AppInput.vue'
import AppButton from '../components/ui/AppButton.vue'
import { Product } from '../store/order/types'
import messages from '../mixins/messages'

@Component({
  name: 'CreateOrder',
  components: {
    AppInput,
    AppButton,
  },
  mixins: [messages],
})
export default class CreateOrder extends Vue {
  private productIds = ''

  private isCreateOrder = false

  private orderId: number | null = null

  private errorMessage: string

  private successMessage: string

  private clearMessages: () => void

  @Action('order/createOrder') private createOrderAction: (payload: Product[]) => Promise<resultType>

  @Action('ui/changeHeaderTitle') private changeHeaderTitleAction: (payload: { title: string }) => void

  private created() {
    this.setHeaderTitle()
  }

  private setProductIds(value: string): void {
    this.productIds = value
  }

  private setHeaderTitle(): void {
    this.changeHeaderTitleAction({ title: 'Создать заказ' })
  }

  private prepareProducts(): Product[] {
    const ids = this.productIds.split(',')
    return ids.map((id) => ({
      product_id: Number(id.trim()),
      qty: 1,
    }))
  }

  private async createOrder(): Promise<void> {
    this.clearMessages()
    this.isCreateOrder = false
    this.orderId = null
    if (!this.productIds.trim()) {
      this.errorMessage = 'Пожалуйста, введите значение'
      return
    }

    const [error, result] = await this.createOrderAction(this.prepareProducts())
    if (error) {
      this.onFail(error)
      return
    }
    this.onSuccess(result)
  }

  private onFail(error: any): void {
    logger.error(error)
    this.errorMessage = 'Проверьте корректность введенных данных'
    this.isCreateOrder = false
  }

  private onSuccess(result: number): void {
    this.isCreateOrder = true
    this.orderId = result
    this.successMessage = `Заказ успешно создан, id заказа - ${result}`
    this.productIds = ''
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  margin-top: 20px;
}
</style>
