<template>
  <div
    class="container bg-[url('~/assets/images/backgrounds/BackendDevelopment.svg')] bg-no-repeat bg-top"
  >
    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col w-full lg:w-1/2 mb-5 sm:mb-0">
        <h4 class="text-2xl leading-8 font-bold m-0 text-text">
          {{ $t("devTeam.BackendDevelopment") }}
        </h4>
        <p
          class="max-w-lg landing-5 sm:leading-6 text-sm sm:text-base font-medium text-text-11 pt-0 pb-0 mb-0 mt-3 sm:mb-8"
        >
          {{ $t("devTeam.BackendDevelopmentDesc") }}
        </p>
        <div class="flex flex-wrap pt-0 mt-8 sm:mt-0">
          <div
            v-for="language in data"
            :key="language.id"
            class="flex items-center text-center border border-solid border-text-5 rounded-lg m-2 py-0"
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
              :src="data[0].img"
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
          <div
            class="flex justify-center items-center min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[7].img"
              loading="lazy"
              alt="development"
            />
          </div>
        </div>
        <div class="flex flex-col max-w-min self-center pb-7 lg:pb-12">
          <div
            class="flex justify-center items-center min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[5].img"
              loading="lazy"
              alt="development"
            />
          </div>
          <div
            class="flex justify-center items-center min-w-20 w-[5.5rem] sm:w-[6.5rem] md:w-[9.25rem] xl:w-[11.25rem] m-1"
          >
            <img
              class="max-w-full"
              :src="data[4].img"
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
  name: "BackendDevelopment",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
