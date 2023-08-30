<template>
  <div
    class="flex justify-around flex-col items-center lg:flex-row mt-[4.5rem] gap-y-12"
  >
    <div
      class="flex justify-between items-center gap-x-20 flex-col lg:flex-row gap-y-12"
    >
      <div class="flex items-center flex-col md:flex-row my-7 md:my-0 mt-0">
        <h2
          class="font-semibold text-text text-[3rem] sm:text-5xl sm:leading-[2.75rem] min-w-[5rem] md:min-w-fit my-0"
        >
          {{ counters.years_of_exprience }}+
        </h2>
        <div
          class="flex flex-row md:flex-col text-start uppercase sm:ms-5 sm:leading-[1.625rem] text-lg font-medium"
        >
          <p class="m-0 text-text me-1">
            {{ $t("services.YearOf") }}
          </p>
          <p class="m-0">
            {{ $t("services.EXPERIENCE") }}
          </p>
        </div>
      </div>
      <div class="flex items-center flex-col md:flex-row my-7 md:my-0">
        <h2
          class="font-semibold mr-2 text-text text-[3rem] sm:text-5xl sm:leading-[2.75rem] min-w-[5rem] md:min-w-fit my-0"
        >
          {{ counters.project_completed }}+
        </h2>
        <div
          class="flex flex-row md:flex-col text-start uppercase sm:ms-5 sm:leading-[1.625rem] text-lg font-medium"
        >
          <p class="m-0 text-text me-1">
            {{ $t("services.PROJECTES") }}
          </p>
          <p class="m-0 text-text">
            {{ $t("services.COMPLETED") }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col md:flex-row my-7 md:my-0 mb-8">
      <h2
        class="font-semibold text-text mr-2 text-[3rem] sm:text-5xl sm:leading-[2.75rem] min-w-[5rem] md:min-w-fit my-0"
      >
        {{ counters.happy_user }}+
      </h2>
      <div
        :class="[
          'flex  flex-row md:flex-col text-start uppercase sm:ms-5 sm:leading-[1.625rem] text-lg font-medium',
          { 'flex-row-reverse md:flex-col-reverse ': isRTL },
        ]"
      >
        <p class="m-0 text-text me-1">
          {{ $t("services.HAPPY") }}
        </p>
        <p class="m-0 text-text">
          {{ $t("services.CLIENT") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "StaticsOfCompany",
  computed: {
    ...mapState("home", {
      counters: (state) => state.counters,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
