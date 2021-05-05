<template>
  <VueSkeletonLoader
    type="rectangle"
    :width="200"
    :height="200"
    animation="fade"
  />
</template>

<script>
import VueSkeletonLoader from 'skeleton-loader-vue'
export default {
  components: {
    VueSkeletonLoader,
  },
}
</script>

<style lang="scss" scoped></style>
