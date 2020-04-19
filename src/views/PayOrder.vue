<template>
  <div>
    <app-input
      placeholder="Введите id заказа..."
      :value="orderId"
      @input="setOrderId"
      @keyup.enter="payOrder"
    />
    <app-input
      placeholder="Введите сумму заказа..."
      :value="orderSum"
      @input="setOrderSum"
      @keyup.enter="payOrder"
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
        title="Оплатить заказ"
        @click="payOrder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import logger from '../lib/logger'
import { result as resultType } from '../lib/task/types'
import { OrderCreate, OrderPayResponse } from '../store/order/types'
import AppInput from '../components/ui/AppInput.vue'
import AppButton from '../components/ui/AppButton.vue'
import messages from '../mixins/messages'

@Component({
  name: 'PayOrder',
  components: {
    AppInput,
    AppButton,
  },
  mixins: [messages],
})
export default class PayOrder extends Vue {
  private orderId = ''

  private orderSum = ''

  private errorMessage: string

  private successMessage: string

  private clearMessages: () => void

  @Action('ui/changeHeaderTitle') private changeHeaderTitleAction: (payload: { title: string }) => void

  @Action('order/payOrder') private payOrderAction: (payload: OrderCreate) => Promise<resultType>

  private created() {
    this.setHeaderTitle()
    this.setOrderId((this.$route.query.orderId as string) || '')
  }

  private setHeaderTitle(): void {
    this.changeHeaderTitleAction({ title: 'Оплатить заказ' })
  }

  private setOrderId(value: string): void {
    this.orderId = value
  }

  private setOrderSum(value: string): void {
    this.orderSum = value
  }

  private prepareOrderPayload(): OrderCreate {
    return {
      order_id: Number(this.orderId.trim()),
      value: Number(this.orderSum.trim()),
    }
  }

  private async payOrder(): Promise<void> {
    this.clearMessages()
    if (!this.orderId.trim() || !this.orderSum.trim()) {
      this.errorMessage = 'Проверьте корректность введенных данных'
      return
    }

    const [error, result] = await this.payOrderAction(this.prepareOrderPayload())
    if (error) {
      this.onFail(error)
      return
    }
    this.onSuccess(result)
  }

  private onFail(error: any): void {
    logger.error(error)
    this.errorMessage = 'Проверьте корректность введенных данных'
  }

  private onSuccess(result: OrderPayResponse): void {
    this.successMessage = `Заказ № ${result.id} на сумму ${result.total} успешно оплачен`
    this.orderId = ''
    this.orderSum = ''
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: center;
}
.button {
  margin-top: 20px;
}
</style>
