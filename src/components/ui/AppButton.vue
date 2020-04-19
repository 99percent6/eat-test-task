<template>
  <component
    :is="componentName"
    :to="link"
    class="button"
    @click="$emit('click')"
  >
    {{ title }}
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Location } from 'vue-router'

@Component({
  name: 'AppButton',
})
export default class AppButton extends Vue {
  @Prop({ required: true }) private readonly title: string

  @Prop({ required: false, default: '' }) private readonly link: string | Location

  private get componentName(): string {
    return this.link !== '' ? 'router-link' : 'button'
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/variables/colors";
$white: map-get($colors, white);
$purple: map-get($colors, purple);

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  padding: 10px 20px;
  color: $white;
  background-color: $purple;
  border: none;
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 10px 10px 17px -4px rgba(184,177,184,1);
  -moz-box-shadow: 10px 10px 17px -4px rgba(184,177,184,1);
  box-shadow: 10px 10px 17px -4px rgba(184,177,184,1);
  &:focus {
    outline: none;
  }
}
</style>
