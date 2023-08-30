<template>
  <div>
    <div class="bg-offWhite pt-[188px] pb-44 xl:pb-20 mb-12 overflow-hidden">
      <div class="container">
        <div class="flex flex-col items-start md:items-center">
          <h1
            class="mb-3 mt-0 text-[2rem] leading-9 sm:leading-[3.75rem] sm:text-5xl font-bold text-text-5 relative"
          >
            {{ $t("contactUs.contactUsHeading") }}
            <img
              :class="[
                'absolute top-[-45px]',
                { 'right-[-47px] md:right-[-80px]': !isRTL },
                { 'rotate-y-180 left-[-4px] md:left-[-80px]': isRTL },
              ]"
              :src="require('~/assets/images/icons/contactUsStard.svg')"
              alt="contactUs image"
            />
          </h1>
          <div
            v-if="activeTab === 0"
            class="flex flex-col items-start md:items-center"
          >
            <p
              class="mt-0 mb-2 text-text-7 text-sm sm:text-base font-medium leading-5 sm:leading-7"
            >
              {{ $t("contactUs.contactUsSubheading") }}
            </p>
            <p
              class="mt-0 mb-2 text-text-7 text-sm sm:text-base font-medium leading-5 sm:leading-7"
            >
              {{ $t("contactUs.contactUsSubheading2") }}
              {{ $t("contactUs.contactUsSubheading3") }}
            </p>
          </div>
          <div
            v-if="activeTab === 1"
            class="flex flex-col items-start md:items-center"
          >
            <p
              class="mt-0 mb-2 text-text-7 text-sm sm:text-base font-medium leading-5 sm:leading-7"
            >
              {{ $t("contactUs.contactUsSubheading4") }}
            </p>
            <p
              class="mt-0 mb-2 text-text-7 text-sm sm:text-base font-medium leading-5 sm:leading-7"
            >
              {{ $t("contactUs.contactUsSubheading5") }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap justify-center mt-[120px] md:mt-[130px]">
          <div class="w-full relative">
            <div
              :class="[
                'absolute w-fit top-[-0.5rem] right-[10.5rem] md:right-[24.5rem] lg:top-[-5.625rem] lg:left-[30%]',
                { 'right-[4.25rem] md:right-[9.5rem] lg:right-[30%]': isRTL },
              ]"
            >
              <img
                :src="
                  isRTL
                    ? require('~/assets/images/images/contact-us-methods-ar.svg')
                    : require('~/assets/images/images/contact-us-methods.svg')
                "
                alt="Contact"
              />
            </div>
            <div class="contact-us-form mt-20 lg:mt-0">
              <TabView
                :active-index="active"
                @tab-change="handleChange($event)"
              >
                <TabPanel :header="$t('forms.Calender')" class="">
                  <Calender />
                </TabPanel>
                <TabPanel
                  :header="$t('forms.Form')"
                  class="lg:w-[770px] mx-auto mt-16"
                >
                  <Form />
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-14">
      <div class="container">
        <locations />
        <news-letters
          :heading="$t('shared.JoinUs')"
          :description="$t('shared.newsLetterSing')"
          class="mb-20 mt-24"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsLetters from "../shared/NewsLetters.vue"
import Form from "./form.vue"
import Calender from "./calender.vue"
import Locations from "./locations.vue"

export default {
  name: "ContactUsContent",
  components: { Form, NewsLetters, Locations, Calender },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$t("shared.home"),
          slug: `/`,
        },
        {
          title: this.$t("footer.contactUs"),
        },
      ],
      active: 1,
      activeTab: 1,
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    handleChange(e) {
      this.activeTab = e.index
    },
  },
}
</script>
