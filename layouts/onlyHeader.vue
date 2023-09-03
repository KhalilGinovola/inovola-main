<template>
  <div :key="lang" class="min-h-screen">
    <app-header />
    <Nuxt />
    <ScrollTop aria-label="Top" :icon="'Top'">Top</ScrollTop>
    <success-fail-message />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { handleLanguageChange } from "@/utils/langaugeChanger"
import SuccessFailMessage from "~/components/shared/SuccessFailMessage.vue"
import AppHeader from "~/components/shared/Header.vue"
import { GET_SEO, GET_JOBS } from "~/utils/storeActions"

export default {
  name: "OnlyHeaderLayout",
  components: {
    SuccessFailMessage,
    AppHeader,
  },
  head() {
    return {
      bodyAttrs: {
        class: "overflow-hidden",
      },

      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seo.meta_description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.seo.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seo.meta_keywords.join(", "),
        },
      ],
    }
  },
  computed: {
    ...mapState("common", {
      seo: (state) => state.seo,
    }),
    lang() {
      return this.$i18n.locale
    },
    isBlog() {
      return (
        this.$route.fullPath.includes("/blogs/") && this.$route?.params?.id > 0
      )
    },
  },
  mounted() {
    this.GET_SEO()
    this.$store.dispatch("jobs/" + GET_JOBS)
  },
  created() {
    if (process.client) {
      // const lang = localStorage?.getItem("lang") || this?.$i18n?.locale || "en"
      handleLanguageChange(this, "en")
    }
  },
  methods: {
    ...mapActions("common", [GET_SEO]),
  },
}
</script>
<style lang="scss">
.home-page {
  overflow: hidden;
}
</style>
