<template>
  <div>
    <SingleSkeleton v-if="storyLoading" />

    <div v-else class="pt-[100px] pb-16 bg-secondary min-h-[604px]">
      <Heading
        :title="successStory.title"
        :short-description="successStory.short_description"
      />
      <div class="container">
        <div class="flex justify-center">
          <img
            class="w-full max-w-[1170px] max-h-[520px] rounded-lg object-contain mb-8"
            :src="
              successStory.photo
                ? successStory.photo
                : require('~/assets/images/backgrounds/inovola-video.png')
            "
            loading="lazy"
            alt="case study image"
          />
        </div>

        <div
          class="case-study mb-12 break-words"
          v-html="successStory.description"
        ></div>

        <Divider />
        <social-media-sharing class="my-8" />
        <Divider class="mb-16" />
        <CustomerReview
          v-if="successStory.client_review"
          :client-review="successStory.client_review"
        />
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
import SocialMediaSharing from "./socialMediaSharing.vue"
import Heading from "./heading.vue"
import CustomerReview from "./customerReview.vue"
import NewsLetters from "~/components/shared/NewsLetters.vue"
import SingleSkeleton from "~/components/shared/singleSkeleton.vue"
export default {
  name: "SuccessStoryContent",
  components: {
    NewsLetters,
    SocialMediaSharing,
    Heading,
    SingleSkeleton,
    CustomerReview,
  },
  props: {
    storyLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState("successStories", {
      successStory: (state) => state.successStory,
    }),
  },
}
</script>
