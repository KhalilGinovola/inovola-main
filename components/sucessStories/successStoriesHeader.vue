<template>
  <div class="bg-offWhite pb-0 sm:pb-4 lg:pb-0 pt-12">
    <div class="container success-stories">
      <div class="pt-[3.125rem] pb-12 sm:pb-[5.5rem]">
        <div :class="['px-3 sm:text-center', { 'join-rtl-us': isRTL }]">
          <h2
            class="success-stories__heading relative leading-8 sm:leading-[3.75rem] w-fit font-bold text-3xl sm:text-5xl mb-3 text-text-5"
          >
            {{ $t("successStories.heading") }}
          </h2>
          <p
            class="font-medium text-text-7 mx-auto leading-5 sm:leading-7 max-w-[690px] text-sm sm:text-base mt-0 mb-0"
          >
            {{ $t("successStories.description") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessStoriesHeader",
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
<style lang="scss" scoped>
.success-stories {
  &__heading {
    margin: 0 auto;
    &:after {
      content: url("~/assets/images/developers/bg-join.svg");
      position: absolute;
      top: -50px;
      right: -88px;
      background-size: cover;
    }
  }
}
.join-rtl-us {
  background-size: 121px 50px !important;
}

[dir="rtl"] .success-stories {
  &__heading::after {
    right: 220px;
    transform: rotateY(180deg);
  }
}

@media (max-width: 640px) {
  .success-stories {
    &__heading {
      margin: 0;
      &::after {
        content: url("~/assets/images/developers/success.svg");
        top: -40px;
        right: -38px;
        width: 78px;
        height: 48px;
      }
    }
  }

  [dir="rtl"] .success-stories {
    &__heading::after {
      right: 100px;
      transform: rotateY(180deg);
    }
  }
}
</style>
