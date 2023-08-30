<template>
  <div class="py-0 md:pt-8">
    <join-us></join-us>
    <job-offers></job-offers>
    <community-developers></community-developers>
    <developers-reviews></developers-reviews>
    <our-team></our-team>
    <div class="container">
      <NewsLetters
        :heading="$t('shared.JoinUs')"
        :description="$t('shared.newsLetterSing')"
        class="mt-24 mb-20"
      />
    </div>
  </div>
</template>

<script>
import NewsLetters from "~/components/shared/NewsLetters.vue"
import JobOffers from "~/components/forDevelopers/jobOffers.vue"
import CommunityDevelopers from "~/components/forDevelopers/communityDevelopers.vue"
import DevelopersReviews from "~/components/forDevelopers/developersReviews.vue"
import OurTeam from "~/components/forDevelopers/ourTeam.vue"
import joinUs from "~/components/forDevelopers/joinUs.vue"
import { GET_FOR_DEVELOPER_PAGE_DATA } from "~/utils/storeActions"
export default {
  name: "ForDevelopers",
  components: {
    NewsLetters,
    joinUs,
    JobOffers,
    CommunityDevelopers,
    DevelopersReviews,
    OurTeam,
  },
  async fetch() {
    await this.$store.dispatch("forDeveloper/" + GET_FOR_DEVELOPER_PAGE_DATA)
  },
}
</script>
