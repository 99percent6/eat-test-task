<template>
  <div class="product-tile">
    <div class="name">
      {{ product.name }}
    </div>
    <div>
      Цена: {{ product.price }}
    </div>
    <div class="id">
      {{ product.id }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '../store/product/types'

@Component({
  name: 'ProductTile',
})
export default class ProductTile extends Vue {
  @Prop({ required: true }) private readonly product: Product
}
</script>

<style lang="scss" scoped>
@import '../css/variables/colors';
$black: map-get($colors, black);

.product-tile {
  height: 150px;
  padding: 0 15px 10px 15px;
  box-sizing: border-box;
  border: 1px solid $black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  -webkit-box-shadow: 6px 8px 6px 0px rgba(191,191,191,1);
  -moz-box-shadow: 6px 8px 6px 0px rgba(191,191,191,1);
  box-shadow: 6px 8px 6px 0px rgba(191,191,191,1);
}

.name {
  font-weight: 700;
}
.id {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
}
</style>
