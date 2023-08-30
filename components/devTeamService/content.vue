<template>
  <div class="pt-[100px] overflow-hidden">
    <service-header></service-header>
    <ScalingSimple />
    <DevelopmentPakages />
    <OurProcess />
    <SuccessStory
      :success-stories="caseStudy"
      :success-description="$t('devTeam.successDescription')"
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
import ServiceHeader from "./serviceHeader.vue"
import OtherServices from "./otherServices.vue"
import ScalingSimple from "~/components/devTeamService/scalingSimple.vue"
import DevelopmentPakages from "~/components/devTeamService/developmentPakages.vue"
import OurProcess from "~/components/devTeamService/ourProcess.vue"
import SuccessStory from "~/components/servcies/story.vue"
import NewsLetters from "~/components/shared/NewsLetters.vue"

export default {
  name: "DevTeamContent",
  components: {
    ServiceHeader,
    ScalingSimple,
    DevelopmentPakages,
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
