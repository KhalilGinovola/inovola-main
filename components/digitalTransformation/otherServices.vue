<template>
  <div>
    <div class="text-center">
      <h2
        class="text-text-5 sm:leading-7 text-[1.75rem] sm:text-[2.75rem] pt-0 pb-3 my-0"
      >
        {{ $t("otherServices.headingFront") }}
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-2"
        >
          {{ $t("otherServices.headingBack") }}
        </span>
      </h2>
      <div class="flex justify-center">
        <p
          class="text-text-7 leading-6 sm:leading-7 text-sm sm:text-base max-w-[532px] mt-4 mb-5 pt-0"
        >
          {{ $t("otherServices.description") }}
        </p>
      </div>
    </div>
    <div class="flex flex-col flex-wrap md:flex-row">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="card mt-5 w-full md:w-1/2 md:pe-7 h-full"
        @mouseenter="toggle(index)"
        @mouseleave="toggleOut(index)"
      >
        <nuxt-link :to="localePath(`/${service.link}`)" class="no-underline">
          <div
            class="text-center w-full h-full rounded-2xl border border-border-2 hover:border-yellow border-solid bg-secondary hover:bg-yellow px-9 py-[1.625rem] md:p-8"
          >
            <div>
              <img
                :src="require(`~/assets/images/icons/${service.image}.svg`)"
                alt="header"
                class="mb-0 pb-0"
              />
              <h1
                class="text-lg sm:text-xl font-bold leading-8 pt-8 pb-3 text-text-8 my-0"
              >
                {{ service.title }}
              </h1>
              <p
                class="leading-6 text-sm font-medium mb-8 md:mb-[3.25rem] text-text-7"
              >
                {{ service.data }}
              </p>
            </div>
            <span
              class="text-center no-underline border-none text-primary font-semibold text-sm"
            >
              {{ $t("shared.readMore") }}
              <img
                :class="['ms-2', { 'rotate-y-180': isRTL }]"
                :src="
                  load === index
                    ? require('~/assets/images/icons/arrow-xl.svg')
                    : require('~/assets/images/icons/leftArrow.svg')
                "
                alt="arrow"
              />
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "OurServiceHome",
  data() {
    return {
      load: null,
      data: null,
    }
  },
  computed: {
    ...mapState("home", {
      services: (state) => {
        return state.services.filter(
          (item) => item.link !== "digital-transformation"
        )
      },
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    toggle(i) {
      this.load = i
    },
    toggleOut(key) {
      this.load = null
    },
  },
}
</script>
