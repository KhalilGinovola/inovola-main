<template>
  <div class="blogs pt-[100px] pb-16 bg-white min-h-[604px]">
    <div class="container fluid mt-0 py-[30px] mb-12 bg-offWhite">
      <h1
        class="text-text-5 leading-[56px] text-[40px] text-center font-bold mb-8 mt-0 max-w-[664px] mx-auto"
      >
        {{ $t("remoteJobs.remoteJobs") }}
      </h1>
    </div>
    <div v-if="mobileSize" class="fluid mt-0 py-8 bg-offWhite">
      <div
        class="cursor-pointer flex items-center text-text-6 leading-[1.25rem] text-[0.875rem] font-medium ms-5 mt-0 max-w-[664px]"
      >
        <img
          :class="['me-1', { 'rotate-y-180': isRTL }]"
          src="~/assets/images/icons/arrow.svg"
          alt="arrow"
        />
        {{ $t("remoteJobs.goBack") }}
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row mx-3 md:mx-0">
      <Jobs />
      <JobDetails />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Jobs from "./jobs.vue"
import JobDetails from "./jobDetails.vue"
export default {
  name: "RemoteJobsContainer",
  components: {
    Jobs,
    JobDetails,
  },
  data() {
    return {
      mobileSize: false,
    }
  },
  computed: {
    ...mapState("jobs", {
      jobs: (state) => state.jobs,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
