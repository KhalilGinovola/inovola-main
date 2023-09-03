import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17a93e5d = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _170e1bfb = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _0f6a05fc = () => interopDefault(import('..\\pages\\dev-team-as-service\\index.vue' /* webpackChunkName: "pages/dev-team-as-service/index" */))
const _1b344c28 = () => interopDefault(import('..\\pages\\digital-transformation\\index.vue' /* webpackChunkName: "pages/digital-transformation/index" */))
const _becf7c74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _a60d4452 = () => interopDefault(import('..\\pages\\for-companies\\index.vue' /* webpackChunkName: "pages/for-companies/index" */))
const _8845228e = () => interopDefault(import('..\\pages\\for-developers\\index.vue' /* webpackChunkName: "pages/for-developers/index" */))
const _2c96799e = () => interopDefault(import('..\\pages\\hr-as-service\\index.vue' /* webpackChunkName: "pages/hr-as-service/index" */))
const _4c9bf912 = () => interopDefault(import('..\\pages\\jobs.vue' /* webpackChunkName: "pages/jobs" */))
const _9bca7c30 = () => interopDefault(import('..\\pages\\jobs\\_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))
const _3dd417f1 = () => interopDefault(import('..\\pages\\remote-jobs.vue' /* webpackChunkName: "pages/remote-jobs" */))
const _54019b71 = () => interopDefault(import('..\\pages\\remote-jobs\\index.vue' /* webpackChunkName: "pages/remote-jobs/index" */))
const _524afa29 = () => interopDefault(import('..\\pages\\remote-jobs\\_slug.vue' /* webpackChunkName: "pages/remote-jobs/_slug" */))
const _1d4dbae5 = () => interopDefault(import('..\\pages\\success-stories\\index.vue' /* webpackChunkName: "pages/success-stories/index" */))
const _940efe46 = () => interopDefault(import('..\\pages\\blogs\\_id\\index.vue' /* webpackChunkName: "pages/blogs/_id/index" */))
const _17d49955 = () => interopDefault(import('..\\pages\\success-stories\\_id\\index.vue' /* webpackChunkName: "pages/success-stories/_id/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _17a93e5d,
    name: "blogs___en___default"
  }, {
    path: "/contact-us",
    component: _170e1bfb,
    name: "contact-us___en___default"
  }, {
    path: "/dev-team-as-service",
    component: _0f6a05fc,
    name: "dev-team-as-service___en___default"
  }, {
    path: "/digital-transformation",
    component: _1b344c28,
    name: "digital-transformation___en___default"
  }, {
    path: "/en",
    component: _becf7c74,
    name: "index___en"
  }, {
    path: "/for-companies",
    component: _a60d4452,
    name: "for-companies___en___default"
  }, {
    path: "/for-developers",
    component: _8845228e,
    name: "for-developers___en___default"
  }, {
    path: "/hr-as-service",
    component: _2c96799e,
    name: "hr-as-service___en___default"
  }, {
    path: "/jobs",
    component: _4c9bf912,
    name: "jobs___en___default",
    children: [{
      path: ":slug?",
      component: _9bca7c30,
      name: "jobs-slug___en___default"
    }]
  }, {
    path: "/remote-jobs",
    component: _3dd417f1,
    children: [{
      path: "",
      component: _54019b71,
      name: "remote-jobs___en___default"
    }, {
      path: ":slug",
      component: _524afa29,
      name: "remote-jobs-slug___en___default"
    }]
  }, {
    path: "/success-stories",
    component: _1d4dbae5,
    name: "success-stories___en___default"
  }, {
    path: "/en/blogs",
    component: _17a93e5d,
    name: "blogs___en"
  }, {
    path: "/en/contact-us",
    component: _170e1bfb,
    name: "contact-us___en"
  }, {
    path: "/en/dev-team-as-service",
    component: _0f6a05fc,
    name: "dev-team-as-service___en"
  }, {
    path: "/en/digital-transformation",
    component: _1b344c28,
    name: "digital-transformation___en"
  }, {
    path: "/en/for-companies",
    component: _a60d4452,
    name: "for-companies___en"
  }, {
    path: "/en/for-developers",
    component: _8845228e,
    name: "for-developers___en"
  }, {
    path: "/en/hr-as-service",
    component: _2c96799e,
    name: "hr-as-service___en"
  }, {
    path: "/en/jobs",
    component: _4c9bf912,
    name: "jobs___en",
    children: [{
      path: ":slug?",
      component: _9bca7c30,
      name: "jobs-slug___en"
    }]
  }, {
    path: "/en/remote-jobs",
    component: _3dd417f1,
    children: [{
      path: "",
      component: _54019b71,
      name: "remote-jobs___en"
    }, {
      path: ":slug",
      component: _524afa29,
      name: "remote-jobs-slug___en"
    }]
  }, {
    path: "/en/success-stories",
    component: _1d4dbae5,
    name: "success-stories___en"
  }, {
    path: "/en/blogs/:id",
    component: _940efe46,
    name: "blogs-id___en"
  }, {
    path: "/en/success-stories/:id",
    component: _17d49955,
    name: "success-stories-id___en"
  }, {
    path: "/blogs/:id",
    component: _940efe46,
    name: "blogs-id___en___default"
  }, {
    path: "/success-stories/:id",
    component: _17d49955,
    name: "success-stories-id___en___default"
  }, {
    path: "/",
    component: _becf7c74,
    name: "index___en___default"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
