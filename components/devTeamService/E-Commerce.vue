<template>
  <div
    :class="[
      `container bg-[url('~/assets/images/backgrounds/E-Commerce.svg')] bg-no-repeat bg-right-bottom`,
      {
        'bg-left-bottom': isRTL,
      },
    ]"
  >
    <div class="flex flex-col-reverse xl:flex-row">
      <div
        class="w-full lg:w-1/2 grid grid-rows-1 grid-flow-row md:grid-rows-3 md:grid-flow-col md:gap-2"
      >
        <div class="row-start-1 row-span-2 m-1">
          <img
            class="max-w-full"
            :src="data[2].img"
            loading="lazy"
            alt="development"
          />
        </div>
        <div class="row-start-2 row-span-2 m-1">
          <img
            class="max-w-full"
            :src="data[1].img"
            loading="lazy"
            alt="development"
          />
        </div>
        <div class="row-start-1 row-end-4 m-1">
          <img
            class="max-w-full"
            :src="data[0].img"
            loading="lazy"
            alt="development"
          />
        </div>
      </div>
      <div class="flex w-full lg:w-1/2">
        <div class="flex flex-col md:ps-20">
          <h4 class="text-2xl leading-8 font-bold m-0 text-text">
            {{ $t("devTeam.ECommerce") }}
          </h4>
          <p
            class="max-w-lg leading-5 sm:leading-6 text-sm sm:text-base font-medium text-text-11"
          >
            {{ $t("devTeam.ECommerceDesc") }}
          </p>
          <div class="flex flex-wrap mb-6 sm:mb-0">
            <div
              v-for="language in data"
              :key="language.id"
              class="flex items-center text-center border border-solid border-text-5 rounded-lg m-2"
            >
              <p
                class="whitespace-nowrap text-base font-semibold leading-5 text-text-5 px-3 py-0"
              >
                {{ language.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ECommerceDevelopment",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
