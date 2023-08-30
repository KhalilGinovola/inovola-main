<template>
  <div class="pt-[6.25rem]">
    <service-header></service-header>
    <scaling-simple></scaling-simple>
    <OurProcess />
    <SuccessStory
      :success-stories="caseStudy"
      :success-description="$t('hrService.caseStudyHead')"
    />
    <section class="bg-offWhite pb-20 pt-[72px]">
      <OtherServices class="container" />
    </section>
    <div class="container my-[5rem]">
      <news-letters
        :heading="$t('shared.JoinUs')"
        :description="$t('shared.newsLetterSing')"
      ></news-letters>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import ScalingSimple from "./scalingSimple.vue"
import serviceHeader from "./serviceHeader.vue"
import OtherServices from "./otherServices.vue"
import NewsLetters from "~/components/shared/NewsLetters.vue"
import SuccessStory from "~/components/servcies/story.vue"
import OurProcess from "~/components/hrService/ourProcess.vue"

export default {
  name: "HrService",

  components: {
    serviceHeader,
    ScalingSimple,
    SuccessStory,
    NewsLetters,
    OurProcess,
    OtherServices,
  },
  computed: {
    ...mapState("successStories", {
      caseStudy: (state) => state.caseStudy.filter((_, index) => index < 4),
    }),
  },
}
</script>
