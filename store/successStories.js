import {
  SET_SUCCESS_STORIES,
  SET_SUCCESS_STORY,
  SET_CASES_STUDY,
  SET_CLIENT_REVIEWS,
} from "~/utils/storeMutations"
import {
  GET_SUCCESS_STORIES,
  GET_SUCCESS_STORY,
  GET_CLIENT_REVIEWS,
  GET_CASES_STUDY,
} from "~/utils/storeActions"

import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    successStories: [],
    clientReviews: [],
    totalStoriesCount: 1,
    storiesPerPage: 10,
    successStory: {},
    caseStudy: [],
    totalCaseStudyCount: 1,
  }),
  getters: {},
  mutations: {
    [SET_SUCCESS_STORIES]: (state, successStories) => {
      state.successStories.push(...successStories.data)
      state.totalStoriesCount = successStories.total
    },
    [SET_SUCCESS_STORY]: (state, successStory) => {
      state.successStory = { ...successStory }
    },
    [SET_CLIENT_REVIEWS]: (state, clientReviews) => {
      state.clientReviews = clientReviews
    },
    [SET_CASES_STUDY]: (state, caseStudy) => {
      state.caseStudy = [...caseStudy.data]
      state.totalCaseStudyCount = caseStudy.total
    },
  },

  actions: {
    [GET_SUCCESS_STORIES]: ({ commit, state }, page) => {
      return new Promise((resolve, reject) => {
        $axios.$get(`get-all-case-studies?page=${page}`).then((response) => {
          commit(SET_SUCCESS_STORIES, response.data)
          resolve(response.data)
        })
      })
    },
    [GET_SUCCESS_STORY]: ({ commit, state }, id) => {
      return new Promise((resolve, reject) => {
        $axios.$get(`/case-study-info/${id}`).then((response) => {
          commit(SET_SUCCESS_STORY, {
            ...response.data.case_study,
          })
          resolve(response.data)
        })
      })
    },
    [GET_CLIENT_REVIEWS]: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        $axios.$get(`get-all-client-reviews`).then((response) => {
          commit(SET_CLIENT_REVIEWS, response.data)
          resolve(response.data)
        })
      })
    },
    [GET_CASES_STUDY]: ({ commit, state }, service) => {
      return new Promise((resolve, reject) => {
        $axios
          .$get(`get-all-case-studies?service=${service}`)
          .then((response) => {
            commit(SET_CASES_STUDY, response.data)
            resolve(response.data)
          })
      })
    },
  },
}
