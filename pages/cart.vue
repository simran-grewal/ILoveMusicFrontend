<template>
  <div class="parent">
    <div></div>
    <transition-group name="list" tag="div">
      <div v-for="item in cart" :key="item.productId" class="child">
        <div class="image-container">
          <nuxt-link :to="`/items/${item.productId}`">
            <img :src="item.imageUrl" alt="image" />
          </nuxt-link>
        </div>
        <h3 style="text-align: center">{{ item.name }}</h3>
        <div class="item-description">
          <h4>x {{ item.quantity }}</h4>
          <h4 class="price">
            Price: ${{ (item.unitPrice * item.quantity).toFixed(2) }}
          </h4>
        </div>
        <i
          class="delete-icon"
          style="text-align: end"
          @click="removeItemFromCart(item.productId)"
          >X</i
        >
      </div>
    </transition-group>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['cart']),
  },
  methods: {
    removeItemFromCart(productId) {
      const index = this.cart.findIndex((item) => item.productId === productId)
      this.$store.commit('removeFromCart', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  margin: 1rem;
  .child {
    display: grid;
    grid-template-columns: 1.5fr 3fr 2fr 0.6fr;
    background-color: #fff;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgb(0 0 0 / 45%);
    padding: 0.5rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    transition: all 0.8s ease;
    position: relative;
    .image-container {
      flex-basis: 20%;
    }
    .item-description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
img {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
}
h3 {
  color: #28a745;
  align-self: center;
}
.price {
  color: #b7272d;
}
.delete-icon {
  font-family: sans-serif;
  color: #b7272d;
  font-size: 1rem;
  position: absolute;
  right: 0;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
