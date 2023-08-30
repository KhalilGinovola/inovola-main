import { SET_BLOGS, SET_BLOG } from "~/utils/storeMutations"
import { GET_BLOGS, GET_BLOG } from "~/utils/storeActions"

import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    blogs: [],
    totalBlogsCount: 1,
    blogsPerPage: 10,
    blog: {},
  }),
  getters: {},
  mutations: {
    [SET_BLOGS]: (state, blogs) => {
      state.blogs = [...blogs.data]
      state.totalBlogsCount = blogs.total
    },
    [SET_BLOG]: (state, blog) => {
      state.blog = { ...blog }
    },
  },
  actions: {
    [GET_BLOGS]: ({ commit, state }, page) => {
      return new Promise((resolve, reject) => {
        $axios.$get(`get-all-blogs?page=${page}`).then((response) => {
          commit(SET_BLOGS, response.data)
          resolve(response.data)
        })
      })
    },
    [GET_BLOG]: ({ commit, state }, id) => {
      return new Promise((resolve, reject) => {
        $axios.$get(`blog-info/${id}`).then((response) => {
          commit(SET_BLOG, {
            ...response.data.blog,
            related_blog: response.data.related_blog,
          })
          resolve(response.data)
        })
      })
    },
  },
}
