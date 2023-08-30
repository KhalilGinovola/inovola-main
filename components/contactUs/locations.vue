<template>
  <div>
    <div class="text-center">
      <h2 class="text-text-5 sm:leading-7 text-[2.75rem]">
        {{ $t("contactUs.our") }}
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-bg-lg2.svg')] bg-no-repeat bg-center px-2"
        >
          {{ $t("contactUs.locations") }}
        </span>
      </h2>
      <div class="flex justify-center">
        <p
          class="text-text-7 leading-[2.25rem] text-base max-w-[632px] mt-0 mb-5"
        >
          {{ $t("contactUs.happyToServe") }}
        </p>
      </div>
    </div>
    <div class="locations mt-12">
      <TabView class="tabview-custom">
        <TabPanel>
          <template #header>
            <div
              class="bg-[url('~/assets/images/backgrounds/Maps-eua.png')] bg-no-repeat bg-center py-14 px-20 w-[260px] md:w-[295px] xl:w-full md:px-32 rounded-xl bg-cover flex justify-center items-center"
            >
              {{ $t("forms.AUE") }}
            </div>
          </template>
          <EmirateInfo />
          <EmirateMap />
        </TabPanel>
        <TabPanel>
          <template #header>
            <div
              class="bg-[url('~/assets/images/backgrounds/Maps-uk.jpg')] bg-no-repeat bg-center py-14 px-20 w-[260px] md:w-[295px] xl:w-full md:px-32 rounded-xl bg-cover flex justify-center items-center"
            >
              <span>{{ $t("forms.Uk") }}</span>
            </div>
          </template>
          <EnglandInfo />
          <EnglandMap />
        </TabPanel>

        <TabPanel>
          <template #header>
            <div
              class="bg-[url('~/assets/images/backgrounds/Maps-egypt.jpg')] bg-no-repeat bg-center py-14 px-20 w-[260px] md:w-[295px] xl:w-full md:px-32 rounded-xl bg-cover flex justify-center items-center"
            >
              <span>{{ $t("forms.Egypt") }}</span>
            </div>
          </template>
          <EgyptInfo />
          <EgyptMap />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import EmirateInfo from "./emirateInfo.vue"
import EnglandInfo from "./englandInfo.vue"
import EgyptInfo from "./egyptInfo.vue"
import EmirateMap from "./emirateMap.vue"
import EnglandMap from "./englandMap.vue"
import EgyptMap from "./egyptMap.vue"
export default {
  name: "CompanyLocations",
  components: {
    EmirateInfo,
    EnglandInfo,
    EgyptInfo,
    EmirateMap,
    EnglandMap,
    EgyptMap,
  },
}
</script>
