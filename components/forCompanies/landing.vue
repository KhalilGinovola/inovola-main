<template>
  <div class="for-developers-landing pb-1 lg:pb-0">
    <div :class="['absolute bg-offWhite -z-10 h-[359px] w-full']"></div>
    <div class="container">
      <div class="relative block sm:grid grid-cols-2 mb-[8rem] sm:mb-[10.5rem]">
        <div
          :class="['pt-9 sm:pt-[4.5rem] md:pt-16', { 'join-rtl-us': isRTL }]"
        >
          <h2
            class="join-us__heading whitespace-nowrap relative w-fit font-bold text-[1.75rem] md:text-5xl mb-4 text-text-5"
          >
            {{ $t("forCompanies.forCompanies") }}
          </h2>
          <p
            class="font-medium text-text-7 leading-7 text-sm sm:text-base mt-0 sm:mb-2 sm:mb-0 sm:mb-12 max-w-[41.875rem]"
          >
            {{ $t("forCompanies.buildUniqueExperience") }}
          </p>

          <Button
            :class="[
              'primary hover:bg-secondary hover:text-primary font-semibold overflow-visible w-[165px] py-4 connect-ltr-btn hover:connect-ltr-btn-hover',
              { 'connect-rtl-btn': isRTL },
            ]"
            aria-label="Button"
            @click="openContactUs"
          >
            {{ $t("home.letConnect") }}
          </Button>
        </div>
        <div class="px-12 gap-x-1 sm:gap-x-7 -mb-[6.3125rem] pt-0 text-center">
          <img
            class="max-w-full lg:h-auto h-full"
            src="~/assets/images/backgrounds/forCompany.svg"
            alt="fancyPerson"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    openContactUs() {
      this.$router.push(this.localePath("/contact-us"))
    },
  },
}
</script>
<style lang="scss" scoped>
.join-us__heading {
  &:after {
    content: url("~/assets/images/icons/bgService.svg");
    position: absolute;
    top: -48px;
  }
}
[dir="ltr"] .join-us__heading:after {
  right: -46px;
}
[dir="rtl"] .join-us__heading:after {
  left: -46px;
  transform: rotateY(180deg) !important;
}

.for-developers-landing {
  .connect-ltr-btn {
    &:after {
      content: url("~/assets/images/icons/black-white.png");
      position: relative;
      width: 0;
      left: 20px;
      display: inline-block;
    }
  }
  .connect-rtl-btn {
    &:after {
      content: url("~/assets/images/icons/black-white.png");
      position: relative;
      right: 89px;
      width: 0;
      transform: rotate(180deg);
    }
  }
  .rtl-dirction {
    direction: rtl;
  }
}

@media (max-width: 640px) {
  .join-us__heading:after {
    right: 0px;
  }
  .join-us__heading {
    &:after {
      content: url("~/assets/images/icons/smallBgStars.svg");
      position: absolute;
      top: -48px;
    }
  }
}
</style>
