<template>
  <div
    :class="[
      'apply-now w-full md:w-[15rem] lg:min-w-[15rem] lg:max-w-[40rem] md:my-8 xl:mt-0',
      { 'fixed right-0 bottom-0 bg-secondary w-full': mobileSize },
    ]"
  >
    <div
      :class="[
        'p-4 rounded-[12px] right-0 top-0 border border-border border-solid flex xl:flex-col justify-between lg:sticky ',
        {
          'rounded-none border-none shadow-[0px_4px_20px_10px_rgba(0,0,0,0.12)]	':
            mobileSize,
        },
      ]"
    >
      <div class="flex flex-col">
        <h4 class="m-0 leading-6 font-semibold text-text-8 mb-4">
          {{ $t("remoteJobs.uploadCV") }}
        </h4>
        <div class="flex items-center">
          <a
            :href="jobSrc"
            target="_blank"
            class="no-underline w-full flex justify-center primary font-semibold text-sm leading-6 whitespace-nowrap hover:bg-offWhite hover:text-primary"
          >
            <Button
              class="w-full flex justify-center primary font-semibold text-sm leading-6 whitespace-nowrap hover:bg-offWhite hover:text-primary"
              aria-label="Button"
            >
              {{ $t("remoteJobs.applyNow") }}
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "ApplyNow",

  props: {
    mobileSize: {
      type: Boolean,
      default: false,
    },
    jobSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState("jobs", {
      jobs: (state) => state.jobs,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
    jobId() {
      if (this.$route.params.slug) {
        return this.$route.params.slug - 1
      } else {
        return 0
      }
    },
  },
  methods: {
    joinInovola() {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdNaZfedoT7XJPOgB59QrIn_kCeS7AjgpaYg3aXASic52FyQg/alreadyresponded",
        "_blank"
      )
    },
  },
}
</script>
