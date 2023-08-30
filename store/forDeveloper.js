import { SET_REVIEWS, SET_TEAMS } from "~/utils/storeMutations"
import {
  GET_REVIEWS,
  GET_TEAMS,
  GET_FOR_DEVELOPER_PAGE_DATA,
} from "~/utils/storeActions"

import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    reviews: [],
    teams: [],
  }),
  getters: {},
  mutations: {
    [SET_REVIEWS]: (state, reviews) => {
      state.reviews = reviews
    },
    [SET_TEAMS]: (state, teams) => {
      state.teams = teams
    },
  },
  actions: {
    [GET_REVIEWS]: ({ commit }, state) => {
      return new Promise((resolve, reject) => {
        const reviews = [
          {
            id: 1,
            review: "Very comfortable environment.",
            job: "Senior Front End Developer",
            stars: 5,
          },
          {
            id: 2,
            review: "My dream company.",
            job: "Software Engineer",
            stars: 5,
          },
          {
            id: 3,
            review: "Best company I worked at.",
            job: "Software Team Leader",
            stars: 5,
          },
          {
            id: 4,
            review: "Friendly and Flexible.",
            job: "Dot NET Developer",
            stars: 5,
          },
        ]
        commit(SET_REVIEWS, reviews)
        resolve(reviews)

        // $axios.$get(`reviews`).then((response) => {
        //   commit(SET_REVIEWS, response.data)
        //   resolve(response.data)
        // })
      })
    },
    [GET_TEAMS]: ({ commit }, state) => {
      return new Promise((resolve, reject) => {
        $axios.$get(`get-all-teams`).then((response) => {
          const teams = response.data
          commit(SET_TEAMS, teams)
          resolve(response.data)
        })
      })
    },
    [GET_FOR_DEVELOPER_PAGE_DATA]: ({ dispatch }) => {
      return new Promise((resolve) => {
        Promise.all([dispatch(GET_REVIEWS), dispatch(GET_TEAMS)]).then(() => {
          resolve()
        })
      })
    },
  },
}
