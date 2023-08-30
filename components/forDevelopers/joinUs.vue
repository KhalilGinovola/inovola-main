<template>
  <div class="for-developers-landing bg-offWhite pb-4 lg:pb-0 pt-12">
    <div class="container">
      <div class="block xl:flex justify-between pt-[4.5rem] md:pt-12">
        <div :class="['pt-3', { 'join-rtl-us': isRTL }]">
          <h2
            class="join-us__heading relative leading-[3.75rem] w-fit font-bold text-3xl sm:text-5xl pb-0 mb-0 text-text-5"
          >
            {{ $t("joinUs.joinHeading") }}
          </h2>
          <p
            class="font-medium text-text-7 leading-6 text-sm sm:text-base mt-4 pt-0 mb-8 sm:mb-12"
          >
            {{ $t("joinUs.info") }}
          </p>
          <Button
            :class="[
              'primary hover:bg-secondary hover:text-primary font-semibold overflow-visible w-[213px] py-4 connect-ltr-btn hover:connect-ltr-btn-hovers',
              { 'connect-rtl-btn': isRTL },
            ]"
            aria-label="Button"
            @click="toRemoteJobs"
          >
            {{ $t("joinUs.btnJoin") }}
          </Button>
        </div>
        <div class="flex gap-x-1 sm:gap-x-7 -mb-[6.3125rem] pt-9">
          <div>
            <img
              class="max-w-full lg:h-auto h-full"
              src="~/assets/images/developers/developerMan.png"
              alt="developerMan"
            />
          </div>
          <div class="grid grid-rows-2 gap-x-1 md:gap-x-7">
            <img
              class="max-w-full"
              src="~/assets/images/developers/developerUpWomens.png"
              alt="developerUp"
            />
            <img
              class="max-w-full"
              src="~/assets/images/developers/developerDownWomens.png"
              alt="developerUp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinUs",
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    toRemoteJobs() {
      this.$router.push(this.localePath("/remote-jobs"))
    },
  },
}
</script>
<style lang="scss" scoped>
.join-us__heading {
  &:after {
    content: url("~/assets/images/developers/bg-join.svg");
    position: absolute;
    top: -50px;
    right: -88px;
  }
}

.for-developers-landing {
  .connect-ltr-btn {
    &:after {
      content: url("~/assets/images/icons/black-white.png");
      position: relative;
      width: 0;
      left: 29px;
      display: inline-block;
    }
  }
  .connect-rtl-btn {
    &:after {
      content: url("~/assets/images/icons/black-white.png");
      position: relative;
      right: 137px;
      width: 0;
      transform: rotate(180deg);
    }
  }
  .rtl-dirction {
    direction: rtl;
  }
}
[dir="rtl"] .join-us__heading::after {
  left: -88px;
  transform: rotateY(180deg);
}

@media (max-width: 640px) {
  .join-us__heading {
    &:after {
      content: url("~/assets/images/icons/smallBgStars.svg");
      position: absolute;
      top: -25px;
      right: -88px;
    }
  }
}
</style>
