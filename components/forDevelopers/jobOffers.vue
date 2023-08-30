<template>
  <div class="offers mt-12 pt-[6.5rem]">
    <div class="container">
      <div class="mb-0 sm:mb-12">
        <h2
          class="text-[1.625rem] sm:text-[2.75rem] font-bold text-center text-text-5 mb-0 leading-8 sm:leading-[3.25rem]"
        >
          {{ $t("joboffers.Exclusive") }}
          <span
            class="bg-[url('~/assets/images/backgrounds/span-yellow-bg-lg.svg')] bg-no-repeat bg-center px-2"
          >
            {{ $t("joboffers.jobOffers") }}
          </span>
        </h2>
        <p
          class="text-sm sm:text-lg max-w-[934px] font-medium text-text-7 mx-auto text-center mt-4 mb-8"
        >
          {{ $t("joboffers.info1") }} <br />
          {{ $t("joboffers.info2") }}
        </p>
      </div>
      <div class="block lg:grid grid-cols-2 mb-0 sm:mb-7">
        <div class="flex items-center pl-0 lg:pl-6">
          <job-info
            :heading="$t('jobInfo.heading')"
            :description="$t('jobInfo.description')"
          ></job-info>
        </div>
        <div>
          <img
            class="w-full lg:max-w-full mt-6 sm:mt-10 lg:mt-0"
            src="~/assets/images/developers/job-offer-1.png"
            alt="job offers"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="block lg:grid grid-cols-2 mt-[4.125rem] sm:mt-[6.5rem] mb-[10px] sm:mb-[5.5rem]"
      >
        <div class="order-2 flex items-center pl-0 lg:pl-24 pr-4">
          <job-info
            :heading="$t('jobInfo.secondHeading')"
            :description="$t('jobInfo.secondDescription')"
          ></job-info>
        </div>
        <div class="order-1 mt-6 sm:mt-0 mb-0 pb-0">
          <img
            class="w-full lg:max-w-full mt-6 sm:mt-10 lg:mt-0"
            src="~/assets/images/developers/job-offer-2.png"
            alt="job offers"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobInfo from "./jobInfo.vue"
export default {
  name: "JobOffers",
  components: {
    JobInfo,
  },
}
</script>
