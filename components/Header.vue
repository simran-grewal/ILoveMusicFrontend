<template>
  <div class="header">
    <h1 class="header__title">I Love Music {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Instruments',
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &__title {
    margin: 0;
    color: #fff;
    font-weight: 300;
  }
  height: 35vh;
}
</style>
