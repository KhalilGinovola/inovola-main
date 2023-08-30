<template>
  <div
    class="developers-reviews mt-12 bg-offWhite pt-14 sm:pt-20 pb-14 sm:pb-20"
  >
    <div class="container">
      <div class="my-0">
        <h2
          class="w-full mx-auto lg:w-2/3 text-[1.5rem] md:text-[2.5rem] font-bold text-center text-text-5 m-0"
        >
          {{ $t("reviews.heading") }}
          <span
            class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-2"
            >{{ $t("reviews.secondHeading") }}</span
          >
        </h2>
        <p
          class="max-w-[715px] text-sm sm:text-base font-medium text-text-7 mx-auto text-center mt-4 leading-6 sm:leading-7"
        >
          {{ $t("reviews.description") }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="w-full sm:max-w-[60.625rem] mx-auto">
        <Slider
          :arrows="true"
          :dots="false"
          :slides-to-show="1"
          :slides-to-scroll="1"
          :slides-per-row="1"
          :responsive="responsive"
          :rtl="true"
          :autoplay="false"
        >
          <div v-for="(item, i) in reviews" :key="i" class="text-center">
            <a
              class="no-underline"
              href="https://www.glassdoor.com/Reviews/Inovola-Reviews-E6349900.htm"
              target="_blank"
            >
              <ul
                class="px-0 mx-0 font-semibold flex justify-center items-center gap-x-3 list-none"
              >
                <li>
                  <img
                    class="w-[3.125rem] h-[3.125rem] opacity-60 rounded-full"
                    :src="item.image"
                    alt="Reviewers"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    class="w-[5.25rem] h-[5.25rem] rounded-full"
                    src="~/assets/images/developers/imgSlider.svg"
                    alt="Reviewers"
                  />
                </li>
                <li>
                  <img
                    class="w-[3.125rem] h-[3.125rem] opacity-60 rounded-full"
                    src="~/assets/images/developers/imgSlider.svg"
                    alt="Reviewers"
                  />
                </li>
              </ul>
              <h4 class="w-full text-text-1 font-bold capitalize">
                {{ item.name }}
              </h4>
              <p
                class="w-full sm:w-10/12 text-text-7 leading-6 mx-auto text-sm font-medium"
              >
                {{ item.review }}{{ item.stars }}
              </p>
            </a>
            <div class="flex mx-auto justify-center items-start w-fit">
              <Rating
                :readonly="true"
                :stars="Math.floor(item.stars)"
                :cancel="false"
                class="full-color mr-1"
              />
              <img
                v-if="item.stars % 1 === 0.5"
                src="./../../assets/images/icons/halfsar.svg"
                alt=""
              />
              <Rating
                :readonly="true"
                :stars="5 - Math.ceil(item.stars)"
                :cancel="false"
                class="empty-color"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Slider from "./../shared/Slider.vue"
export default {
  name: "DeveloperReviews",
  components: { Slider },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      readonly: true,
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
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
  },
  computed: {
    ...mapState("forDeveloper", {
      reviews: (state) => state.reviews,
    }),
  },
}
</script>
