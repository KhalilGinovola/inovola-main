<template>
  <div v-if="blog">
    <SingleSkeleton v-if="blogLoading" />

    <div v-else class="blogs pt-[100px] pb-16 bg-white min-h-[604px]">
      <blog-heading />

      <div class="container">
        <div class="flex justify-center">
          <img
            class="blog-header__blog-img w-full max-w-[1170px] max-h-[520px] rounded-lg object-contain mb-8"
            :src="
              blog.photo
                ? blog.photo
                : require('~/assets/images/backgrounds/inovola-video.png')
            "
            loading="lazy"
            alt="blog image"
          />
        </div>

        <div
          class="blog-content mb-12 break-words"
          v-html="blog.description"
        ></div>

        <Divider />
        <social-media-sharing class="my-8" />
        <Divider class="mb-16" />

        <related-blogs v-if="isRelatedBlogsViewed" class="mb-20" />

        <news-letters
          :heading="$t('shared.JoinUs')"
          :description="$t('shared.newsLetterSing')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import NewsLetters from "../shared/NewsLetters.vue"
import BlogHeading from "./heading.vue"
import SocialMediaSharing from "./socialMediaSharing.vue"
import RelatedBlogs from "./relatedBlogs.vue"
import SingleSkeleton from "~/components/shared/singleSkeleton.vue"

export default {
  name: "BlogContent",
  components: {
    NewsLetters,
    BlogHeading,
    SocialMediaSharing,
    RelatedBlogs,
    SingleSkeleton,
  },
  props: {
    blogLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState("blogs", {
      blog: (state) => state.blog,
    }),
    isRelatedBlogsViewed() {
      return this.blog?.relatedBlogs?.length
    },
  },
}
</script>
