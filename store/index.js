import { GET_MAIN_APIS, GET_SOCIAL_LINKS } from "~/utils/storeActions"

export default {
  namespaced: true,

  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    // async nuxtServerInit({ dispatch }) {
    //   await dispatch(GET_MAIN_APIS)
    // },
    [GET_MAIN_APIS]: ({ dispatch }) => {
      return new Promise((resolve) => {
        Promise.all([dispatch("home/" + GET_SOCIAL_LINKS)]).then(() => {
          resolve()
        })
      })
    },
  },
}
