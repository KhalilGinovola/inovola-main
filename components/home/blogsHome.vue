<template>
  <div v-if="featuredBlogs.length">
    <div
      class="flex justify-between flex-col md:flex-row mt-14"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      <h2
        class="text-text-5 font-bold leading-[3.25rem] sm:leading-[3.25rem] text-[1.75rem] sm:text-[2.75rem] m-0"
      >
        {{ $t("home.OurBlogs") }}
      </h2>
      <nuxt-link
        class="self-end md:self-center no-underline border-none text-primary font-semibold leading-6 text-sm hidden md:block"
        :to="localePath('/blogs')"
        >{{ $t("shared.ShowMoreBlogs") }}
        <img
          :src="
            hovered
              ? require('~/assets/images/icons/arrow-xl.svg')
              : require('~/assets/images/icons/leftArrow.svg')
          "
          class="align-middle"
          :class="isRTL ? 'rotate-180' : ''"
          alt="leftArrow"
        />
      </nuxt-link>
    </div>
    <div class="flex flex-wrap pt-[30px]">
      <div
        v-for="(blog, index) in featuredBlogs"
        :key="blog.id"
        class="w-full md:w-1/2 lg:w-1/3 pe-8"
      >
        <Blog :blog="blog" :index="index" />
      </div>
    </div>
    <div class="flex justify-center md:hidden mb-[88px]">
      <Button
        class="primary-outlined p-button-outlined mb-5 font-semibold text-base leading-5 text-primary"
        aria-label="Button"
        @click="openBlogsPage"
      >
        {{ $t("shared.ShowMoreBlogs") }}
      </Button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Blog from "~/components/blogs/blog.vue"

export default {
  name: "BlogsHome",
  components: {
    Blog,
  },
  data() {
    return {
      hovered: false,
    }
  },
  computed: {
    ...mapState("blogs", {
      featuredBlogs: (state) => state.blogs.filter((_, index) => index < 3),
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    openBlogsPage() {
      this.$router.push(this.localePath("/blogs"))
    },
  },
}
</script>
