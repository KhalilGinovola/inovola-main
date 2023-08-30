<template>
  <div>
    <Content :stories-loading="storiesLoading" @get-data="getData"></Content>
  </div>
</template>

<script>
import Content from "~/components/sucessStories/content.vue"
import { GET_SUCCESS_STORIES } from "~/utils/storeActions"
export default {
  name: "SuccessStories",
  components: {
    Content,
  },
  data() {
    return {
      storiesLoading: false,
    }
  },
  async fetch() {
    this.storiesLoading = true
    await this.$store.dispatch("successStories/" + GET_SUCCESS_STORIES, 1)
    this.storiesLoading = false
  },
  head() {
    return {
      title: "Inovola - Success stories",
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
            "Software Development Partner, Development, Software, Recruitment, Remote jobs, Recruitment, Hiring, Front end developer, remote developers, Outsourcing, remote,  full-stack developer, jobs, backend developer, backend, frontend, scrum master, team lead",
        },
      ],
    }
  },
  methods: {
    async nextPage(pageNumber) {
      await this.$store.dispatch(
        "successStories/" + GET_SUCCESS_STORIES,
        pageNumber
      )
    },
    getData(pageNumber) {
      this.nextPage(pageNumber)
    },
  },
}
</script>
