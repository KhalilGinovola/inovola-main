<template>
  <div class="container">
    <div class="mb-0 sm:mb-28 mt-[3rem] sm:mt-[5rem] max-w-[1150px]">
      <h2
        class="m-0 font-bold leading-[2.25rem] sm:leading-[3.25rem] text-[1.75rem] sm:text-[2.5rem] text-text-5"
      >
        <span>
          {{ $t("digitalTransformation.headingPart1") }}
        </span>
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-bg-2x.svg')] bg-no-repeat bg-center relative px-2"
        >
          {{ $t("digitalTransformation.headingPart2") }}
        </span>
      </h2>
      <p
        class="max-w-[1100px] mb-0 py-0 font-medium text-sm sm:text-lg text-text-7 leading-6 sm:leading-8"
      >
        {{ $t("digitalTransformation.modernDescription1") }}
      </p>
      <p
        class="mt-0 pt-2 font-medium text-sm sm:text-lg text-text-7 leading-6 sm:leading-8"
      >
        {{ $t("digitalTransformation.modernDescription2") }}
      </p>
    </div>
    <div class="m-0">
      <div class="block lg:grid grid-cols-2 mb-0 sm:mb-7 mt-0">
        <div class="pl-0 lg:pl-6">
          <div class="mt-8 max-w-full lg:max-w-[466px]">
            <h2
              class="text-2xl sm:text-[2rem] font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
            >
              {{ $t("digitalTransformation.title1") }}
            </h2>
            <p
              class="text-sm mb-0 pb-0 sm:text-base font-normal sm:font-medium text-text-11 leading-5 sm:leading-[1.625rem] mt-3 sm:mt-4 pt-0"
            >
              {{ $t("digitalTransformation.info1") }}
            </p>
            <p
              class="text-sm mb-0 pb-0 sm:text-base font-normal sm:font-medium text-text-11 leading-5 sm:leading-[1.625rem] mt-3 sm:mt-4 pt-0"
            >
              {{ $t("digitalTransformation.info2") }}
            </p>
          </div>
        </div>
        <div>
          <img
            class="w-full lg:max-w-full mt-6 sm:mt-10 lg:mt-0 grayscale"
            src="~/assets/images/backgrounds/digital-solution-1.png"
            alt="modern Solution"
            loading="lazy"
          />
        </div>
      </div>
      <div class="block lg:grid grid-cols-2 mt-9 sm:mt-[6.5rem]">
        <div class="pl-0 lg:pl-24 pr-4 order-2">
          <div class="max-w-full lg:max-w-[466px]">
            <div class="flex items-center mt-8">
              <h2
                class="max-w-[26.875rem] text-2xl sm:text-[2rem] font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
              >
                {{ $t("digitalTransformation.title2") }}
              </h2>
              <img
                src="~/assets/images/images/question-mark.svg"
                alt="question"
                loading="lazy"
                :class="[
                  ' sm:-mt-6 w-[37px] h-[42px] sm:w-[75.5px] sm:h-[85px]',
                  { 'rotate-y-180': isRTL },
                ]"
              />
            </div>
            <p
              class="text-sm mb-0 pb-6 sm:pb-0 sm:text-base font-normal sm:font-medium text-text-11 leading-5 sm:leading-[1.625rem] mt-3 sm:mt-4 pt-0"
            >
              {{ $t("digitalTransformation.info3") }}
            </p>
          </div>
        </div>
        <div class="order-1">
          <img
            class="w-full lg:max-w-full mb-4 sm:mb-10 lg:mb-0 grayscale"
            src="~/assets/images/backgrounds/digital-solution-2.png"
            alt="modern Solution"
            loading="lazy"
          />
        </div>
      </div>
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
<style lang="scss" scoped>
.parentEle::before {
  content: url("~/assets/images/images/question-mark.svg");
  position: absolute;
  top: 0;
  right: 20px;
  width: 100px;
  height: 120px;
}

[dir="rtl"] .parentEle::before {
  top: -55px;
  right: 350px !important;
  transform: rotateY(180deg) !important;
}
@media (max-width: 500px) {
  [dir="rtl"] .parentEle::before {
    top: -55px;
    right: 260px !important;
    transform: rotateY(180deg) !important;
  }
}
</style>
