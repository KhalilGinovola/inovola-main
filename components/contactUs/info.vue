<template>
  <div>
    <h1
      class="mb-3 mt-0 text-3xl sm:leading-[3.75rem] sm:text-5xl font-semibold text-text max-width-[258px] sm:max-w-[305px] relative"
    >
      {{ $t("contactUs.contactUsHeading") }}
      <img
        :class="[
          'absolute top-[-77px]',
          { 'right-[-15px] md:right-[-80px]': !isRTL },
          { 'rotate-y-180 left-[-4px] md:left-[-80px]': isRTL },
        ]"
        :src="require('~/assets/images/icons/contactUsStard.svg')"
        alt="contactUs image"
      />
    </h1>
    <p
      class="mt-0 mb-2 text-text-3 text-sm sm:text-base font-medium leading-5 sm:leading-7"
    >
      {{ $t("contactUs.contactUsSubheading") }}
    </p>
    <p
      class="my-0 text-text-3 text-sm sm:text-base font-medium leading-5 sm:leading-7"
    >
      {{ $t("contactUs.contactUsSubheading2") }}
    </p>
    <p
      class="mt-2 mb-10 text-text-3 text-sm sm:text-base font-medium leading-5 sm:leading-7"
    >
      {{ $t("contactUs.contactUsSubheading3") }}
    </p>

    <Divider />

    <p class="mt-10 mb-3 text-text-3">{{ $t("contactUs.dmUs") }}:</p>
    <p class="mt-0 mb-6 text-lg text-text-1">
      {{ $t("footer.siteEmail") }}
    </p>

    <p class="mt-0 mb-7 text-lg text-text-3">{{ $t("contactUs.callUsOn") }}:</p>
    <p class="mt-0 text-start text-lg text-text-1 mb-5" dir="ltr">
      {{ $t("footer.sitePhone1") }}
    </p>

    <p class="mt-0 text-start text-lg text-text-1 mb-7" dir="ltr">
      {{ $t("footer.sitePhone4") }}
    </p>
    <p class="mt-0 text-start text-lg text-text-1 mb-5" dir="ltr">
      {{ $t("footer.sitePhone5") }}
    </p>

    <p class="mt-0 mb-7 text-lg text-text-3">{{ $t("contactUs.findUs") }}:</p>
    <p class="mt-0 mb-5 text-lg text-text-1">
      {{ $t("contactUs.location1") }}
    </p>
    <p class="mt-0 mb-5 text-lg text-text-1">
      {{ $t("contactUs.location2") }}
    </p>
    <p class="mt-0 mb-7 text-lg text-text-1">
      {{ $t("contactUs.location3") }}
    </p>

    <div class="flex">
      <p class="mt-0 mb-7 text-lg text-text-3 whitespace-nowrap">
        {{ $t("contactUs.followUs") }}:
      </p>
      <div class="w-full flex ms-3">
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "ContactUsInfo",
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
