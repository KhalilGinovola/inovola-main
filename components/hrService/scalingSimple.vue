<template>
  <div class="container">
    <div>
      <h2
        class="max-w-[700px] text-[1.75rem] leading-9 sm:leading-[3.25rem] sm:text-[32px] md:text-[2.5rem] font-bold text-text-5 mb-2 sm:mb-6 py-0"
      >
        {{ $t("hrService.headingpart1") }}
        <span
          class="whitespace-nowrap bg-[url('~/assets/images/backgrounds/span-yellow-bg-2x.svg')] bg-no-repeat bg-center px-2"
        >
          {{ $t("hrService.headingpart2") }}
        </span>
      </h2>
      <p
        class="font-semibold text-base sm:text-xl leading-6 sm:leading-8 text-text my-0 py-0"
      >
        {{ $t("hrService.descriptionData") }}
      </p>
      <ul class="pl-0 pr-0 list-none text-text-7 mb-6 sm:mb-[5rem]">
        <li
          class="flex gap-x-2 mb-2 sm:mb-3 justify-start items-start font-medium text-base sm:text-lg leading-6 sm:leading-8"
        >
          <img
            class=""
            src="~/assets/images/icons/trueIcon.svg"
            alt="trueIcon"
          />
          <span> {{ $t("hrService.listData1") }}</span>
        </li>
        <li
          class="flex gap-x-2 mb-2 sm:mb-3 justify-start items-start font-medium text-base sm:text-lg leading-6 sm:leading-8"
        >
          <img
            class=""
            src="~/assets/images/icons/trueIcon.svg"
            alt="trueIcon"
          />
          <span> {{ $t("hrService.listData2") }}</span>
        </li>
        <li
          class="flex gap-x-2 mb-2 sm:mb-3 justify-start items-start font-medium text-base sm:text-lg leading-6 sm:leading-8"
        >
          <img
            class=""
            src="~/assets/images/icons/trueIcon.svg"
            alt="trueIcon"
          />
          <span> {{ $t("hrService.listData3") }}</span>
        </li>
        <li
          class="flex gap-x-2 mb-2 sm:mb-3 justify-start items-start font-medium text-base sm:text-lg leading-6 sm:leading-8"
        >
          <img
            class=""
            src="~/assets/images/icons/trueIcon.svg"
            alt="trueIcon"
          />
          <span> {{ $t("hrService.listData4") }}</span>
        </li>
      </ul>
    </div>
    <div>
      <div class="m-0">
        <div class="block lg:grid grid-cols-2 mb-2 sm:mb-7 mt-0">
          <div class="pl-0 lg:pl-6">
            <div class="mt-8 max-w-full lg:max-w-[475px]">
              <h2
                class="text-2xl sm:text-[2rem] font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
              >
                {{ $t("hrService.title1") }}
              </h2>
              <p
                class="text-sm mb-0 pb-0 sm:text-base font-medium text-text-11 leading-5 sm:leading-[1.625rem] mt-3 sm:mt-4 pt-0"
              >
                {{ $t("hrService.info1") }}
              </p>
            </div>
          </div>
          <div>
            <img
              class="w-full lg:max-w-full mt-6 sm:mt-10 lg:mt-0 grayscale"
              src="~/assets/images/backgrounds/HR-solution-1.png"
              alt="job offers"
            />
          </div>
        </div>
        <div
          class="block lg:grid grid-cols-2 mt-12 sm:mt-[6.5rem] mb-4 sm:mb-[6.375rem]"
        >
          <div class="pl-0 lg:pl-20 pr-4 order-2">
            <div class="max-w-full">
              <div class="flex items-center mt-8">
                <h2
                  class="text-2xl sm:text-[2rem] font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
                >
                  {{ $t("hrService.title2") }}
                </h2>
              </div>
              <p
                class="text-sm mb-0 pb-6 sm:pb-0 sm:text-base font-normal sm:font-medium text-text-8 leading-5 sm:leading-[1.625rem] mt-3 sm:mt-4 pt-0"
              >
                {{ $t("hrService.info2") }}
              </p>
            </div>
          </div>
          <div class="order-1">
            <img
              class="w-full lg:max-w-full mb-4 sm:mb-10 lg:mb-0 grayscale"
              src="~/assets/images/backgrounds/HR-solution-2.png"
              alt="job offers"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ScalingSimple",
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
<style scoped lang="scss">
.scaling::after {
  content: url("~/assets/images/backgrounds/span-yellow-bg-2x.svg");
  position: absolute;
  top: 9px;
  left: 0;
  bottom: -2px;
  right: 0;
  max-width: 100%;
  z-index: -1;
  overflow: hidden;
}
</style>
