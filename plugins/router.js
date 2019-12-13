export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    store.commit('setPageLoaded', false)

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    next()
  })
}
