<template>
  <div class="offers mt-[4.25rem] sm:mt-[5.25rem]">
    <div class="container">
      <div class="mb-12">
        <h2
          class="w-full mx-auto lg:w-2/3 leading-6 md:leading-[3rem] text-[1.5rem] md:text-[2.5rem] font-bold text-center text-text-5 mb-0"
        >
          {{ $t("OurTeam.heading") }}
          <span
            class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-2"
            >{{ $t("OurTeam.secondHeading") }}</span
          >
        </h2>
        <p
          class="max-w-[732px] text-sm sm:text-base font-medium text-text-7 mx-auto text-center mt-4 leading-7"
        >
          {{ $t("OurTeam.description") }}
        </p>
      </div>
      <section
        class="grid xl:grid-cols-4 md:grid-cols-2 pt-5 mb-0 pb-0 sm:pt-12 m-0 gap-x-[1.875rem] gap-y-[2.875rem]"
      >
        <div
          v-for="(team, memberIndex) in displayedMembers"
          :key="memberIndex"
          :class="[
            'mb-[1.875rem] relative rounded-lg border-solid border border-border-4',
            { 'border-border-5': load === memberIndex },
          ]"
          @mouseenter="toggle(memberIndex)"
          @mouseleave="toggleOut(memberIndex)"
        >
          <div
            :class="[
              'rounded-bl-[6.25rem] rounded-br-[6.25rem] -translate-x-2/4 -top-0.5 left-1/2 z-3 border-secondary w-[6.25rem] h-[3.125rem] absolute border-b-solid border-solid border-b border-b-border-4 border-x border-x-solid border-x-border-4',
            ]"
          >
            <div
              class="-translate-y-[50%] top-0 rounded-full absolute w-[6.5rem]"
            >
              <img
                :class="[
                  'grayScale100 rounded-full object-cover ml-1 w-[5.625rem] h-[5.625rem] border-2 border-solid border-border-5 outline outline-4 outline-solid outline-secondary',
                  {
                    'mr-1': isRTL,
                  },
                  {
                    'grayScale0 scale-105': load === memberIndex,
                  },
                ]"
                :src="team.photo"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div class="px-12 pt-12 pb-8 text-center">
            <h4 class="text-lg font-semibold mt-6 mb-1.5 leading-6">
              {{ team.name }}
            </h4>
            <span class="text-sm font-medium text-text-7 mb-0 pb-0">{{
              team.title
            }}</span>
          </div>
        </div>
      </section>
      <div
        v-if="teams.length >= membersArrayLength"
        class="flex justify-center items-center m-0"
      >
        <Button
          class="transition duration-200 ease-out hover:bg-black hover:text-white hover:border-white primary-outlined p-button-outlined rounded py-[1.125rem] me-12 mt-2 sm:mt-5 text-text font-semibold"
          aria-label="Button"
          @click="showMoreMembers"
          @mouseover="toggleColor"
          @mouseleave="toggleColorToBlack"
        >
          <span class="me-1">{{ $t("shared.showMore") }}</span>
          <svg
            class="chevron-ups"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4.41797L7.5 7.91797L11 4.41797"
              :stroke="chevronColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 8.41797L7.5 11.918L11 8.41797"
              :stroke="chevronColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "OurTeam",
  data() {
    return {
      membersArrayLength: 12,
      chevronColor: "black",
      load: null,
    }
  },
  computed: {
    ...mapState("forDeveloper", {
      teams: (state) => state.teams,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
    displayedMembers() {
      return this.teams.slice(0, this.membersArrayLength)
    },
  },
  methods: {
    showMoreMembers() {
      if (this.membersArrayLength <= this.displayedMembers.length) {
        this.membersArrayLength += 8
      }
    },

    toggleColor() {
      this.chevronColor = "white"
    },
    toggleColorToBlack() {
      this.chevronColor = "black"
    },
    toggle(i) {
      this.load = i
    },
    toggleOut(key) {
      this.load = null
    },
  },
}
</script>
<style lang="scss" scoped>
.grayScale100 {
  filter: grayscale(100) !important;
}
.grayScale0 {
  filter: grayscale(0) !important;
}
</style>
