<template>
  <div class="mt-8">
    <h4 class="text-lg leading-7 font-semibold text-text-8 mt-0">
      {{ $t("remoteJobs.glassdoorReviews") }}
    </h4>
    <div class="flex items-center">
      <span class="text-green text-[2rem] leading-[3rem] font-extrabold me-3">{{
        stars
      }}</span>
      <Rating
        :value="Number(stars)"
        :stars="5"
        :cancel="false"
        :readonly="true"
      />
    </div>
    <div class="flex flex-wrap items-center mt-4 mb-7">
      <div class="flex me-12 my-2">
        <img
          src="~/assets/images/icons/glassdoor-persentage.svg"
          alt="glassdoor-persentage"
          loading="lazy"
        />
        <p
          class="text-green text-sm leading-5 font-semibold max-w-[6.125rem] ms-3"
        >
          {{ $t("remoteJobs.recommendToFriend") }}
        </p>
      </div>
      <div class="flex my-2">
        <img
          src="~/assets/images/icons/glassdoor-persentage.svg"
          alt="glassdoor-persentage"
          loading="lazy"
        />
        <p
          class="text-green text-sm leading-5 font-semibold max-w-[3.75rem] ms-3"
        >
          {{ $t("remoteJobs.approveCEO") }}
        </p>
      </div>
    </div>
    <Button
      class="primary-outlined p-button-outlined me-4 mb-10 hover:bg-primary hover:text-secondary"
      aria-label="Button"
      @click="moveToGlassdoor"
    >
      {{ $t("remoteJobs.viewReviews") }}
    </Button>
  </div>
</template>

<script>
export default {
  name: "GlassdoorSection",
  data() {
    return {
      stars: 5,
      value: 99,
    }
  },
  methods: {
    moveToGlassdoor() {
      window.open(
        "https://www.glassdoor.com/Overview/Working-at-Inovola-EI_IE6349900.11,18.htm",
        "_blank"
      )
    },
  },
}
</script>
