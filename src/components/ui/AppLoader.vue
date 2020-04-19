<template>
  <div class="loader-container">
    <div class="loader"/>
  </div>
</template>

<style lang="scss" scoped>
@import '../../css/variables/colors';
$purple: map-get($colors, purple);
$gray: map-get($colors, gray);

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  animation: spinningColor 1.5s ease-in-out infinite;
  border: 5px double $gray;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

@keyframes spinningColor {
  0% {
    transform: rotate(360deg);
    border-top:5px dashed $purple;
    border-bottom:5px dashed $purple;
  }
  25% {
    border-top:5px dashed $purple;
    border-bottom:5px dashed $purple;
  }
  50% {
    border-top:5px dashed $purple;
    border-bottom:5px dashed $purple;
  }
  75% {
    border-top:5px dashed $purple;
    border-bottom:5px dashed $purple;
  }
  100% {
    border-top:5px dashed $purple;
    border-bottom:5px dashed $purple;
  }
}
</style>
