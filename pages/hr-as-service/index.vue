<template>
  <div>
    <HrService></HrService>
  </div>
</template>

<script>
import HrService from "~/components/hrService/content.vue"
import {
  GET_HR_AS_SERVICE,
  GET_CASES_STUDY,
  GET_HOME_INITIAL_DATA,
} from "~/utils/storeActions"
export default {
  name: "HrAsService",
  components: {
    HrService,
  },
  async fetch() {
    await this.$store.dispatch("services/" + GET_HR_AS_SERVICE)
    await this.$store.dispatch(
      "successStories/" + GET_CASES_STUDY,
      "hr-as-service"
    )
    await this.$store.dispatch("home/" + GET_HOME_INITIAL_DATA)
  },
  head() {
    return {
      title: "Inovola - HR as a service",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We believe that we will make a difference through a combination of smart planning, design thinking approach, and using the latest technologies.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, human resource, Software, HR as a Service, human resource management systems, Recruitment, Hiring, hiring, onboarding, payroll administration, Outsourcing, payroll tax support, benefits administration, HR management, HR consultants, performance management, training",
        },
      ],
    }
  },
}
</script>
