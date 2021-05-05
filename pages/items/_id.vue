<template>
  <div v-if="products.length">
    <div class="container">
      <picture>
        <img class="container__image" :src="currentItem.imageUrl" />
      </picture>
      <aside>
        <h2>{{ currentItem.name }}</h2>
        <div class="price">Price: ${{ currentItem.unitPrice.toFixed(2) }}</div>
        <h3>{{ currentItem.description }}</h3>
        <div><input v-model="count" type="number" min="1" max="5" /></div>
        <div class="button_addToCart" @click="addToCart">
          Add To Cart - ${{ combinedPrice.toFixed(2) }}
        </div>
      </aside>
    </div>
    <AppToast v-if="cartSubmitted">
      Order Added! Return to
      <nuxt-link to="/">Home Page</nuxt-link>
    </AppToast>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      cartSubmitted: false,
    }
  },
  computed: {
    ...mapState(['products']),
    currentItem() {
      // eslint-disable-next-line eqeqeq
      return this.products.find((item) => item.id == this.id)
      // eslint-disable-next-line no-console
    },
    combinedPrice() {
      return this.count * this.currentItem.unitPrice.toFixed(2)
    },
  },
  created() {
    this.fetchProductsData()
  },
  methods: {
    fetchProductsData() {
      if (this.products.length) return
      this.$store.dispatch('getProducts')
    },
    addToCart() {
      const orderItems = {
        imageUrl: this.currentItem.imageUrl,
        quantity: this.count,
        unitPrice: this.currentItem.unitPrice,
        productId: +this.id,
        name: this.currentItem.name,
      }
      this.cartSubmitted = true
      this.$store.commit('addToCart', orderItems)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: block;

  &__image {
    width: 100%;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  }
  .price {
    color: #b7272d;
    font-size: 2rem;
  }
  input {
    font-size: 2rem;
  }
}
.button_addToCart {
  border-radius: 4px;
  background: #28a745;
  color: #fff;
  padding: 7px 45px;
  display: inline-block;
  margin-top: 20px;
  border: solid 2px #28a745;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
}
@media (min-width: 650px) {
}

@media (min-width: 1000px) {
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
    picture {
      width: 30%;
    }
  }
  aside {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-around;
    margin-left: 4rem;
    align-items: center;
  }
}
</style>
