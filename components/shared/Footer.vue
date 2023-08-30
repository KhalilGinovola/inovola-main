<template>
  <footer
    :class="[{ 'bg-offWhite': isBgOffwhite }, { 'bg-white': !isBgOffwhite }]"
  >
    <div class="container">
      <hr class="mb-20 mt-0" />
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-1/4">
          <ImagePreview
            :src="require('~/assets/images/logo/logo.svg')"
            alt="Inovola"
          />
          <p class="text-start text-sm text-text-1 font-medium mb-4 mt-7">
            {{ $t("footer.findUs") }}
          </p>

          <div class="w-full flex">
            <img
              class="me-3 cursor-pointer"
              :src="
                fbActive
                  ? require('~/assets/images/icons/facebook-dark.svg')
                  : require('~/assets/images/icons/facebook.svg')
              "
              width="32px"
              height="32px"
              alt="facebook"
              @mouseenter="fbActive = true"
              @mouseleave="fbActive = false"
              @click="openLink(socialLinks.facebook)"
            />
            <img
              class="cursor-pointer"
              :src="
                linkedActive
                  ? require('~/assets/images/icons/linkedin-dark.svg')
                  : require('~/assets/images/icons/linkedin.svg')
              "
              width="32px"
              height="32px"
              alt="linkedin"
              @mouseleave="linkedActive = false"
              @mouseenter="linkedActive = true"
              @click="openLink(socialLinks.linkedin)"
            />
          </div>
        </div>

        <div class="w-full lg:w-1/4 mt-8 lg:mt-0">
          <p class="text-start text-lg text-text-1 font-semibold mb-5 mt-0">
            {{ $t("footer.hotLinks") }}
          </p>

          <NuxtLink
            :to="localePath('/for-companies')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.forCompanies") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/for-developers')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.forDevelopers") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/success-stories')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.successStories") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/remote-jobs')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.remoteJobs") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/contact-us')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.contactUs") }}
          </NuxtLink>
        </div>

        <div class="w-full lg:w-1/4 mt-8 lg:mt-0">
          <p class="text-start text-lg text-text-1 font-semibold mb-5 mt-0">
            {{ $t("footer.services") }}
          </p>

          <NuxtLink
            :to="localePath('/digital-transformation')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.digitalTransformation") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/dev-team-as-service')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.devTeamService") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/hr-as-service')"
            class="block no-underline text-start text-base text-text-2 mb-3 font-normal"
          >
            {{ $t("footer.hRService") }}
          </NuxtLink>
        </div>

        <div class="w-full lg:w-1/4 mt-2 lg:mt-0">
          <p class="text-start text-lg text-text-1 font-semibold mb-5 mt-0">
            {{ $t("footer.contactUs") }}
          </p>

          <p class="mt-0 text-start text-base text-text-2 mb-5 font-normal">
            {{ $t("footer.siteEmail") }}
          </p>

          <p class="mt-0 text-start text-base text-text-1 mb-3 font-medium">
            {{ $t("footer.callOn") }}
          </p>
          <p
            class="mt-0 text-start text-base text-text-2 mb-3 font-normal"
            dir="ltr"
          >
            {{ $t("footer.sitePhone1") }}
          </p>

          <p
            class="mt-0 text-start text-base text-text-2 mb-3 font-normal"
            dir="ltr"
          >
            {{ $t("footer.sitePhone4") }}
          </p>
          <p
            class="mt-0 text-start text-base text-text-2 mb-3 font-normal"
            dir="ltr"
          >
            {{ $t("footer.sitePhone5") }}
          </p>
        </div>
      </div>

      <hr class="mt-16 mb-0" />
      <div class="pb-6">
        <p class="text-center text-base font-medium text-text-3 mt-6 mb-0">
          {{ $t("footer.rightsReserved") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "AppFooter",
  data() {
    return {
      fbActive: false,
      linkedActive: false,
    }
  },
  computed: {
    ...mapState("home", {
      socialLinks: (state) => {
        return state.socialLinks
      },
    }),
    isBgOffwhite() {
      return this.isHome || this.isBlogsPage
    },
    isHome() {
      return this.$route.fullPath === "/" || this.$route.fullPath === "/en"
    },
    isBlogsPage() {
      return this.$route.fullPath.includes("/blogs") && !this.$route.params?.id
    },
  },
  methods: {
    openLink(link) {
      if (link) {
        window.open(this.getLink(link), "_blank")
      }
    },
    getLink(link) {
      if (link?.length > 0) {
        if (link.startsWith("http")) {
          return link
        } else {
          return `//${link}`
        }
      }
    },
  },
}
</script>
