<template>
  <div class="pt-[100px] bg-white min-h-[604px]">
    <div
      v-if="!(mobileSize && $route.params.slug)"
      class="w-screen mt-0 py-8 bg-offWhite fixed z-50"
    >
      <h1
        class="text-text-5 py-0 my-0 leading-[2.25rem] sm:leading-[3.25rem] text-[1.75rem] sm:text-[2.5rem] text-center font-bold max-w-[664px] mx-auto"
      >
        {{ $t("remoteJobs.remoteJobs") }}
      </h1>
    </div>
    <div
      v-if="mobileSize && $route.params.slug"
      class="w-screen py-8 bg-offWhite"
    >
      <nuxt-link :to="localePath('/jobs')" class="no-underline">
        <div
          class="cursor-pointer flex items-center text-text-6 leading-[1.25rem] text-[0.875rem] font-medium ms-5 mt-0 max-w-[664px]"
        >
          <img
            :class="['me-1', { 'rotate-y-180': isRTL }]"
            src="~/assets/images/icons/arrow.svg"
            alt="arrow"
          />
          {{ $t("remoteJobs.goBack") }}
        </div>
      </nuxt-link>
    </div>
    <div
      class="flex flex-col md:flex-row md:mt-36 mx-2 lg:mx-[1.688rem] xl:mx-[3.688rem]"
    >
      <Jobs :class="{ hidden: mobileSize && $route.params.slug }" />
      <nuxt-child
        :class="[{ 'w-full': mobileSize && $route.params.slug }]"
      ></nuxt-child>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import Jobs from "~/components/remoteJobs/jobs.vue"
import { GET_JOBS } from "~/utils/storeActions"

export default {
  name: "JobsView",
  components: {
    Jobs,
  },
  layout: "onlyHeader",
  scrollToTop: true,
  data() {
    return {
      mobileSize: false,
    }
  },
  async fetch() {
    await this.$store.dispatch("jobs/" + GET_JOBS)
  },
  head() {
    return {
      title: "Remote jobs",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Finding the right software development partner can change everything!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, Development, Software, Recruitment, Remote jobs, Recruitment, Hiring, Front end developer, remote developers, Outsourcing, remote,  full-stack developer, jobs, backend developer, backend, frontend, scrum master, team lead",
        },
      ],
    }
  },
  computed: {
    ...mapState("jobs", {
      jobs: (state) => state.jobs,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  beforeDestroy() {
    this.removeResize()
  },
  created() {},
  async mounted() {
    await this.onResize()
    await this.resize()
    this.redirect()
  },
  methods: {
    redirect() {
      if (
        this.$route.fullPath === "/jobs" ||
        this.$route.fullPath === "/jobs/"
      ) {
        this.$router.push("/jobs/" + this.jobs[0].id)
      }
    },
    onResize() {
      this.mobileSize = window.innerWidth < 768
    },
    resize() {
      window.addEventListener("resize", this.onResize, { passive: true })
    },
    removeResize() {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", this.onResize, { passive: true })
      }
    },
  },
}
</script>
