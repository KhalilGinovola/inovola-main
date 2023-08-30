<template>
  <Content />
</template>

<script>
import Content from "~/components/devTeamService/content.vue"
import {
  GET_DEVTEAM,
  GET_CASES_STUDY,
  GET_HOME_INITIAL_DATA,
} from "~/utils/storeActions"

export default {
  name: "DevTeamAsService",
  components: {
    Content,
  },
  async fetch() {
    await this.$store.dispatch("services/" + GET_DEVTEAM)
    await this.$store.dispatch(
      "successStories/" + GET_CASES_STUDY,
      "dev-team-as-service"
    )
    await this.$store.dispatch("home/" + GET_HOME_INITIAL_DATA)
  },
  head() {
    return {
      title: "Inovola - Development Team as a service",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We believe that we will make a difference through a combination of smart planning, design thinking approach, and using the latest technologies.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, Empower Your Business, smart planning, design thinking approach, DevTeam as a Service, latest technologies, scaling simple, on-demand, team model, efficiently, skills, Outsourcing, Backend Development, Frontend Development, Mobile Development, E-Commerce, inspiration , agile, cloud-based, performance management, WooCommerce, Magento, Shopify, Android (Java / Kotlin), IOS, React Native, Flutter, Ionic, ReactJs, VueJs, Angular, PHP, NodeJs, .Net, Elixir, Python, Drupal, Java",
        },
      ],
    }
  },
}
</script>
