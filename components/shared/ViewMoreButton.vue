<template>
  <nuxt-link
    class="no-underline border-none text-primary font-semibold text-sm flex items-center"
    :to="localePath(link)"
  >
    {{ $t("shared.readMore") }}
    <img
      :class="['ms-2', { 'rotate-y-180': isRTL }]"
      :src="require('~/assets/images/icons/leftArrow.svg')"
      alt="arrow"
    />
  </nuxt-link>
</template>
<script>
export default {
  name: "ViewMoreButton",
  props: {
    link: {
      type: String,
      default: "/",
    },
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
}
</script>
