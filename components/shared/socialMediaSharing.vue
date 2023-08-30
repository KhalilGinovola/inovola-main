<template>
  <div
    class="social-media container flex flex-wrap justify-center items-center px-5"
  >
    <p class="my-0 me-6 text-text-14">{{ $t("shared.share") }}:</p>
    <div class="flex items-center mt-2 md:mt-0">
      <div
        class="me-3 px-4 py-2 text-sm text-text flex items-center whitespace-nowrap border-l border-text border-solid rounded-[40px] cursor-pointer hover:bg-primary hover:text-secondary"
        @click="copyLink"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <img
          class="me-1"
          :src="
            hovered
              ? require('~/assets/images/icons/copy-light.svg')
              : require('~/assets/images/icons/copy.svg')
          "
          alt="copy image"
          width="20px"
          height="20px"
        />
        {{ $t("shared.copyLink") }}
      </div>
      <div
        v-for="(link, index) in socialLinks"
        :key="index"
        @mouseenter="toggle(index)"
        @mouseleave="toggleOut(index)"
      >
        <ShareNetwork
          :network="`${link.title}`"
          :url="urlPath"
          :title="title"
          hashtags="inovola"
        >
          <img
            class="me-2"
            :src="
              load === index
                ? require(`~/assets/images/icons/${link.darkTitle}.svg`)
                : require(`~/assets/images/icons/${link.title}.svg`)
            "
            :alt="`${link.title} image`"
            width="36px"
            height="36px"
          />
        </ShareNetwork>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaSharing",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      socialLinks: [
        { title: "facebook", darkTitle: "facebook-dark" },
        { title: "twitter", darkTitle: "twitter-dark" },
        { title: "linkedin", darkTitle: "linkedin-dark" },
      ],
      load: null,
      hovered: false,
    }
  },
  computed: {
    urlPath() {
      if (process.client) {
        return `${window.location.origin}${this.$route.fullPath}`
      }
      return ""
    },
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(
        `${window.location.origin}${this.$route.fullPath}`
      )
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
