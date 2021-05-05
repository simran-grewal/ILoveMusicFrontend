<template>
  <nav class="navbar">
    <div>
      <nuxt-link to="/">
        <h2 @click="refreshHomePage">Home</h2>
      </nuxt-link>
    </div>
    <form @submit.prevent="searchItems">
      <input
        v-model="searchItem"
        type="text"
        placeholder="What you are looking for ?"
      />
      <button>Search</button>
    </form>

    <nuxt-link class="cart-count" to="/cart">
      <div v-if="cartCount > 0" class="smallnum">{{ cartCount }}</div>
      <h2>Cart</h2>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchItem: '',
    }
  },
  computed: {
    ...mapState(['cart']),
    cartCount() {
      return this.cart.length
    },
  },
  methods: {
    searchItems() {
      this.$store.dispatch('searchProduct', this.searchItem.trim())
      if (this.$route.name !== 'index') this.$router.replace('/')
      this.searchItem = ''
    },
    refreshHomePage() {
      this.$store.commit('updateSearchList', [])
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-count {
  display: flex;
  justify-content: center;
}
.navbar {
  background-color: #fff;
  border: 1px solid;
  border-color: #ddd;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  div {
    display: none;
  }
  input {
    margin: 0.6rem;
    padding: 1rem;
    width: 90%;
  }
  button {
    padding: 1rem;
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}

@media (min-width: 1000px) {
  .navbar {
    display: grid;
    grid-template-columns: 2fr 10fr 2fr;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      width: 33%;
    }
    h2:hover {
      cursor: pointer;
    }
  }

  button {
    cursor: pointer;
  }
}
</style>
