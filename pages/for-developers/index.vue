<template>
  <div class="py-0 md:pt-8">
    <div class="contact-us-page">
      <Content />
    </div>
  </div>
</template>

<script>
import Content from "~/components/forDevelopers/content.vue"
import { GET_TEAMS } from "~/utils/storeActions"
export default {
  name: "ContantPage",
  components: {
    Content,
  },
  async fetch() {
    await this.$store.dispatch("forDeveloper/" + GET_TEAMS)
  },
  head() {
    return {
      title: "Inovola - For Developers",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Join our community and get remote jobs.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, Join Us, Job Offers, high-performing teams, Inovola community, Full-time, Part time, long-term, Energizing Community, Glassdoor, Stability, Short term, Development, Software, remote developers, Outsourcing, remote, Dev Team",
        },
      ],
    }
  },
}
</script>
