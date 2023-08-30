<template>
  <div class="flex flex-col lg:flex-row mt-[6.5rem] mb-20">
    <div>
      <img
        class="max-w-full object-cover rounded-lg"
        src="~/assets/images/backgrounds/whyInovola.svg"
        loading="lazy"
        alt="whyInovola"
      />
    </div>
    <div class="lg:ms-24">
      <h1
        class="font-bold text-text-5 leading-[2rem] sm:leading-[3.5rem] text-[1.75rem] sm:text-[2.75rem] mb-6"
      >
        {{ $t("services.WhyChoose") }}
        <br />
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-2"
          >{{ $t("services.Inovola") }}</span
        >{{ $t("services.?") }}
      </h1>
      <div class="flex flex-col">
        <div class="flex flex-row mb-[10px]">
          <img
            src="~/assets/images/icons/trueIcon.svg"
            class="me-2"
            alt="trueIcon"
          />
          <span
            class="text-start text-text-7 sm:ms-[10px] leading-8 text-base md:text-lg font-medium"
          >
            {{ $t("services.CustomerFoucsed") }}
          </span>
        </div>
        <div class="flex flex-row mb-[10px]">
          <img
            src="~/assets/images/icons/trueIcon.svg"
            class="me-2"
            alt="trueIcon"
          />
          <span
            class="text-start text-text-7 sm:ms-[10px] leading-8 text-base md:text-lg font-medium"
          >
            {{ $t("services.poolTalents") }}
          </span>
        </div>
        <div class="flex flex-row mb-[10px]">
          <img
            src="~/assets/images/icons/trueIcon.svg"
            class="me-2"
            alt="trueIcon"
          />
          <span
            class="text-start text-text-7 sm:ms-[10px] leading-8 text-base md:text-lg font-medium"
          >
            {{ $t("services.TechnologyCompetence") }}
          </span>
        </div>
      </div>
      <Button
        class="primary-outlined p-button-outlined me-4 mt-7 w-[8.75rem] h-14 rounded-lg justify-center text-base leading-5 font-medium hover:bg-primary hover:text-secondary"
        aria-label="Button"
        @click="goToCpmpanies"
      >
        {{ $t("services.LearnMore") }}
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyInovola",
  methods: {
    goToCpmpanies() {
      this.$router.push(this.localePath("/for-companies"))
    },
  },
}
</script>
