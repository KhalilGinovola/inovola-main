<template>
  <div class="container py-12">
    <LandingHome />
    <div class="mb-[6.5rem]">
      <OurServiece />
    </div>
    <HomeAbout />
    <WhyInovola />
    <Divider />
    <BlogsHome />
    <NewsLetters
      :heading="$t('shared.JoinUs')"
      :description="$t('shared.newsLetterSing')"
      class="mb-9"
    />
  </div>
</template>

<script>
import NewsLetters from "../shared/NewsLetters.vue"
import LandingHome from "~/components/home/landingHome.vue"
import OurServiece from "~/components/home/ourServieceHome.vue"
import HomeAbout from "~/components/home/aboutHome.vue"
import WhyInovola from "~/components/home/whyInovola.vue"
import BlogsHome from "~/components/home/blogsHome.vue"
import { GET_HOME_INITIAL_DATA } from "~/utils/storeActions"

export default {
  name: "HomeContent",
  components: {
    LandingHome,
    OurServiece,
    HomeAbout,
    WhyInovola,
    BlogsHome,
    NewsLetters,
  },
  async fetch() {
    await this.$store.dispatch("home/" + GET_HOME_INITIAL_DATA)
  },
}
</script>
