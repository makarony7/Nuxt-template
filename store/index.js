/* eslint-disable space-before-function-paren */
export const state = () => ({
  loaded: false,
  pageLoaded: false
})

export const mutations = {
  setLoaded(state, data) {
    state.loaded = data
  },
  setPageLoaded(state, data) {
    state.pageLoaded = data
  }
}

export const actions = {}

export const getters = {}
