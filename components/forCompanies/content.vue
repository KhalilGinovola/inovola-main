<template>
  <div class="pt-[100px] overflow-hidden">
    <Landing></Landing>
    <div class="container">
      <MarketingAgency />
      <div class="mb-[4rem]">
        <OurServices />
      </div>
    </div>
    <MissionVision />
    <div class="container">
      <ReviewSlider />
      <news-letters
        :heading="$t('shared.JoinUs')"
        :description="$t('shared.newsLetterSing')"
        class="mb-20"
      />
    </div>
  </div>
</template>

<script>
import Landing from "./landing.vue"
import MarketingAgency from "./marketingAgency.vue"
import ReviewSlider from "./reviewSlider.vue"
import MissionVision from "./missionVision.vue"
import NewsLetters from "~/components/shared/NewsLetters.vue"
import OurServices from "~/components/home/ourServieceHome.vue"

export default {
  name: "ForCompaniesContent",
  components: {
    Landing,
    MarketingAgency,
    OurServices,
    MissionVision,
    ReviewSlider,
    NewsLetters,
  },
}
</script>
