<template>
  <div
    :class="[
      'landing-container mt-[6.25rem] mb-[4.5rem] sm:mb-[7rem] relative ',
      { 'lg:p-5 xl:p-0 ': isRTL },
    ]"
  >
    <div
      class="flex flex-col justify-between items-center lg:flex-row md:w-full"
    >
      <div
        :class="[
          'lg:w-3/6 xl:w-5/12 flex flex-col items-center text-center md:text-start md:items-start ',
          { 'xl:me-44 ': isRTL },
        ]"
      >
        <h1
          :class="[
            'mb-4 mt-0 text-text capitalize  text-[2.5rem] md:text-6xl leading-[3rem] md:leading-[4.625rem] font-bold text-center md:text-start',
            { '': isRTL },
          ]"
        >
          {{ $t("home.headerHeader") }}
        </h1>
        <p
          class="ms-2 mb-[2rem] sm:mb-[2.5rem] text-text-7 font-medium text-sm sm:text-lg leading-6 sm:leading-[2rem]"
        >
          {{ $t("home.headerSubheader") }} <br />
          {{ $t("home.headerSubheader2") }}
        </p>
        <Button
          :class="[
            'primary mb-12 sm:mb-0 hover:bg-secondary hover:text-primary font-semibold overflow-visible w-[165px] py-4 connect-ltr-btn hover:connect-ltr-btn-hover',
            { 'connect-rtl-btn': isRTL },
          ]"
          aria-label="Button"
          @click="openContactUs"
        >
          {{ $t("home.letConnect") }}
        </Button>
      </div>
      <div class="w-full lg:w-[55%]">
        <img
          :src="require('~/assets/images/images/landing.png')"
          alt="photo"
          class="max-w-full p-5 lg:p-0 object-cover"
        />
      </div>
    </div>
    <div
      :class="[
        'absolute',
        {
          'left-[-1.375rem] lg:left-[40%] bottom-[-1rem] lg:bottom-5 xl:left-[40%]  xl:bottom-[-2rem]':
            !isRTL,
        },
        {
          'right-[-1rem] bottom-[-2rem] lg:bottom-[0rem]  lg:right-[44%] xl:right-[47%] xl:bottom-[-4rem]':
            isRTL,
        },
      ]"
    >
      <img
        :src="
          isRTL
            ? require('~/assets/images/icons/landing3dotsRTL.png')
            : require('~/assets/images/icons/landing3dots.png')
        "
        alt="3dots"
      />
    </div>

    <AsideSocialMedia class="hidden md:block" />
  </div>
</template>

<script>
import AsideSocialMedia from "~/components/home/AsideSocialMedia.vue"
export default {
  name: "LandingHome",
  components: {
    AsideSocialMedia,
  },
  data() {
    return {}
  },
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
.landing-container {
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
</style>
