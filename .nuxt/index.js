import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_bbc6e00a from 'nuxt_plugin_plugin_bbc6e00a' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_vuesocialsharingplugin_08cab6d2 from 'nuxt_plugin_vuesocialsharingplugin_08cab6d2' // Source: .\\vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_axios_8af036c4 from 'nuxt_plugin_axios_8af036c4' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_pluginutils_439ecce0 from 'nuxt_plugin_pluginutils_439ecce0' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_6b1dfa4a from 'nuxt_plugin_pluginrouting_6b1dfa4a' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_795b4e74 from 'nuxt_plugin_pluginmain_795b4e74' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_tabpanelplugin86e1b8a8_529b61a7 from 'nuxt_plugin_tabpanelplugin86e1b8a8_529b61a7' // Source: .\\tabpanel.plugin.86e1b8a8.js (mode: 'all')
import nuxt_plugin_badgeplugin3e8d3b36_2c740958 from 'nuxt_plugin_badgeplugin3e8d3b36_2c740958' // Source: .\\badge.plugin.3e8d3b36.js (mode: 'all')
import nuxt_plugin_tooltipplugin75c3de54_231bb2f6 from 'nuxt_plugin_tooltipplugin75c3de54_231bb2f6' // Source: .\\tooltip.plugin.75c3de54.js (mode: 'all')
import nuxt_plugin_scrolltopplugin0acac98a_88aa4a1e from 'nuxt_plugin_scrolltopplugin0acac98a_88aa4a1e' // Source: .\\scrolltop.plugin.0acac98a.js (mode: 'all')
import nuxt_plugin_knobplugin6f049f5a_832b3e6c from 'nuxt_plugin_knobplugin6f049f5a_832b3e6c' // Source: .\\knob.plugin.6f049f5a.js (mode: 'all')
import nuxt_plugin_tabviewplugin65826fcd_076619fa from 'nuxt_plugin_tabviewplugin65826fcd_076619fa' // Source: .\\tabview.plugin.65826fcd.js (mode: 'all')
import nuxt_plugin_paginatorplugin70b884a4_10193538 from 'nuxt_plugin_paginatorplugin70b884a4_10193538' // Source: .\\paginator.plugin.70b884a4.js (mode: 'all')
import nuxt_plugin_cardplugin44733726_75b1e54e from 'nuxt_plugin_cardplugin44733726_75b1e54e' // Source: .\\card.plugin.44733726.js (mode: 'all')
import nuxt_plugin_skeletonplugin1da9f22c_258b1810 from 'nuxt_plugin_skeletonplugin1da9f22c_258b1810' // Source: .\\skeleton.plugin.1da9f22c.js (mode: 'all')
import nuxt_plugin_dialogplugin5040bf65_8d23f46a from 'nuxt_plugin_dialogplugin5040bf65_8d23f46a' // Source: .\\dialog.plugin.5040bf65.js (mode: 'all')
import nuxt_plugin_dividerplugin634df06c_61efaf2a from 'nuxt_plugin_dividerplugin634df06c_61efaf2a' // Source: .\\divider.plugin.634df06c.js (mode: 'all')
import nuxt_plugin_textareaplugin1d65c197_2cf62d15 from 'nuxt_plugin_textareaplugin1d65c197_2cf62d15' // Source: .\\textarea.plugin.1d65c197.js (mode: 'all')
import nuxt_plugin_ratingplugin70ca650c_62e3d9b2 from 'nuxt_plugin_ratingplugin70ca650c_62e3d9b2' // Source: .\\rating.plugin.70ca650c.js (mode: 'all')
import nuxt_plugin_sidebarplugin4890b0ef_18d11ebe from 'nuxt_plugin_sidebarplugin4890b0ef_18d11ebe' // Source: .\\sidebar.plugin.4890b0ef.js (mode: 'all')
import nuxt_plugin_imagepreviewplugin10780bac_04985e2c from 'nuxt_plugin_imagepreviewplugin10780bac_04985e2c' // Source: .\\imagepreview.plugin.10780bac.js (mode: 'all')
import nuxt_plugin_toastplugin344ce0ba_64084a74 from 'nuxt_plugin_toastplugin344ce0ba_64084a74' // Source: .\\toast.plugin.344ce0ba.js (mode: 'all')
import nuxt_plugin_buttonplugin0d350ccf_5e7868cf from 'nuxt_plugin_buttonplugin0d350ccf_5e7868cf' // Source: .\\button.plugin.0d350ccf.js (mode: 'all')
import nuxt_plugin_dropdownplugine8f724a4_5e4497ba from 'nuxt_plugin_dropdownplugine8f724a4_5e4497ba' // Source: .\\dropdown.plugin.e8f724a4.js (mode: 'all')
import nuxt_plugin_inputtextplugined865dec_5f77ac26 from 'nuxt_plugin_inputtextplugined865dec_5f77ac26' // Source: .\\inputtext.plugin.ed865dec.js (mode: 'all')
import nuxt_plugin_configplugin3cda94df_597211fe from 'nuxt_plugin_configplugin3cda94df_597211fe' // Source: .\\config.plugin.3cda94df.js (mode: 'all')
import nuxt_plugin_moment_b5bf7e8c from 'nuxt_plugin_moment_b5bf7e8c' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_axiosaccessor_47022a98 from 'nuxt_plugin_axiosaccessor_47022a98' // Source: ..\\plugins\\axios-accessor (mode: 'all')
import nuxt_plugin_calendar_2d9e47d6 from 'nuxt_plugin_calendar_2d9e47d6' // Source: ..\\plugins\\calendar (mode: 'client')
import nuxt_plugin_storeaccessor_d64272ae from 'nuxt_plugin_storeaccessor_d64272ae' // Source: ..\\plugins\\store-accessor (mode: 'all')
import nuxt_plugin_i18naccessor_51733960 from 'nuxt_plugin_i18naccessor_51733960' // Source: ..\\plugins\\i18n-accessor (mode: 'all')
import nuxt_plugin_Vuelidate_55cf8cdb from 'nuxt_plugin_Vuelidate_55cf8cdb' // Source: ..\\plugins\\Vuelidate (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Inovola","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"hid":"og:description","name":"og:description","content":""},{"name":"format-detection","content":"telephone=no"},{"hid":"og:title","name":"og:title","content":""},{"hid":"keywords","name":"keywords","content":""},{"hid":"author","name":"author","content":""},{"hid":"og:url","name":"og:url","content":""},{"hid":"og:image","name":"og:image","content":""},{"hid":"og:type","name":"og:type","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Flogo.svg"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_bbc6e00a === 'function') {
    await nuxt_plugin_plugin_bbc6e00a(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_08cab6d2 === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_08cab6d2(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_8af036c4 === 'function') {
    await nuxt_plugin_axios_8af036c4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_439ecce0 === 'function') {
    await nuxt_plugin_pluginutils_439ecce0(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6b1dfa4a === 'function') {
    await nuxt_plugin_pluginrouting_6b1dfa4a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_795b4e74 === 'function') {
    await nuxt_plugin_pluginmain_795b4e74(app.context, inject)
  }

  if (typeof nuxt_plugin_tabpanelplugin86e1b8a8_529b61a7 === 'function') {
    await nuxt_plugin_tabpanelplugin86e1b8a8_529b61a7(app.context, inject)
  }

  if (typeof nuxt_plugin_badgeplugin3e8d3b36_2c740958 === 'function') {
    await nuxt_plugin_badgeplugin3e8d3b36_2c740958(app.context, inject)
  }

  if (typeof nuxt_plugin_tooltipplugin75c3de54_231bb2f6 === 'function') {
    await nuxt_plugin_tooltipplugin75c3de54_231bb2f6(app.context, inject)
  }

  if (typeof nuxt_plugin_scrolltopplugin0acac98a_88aa4a1e === 'function') {
    await nuxt_plugin_scrolltopplugin0acac98a_88aa4a1e(app.context, inject)
  }

  if (typeof nuxt_plugin_knobplugin6f049f5a_832b3e6c === 'function') {
    await nuxt_plugin_knobplugin6f049f5a_832b3e6c(app.context, inject)
  }

  if (typeof nuxt_plugin_tabviewplugin65826fcd_076619fa === 'function') {
    await nuxt_plugin_tabviewplugin65826fcd_076619fa(app.context, inject)
  }

  if (typeof nuxt_plugin_paginatorplugin70b884a4_10193538 === 'function') {
    await nuxt_plugin_paginatorplugin70b884a4_10193538(app.context, inject)
  }

  if (typeof nuxt_plugin_cardplugin44733726_75b1e54e === 'function') {
    await nuxt_plugin_cardplugin44733726_75b1e54e(app.context, inject)
  }

  if (typeof nuxt_plugin_skeletonplugin1da9f22c_258b1810 === 'function') {
    await nuxt_plugin_skeletonplugin1da9f22c_258b1810(app.context, inject)
  }

  if (typeof nuxt_plugin_dialogplugin5040bf65_8d23f46a === 'function') {
    await nuxt_plugin_dialogplugin5040bf65_8d23f46a(app.context, inject)
  }

  if (typeof nuxt_plugin_dividerplugin634df06c_61efaf2a === 'function') {
    await nuxt_plugin_dividerplugin634df06c_61efaf2a(app.context, inject)
  }

  if (typeof nuxt_plugin_textareaplugin1d65c197_2cf62d15 === 'function') {
    await nuxt_plugin_textareaplugin1d65c197_2cf62d15(app.context, inject)
  }

  if (typeof nuxt_plugin_ratingplugin70ca650c_62e3d9b2 === 'function') {
    await nuxt_plugin_ratingplugin70ca650c_62e3d9b2(app.context, inject)
  }

  if (typeof nuxt_plugin_sidebarplugin4890b0ef_18d11ebe === 'function') {
    await nuxt_plugin_sidebarplugin4890b0ef_18d11ebe(app.context, inject)
  }

  if (typeof nuxt_plugin_imagepreviewplugin10780bac_04985e2c === 'function') {
    await nuxt_plugin_imagepreviewplugin10780bac_04985e2c(app.context, inject)
  }

  if (typeof nuxt_plugin_toastplugin344ce0ba_64084a74 === 'function') {
    await nuxt_plugin_toastplugin344ce0ba_64084a74(app.context, inject)
  }

  if (typeof nuxt_plugin_buttonplugin0d350ccf_5e7868cf === 'function') {
    await nuxt_plugin_buttonplugin0d350ccf_5e7868cf(app.context, inject)
  }

  if (typeof nuxt_plugin_dropdownplugine8f724a4_5e4497ba === 'function') {
    await nuxt_plugin_dropdownplugine8f724a4_5e4497ba(app.context, inject)
  }

  if (typeof nuxt_plugin_inputtextplugined865dec_5f77ac26 === 'function') {
    await nuxt_plugin_inputtextplugined865dec_5f77ac26(app.context, inject)
  }

  if (typeof nuxt_plugin_configplugin3cda94df_597211fe === 'function') {
    await nuxt_plugin_configplugin3cda94df_597211fe(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_b5bf7e8c === 'function') {
    await nuxt_plugin_moment_b5bf7e8c(app.context, inject)
  }

  if (typeof nuxt_plugin_axiosaccessor_47022a98 === 'function') {
    await nuxt_plugin_axiosaccessor_47022a98(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_calendar_2d9e47d6 === 'function') {
    await nuxt_plugin_calendar_2d9e47d6(app.context, inject)
  }

  if (typeof nuxt_plugin_storeaccessor_d64272ae === 'function') {
    await nuxt_plugin_storeaccessor_d64272ae(app.context, inject)
  }

  if (typeof nuxt_plugin_i18naccessor_51733960 === 'function') {
    await nuxt_plugin_i18naccessor_51733960(app.context, inject)
  }

  if (typeof nuxt_plugin_Vuelidate_55cf8cdb === 'function') {
    await nuxt_plugin_Vuelidate_55cf8cdb(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
