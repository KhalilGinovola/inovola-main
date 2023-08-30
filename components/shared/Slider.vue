<template>
  <VueSlickCarousel v-bind="settings" :rtl="isRTL">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"

export default {
  name: "SliderComponent",
  components: {
    VueSlickCarousel,
  },
  props: {
    slidesToShow: {
      type: Number,
      default: 1,
    },
    slidesToScroll: {
      type: Number,
      default: 1,
    },
    slidesPerRow: {
      type: Number,
      default: 1,
    },
    rows: {
      type: Number,
      default: 1,
    },
    dots: {
      type: Boolean,
      default: false,
    },
    arrows: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: true,
    },
    responsive: {
      type: Array,
      default: () => [
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
            rows: 1,
          },
        },
      ],
    },
  },
  data() {
    return {
      settings: {
        arrows: this.arrows,
        dots: this.dots,
        dotsClass: "slick-dots custom-slick-dots",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: this.slidesToShow,
        slidesToScroll: this.slidesToScroll,
        autoplay: true,
        responsive: this.responsive,
        rows: this.rows,
        slidesPerRow: this.slidesPerRow,
        rtl: true,
      },
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {},
}
</script>
