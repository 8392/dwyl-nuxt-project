export default (context) => {
  if (process.client) {
    context.app.router.beforeEach((to, from, next) => {
      // console.log('路由跳转', context)
      // if (!token && to.path !== '/login') {
      //   next('/login')
      // } else if (to.path !== '/login') {
      //   next()
      // } else {
        next()
      // }
    })
  }
}
