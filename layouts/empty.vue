<template>
  <div :key="lang" class="min-h-screen">
    <Nuxt />
    <success-fail-message />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { handleLanguageChange } from "@/utils/langaugeChanger"
import SuccessFailMessage from "~/components/shared/SuccessFailMessage.vue"
import { GET_SEO } from "~/utils/storeActions"

export default {
  name: "EmptyLayout",
  components: {
    SuccessFailMessage,
  },
  head() {
    return {
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
        this.$route.fullPath.includes("/blogs/") && this.$route.params?.id > 0
      )
    },
    isEvent() {
      return (
        this.$route.fullPath.includes("/events/") && this.$route.params?.id > 0
      )
    },
  },
  created() {
    if (process.client) {
      // const lang = localStorage?.getItem("lang") || this?.$i18n?.locale || "en"
      handleLanguageChange(this, "en")
    }

    this.GET_SEO()
  },
  methods: {
    ...mapActions("common", [GET_SEO]),
  },
}
</script>
