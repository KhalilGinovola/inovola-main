<template>
  <div class="mb-[6.5rem] mt-0 md:mt-24">
    <div class="text-center">
      <h2
        class="text-text-5 leading-7 sm:leading-[3.25rem] text-[1.75rem] sm:text-[2.75rem] pb-4 mb-0 font-bold sm:font-extrabold"
      >
        {{ $t("services.Explore") }}
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-2"
        >
          {{ $t("services.Services") }}
        </span>
      </h2>
      <div class="flex justify-center">
        <p
          class="text-text-7 leading-5 sm:leading-7 text-sm sm:text-base max-w-[532px] mt-0 mb-5 pt-0"
        >
          {{ $t("services.provideServices") }}
        </p>
      </div>
    </div>
    <div class="flex flex-col flex-wrap md:flex-row">
      <div
        v-for="(service, i) in services"
        :key="i"
        class="card mt-5 w-full md:w-1/2 xl:w-1/3 md:pe-7 h-full"
      >
        <div
          class="w-full h-full rounded-2xl border border-primary border-solid shadow-lg shadow-primary/50 bg-secondary p-8"
        >
          <div>
            <img
              :src="require(`~/assets/images/icons/${service.image}.svg`)"
              alt="header"
            />
            <h1
              class="text-lg sm:text-xl font-bold leading-8 pt-8 pb-3 text-text-8"
            >
              {{ service.title }}
            </h1>
            <p class="leading-6 text-sm font-medium mb-[3.25rem] text-text-7">
              {{ service.data }}
            </p>
          </div>
          <ViewMoreButton :link="`/${service.link}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import ViewMoreButton from "~/components/shared/ViewMoreButton.vue"

export default {
  name: "OurServices",
  components: {
    ViewMoreButton,
  },
  computed: {
    ...mapState("home", {
      services: (state) => state.services,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
