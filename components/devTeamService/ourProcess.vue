<template>
  <div>
    <div class="offers mt-12 bg-offWhite">
      <div class="container pt-14 sm:pt-[4.5rem] pb-3 sm:pb-20">
        <div class="mb-12">
          <h2
            class="w-full mx-auto pt-0 mt-0 lg:w-2/3 leading-6 md:leading-[3.25rem] text-[1.5rem] md:text-[2.5rem] font-bold text-center text-text-5 mb-0"
          >
            {{ $t("services.our") }}
            <span
              class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-2"
            >
              {{ $t("services.ourProcess") }}
            </span>
          </h2>
          <p
            class="max-w-[912px] text-sm sm:text-lg font-medium text-text-7 mx-auto text-center mt-4"
          >
            {{ $t("services.ourProcessDesc") }}
          </p>
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="item in devTeam?.digitalProcess"
            :key="item.id"
            class="w-full md:w-1/2 xl:w-1/3 md:pe-7 h-full"
          >
            <div class="mb-12 sm:mb-0">
              <process-card :item="item"></process-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import ProcessCard from "../servcies/processCard.vue"

export default {
  name: "OurProcess",
  components: {
    ProcessCard,
  },
  computed: {
    ...mapState("services", {
      devTeam: (state) => state.devTeam,
    }),
  },
}
</script>
