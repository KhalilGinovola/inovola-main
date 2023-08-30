<template>
  <div class="container sm:mb-[7rem]">
    <div class="mt-12 sm:mt-20">
      <div class="flex flex-wrap justify-center">
        <div
          v-for="(story, index) in successStories"
          :key="story.id"
          class="w-full md:w-1/2 break-inside-avoid border p-3 mb-11 py-0 sm:mb-12 px-[0.9375rem]"
          @mouseenter="toggle(index)"
          @mouseleave="toggleOut(index)"
        >
          <img
            class="max-w-[15.625rem] sm:max-w-full w-full h-[240px] sm:h-[340px] object-cover rounded-[1.25rem]"
            :src="story.photo"
            loading="lazy"
            alt="successStories"
          />
          <h2
            class="text-xl md:text-[2rem] font-semibold leading-8 md:leading-10 text-text-1 py-0 mb-0 mt-4 truncate"
          >
            {{ story.title }}
          </h2>
          <p
            class="text-sm sm:text-base font-medium text-text-16 pt-0 my-[0.875rem] leading-5"
          >
            {{ story.short_description }}
          </p>
          <nuxt-link
            class="mb-0 pb-0 self-end md:self-center no-underline border-none text-primary font-medium md:font-semibold leading-6 text-sm"
            :to="localePath(`/success-stories/${story.id}`)"
          >
            {{ $t("shared.showMore") }}
            <img
              :src="
                load === index
                  ? require('~/assets/images/icons/arrow-xl.svg')
                  : require('~/assets/images/icons/leftArrow.svg')
              "
              :class="['align-middle', { 'rotate-180': isRTL }]"
              alt="leftArrow"
            />
          </nuxt-link>
        </div>
      </div>
      <div v-if="spinner" class="text-center my-4">
        <ProgressSpinner />
      </div>

      <div class="flex justify-center items-center m-0">
        <Button
          v-if="showMoreDetails"
          class="transition duration-200 ease-out hover:bg-black hover:text-white hover:border-white primary-outlined p-button-outlined rounded py-[1.125rem] mt-0 sm:mt-4 text-text font-semibold mb-[6rem] sm:mb-0"
          aria-label="Button"
          @click="showMoreSuccessStories"
          @mouseenter="toggleColor"
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
import ProgressSpinner from "primevue/progressspinner"
export default {
  name: "StoriesSuccess",
  components: {
    ProgressSpinner,
  },
  emits: ["get-data"],
  data() {
    return {
      filterdSuccessStories: [],
      displayedSuccessStories: [],
      VisibleSuccessStoriesCount: 0,
      SuccessStoriesArrayLength: 8,
      page: 1,
      spinner: false,
      showMoreDetails: true,
      load: null,
      chevronColor: "black",
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
    ...mapState("successStories", {
      successStories: (state) => state.successStories,
    }),
  },
  mounted() {
    this.IncreaseSuccessStories()
  },
  methods: {
    showMoreSuccessStories() {
      this.page++
      this.$emit("get-data", this.page)
      this.spinner = true
      setTimeout(() => {
        this.getItems()
        this.spinner = false
      }, 2000)
    },
    getItems() {
      this.SuccessStoriesArrayLength += 10
      this.displayedSuccessStories = this.filterdSuccessStories.slice(
        0,
        this.SuccessStoriesArrayLength
      )
      if (this.successStories[10 * this.page - 1] === undefined) {
        this.showMoreDetails = false
      }
    },
    IncreaseSuccessStories() {
      this.filterdSuccessStories = this.successStories
      this.VisibleSuccessStoriesCount = this.filterdSuccessStories.length
      this.displayedSuccessStories = this.filterdSuccessStories.slice(
        0,
        this.SuccessStoriesArrayLength
      )
    },
    toggle(i) {
      this.load = i
    },
    toggleOut(key) {
      this.load = null
    },
    toggleColor() {
      this.chevronColor = "white"
    },
    toggleColorToBlack() {
      this.chevronColor = "black"
    },
  },
}
</script>
