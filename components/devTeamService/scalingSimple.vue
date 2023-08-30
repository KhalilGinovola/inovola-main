<template>
  <div class="container">
    <div class="mb-0 sm:mb-28 mt-[3rem] sm:mt-[5rem]">
      <h2
        class="m-0 font-bold text-[1.75rem] sm:text-[40px] text-text-5 max-w-[44.5rem] leading-[2.25rem] sm:leading-[3.25rem]"
      >
        <span>
          {{ $t("devTeam.rampUp") }}
        </span>
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-bg-2x.svg')] bg-no-repeat bg-center relative px-2"
        >
          {{ $t("devTeam.scalingSimple") }}
        </span>
      </h2>
      <p
        class="mb-0 py-0 font-medium text-sm sm:text-lg text-text-7 leading-6 sm:leading-8"
      >
        {{ $t("devTeam.modernDescription") }}
      </p>
      <p
        class="mt-0 pt-2 font-medium text-sm sm:text-lg text-text-7 leading-6 sm:leading-8"
      >
        {{ $t("devTeam.modernDescription2") }}
      </p>
      <p
        class="pb-0 my-0 pt-2 font-semibold text-base sm:text-lg text-text leading-6 sm:leading-8"
      >
        {{ $t("devTeam.modernDescription3") }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModernSolution",
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
