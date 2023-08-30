<template>
  <div>
    <Content :story-loading="storyLoading" />
  </div>
</template>

<script>
import { mapState } from "vuex"
import Content from "~/components/successStoryPage/content.vue"
import { GET_SUCCESS_STORY } from "~/utils/storeActions"
export default {
  name: "SuccessStoryDetails",
  components: {
    Content,
  },
  data() {
    return {
      storyLoading: false,
    }
  },
  async fetch() {
    this.storyLoading = true
    await this.$store.dispatch(
      "successStories/" + GET_SUCCESS_STORY,
      this.$route.params.id
    )
    this.storyLoading = false
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.successStory.meta_description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.successStory.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.successStory?.meta_keyword?.join(", "),
        },
        {
          hid: "title",
          name: "title",
          content: this.successStory.title,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.successStory.title,
        },
        {
          hid: "author",
          name: "author",
          content: this.successStory?.author?.name,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: process.client
            ? `${window.location.origin}/success-stories/${this.$route.params.id}`
            : "",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.successStory.photo,
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "article",
        },
      ],
    }
  },
  computed: {
    ...mapState("successStories", {
      successStory: (state) => state.successStory,
    }),
  },
}
</script>
