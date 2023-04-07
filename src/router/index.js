/* eslint-disable no-undef */
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import useAuth from 'src/composables/useAuth'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'hash' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to) => {
    const { isLoggedIn } = useAuth()
    const loged = await isLoggedIn()
    if (
      to.hash.includes('type=recovery') &&
      to.name !== 'reset-password'
    ) {
      const accessToken = to.hash.split('&')[0]
      const token = accessToken.replace('#access_token=', '')
      return { name: 'reset-password', query: { token } }
    }
    if (
      !loged &&
      to.meta.requiresAuth
    ) {
      return { name: 'loginPage' }
    }
  })

  return Router
})
