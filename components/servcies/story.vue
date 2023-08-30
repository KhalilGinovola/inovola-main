<template>
  <div class="container mb-0 sm:mb-[7rem]">
    <div
      class="flex justify-between items-center flex-col md:flex-row mt-12 sm:mt-[5.5rem] mb-0"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      <div>
        <h2
          class="pb-0 text-text-5 font-bold text-[1.75rem] sm:leading-[3.25rem] md:text-[2.75rem] m-0"
        >
          {{ $t("services.successStories") }}
        </h2>
        <p
          class="pt-0 mt-3 text-justify text-sm sm:text-base text-text-11 max-w-[32.5rem] leading-6 sm:leading-[1.625rem] font-medium"
        >
          {{ successDescription }}
        </p>
      </div>
      <nuxt-link
        class="self-end md:self-center no-underline border-none text-primary font-semibold leading-6 text-sm hidden md:block"
        :to="localePath('/success-stories')"
      >
        {{ $t("shared.showMore") }}
        <img
          :src="
            hovered
              ? require('~/assets/images/icons/arrow-xl.svg')
              : require('~/assets/images/icons/leftArrow.svg')
          "
          class="align-middle"
          :class="isRTL ? 'rotate-180' : ''"
          alt="leftArrow"
        />
      </nuxt-link>
    </div>
    <div class="mt-8">
      <div class="flex flex-wrap">
        <div
          v-for="story in successStories"
          :key="story.id"
          class="w-full md:w-1/2 break-inside-avoid border py-3 px-[0.9375rem] mb-0 sm:mb-3"
        >
          <nuxt-link
            class="no-underline"
            :to="localePath(`/success-stories/${story.id}`)"
          >
            <img
              class="max-w-full object-cover rounded-xl w-full h-[340px]"
              :src="
                story.photo
                  ? story.photo
                  : require('~/assets/images/backgrounds/inovola-video.png')
              "
              loading="lazy"
              alt="successStories"
            />
            <h2
              class="text-[2rem] font-semibold leading-10 text-text-1 py-0 mb-0 mt-5 truncate"
            >
              {{ story.title }}
            </h2>
            <p
              class="text-base font-medium leading-6 text-text-16 pt-0 mt-4 mb-0 pb-0"
            >
              {{ story.short_description }}
            </p>
          </nuxt-link>
        </div>
      </div>
      <div class="flex justify-center md:hidden mt-8 mb-[88px]">
        <Button
          class="primary-outlined p-button-outlined mb-5 font-semibold text-base leading-5 text-primary"
          aria-label="Button"
          @click="openSuccessStoriesPage"
        >
          {{ $t("shared.ShowMoreBlogs") }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StorySection",
  props: {
    successStories: {
      type: Array,
      default: () => [],
    },
    successDescription: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    openSuccessStoriesPage() {
      this.$router.push(this.localePath("/success-stories"))
    },
  },
}
</script>
