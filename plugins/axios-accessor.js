import { initializeAxios } from "~/utils/axios"
import { CLEAR_STATUS, COMMON_ERROR } from "~/utils/storeMutations"
import { store } from "~/utils/store"

const interceptors = ({ app, $axios, redirect }) => {
  initializeAxios($axios)
  $axios.onRequest((config) => {
    if (app && app.i18n && app.i18n.locale) {
      config.headers.common.lang = app.i18n.locale
    }
  })

  $axios.onError((error) => {
    store.commit("common/" + COMMON_ERROR, error, { root: true })
    setTimeout(() => {
      store.commit("common/" + CLEAR_STATUS, { root: true })
    }, 3000)

    return Promise.reject(error)
  })
}

export default interceptors
