<template>
  <div class="pt-[100px]">
    <Heading />
    <modern-solution></modern-solution>
    <OurProcess />
    <SuccessStory
      :success-stories="caseStudy"
      :success-description="$t('digitalTransformation.caseStudyHead')"
    />
    <section class="bg-offWhite pb-20 pt-[72px]">
      <OtherServices class="container" />
    </section>
    <div class="container">
      <news-letters
        :heading="$t('shared.JoinUs')"
        :description="$t('shared.newsLetterSing')"
        class="mb-20 mt-24"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import OtherServices from "./otherServices.vue"
import ModernSolution from "~/components/digitalTransformation/modernSolution.vue"
import OurProcess from "~/components/digitalTransformation/ourProcess.vue"
import SuccessStory from "~/components/servcies/story.vue"
import NewsLetters from "~/components/shared/NewsLetters.vue"
import Heading from "~/components/digitalTransformation/heading.vue"

export default {
  name: "ContentService",
  components: {
    Heading,
    ModernSolution,
    OurProcess,
    SuccessStory,
    NewsLetters,
    OtherServices,
  },
  computed: {
    ...mapState("successStories", {
      caseStudy: (state) => state.caseStudy.filter((_, index) => index < 4),
    }),
  },
}
</script>
