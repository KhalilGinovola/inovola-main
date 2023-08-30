<template>
  <div class="bg-offWhite pb-20">
    <div class="container">
      <div class="mt-0 pt-16 pb-0 mb-16 bg-offWhite">
        <h1
          class="my-0 text-center font-bold text-text-5 leading-10 sm:leading-[3.5rem] text-[1.75rem] sm:text-[2.75rem]"
        >
          {{ $t("forCompanies.WhenItCounts") }}

          <span
            class="bg-[url('~/assets/images/backgrounds/span-yellow-3xl.svg')] bg-no-repeat bg-center px-2"
            >{{ $t("forCompanies.us") }}</span
          >
        </h1>
        <p
          class="mt-6 mb-0 max-w-[37.125rem] text-center mx-auto text-text-7 leading-6 sm:leading-7 text-sm sm:text-base font-medium"
        >
          {{ $t("forCompanies.makingDifference") }}
          <span>{{ $t("forCompanies.weListen") }}</span>
        </p>
      </div>
      <h3
        class="text-text font-bold text-[1.5rem] sm:text-[2rem] leading-8 sm:leading-[48px] mt-0 mb-6 max-w-[479px]"
      >
        {{ $t("forCompanies.MissionTitle") }}
      </h3>
      <div class="flex flex-col-reverse md:flex-row">
        <div class="w-full md:w-2/4">
          <div class="mission-vision-container mt-20 lg:mt-0">
            <TabView :active-index="active">
              <TabPanel :header="$t('forCompanies.Mission')">
                <Mission />
              </TabPanel>
              <TabPanel :header="$t('forCompanies.Vision')">
                <Vision />
              </TabPanel>
            </TabView>
          </div>
        </div>
        <div class="w-full md:w-2/4 flex justify-center px-2 sm:px-20">
          <img
            class="max-w-full"
            :src="require('~/assets/images/backgrounds/missionVision.svg')"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vision from "./vision.vue"
import Mission from "./mission.vue"
export default {
  name: "MissionVisionContainer",
  components: {
    Mission,
    Vision,
  },
  data() {
    return {
      active: 0,
    }
  },
}
</script>
