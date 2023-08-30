<template>
  <div
    :class="
      isRTL
        ? 'social-media mt-5 md:mt-0 flex md:flex-col items-center w-max md:absolute md:top-[12rem]  left-[-5%] md:left-[-7%] lg:left-[-3%] xl:left-[-5%] z-20'
        : 'social-media mt-5 md:mt-0 flex md:flex-col items-center w-max md:absolute md:top-[12rem] right-[-5%] md:right-[-7%] lg:right-[-6%] xl:right-[-5%] z-20'
    "
  >
    <div v-for="(link, index) in links" :key="index">
      <a
        :href="link.link"
        target="_blank"
        @mouseenter="toggle(index)"
        @mouseleave="toggleOut(index)"
      >
        <img
          class="me-2"
          :src="
            load === index
              ? require(`~/assets/images/icons/${link.darkTitle}.svg`)
              : require(`~/assets/images/icons/${link.title}.svg`)
          "
          alt="icons"
          width="36px"
          height="36px"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "AsideSocialMedia",
  data() {
    return {
      load: null,
    }
  },
  computed: {
    ...mapState("home", {
      socialLinks: (state) => {
        return state.socialLinks
      },
    }),
    links() {
      return [
        {
          title: "facebook",
          darkTitle: "facebook-dark",
          link: this.socialLinks.facebook,
        },
        {
          title: "linkedin",
          darkTitle: "linkedin-dark",
          link: this.socialLinks.linkedin,
        },
      ]
    },
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
