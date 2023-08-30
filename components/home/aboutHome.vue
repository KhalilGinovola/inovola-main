<template>
  <div class="aboutHome">
    <div
      class="bg-[url('~/assets/images/backgrounds/responsive-serviecs-bg.svg')] lg:bg-[url('~/assets/images/backgrounds/serviceColors.svg')] bg-no-repeat bg-cover rounded-2xl text-start p-[1.25rem] sm:p-[4.5rem]"
    >
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-2/4">
          <h1
            class="font-bold leading-10 text-text sm:leading-[3.5rem] text-[1.75rem] sm:text-[2.75rem] capitalize mt-0 mb-[0.875rem]"
          >
            {{ $t("services.LeadingCompanies") }}
          </h1>
          <p
            class="font-medium text-base sm:text-lg leading-6 sm:leading-7 text-text-11 mt-0 mb-4"
          >
            {{ $t("services.Webelieve") }} <br />
            {{ $t("services.CentralAchieving") }}
          </p>
          <p class="leading-7 font-bold text-lg text-text-12 mt-0 mb-8">
            {{ $t("services.together") }}
          </p>

          <Button
            class="primary-outlined p-button-outlined w-[10.678rem] h-14 rounded-lg justify-center text-base leading-5 font-medium hover:bg-primary hover:text-secondary"
            aria-label="Button"
            @click="goToCpmpanies"
          >
            {{ $t("services.moreAboutUs") }}
          </Button>
        </div>
        <div class="lg:w-2/4 mt-6">
          <Slider
            :slides-to-show="1"
            :dots="true"
            :rows="2"
            :slides-per-row="2"
            :responsive="responsive"
          >
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="bg-secondary grid items-center place-items-center text-center w-[8.625rem] fill-avaliable p-2 my-4 mx-2 lg:w-[10.625rem] xl:w-[13.75rem] h-[7.8125rem] rounded-lg"
            >
              <img
                class="max-w-full"
                :src="
                  require(`~/assets/images/images/partner/${partner.image}.svg`)
                "
                loading="lazy"
                :alt="partner.title"
              />
            </div>
          </Slider>
        </div>
      </div>
      <StaticsOfCompany />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Slider from "~/components/shared/Slider.vue"
import StaticsOfCompany from "~/components/home/staticsOfCompany.vue"

export default {
  name: "AboutHome",
  components: {
    Slider,
    StaticsOfCompany,
  },

  data() {
    return {
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1,
          },
        },
      ],
    }
  },
  computed: {
    ...mapState("home", {
      partners: (state) => state.partners.partners,
    }),
  },
  methods: {
    goToCpmpanies() {
      this.$router.push(this.localePath("/for-companies"))
    },
  },
}
</script>
<style lang="scss" scoped>
.fill-avaliable {
  min-width: -webkit-fill-available;
}
</style>
