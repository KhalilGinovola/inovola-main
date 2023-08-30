<template>
  <div
    v-if="blog"
    class="mb-2 sm:mb-14 hover:bg-yellow rounded-lg pb-5"
    @mouseenter="toggle(index)"
    @mouseleave="toggleOut(index)"
  >
    <div class="w-full">
      <img
        class="w-full h-[240px] rounded-lg object-cover"
        :src="
          blog.photo
            ? blog.photo
            : require('~/assets/images/backgrounds/inovola-video.png')
        "
        loading="lazy"
        alt="blog image"
      />
    </div>
    <div class="w-full mt-6 ps-6 pe-8">
      <div class="flex flex-wrap">
        <div class="flex text-sm text-text-6 me-4 items-center">
          <img
            class="me-2"
            :src="require('~/assets/images/icons/profile-circle.svg')"
            width="15px"
            height="15px"
            alt="profile image"
          />
          {{ blog.author.name }}
        </div>
        <div class="flex text-sm text-text-6 items-center">
          <img
            class="me-2"
            :src="require('~/assets/images/icons/Calendar.svg')"
            width="18px"
            height="18px"
            alt="Calendar image"
          />
          {{ $moment(blog.publish_date).format("MMM DD, yyyy") }}
        </div>
      </div>

      <p class="text-xl font-bold text-text-8 leading-8 mt-3 mb-6">
        {{ blog.title }}
      </p>
      <nuxt-link
        class="no-underline border-none text-primary font-semibold text-sm flex items-center"
        :to="localePath(`/blogs/${blog.id}`)"
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
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComponent",
  props: {
    blog: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      load: null,
    }
  },
  computed: {
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
