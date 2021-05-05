<template>
  <div class="container">
    <Skelton v-if="!products.length & !searchList.length" />
    <div v-else>
      <Content :products="!searchList.length ? products : searchList" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState(['products', 'searchList']),
  },
  created() {
    this.fetchProductsData()
  },
  methods: {
    fetchProductsData() {
      if (this.products.length) return
      this.$store.dispatch('getProducts')
    },
  },
}
</script>

<style></style>
