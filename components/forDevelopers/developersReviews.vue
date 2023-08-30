<template>
  <div>
    <div class="offers mt-0 pt-20 bg-text-18 pb-12">
      <div class="container">
        <div class="block lg:grid grid-cols-2 pt-0 mb-0">
          <div class="order-2 flex md:mt-5 xl:mt-10 pl-0 lg:pl-24 pr-4">
            <div class="max-w-full lg:max-w-[466px]">
              <h2
                class="text-2xl sm:text-3xl font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
              >
                {{ $t("reviewsRates.title") }}
              </h2>
              <p
                class="text-sm mb-0 pb-0 sm:text-base font-medium text-text-11 leading-[1.625rem] mt-3 sm:mt-4 pt-0"
              >
                {{ $t("reviewsRates.description") }}
              </p>
              <a
                href="https://www.glassdoor.com/Reviews/Inovola-Reviews-E6349900.htm"
                class="no-underline"
                target="_blank"
              >
                <Button
                  class="primary-outlined p-button-outlined rounded leading-5 transition duration-200 ease-out hover:bg-black hover:text-white hover:border-white py-[0.875rem] sm:py-[1.125rem] me-5 mt-6 lg:mt-8 xl:mt-12 text-text font-semibold"
                  aria-label="Button"
                >
                  {{ $t("reviewsRates.btnContent") }}
                </Button>
              </a>
            </div>
          </div>
          <div class="order-1 mt-6 sm:mt-0 mb-0 pb-0">
            <img
              class="w-full lg:max-w-full mt-6 sm:mt-10 lg:mt-0 rounded-lg"
              src="~/assets/images/developers/review-img.jpg"
              alt="job offers"
              loading="lazy"
            />
          </div>
        </div>
        <div
          class="max-w-[300px] sm:max-w-[510px] -mt-14 lg:-mt-5 xl:-mt-14 relative bg-white mx-auto rounded-xl shadow-[0_0_0_0_rgba(0,0,20,0.04)]"
        >
          <span
            class="bg-text-19 absolute -top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <img
              src="@/assets/images/icons/previewReviews.svg"
              class="w-3.5 h-5"
              alt=""
              srcset=""
            />
          </span>
          <a
            href="https://www.glassdoor.com/Reviews/Inovola-Reviews-E6349900.htm"
            class="no-underline"
            target="_blank"
          >
            <ul class="list-none px-6 py-7">
              <li class="py-0 mt-0 mb-2">
                <span class="text-text-5 font-semibold mr-3 inline-block"
                  >GLASSDOOR REVIEWS</span
                >
                <span class="text-text-19 text-lg font-bold">4.9</span>
              </li>
              <li
                v-for="review in reviews"
                :key="review.id"
                class="mt-1 mb-0 py-0"
              >
                <p
                  class="text-text-7 font-medium my-0 py-0 text-sm sm:text-base text-center sm:text-start"
                >
                  {{ review.review }}
                </p>
                <div class="sm:flex mt-0 mb-2 sm:mb-0 py-0">
                  <p
                    class="text-text-20 font-medium text-sm my-2 text-center sm:text-start"
                  >
                    {{ review.job }}
                  </p>
                  <p class="ml-[14px] my-0 sm:my-2 text-center sm:text-start">
                    <img
                      v-for="ele in 5"
                      :key="ele"
                      src="@/assets/images/icons/fullStar.svg"
                      class="w-5 h-5"
                      alt=""
                    />
                  </p>
                </div>
              </li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "DevelopersReviews",
  data() {
    return {}
  },
  computed: {
    ...mapState("forDeveloper", {
      reviews: (state) => state.reviews,
    }),
  },
}
</script>
