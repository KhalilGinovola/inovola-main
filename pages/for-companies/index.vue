<template>
  <div>
    <Content />
  </div>
</template>

<script>
import Content from "~/components/forCompanies/content.vue"
import { GET_HOME_INITIAL_DATA, GET_CLIENT_REVIEWS } from "~/utils/storeActions"
export default {
  name: "ForCompanies",
  components: {
    Content,
  },
  async fetch() {
    await this.$store.dispatch("home/" + GET_HOME_INITIAL_DATA)
    await this.$store.dispatch("successStories/" + GET_CLIENT_REVIEWS)
  },
  head() {
    return {
      title: "Inovola - For Companies",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Ready to build a unique experience",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, software development, Innovation, Integrity, Agility, values-driven, FLOURISH, EXPAND, count on us, innovate, talents, leading company, development solutions, word-of-mouth, high-performing teams, Inovola community, Energizing Community, Stability, Development, Software, remote developers, Outsourcing, remote",
        },
      ],
    }
  },
}
</script>
