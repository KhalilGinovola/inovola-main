<template>
  <div class="container">
    <div class="flex flex-col lg:flex-row">
      <div
        class="flex mb-5 sm:mb-0 flex-col w-full lg:w-1/2 bg-[url('~/assets/images/backgrounds/MobileDevelopment.svg')] bg-no-repeat bg-top bg-contain"
      >
        <h4 class="text-2xl leading-8 font-bold mb-0 mt-12 text-text">
          {{ $t("devTeam.MobileDevelopment") }}
        </h4>
        <p
          class="max-w-lg leading-5 sm:leading-6 text-sm sm:text-base font-medium text-text-11"
        >
          {{ $t("devTeam.MobileDevelopmentDesc") }}
        </p>
        <div class="flex flex-wrap">
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
      <div class="w-full lg:w-1/2 flex flex-wrap justify-center">
        <div class="flex flex-col max-w-min self-center">
          <div
            class="flex justify-center items-center min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[1].img"
              loading="lazy"
              alt="development"
            />
          </div>
          <div
            class="flex justify-center items-center min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[3].img"
              loading="lazy"
              alt="development"
            />
          </div>
        </div>
        <div class="flex flex-col max-w-min self-center">
          <div
            class="flex justify-center items-center min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[2].img"
              loading="lazy"
              alt="development"
            />
          </div>
        </div>

        <div class="flex flex-col max-w-min self-end">
          <div
            class="flex justify-center items-end min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[0].img"
              loading="lazy"
              alt="development"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileDevelopment",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
