<template>
  <div
    class="for-developers-landing bg-offWhite pb-4 lg:pb-0 pt-2 sm:pt-12 bg-offwhite"
  >
    <div class="container">
      <div
        class="service-contaier relative block sm:grid grid-cols-2 pt-6 sm:pt-[4.5rem] md:pt-0 mb-[8rem] sm:mb-[10.5rem]"
      >
        <div :class="['pt-3', { 'join-rtl-us': isRTL }]">
          <h2
            class="join-us__heading relative w-fit font-bold text-3xl md:text-5xl mb-3 text-text-5"
          >
            {{ $t("devTeam.heading") }}
          </h2>
          <p
            class="font-medium text-text-7 leading-5 sm:leading-7 text-sm sm:text-base mt-0 mb-0 sm:mb-9 max-w-[41.875rem]"
          >
            {{ $t("devTeam.description") }}
          </p>
          <Button
            :class="[
              'primary hover:bg-secondary mt-4 sm:mb-0 hover:text-primary font-semibold overflow-visible w-[141px] py-4 connect-ltr-btn hover:connect-ltr-btn-hover',
              { 'connect-rtl-btn': isRTL },
            ]"
            aria-label="Button"
            @click="openContactUs"
          >
            {{ $t("digitalTransformation.btnText") }}
          </Button>
        </div>
        <div
          class="px-12 relative gap-x-1 sm:gap-x-7 -mb-[6.3125rem] pt-0 text-center"
        >
          <img
            class="max-w-full lg:h-auto h-full"
            src="~/assets/images/backgrounds/DevTeam-As-Service-Heading.svg"
            alt="fancyPerson"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceHeader",
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
    top: -50px;
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
      top: 50%;
      width: 0;
      left: -1px;
      display: inline-block;
    }
  }
  .connect-rtl-btn {
    &:after {
      content: url("~/assets/images/icons/black-white.png");
      position: relative;
      right: 43px;
      width: 0;
      top: 50%;
      transform: rotate(180deg);
    }
  }
}

.overlay-rtl-transform {
  left: 0 !important;
  right: -200px !important;
}

.service-contaier {
  overflow-block: hidden;
}
.service-contaier::before {
  content: "";
  width: 80%;
  height: 100%;
  background-color: #f8f9f9;
  top: 0;
  left: 20%;
  right: 0;
  bottom: 50px;
  position: absolute;
  display: none;
  z-index: -1;
}

@media (max-width: 640px) {
  .join-us__heading {
    &:after {
      content: url("~/assets/images/icons/smallBgStars.svg");
      position: absolute;
      top: -40px;
    }
  }
  [dir="ltr"] .join-us__heading:after {
    right: -15px;
  }

  .join-us__heading:after {
    right: 0px;
  }
  .overlay-rtl-transform {
    left: 0 !important;
    right: 0 !important;
  }
  .service-contaier::before {
    display: block;
    left: 25%;
  }
  [dir="rtl"] .join-us__heading:after {
    left: 0 !important;
  }
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
      right: 75px;
      width: 0;
      transform: rotate(180deg);
    }
  }
  .rtl-dirction {
    direction: rtl;
  }
}
</style>
