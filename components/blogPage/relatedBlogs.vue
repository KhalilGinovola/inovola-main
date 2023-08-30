<template>
  <div>
    <h2 class="mt-0 mb-12 text-[44px] text-text text-center">
      {{ $t("blogs.blogsRelated") }}
    </h2>
    <div class="flex flex-wrap">
      <div
        v-for="relatedBlog in blog.relatedBlogs"
        :key="relatedBlog.id"
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pe-8"
      >
        <Blog :blog="relatedBlog" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Blog from "~/components/blogs/blog.vue"

export default {
  name: "RelatedBlogs",
  components: {
    Blog,
  },
  computed: {
    ...mapState("blogs", {
      blog: (state) => state.blog,
    }),
  },
}
</script>
