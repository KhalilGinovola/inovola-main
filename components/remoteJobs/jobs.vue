<template>
  <div
    class="jobs-list w-full md:w-1/2 bg-secondary mt-48 md:mt-0 min-w-[28%] md:ms-3"
  >
    <div class="max-h-full mx-2 md:mx-0">
      <div class="min-w-full mb-4">
        <span
          :class="[
            'w-[96%]',
            { 'p-input-icon-right': !isRTL },
            { 'p-input-icon-left': isRTL },
          ]"
        >
          <i class="pi pi-search text-primary" />
          <InputText
            v-model="searchText"
            class="w-full rounded-[40px] border border-solid border-border"
            type="text"
            :placeholder="$t('remoteJobs.searchkeywords')"
            @keyup="searchForJobs"
          />
        </span>
      </div>
      <div
        class="remote-job-list max-h-[54vh] 2xl:max-h-[70vh] overflow-y-scroll"
      >
        <nuxt-link
          v-for="job in filteredJobs"
          :key="job.id"
          :to="localePath(`/remote-jobs/${job.id}`)"
          class="no-underline"
        >
          <div
            :class="[
              'border border-solid border-border rounded-2xl p-5 my-2 hover:shadow-[0px_5px_11px_4px_rgba(0,0,0,0.12)] ',
              { 'shadow-[0px_5px_11px_4px_rgba(0,0,0,0.12)]': active === job },
            ]"
            @click="active = job"
          >
            <div v-if="job.labels && job.labels.length > 0" class="w-full">
              <div
                v-for="label in job?.labels"
                :key="label.id"
                class="px-4 py-1 rounded-lg m-1 cursor-default inline-block"
                :style="`background-color:${label.bgColor};color:${label.color}`"
              >
                <span class="font-medium text-xs leading-6">
                  {{ label?.title }}
                </span>
              </div>
            </div>
            <div class="w-full">
              <h1 class="text-base font-semibold leading-8 text-text-8">
                {{ job?.title }}
              </h1>
            </div>
            <div class="w-full flex justify-between flex-wrap">
              <div
                v-if="job.skills && job.skills.length > 0"
                class="flex border border-solid border-border rounded-lg my-1"
              >
                <div
                  v-for="(skill, skillsIndex) in job?.skills"
                  :key="skillsIndex"
                  :class="[
                    'border-y-0 h-full px-4 py-2 font-medium text-xs leading-6 text-text-9 cursor-default',
                    {
                      'border-l-0 border-r-2 border-solid border-border':
                        skillsIndex < job?.skills?.length - 1 && !isRTL,
                    },
                    {
                      'border-r-0 border-l-2 border-solid border-border':
                        skillsIndex < job?.skills?.length - 1 && isRTL,
                    },
                  ]"
                >
                  {{ skill?.title }}
                </div>
              </div>
              <img
                :class="[
                  'max-w-full cursor-pointer my-1',
                  {
                    'rotate-180': isRTL,
                  },
                ]"
                :src="
                  active === job
                    ? require('~/assets/images/icons/black-job-btn.svg')
                    : require('~/assets/images/icons/job-list-arrow.svg')
                "
                alt="job"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "JobsContainer",
  data() {
    return {
      searchText: "",
      filteredJobs: [],
      allJobs: [],
      active: false,
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
  created() {
    this.filteredJobs = this.jobs
    this.allJobs = this.jobs
  },
  methods: {
    searchForJobs() {
      if (this.allJobs) {
        const searchedJobs = this.allJobs?.filter(
          (job) =>
            job.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
            job.skills.find((skill) =>
              skill.title.toLowerCase().includes(this.searchText.toLowerCase())
            )
        )
        this.filteredJobs = searchedJobs
      }
    },
  },
}
</script>
