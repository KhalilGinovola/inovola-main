<template>
  <div
    :class="[
      'jobs-container max-h-[62vh] 2xl:max-h-[77vh] min-w-[60%] md:px-4',
      { 'overflow-y-scroll': mobileSize },
    ]"
  >
    <div
      :class="[
        'job-details-container w-full md:ms-4 md:me-4 p-6 mb-28 md:mb-1 h-full',
        {
          'border border-solid border-border-1 rounded-2xl overflow-y-scroll ':
            !mobileSize,
        },
      ]"
    >
      <div class="">
        <h3
          class="font-bold text-xl sm:text-2xl leading-8 sm:leading-[2.5rem] text-text-8 mt-0 mb-5"
        >
          {{ jobs[jobId]?.title }}
        </h3>
        <div>
          <div
            class="w-full flex justify-between flex-wrap items-center mt-0 pt-0"
          >
            <div
              v-if="jobs[jobId]?.skills"
              class="flex border border-solid border-border rounded-lg mb-1 mt-0 pt-0"
            >
              <div
                v-for="(skill, skillsIndex) in jobs[jobId]?.skills"
                :key="skillsIndex"
                :class="[
                  'border-y-0 h-full px-4 py-2 font-medium text-xs leading-6 text-text-9 cursor-default',
                  {
                    'border-l-0 border-r-2 border-solid border-border':
                      skillsIndex < jobs[jobId]?.skills?.length - 1 && !isRTL,
                  },
                  {
                    'border-r-0 border-l-2 border-solid border-border':
                      skillsIndex < jobs[jobId]?.skills?.length - 1 && isRTL,
                  },
                ]"
              >
                {{ skill?.title }}
              </div>
            </div>

            <div>
              <div
                v-for="label in jobs[jobId]?.labels"
                :key="label.id"
                class="px-4 py-1 rounded-lg m-1 cursor-default inline-block"
                :style="`background-color:${label.bgColor};color:${label.color}`"
              >
                <span class="font-medium text-xs leading-6">
                  {{ label?.title }}
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
            <h3
              class="text-lg font-semibold sm:text-xl text-text-8 leading-8 mt-0 mb-8"
            >
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
            :mobile-size="mobileSize"
            :job-src="jobs[jobId]?.apply_link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import StaticJobDescription from "./staticJobDescription.vue"
import SocialMediaSharing from "./socialMediaSharing.vue"
import GlassdoorSection from "./glassdoorSection.vue"
import ApplyNow from "./applyNow.vue"

export default {
  name: "JobDetails",
  components: {
    StaticJobDescription,
    SocialMediaSharing,
    GlassdoorSection,
    ApplyNow,
  },
  data() {
    return {
      mobileSize: false,
    }
  },
  computed: {
    ...mapState("jobs", {
      jobs: (state) => state.jobs,
    }),
    isRTL() {
      return this.$i18n.locale === "ar"
    },
    jobId() {
      return this.$route.params.slug - 1
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
