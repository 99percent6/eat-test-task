<template>
  <div class="product-wrapper">
    <div
      v-if="products.length"
      class="product-list"
    >
      <product-tile
        class="product"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else>
      Товаров пока нет
    </div>
    <pagination/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import ProductTile from './ProductTile.vue'
import { Product } from '../store/product/types'
import Pagination from './Pagination.vue'

@Component({
  name: 'ProductList',
  components: {
    ProductTile,
    Pagination,
  },
})
export default class ProductList extends Vue {
  @Getter('product/getList') private readonly products: Product[]
}
</script>

<style lang="scss" scoped>
@import '../css/variables/grid';

.product-wrapper {
  margin-top: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .product {
    flex-basis: 15%;
    margin-bottom: 20px;

    @media #{$media-to-md} {
      flex-basis: 30%;
    }

    @media #{$media-to-xs} {
      flex-basis: 45%;
    }
  }
}
</style>
