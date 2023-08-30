<template>
  <div
    :class="[
      'jobs-container max-h-[62vh] 2xl:max-h-[77vh] min-w-[60%] md:px-4',
      { 'overflow-y-scroll': mobileSize },
    ]"
  >
    <div
      :class="[
        'job-details-container w-full md:ms-4 md:me-4 p-6 mb-28 md:mb-11 h-full',
        {
          'border border-solid border-border-1 rounded-2xl overflow-y-scroll ':
            !mobileSize,
        },
      ]"
    >
      <h3 class="font-bold text-2xl text-text-8 mt-0">
        {{ jobs[jobId]?.title }}
      </h3>
      <div>
        <div class="w-full flex justify-between flex-wrap items-center">
          <div
            v-if="jobs[jobId]?.skills"
            class="flex border border-solid border-border rounded-lg my-1"
          >
            <div
              v-for="(skill, skillIndex) in jobs[jobId]?.skills"
              :key="skillIndex"
              :class="[
                'border-y-0 h-full px-4 py-2 font-medium text-xs leading-6 text-text-9 cursor-default',
                {
                  'border-l-0 border-r-2 border-solid border-border':
                    skillIndex < jobs[jobId]?.skills?.length - 1 && !isRTL,
                },
                {
                  'border-r-0 border-l-2 border-solid border-border':
                    skillIndex < jobs[jobId]?.skills?.length - 1 && isRTL,
                },
              ]"
            >
              {{ skill.title }}
            </div>
          </div>

          <div v-if="jobs[jobId]?.labels">
            <div
              v-for="label in jobs[jobId]?.labels"
              :key="label.id"
              class="px-4 py-1 rounded-lg m-1 cursor-default inline-block"
              :style="`background-color:${label.bgColor};color:${label.color}`"
            >
              <span class="font-medium text-xs leading-6">
                {{ label.title }}
              </span>
            </div>
          </div>
        </div>
        <img
          class="w-full mt-6 rounded-xl"
          :src="require('~/assets/images/images/job-img.png')"
          loading="lazy"
          alt="photo"
        />
      </div>
      <div class="flex xl:justify-between flex-col lg:flex-row mt-6 md:mb-4">
        <section class="me-3">
          <h3 class="text-5 mt-0 mb-8">
            {{ $t("remoteJobs.updated") }}
            {{ $moment(jobs[jobId]?.created_at).fromNow() }}
            <span class="mx-1">-</span>
            <span
              >{{ jobs[jobId]?.type }} {{ $t("remoteJobs.Position") }}
            </span>
          </h3>
          <hr class="max-w-[30.75rem] text-left m-0 text-border" />
          <StaticJobDescription />
          <hr class="max-w-[30.75rem] text-left m-0 text-border" />
          <div
            class="dynamic-job-dec pt-6 pb-8"
            v-html="jobs[jobId]?.description"
          ></div>
          <hr class="max-w-[30.75rem] text-left m-0 text-border" />
          <SocialMediaSharing :job-head="jobs[jobId]?.title" />
          <hr class="max-w-[30.75rem] text-left m-0 text-border" />
          <GlassdoorSection />
        </section>
        <ApplyNow
          :class="mobileSize ? 'hidden' : ''"
          :mobile-size="mobileSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import StaticJobDescription from "~/components/remoteJobs/staticJobDescription.vue"
import SocialMediaSharing from "~/components/remoteJobs/socialMediaSharing.vue"
import GlassdoorSection from "~/components/remoteJobs/glassdoorSection.vue"
import ApplyNow from "~/components/remoteJobs/applyNow.vue"

export default {
  name: "RemoteJobsIndex",
  components: {
    StaticJobDescription,
    SocialMediaSharing,
    GlassdoorSection,
    ApplyNow,
  },
  data() {
    return {
      mobileSize: false,
      jobId: 0,
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
  mounted() {
    this.onResize()
    this.resize()
  },
  methods: {
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
