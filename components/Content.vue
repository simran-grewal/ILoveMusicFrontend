<template>
  <div class="container">
    <aside class="left-side-bar"></aside>

    <transition-group name="list" class="content-wrapper" tag="ul">
      <li v-for="item in products" :key="item.id" class="content">
        <nuxt-link :to="`/items/${item.id}`">
          <img :src="item.imageUrl" alt="Image" />
          <div class="product-description">
            <div class="product-description__name">
              <div>
                {{ item.name }}
              </div>
            </div>
            <div class="product-description__price">
              {{ 'Sale Price: $' + item.unitPrice.toFixed(2) }}
            </div>
          </div>
        </nuxt-link>
      </li>
    </transition-group>

    <aside class="right-side-bar"></aside>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    'leftside'
    'middle-content'
    'right-side';
  margin: 1rem;
  grid-gap: 1rem;
  .left-side-bar {
    // background-color: pink;
    grid-area: leftside;
  }

  .right-side-bar {
    // background-color: blue;
    grid-area: right-side;
  }
}

img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
}
.content-wrapper {
  list-style: none;
  display: block;
  justify-content: space-between;
  flex-flow: row wrap;
  .content {
    background-color: #fff;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
    padding-bottom: 1rem;

    margin-bottom: 2rem;
    grid-area: middle-content;
    border-radius: 0.5rem;
    transition: all 0.8s ease;
    &:hover {
      cursor: pointer;
    }
  }
  .product-description {
    margin: 0.3rem;
    font-size: 1rem;
    justify-content: space-between;
    display: flex;
    &__name {
      font-weight: bold;
      font-size: 1rem;
    }
    &__price {
      align-self: center;
      color: #b7272d;
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
@media (min-width: 650px) {
  .content-wrapper {
    display: flex;
  }
  .content {
    flex: 0 1 45%;
  }
}

@media (min-width: 1000px) {
  .container {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-areas: 'leftside middle-content right-side';
  }
  .content {
    flex: 0 1 32%;
  }
}
</style>
