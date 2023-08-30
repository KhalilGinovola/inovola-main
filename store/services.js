import {
  SET_DIGITAL_TRANSFORMATION,
  SET_DEVTEAM,
  SET_HR_AS_SERVICE,
} from "~/utils/storeMutations"
import {
  GET_DIGITAL_TRANSFORMATION,
  GET_DEVTEAM,
  GET_HR_AS_SERVICE,
} from "~/utils/storeActions"
import { i18n } from "~/utils/i18n"

// import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    digitalTransform: {},
    devTeam: {},
    hrAsService: {},
  }),
  getters: {},
  mutations: {
    [SET_DIGITAL_TRANSFORMATION]: (state, digitalTransform) => {
      state.digitalTransform = { ...digitalTransform }
    },
    [SET_DEVTEAM]: (state, devTeam) => {
      state.devTeam = { ...devTeam }
    },
    [SET_HR_AS_SERVICE]: (state, hrAsService) => {
      state.hrAsService = { ...hrAsService }
    },
  },
  actions: {
    [GET_DIGITAL_TRANSFORMATION]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const digitalTransform = {
          id: "digital-transformation",
          title: i18n.t("footer.digitalTransformation"),
          digitalProcess: [
            {
              id: "01",
              title: i18n.t("digitalTransformation.IdeateValidate"),
              description: i18n.t("digitalTransformation.IdeateValidateDesc"),
            },
            {
              id: "02",
              title: i18n.t("digitalTransformation.DesignPrototype"),
              description: i18n.t("digitalTransformation.DesignPrototypeDesc"),
            },
            {
              id: "03",
              title: i18n.t("digitalTransformation.Development"),
              description: i18n.t("digitalTransformation.DevelopmentDesc"),
            },
            {
              id: "04",
              title: i18n.t("digitalTransformation.TestAssess"),
              description: i18n.t("digitalTransformation.TestAssessDesc"),
            },
            {
              id: "05",
              title: i18n.t("digitalTransformation.DeployAnalyze"),
              description: i18n.t("digitalTransformation.DeployAnalyzeDesc"),
            },
            {
              id: "06",
              title: i18n.t("digitalTransformation.ScaleSupport"),
              description: i18n.t("digitalTransformation.ScaleSupportDesc"),
            },
          ],
        }
        commit(SET_DIGITAL_TRANSFORMATION, digitalTransform)
        resolve(digitalTransform)

        //   return new Promise((resolve, reject) => {
        //     $axios.$get(`get-all-blogs?page=${page}`).then((response) => {
        //       commit(SET_DIGITAL_TRANSFORMATION, response.data)
        //       resolve(response.data)
        //     })
      })
    },
    [GET_DEVTEAM]: ({ commit, state }, id) => {
      return new Promise((resolve, reject) => {
        const devTeam = {
          id: "dev-team-as-service",
          title: i18n.t("footer.devTeamService"),
          digitalProcess: [
            {
              id: "01",
              title: i18n.t("devTeam.IdeateValidate"),
              description: i18n.t("devTeam.IdeateValidateDesc"),
            },
            {
              id: "02",
              title: i18n.t("services.FindMatchedTalents"),
              description: i18n.t("devTeam.FindMatchedTalentsDesc"),
            },
            {
              id: "03",
              title: i18n.t("services.KickstartSquad"),
              description: i18n.t("devTeam.KickstartSquadDesc"),
            },
          ],
          backendDevelopment: {
            languages: [
              {
                id: 1,
                name: "PHP Laravel",
                img: "https://i.ibb.co/z8pZMx6/php.png",
              },
              {
                id: 2,
                name: "PHP Symfony",
                img: "https://i.ibb.co/z8pZMx6/php.png",
              },
              {
                id: 3,
                name: "NodeJs",
                img: "https://i.ibb.co/nmWDkx9/node-JS.png",
              },
              {
                id: 4,
                name: ".Net",
                img: "",
              },
              {
                id: 5,
                name: "Elixir",
                img: "https://i.ibb.co/jZ1LgjC/elixir.png",
              },
              {
                id: 6,
                name: "Python Django",
                img: "https://i.ibb.co/YNzrbCC/django.png",
              },
              {
                id: 7,
                name: "Python Flask  ",
                img: "https://i.ibb.co/YNzrbCC/django.png",
              },
              {
                id: 8,
                name: "Drupal",
                img: "https://i.ibb.co/2WCq1N0/Drupal.png",
              },
              {
                id: 9,
                name: "Java",
                img: "",
              },
            ],
          },
          frontendDevelopment: {
            languages: [
              {
                id: 1,
                name: "ReactJs",
                img: "https://i.ibb.co/9N42hHs/ReactJs.png",
              },
              {
                id: 2,
                name: "VueJs",
                img: "https://i.ibb.co/hRGYCCd/VueJs.png",
              },
              {
                id: 3,
                name: "Angular",
                img: "https://i.ibb.co/k3DrG9s/Angular.png",
              },
            ],
          },
          mobileDevelopment: {
            languages: [
              {
                id: 1,
                name: "Android (Java / Kotlin)",
                img: "https://i.ibb.co/mS9p05N/Kotlin.png",
              },
              {
                id: 2,
                name: " IOS (Swift)",
                img: "https://i.ibb.co/3Cct4YX/IOS-Swift.png",
              },
              {
                id: 3,
                name: "React Native",
                img: "https://i.ibb.co/9N42hHs/ReactJs.png",
              },
              {
                id: 4,
                name: "Flutter",
                img: "https://i.ibb.co/hFXJ7Hq/Flutter.png",
              },
              {
                id: 5,
                name: "Ionic",
                img: "",
              },
            ],
          },
          ECommerce: {
            languages: [
              {
                id: 1,
                name: "WooCommerce",
                img: "https://i.ibb.co/jWx23KT/Woo-Commerce.png",
              },
              {
                id: 2,
                name: "Magento",
                img: "https://i.ibb.co/wKP5PWc/Magento.png",
              },
              {
                id: 3,
                name: "Shopify",
                img: "https://i.ibb.co/DLk9ttB/Shopify.png",
              },
            ],
          },
        }

        commit(SET_DEVTEAM, devTeam)
        resolve(devTeam)

        //   return new Promise((resolve, reject) => {
        //     $axios.$get(`get-all-blogs?page=${page}`).then((response) => {
        //       commit(SET_DEVTEAM, response.data)
        //       resolve(response.data)
        //     })
      })
    },
    [GET_HR_AS_SERVICE]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const hrAsService = {
          id: "hr-as-service",
          title: i18n.t("footer.hRService"),
          digitalProcess: [
            {
              id: "01",
              title: i18n.t("hrService.Planning"),
              description: i18n.t("hrService.PlanningDesc"),
            },
            {
              id: "02",
              title: i18n.t("hrService.Validating"),
              description: i18n.t("hrService.ValidatingDesc"),
            },
            {
              id: "03",
              title: i18n.t("hrService.DevelopingAndImplementing"),
              title2: i18n.t("hrService.DevelopingAndImplementing2"),
              description: i18n.t("hrService.DevelopingAndImplementingDesc"),
            },
          ],
        }

        commit(SET_HR_AS_SERVICE, hrAsService)
        resolve(hrAsService)

        //   return new Promise((resolve, reject) => {
        //     $axios.$get(`get-all-blogs?page=${page}`).then((response) => {
        //       commit(SET_HR_AS_SERVICE, response.data)
        //       resolve(response.data)
        //     })
      })
    },
  },
}
