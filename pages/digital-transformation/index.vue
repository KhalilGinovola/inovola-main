<template>
  <Content></Content>
</template>

<script>
import Content from "~/components/digitalTransformation/content.vue"
import {
  GET_DIGITAL_TRANSFORMATION,
  GET_CASES_STUDY,
  GET_HOME_INITIAL_DATA,
} from "~/utils/storeActions"

export default {
  name: "DigitalTransformation",
  components: {
    Content,
  },
  async fetch() {
    await this.$store.dispatch("services/" + GET_DIGITAL_TRANSFORMATION)
    await this.$store.dispatch(
      "successStories/" + GET_CASES_STUDY,
      "digital-transformation"
    )
    await this.$store.dispatch("home/" + GET_HOME_INITIAL_DATA)
  },
  head() {
    return {
      title: "Inovola - Digital transformation",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "It is an essential bridge between the business of today and the business of tomorrow. We will help you thrive in the transformative age by experimenting with new ideas to seize opportunities and scale successes.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, Empower Your Business, expertise, scalability, Digital transformation, Agile Scrum Methodology, involving, organization, strategic, strategic approach, growth, Outsourcing, global market, inspiration , agile, business, performance management, ecosystem",
        },
      ],
    }
  },
}
</script>
