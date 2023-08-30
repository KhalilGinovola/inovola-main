import {
  COMMON_REQUEST,
  COMMON_SUCCESS,
  COMMON_ERROR,
  SET_SEO,
  CLEAR_STATUS,
} from "~/utils/storeMutations"

import { SEND_CONTACT, GET_SEO } from "~/utils/storeActions"

import { $axios, setHeaderToken } from "~/utils/axios"
import { i18n } from "~/utils/i18n"

export default {
  namespaced: true,

  state: () => ({
    status: "",
    errorMsg: {
      message: "",
      list: [],
    },
    successMsg: "",
    errorStatus: "",
    requestType: "",
    faqs: [],
    termsAndConditions: {},
    privacyPolicy: {},
    seo: {
      meta_keywords: [],
      meta_description: "",
    },
  }),
  getters: {},
  mutations: {
    [COMMON_REQUEST]: (state) => {
      state.status = "loading"
      state.errorMsg = {
        message: "",
        list: [],
      }
      state.successMsg = ""
      state.errorStatus = ""
    },
    [CLEAR_STATUS]: (state) => {
      state.status = ""
    },
    [COMMON_SUCCESS]: (state, payload) => {
      state.successMsg = payload.message || i18n.t("shared.done")
      state.errorMsg = {
        message: "",
        list: [],
      }
      state.errorStatus = ""
      state.requestType = payload.type
      state.status = "success"
    },
    [COMMON_ERROR]: (state, err) => {
      state.errorMsg = { message: "", list: [] }

      if (err?.response?.status) state.errorStatus = err.response.status

      if (err?.response?.data?.message) {
        state.errorMsg.message = err.response.data.message
      } else if (err?.response?.data && typeof err.response.data === "string") {
        state.errorMsg.message = err.response.data
      }

      if (err?.response?.data?.errors) {
        Object.keys(err.response.data.errors).forEach(function (field) {
          const errorLine = err.response.data.errors[field]
          if (Array.isArray(errorLine)) {
            state.errorMsg.list.push(errorLine.join("\n"))
          } else {
            state.errorMsg.list.push(errorLine)
          }
        })
      }

      if (state.errorStatus === 401) {
        setHeaderToken()
      }
      state.status = "error"
    },
    [SET_SEO]: (state, seo) => {
      state.seo = seo
    },
  },
  actions: {
    [SEND_CONTACT]: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        $axios
          .$post("contact-us", data)
          .then((response) => {
            commit(COMMON_SUCCESS, {
              type: "post",
              message: "Message set successfully",
            })

            setTimeout(() => {
              commit(CLEAR_STATUS)
            }, 3000)
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    [GET_SEO]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        $axios
          .$get("get-setting")
          .then((response) => {
            commit(SET_SEO, response.data)
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
