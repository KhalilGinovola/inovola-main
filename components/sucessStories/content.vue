<template>
  <div class="pt-[6.25rem]">
    <Skeleton v-if="storiesLoading"></Skeleton>
    <success-header></success-header>
    <stories-success @get-data="getData"></stories-success>
    <div class="container">
      <news-letters
        :heading="$t('shared.JoinUs')"
        :description="$t('shared.newsLetterSing')"
        class="mb-20"
      />
    </div>
  </div>
</template>
<script>
import SuccessHeader from "./successStoriesHeader.vue"
import StoriesSuccess from "./storiesSuccess.vue"
import Skeleton from "~/components/shared/generalSkeleton.vue"
import NewsLetters from "~/components/shared/NewsLetters.vue"
export default {
  name: "SuccessContent",
  components: {
    SuccessHeader,
    StoriesSuccess,
    Skeleton,
    NewsLetters,
  },
  props: {
    storiesLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getData(pageNumber) {
      this.$emit("get-data", pageNumber)
    },
  },
}
</script>
