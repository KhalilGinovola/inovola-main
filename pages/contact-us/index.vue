<template>
  <div class="contact-us-page">
    <Content />
  </div>
</template>

<script>
import Content from "~/components/contactUs/content.vue"
import { GET_SOCIAL_LINKS } from "~/utils/storeActions"

export default {
  name: "HomePage",
  components: {
    Content,
  },
  async fetch() {
    await this.$store.dispatch("home/" + GET_SOCIAL_LINKS)
  },
  head() {
    return {
      title: "Inovola - contact us",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Let’s get in touch",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, zoom call, Our Locations,Dubai Silicon Oasis, Greater London, United Kingdom, Gamal Salem, Dokki, info@inovola.co.uk,software development, Innovation, Integrity, Agility, values-driven, FLOURISH, EXPAND, count on us, innovate, talents, leading company, development solutions, word-of-mouth, high-performing teams, Inovola community, Energizing Community, Stability, Development, Software, remote developers, Outsourcing, remote",
        },
      ],
    }
  },
}
</script>
