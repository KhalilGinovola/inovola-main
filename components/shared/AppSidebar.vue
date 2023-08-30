<template>
  <Sidebar
    :visible.sync="isBarVisible"
    :base-z-index="1000"
    class="bg-offWhite"
    :position="isRTL ? 'right' : 'left'"
  >
    <NuxtLink
      :to="localePath('/')"
      class="mb-5 block no-underline font-medium text-start text-sm text-text-4"
    >
      {{ $t("header.home") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/for-companies')"
      class="mb-5 block no-underline font-medium text-start text-sm text-text-4"
    >
      {{ $t("footer.forCompanies") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/for-developers')"
      class="mb-5 block no-underline font-medium text-start text-sm text-text-4"
    >
      {{ $t("footer.forDevelopers") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/success-stories')"
      class="mb-5 block no-underline font-medium text-start text-sm text-text-4"
    >
      {{ $t("footer.successStories") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/remote-jobs')"
      class="mb-5 block no-underline font-medium text-start text-sm text-text-4"
    >
      {{ $t("footer.remoteJobs") }}
    </NuxtLink>

    <div class="flex">
      <Button
        class="primary-outlined p-button-outlined mb-5 block w-full"
        aria-label="Button"
        @click="openJobsPage"
      >
        {{ $t("header.joinAsDeveloper") }}
      </Button>
    </div>
    <div class="flex">
      <Button
        class="primary w-full justify-center"
        aria-label="Button"
        @click="openContactUs"
      >
        {{ $t("footer.contactUs") }}
      </Button>
    </div>
  </Sidebar>
</template>

<script>
export default {
  name: "AppSidebar",
  props: {
    isSidebarVisible: {
      type: Boolean,
      default: false,
    },
    setIsSidebarVisible: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    isBarVisible: {
      set(newValue) {
        if (newValue !== this.isSidebarVisible) {
          this.setIsSidebarVisible(newValue)
        }
      },
      get() {
        return this.isSidebarVisible
      },
    },
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    openJobsPage() {
      this.$router.push(this.localePath("/remote-jobs"))
    },
    openContactUs() {
      this.$router.push(this.localePath("/contact-us"))
    },
  },
}
</script>
