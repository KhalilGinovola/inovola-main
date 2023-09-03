<template>
  <div>
    <header
      :class="[
        'app-header h-[100px] flex items-center fixed w-full z-[1000]',
        { 'bg-offWhite': isHome },
        { 'bg-white': !isHome },
      ]"
    >
      <div class="container">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex flex-wrap items-center">
            <div class="cursor-pointer me-0 sm:me-12" @click="openHome">
              <img
                :src="require('~/assets/images/logo/logo.svg')"
                alt="Inovola"
                class="h-10"
              />
            </div>

            <NuxtLink
              :to="localePath('/')"
              class="me-4 no-underline font-medium text-start text-sm text-text-4 mb-0 hidden xl:block"
            >
              {{ $t("header.home") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/for-companies')"
              class="me-4 no-underline font-medium text-start text-sm text-text-4 mb-0 hidden xl:block"
            >
              {{ $t("footer.forCompanies") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/for-developers')"
              class="me-4 no-underline font-medium text-start text-sm text-text-4 mb-0 hidden xl:block"
            >
              {{ $t("footer.forDevelopers") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/success-stories')"
              class="me-4 no-underline font-medium text-start text-sm text-text-4 mb-0 hidden xl:block"
            >
              {{ $t("footer.successStories") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/remote-jobs')"
              class="me-4 no-underline font-medium text-start text-sm text-text-4 mb-0 hidden xl:block"
            >
              {{ $t("footer.remoteJobs") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/jobs')"
              class="me-4 no-underline font-medium text-start text-sm text-text-4 mb-0 hidden xl:block"
            >
              {{ $t("footer.remoteJobs") }}
            </NuxtLink>
          </div>

          <div class="flex flex-wrap items-center">
            <!-- <Button
              :label="$i18n.locale == 'ar' ? 'en' : 'ar'"
              class="p-button-text text-primary"
              aria-label="Button"
              @click="changeLanguage"
            /> -->
            <Button
              class="p-button-text block xl:hidden"
              aria-label="Button"
              @click="setIsSidebarVisible(true)"
            >
              <i class="pi pi-bars text-2xl text-primary"></i>
            </Button>
            <Button
              class="primary-outlined hidden xl:block p-button-outlined me-4 hover:bg-primary hover:text-secondary"
              aria-label="Button"
              @click="openJobsPage"
            >
              {{ $t("header.joinAsDeveloper") }}
            </Button>
            <Button
              class="primary hidden xl:block hover:bg-offWhite hover:text-primary"
              aria-label="Button"
              @click="openContactUs"
            >
              {{ $t("footer.contactUs") }}
            </Button>
          </div>
        </div>
      </div>
    </header>
    <AppSidebar
      :is-sidebar-visible="isSidebarVisible"
      :set-is-sidebar-visible="setIsSidebarVisible"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
import { handleLanguageChange } from "@/utils/langaugeChanger"
import AppSidebar from "@/components/shared/AppSidebar.vue"

export default {
  name: "AppHeader",
  components: {
    AppSidebar,
  },
  data() {
    return {
      isSidebarVisible: false,
    }
  },
  computed: {
    ...mapState("common", {
      generalSetting: (state) => state.generalSetting,
    }),
    isHome() {
      return this.$route.fullPath === "/" || this.$route.fullPath === "/en"
    },
  },
  methods: {
    changeLanguage() {
      // const newLang = this.$i18n.locale === "en" ? "en" : "en"

      handleLanguageChange(this, "en")
    },
    setIsSidebarVisible(value) {
      this.isSidebarVisible = value
    },
    openHome() {
      this.$router.push(this.localePath("/"))
    },
    openJobsPage() {
      this.$router.push(this.localePath("/remote-jobs"))
    },
    openContactUs() {
      this.$router.push(this.localePath("/contact-us"))
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header.eventHeader {
  z-index: 0 !important;
  .hidden {
    visibility: visible !important;
  }
}
</style>
