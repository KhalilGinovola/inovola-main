<template>
  <blogs-content />
</template>

<script>
import BlogsContent from "~/components/blogs/content"
import { GET_BLOGS } from "~/utils/storeActions"
export default {
  name: "BlogsPage",
  components: { BlogsContent },
  async fetch() {
    await this.$store.dispatch("blogs/" + GET_BLOGS, 1)
  },
  head() {
    return {
      title: "Inovola - Blogs",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn about the latest trends, news, and best practices, to improve your development knowledge.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, communicate with your developers the right way, Best Cloud Software For You, Elixir Technology,  Saved Nearly 50% of Its Core Team, Outsourcing Vs Team Building, Determine Your Mobile Application,  Empower Your Business, news, Blogs, Tech Terms For Non-Tech, Agile Scrum Methodology, involving, How to hire a remote developer, strategic, best practices, growth, Outsourcing, global market, inspiration , agile, business, performance management, ecosystem",
        },
      ],
    }
  },
}
</script>
