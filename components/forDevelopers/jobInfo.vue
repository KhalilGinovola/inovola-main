<template>
  <div class="max-w-full lg:max-w-[466px]">
    <h2
      class="text-2xl sm:text-3xl font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
    >
      {{ heading }}
    </h2>
    <p
      class="text-sm mb-0 pb-0 sm:text-base font-medium text-text-11 leading-[1.625rem] mt-3 sm:mt-4 pt-0"
    >
      {{ description }}
    </p>

    <Button
      class="primary-outlined p-button-outlined rounded leading-5 transition duration-200 ease-out hover:bg-black hover:text-white hover:border-white py-[0.875rem] sm:py-[1.125rem] me-5 mt-6 sm:mt-12 text-text font-semibold"
      aria-label="Button"
      @click="joinInovola"
    >
      {{ $t("jobInfo.join") }}
    </Button>
  </div>
</template>

<script>
export default {
  name: "JobInfo",
  props: {
    heading: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
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
