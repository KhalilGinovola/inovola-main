<template>
  <div class="blogs pt-[100px] pb-16 bg-offWhite min-h-[604px]">
    <BlogsSkeleton v-if="blogsLoading" />
    <div v-else class="container">
      <div class="text-center mt-10 md:mt-20 mb-16">
        <h1 class="text-text-5 sm:leading-7 text-[44px]">
          {{ $t("blogs.our") }}
          <span
            class="bg-[url('~/assets/images/backgrounds/blogs-yellow-bg.svg')] bg-no-repeat bg-contain bg-bottom"
          >
            {{ $t("blogs.blogs") }}
          </span>
        </h1>
        <p class="font-medium text-base text-text-11 mt-0 leading-7">
          {{ $t("blogs.blogsHead") }}
        </p>
      </div>

      <first-blog v-if="blogs.length" :blog="firstBlog" />

      <div class="flex flex-wrap">
        <div
          v-for="blog in remainingBlogs"
          :key="blog.id"
          class="w-full md:w-1/2 lg:w-1/3 pe-8"
        >
          <Blog :blog="blog" />
        </div>
      </div>

      <Paginator
        v-if="totalBlogsCount > 10"
        class="mt-4 mb-24"
        :rows="blogsPerPage"
        :total-records="totalBlogsCount"
        :page-link-size="pageLinkSize"
        @page="handleChangePage($event)"
      ></Paginator>
      <news-letters
        :heading="$t('shared.JoinUs')"
        :description="$t('shared.newsLetterSing')"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import BlogsSkeleton from "../shared/blogsSkeleton.vue"
import NewsLetters from "../shared/NewsLetters.vue"
import FirstBlog from "./FirstBlog.vue"
import Blog from "./blog.vue"
import { GET_BLOGS } from "~/utils/storeActions"

export default {
  name: "BlogsContent",
  components: {
    FirstBlog,
    Blog,
    NewsLetters,
    BlogsSkeleton,
  },
  data() {
    return {
      blogsLoading: false,
    }
  },
  computed: {
    ...mapState("blogs", {
      blogs: (state) => state.blogs,
      firstBlog: (state) =>
        state.blogs.length
          ? state.blogs.filter((_, index) => index === 0)[0]
          : null,
      remainingBlogs: (state) => state.blogs.filter((_, index) => index !== 0),
      totalBlogsCount: (state) => state.totalBlogsCount,
      blogsPerPage: (state) => state.blogsPerPage,
    }),
    pageLinkSize: () => {
      if (process.client) {
        return window.innerWidth < 350 ? 2 : window.innerWidth < 420 ? 3 : 5
      }
      return 5
    },
  },
  methods: {
    handleChangePage(event) {
      this.blogsLoading = true
      this.$store.dispatch("blogs/" + GET_BLOGS, event.page + 1)
      this.blogsLoading = false
    },
  },
}
</script>
