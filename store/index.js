export const state = () => ({
  products: [],
  cart: [],
  searchList: [],
})

// export const getters = {
//   getterValue: (state) => {
//     return state.value
//   },
// }

export const mutations = {
  updateProductsData: (state, payload) => {
    state.products = payload
  },
  updateSearchList: (state, payload) => {
    state.searchList = payload
  },
  addToCart: (state, payload) => {
    const index = state.cart.findIndex(
      (item) => item.productId === payload.productId
    )
    if (index !== -1) {
      state.cart[index] = payload
    } else {
      state.cart.push(payload)
    }
  },
  removeFromCart: (state, payload) => {
    state.cart.splice(payload, 1)
  },
}

export const actions = {
  async getProducts({ state, commit }) {
    if (state.products.length) return

    try {
      await fetch('http://localhost:5000/api/products')
        .then((response) => response.json())
        .then((data) => {
          commit('updateProductsData', data._embedded.products)
        })
    } catch (err) {}
  },

  async searchProduct({ state, commit }, searchBy) {
    try {
      await fetch(
        'http://localhost:5000/api/products/search/findByNameContaining?' +
          new URLSearchParams({
            name: searchBy,
          })
      )
        .then((response) => response.json())
        .then((data) => {
          commit('updateSearchList', data._embedded.products)
        })
    } catch (arr) {}
  },
}
