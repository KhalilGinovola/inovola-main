<template>
  <div>
    <blog-content :blog-loading="blogLoading" />
  </div>
</template>

<script>
import { mapState } from "vuex"
import BlogContent from "~/components/blogPage/content"
import { GET_BLOG } from "~/utils/storeActions"

export default {
  name: "BlogPage",
  components: { BlogContent },
  data() {
    return {
      blogLoading: false,
    }
  },
  async fetch() {
    this.blogLoading = true
    await this.$store.dispatch("blogs/" + GET_BLOG, this.$route.params.id)
    this.blogLoading = false
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blog.meta_description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.blog.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.blog?.meta_keyword?.join(", "),
        },
        {
          hid: "title",
          name: "title",
          content: this.blog.title,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.blog.title,
        },
        {
          hid: "author",
          name: "author",
          content: this.blog?.author?.name,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: process.client
            ? `${window.location.origin}/blogs/${this.$route.params.id}`
            : "",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.blog.photo,
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
    ...mapState("blogs", {
      blog: (state) => state.blog,
    }),
  },
}
</script>
