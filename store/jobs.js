import HexaToRGBA from "~/utils/color"

import { SET_JOBS } from "~/utils/storeMutations"

import { GET_JOBS } from "~/utils/storeActions"

import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    jobs: [],
  }),
  getters: {},
  mutations: {
    [SET_JOBS]: (state, jobs) => {
      for (const job of jobs) {
        for (const item in job?.labels) {
          job.labels[item].bgColor = HexaToRGBA(job?.labels[item]?.color, 0.2)
        }
      }
      state.jobs = jobs
    },
  },
  actions: {
    [GET_JOBS]: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        $axios
          .$get(`get-all-jobs`)
          .then((response) => {
            commit(SET_JOBS, response.data)
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
