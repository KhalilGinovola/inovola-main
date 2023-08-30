import {
  SET_SOCIAL_LINKS,
  COMMON_SUCCESS,
  CLEAR_STATUS,
  SET_HOME_INFO,
  SET_COUNTERS,
  SET_SERVICES,
  SET_PARTNER,
} from "~/utils/storeMutations"

import {
  GET_HOME_INITIAL_DATA,
  GET_SOCIAL_LINKS,
  SUBSCRIBE_NEWSLETTER,
  GET_HOME_INFO,
  GET_COUNTERS,
  GET_SERVICES,
  GET_PARTNER,
  GET_BLOGS,
} from "~/utils/storeActions"
import { i18n } from "~/utils/i18n"
import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    socialLinks: {
      facebook: "",
      linkedin: "",
    },
    counters: {
      years_of_exprience: "0",
      project_completed: "0",
      happy_user: "0",
    },
    homeInfo: [],
    services: [],
    partners: [],
  }),
  getters: {},
  mutations: {
    [SET_SOCIAL_LINKS]: (state, data) => {
      state.socialLinks = { ...data }
    },
    [SET_HOME_INFO]: (state, homeInfo) => {
      state.homeInfo = homeInfo.homeInfo
    },
    [SET_COUNTERS]: (state, data) => {
      state.counters = data.data
    },
    [SET_SERVICES]: (state, services) => {
      state.services = services
    },
    [SET_PARTNER]: (state, partners) => {
      state.partners = partners
    },
  },
  actions: {
    [GET_SOCIAL_LINKS]: ({ commit }) => {
      return new Promise((resolve) => {
        const socialLinks = {
          facebook: "https://www.facebook.com/inovola.co",
          linkedin: "https://www.linkedin.com/company/inovola/",
        }
        commit(SET_SOCIAL_LINKS, socialLinks)
        resolve(socialLinks)

        // $axios.$get("get-social-links").then((response) => {
        //   commit(SET_SOCIAL_LINKS, response.data)
        //   resolve(response.data)
        // })
      })
    },
    [SUBSCRIBE_NEWSLETTER]: ({ commit }, email) => {
      return new Promise((resolve) => {
        $axios.$post("newsletter", { email }).then(() => {
          commit(
            "common/" + COMMON_SUCCESS,
            {
              type: "post",
              message: "Subscribed successfully",
            },
            { root: true }
          )

          setTimeout(() => {
            commit("common/" + CLEAR_STATUS, null, { root: true })
          }, 3000)
          resolve()
        })
      })
    },
    [GET_HOME_INFO]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const homeInfo = [
          {
            id: 1,
            image: "https://i.postimg.cc/MHx93kyB/Rectangle-6067.png",
            title: "headerHeader",
            desc: "headerSubheader",
            desc2: "headerSubheader2",
          },
          {
            id: 2,
            image: "https://i.postimg.cc/MHx93kyB/Rectangle-6067.png",
            title: "headerHeader",
            desc: "headerSubheader",
            desc2: "headerSubheader2",
          },
        ]
        commit(SET_HOME_INFO, {
          homeInfo,
        })
        resolve(homeInfo)

        // $axios.$get("homeInfo").then((response) => {
        //   commit(SET_HOME_INFO, response.data)
        //   resolve(response.data)
        // })
      })
    },
    [GET_COUNTERS]: ({ commit }) => {
      return new Promise((resolve) => {
        const data = {
          years_of_exprience: "6",
          project_completed: "250",
          happy_user: "100",
        }
        commit(SET_COUNTERS, {
          data,
        })
        resolve(data)

        // $axios.$get("get-counters").then((response) => {
        //   commit(SET_COUNTERS, response.data)
        //   resolve(response.data)
        // })
      })
    },
    [GET_SERVICES]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const services = [
          {
            id: 1,
            image: "DigitalTransformation",
            title: i18n.t("footer.digitalTransformation"),
            created_at: "Wed Oct 19 2022 12:52:10 GMT+0200",
            data: i18n.t("services.buildUnique"),
            link: "digital-transformation",
          },
          {
            id: 2,
            image: "devTeam",
            title: i18n.t("footer.devTeamService"),
            created_at: "Wed Oct 19 2022 12:52:10 GMT+0200",
            data: i18n.t("services.startedTopTalents"),
            link: "dev-team-as-service",
          },
          {
            id: 3,
            image: "HRasServiece",
            title: i18n.t("footer.hRService"),
            created_at: "Wed Oct 19 2022 12:52:10 GMT+0200",
            data: i18n.t("services.holdArm"),
            link: "hr-as-service",
          },
        ]
        commit(SET_SERVICES, services)
        resolve(services)

        // $axios.$get(`services`).then((response) => {
        //   commit(SET_SERVICES, response.data)
        //   resolve(response.data)
        // })
      })
    },
    [GET_PARTNER]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const partners = [
          {
            id: 1,
            image: "azm",
            title: "azm",
          },
          {
            id: 2,
            image: "SiTechLogo",
            title: "SiTechLogo",
          },
          {
            id: 3,
            image: "chopcast",
            title: "chopcast",
          },
          {
            id: 4,
            image: "pickdevs",
            title: "pickdevs",
          },

          {
            id: 5,
            image: "Realsoft",
            title: "Realsoft",
          },
          {
            id: 6,
            image: "AmmanDynamics",
            title: "AmmanDynamics",
          },
          {
            id: 7,
            image: "Tahara",
            title: "Tahara",
          },
          {
            id: 8,
            image: "Foodics",
            title: "Foodics",
          },
          {
            id: 9,
            image: "GrabbdInc",
            title: "GrabbdInc",
          },
          {
            id: 10,
            image: "Eshtarek",
            title: "Eshtarek",
          },
          {
            id: 11,
            image: "SamaNew",
            title: "SamaNew",
          },
          {
            id: 12,
            image: "Exceed",
            title: "Exceed",
          },
          {
            id: 13,
            image: "ZeroOneSolutions",
            title: "ZeroOneSolutions",
          },
          {
            id: 14,
            image: "Labs247",
            title: "Labs247",
          },
          {
            id: 15,
            image: "ZID",
            title: "ZID",
          },
          {
            id: 16,
            image: "MozonTechnologies",
            title: "MozonTechnologies",
          },
          {
            id: 17,
            image: "Scaleup",
            title: "Scaleup",
          },
          {
            id: 18,
            image: "SiTech",
            title: "SiTech",
          },
          {
            id: 19,
            image: "Trivers",
            title: "Trivers",
          },
          {
            id: 20,
            image: "QBS",
            title: "QBS",
          },
        ]
        commit(SET_PARTNER, {
          partners,
        })
        resolve(partners)

        // $axios.$get("partners").then((response) => {
        //   commit(SET_PARTNER, response.data)
        //   resolve(response.data)
        // })
      })
    },
    [GET_HOME_INITIAL_DATA]: ({ dispatch }) => {
      return new Promise((resolve) => {
        Promise.all([
          dispatch(GET_PARTNER),
          dispatch(GET_SERVICES),
          dispatch(GET_COUNTERS),
          dispatch(GET_HOME_INFO),
          dispatch(GET_SOCIAL_LINKS),
          dispatch("blogs/" + GET_BLOGS, null, { root: true }),
        ]).then(() => {
          resolve()
        })
      })
    },
  },
}
