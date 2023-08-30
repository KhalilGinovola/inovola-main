<template>
  <div>
    <BackendDevelopment
      class="mt-10 sm:mt-16 mb-0 sm:mb-16"
      :data="devTeam.backendDevelopment.languages"
    />
    <FrontendDevelopment
      class="mt-7 sm:mt-20 mb-0 sm:mb-20"
      :data="devTeam.frontendDevelopment.languages"
    />
    <MobileDevelopment
      class="mb-2 sm:mb-20 mt-12 sm:mt-20"
      :data="devTeam.mobileDevelopment.languages"
    />
    <ECommerce
      class="mt-14 sm:mt-20 mb-12 sm:mb-20"
      :data="devTeam.ECommerce.languages"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
import BackendDevelopment from "~/components/devTeamService/backendDevelopment.vue"
import FrontendDevelopment from "~/components/devTeamService/frontendDevelopment.vue"
import MobileDevelopment from "~/components/devTeamService/mobileDevelopment.vue"
import ECommerce from "~/components/devTeamService/E-Commerce.vue"

export default {
  name: "DevelopmentPakages",
  components: {
    BackendDevelopment,
    FrontendDevelopment,
    MobileDevelopment,
    ECommerce,
  },
  computed: {
    ...mapState("services", {
      devTeam: (state) => state.devTeam,
    }),
  },
}
</script>
