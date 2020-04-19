<template>
  <div>
    <input
      class="input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
      @keyup.enter="$emit('keyup.enter', $event.target.value)"
      @keyup="$emit('keyup', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'AppInput',
})
export default class AppInput extends Vue {
  @Prop({ required: false }) private readonly value: string | number

  @Prop({ required: false, default: 'text' }) private readonly type: string

  @Prop({ required: false, default: '' }) private readonly placeholder: string
}
</script>

<style lang="scss" scoped>
@import '../../css/variables/colors';
$gray: map-get($colors, gray);

.input {
  width: 250px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid $gray;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
