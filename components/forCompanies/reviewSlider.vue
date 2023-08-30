<template>
  <div
    :class="[
      'reviews review mt-[7.5rem] mb-[6.25rem]  ',
      { 'lg:p-5 xl:p-0 ': isRTL },
    ]"
  >
    <div class="max-w-full">
      <div class="flex mt-0 mb-0">
        <h2
          class="text-2xl sm:text-[32px] font-bold text-text-5 leading-8 sm:leading-[3rem] my-0"
        >
          {{ $t("reviews.customerSay") }}
          <span
            class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-1"
          >
            {{ $t("reviews.aboutUs") }}
          </span>
        </h2>
        <img
          src="~/assets/images/images/question-mark.svg"
          alt="question"
          :class="[
            ' sm:-mt-6 w-[37px] h-[42px] sm:w-[75.5px] sm:h-[85px]',
            { 'rotate-y-180': isRTL },
          ]"
        />
      </div>
      <p
        class="max-w-lg text-sm pb-6 sm:pb-0 sm:text-base font-normal sm:font-medium text-text-7 leading-5 sm:leading-[1.625rem] mt-0 mb-8 pt-0"
      >
        {{ $t("reviews.reviewDescription") }}
      </p>
    </div>
    <Slider
      v-if="clientReviews.length"
      :arrows="true"
      :dots="false"
      :slides-to-show="1"
      :slides-to-scroll="1"
      :slides-per-row="1"
      :responsive="responsive"
      :rtl="true"
      class="landing-slider client-review-container w-full"
    >
      <div
        v-for="(review, reviewIndex) in clientReviews"
        :key="reviewIndex"
        :class="['w-full ', { 'rtl-direction': isRTL }]"
      >
        <ClientReview :client-review="review" @showVideo="showVideo" />
      </div>
    </Slider>
    <Dialog
      :visible="displayReviewVideo"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
      :close-on-escape="true"
      :closable="true"
    >
      <template #header>
        <h3 class="py-0 my-0">Review</h3>
        <Button icon="pi pi-times" class="p-button-text" @click="closeVideo" />
      </template>

      <video width="100%" height="100%" controls class="objectFit">
        <source :src="MAIN_URL + youtubeLink" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Slider from "~/components/shared/Slider.vue"
import ClientReview from "~/components/forCompanies/clientReview.vue"
export default {
  name: "ReviewSlider",
  components: {
    Slider,
    ClientReview,
  },
  data() {
    return {
      MAIN_URL: process.env.MAIN_URL,
      displayReviewVideo: false,
      youtubeLink: "",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
  },

  computed: {
    ...mapState("successStories", {
      clientReviews: (state) => state.clientReviews,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    openContactUs() {
      this.$router.push(this.localePath("/contact-us"))
    },
    showVideo(link) {
      this.youtubeLink = link
      this.displayReviewVideo = true
    },
    closeVideo() {
      this.displayReviewVideo = false
    },
  },
}
</script>
<style lang="scss" scoped>
.rtl-direction {
  direction: rtl;
}
</style>
