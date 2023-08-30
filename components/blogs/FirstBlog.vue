<template>
  <div
    class="flex flex-wrap items-center mb-12"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="w-full lg:w-1/2">
      <img
        class="w-full max-h-[570px] rounded-lg object-cover"
        :src="
          blog.photo
            ? blog.photo
            : require('~/assets/images/backgrounds/inovola-video.png')
        "
        loading="lazy"
        alt="blog image"
      />
    </div>
    <div class="w-full lg:w-1/2 lg:ps-10 pt-2 mb-3">
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

      <p class="text-[32px] font-bold text-text-8 leading-8 mt-3 mb-6">
        {{ blog.title }}
      </p>

      <p class="text-lg text-text-6 mt-0 mb-10">
        {{ blogData }}
      </p>
      <nuxt-link
        class="no-underline border-none text-primary font-semibold text-sm flex items-center"
        :to="localePath(`/blogs/${blog.id}`)"
      >
        {{ $t("shared.readMore") }}
        <img
          :class="['ms-2', { 'rotate-y-180': isRTL }]"
          :src="
            hovered
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
  name: "FirstBlogs",
  props: {
    blog: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
  computed: {
    blogData() {
      return this.blog?.short_description?.length > 167
        ? this.blog.short_description.substr(0, 165) + "..."
        : this.blog.short_description
    },
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
