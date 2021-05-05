<template>
  <div>
    <Header />
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Header,
    Navbar,
  },
}
</script>

<style></style>
