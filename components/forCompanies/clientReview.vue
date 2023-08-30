<template>
  <div>
    <div
      class="client-review flex items-center flex-col md:flex-row justify-around"
    >
      <div
        class="flex md:block justify-center w-11/12 sm:w-1/2 md:w-5/12 lg:w-4/12 my-10 max-w-full px-12 md:px-0 relative"
      >
        <div
          :class="[
            'relative w-fit inline-block',
            { 'player cursor-pointer': clientReview.youtube_link },
          ]"
          @click="showVideo(clientReview.youtube_link)"
        >
          <div
            class="overflow-hidden rounded-[3.75rem] border border-solid border-offWhite bg-cover bg-no-repeat rotate-45 w-52 h-[13rem]"
          >
            <img
              class="object-cover rotate-[-45deg] scale-125 max-w-full"
              :src="
                clientReview.photo
                  ? clientReview.photo
                  : 'https://i.ibb.co/JRgf43Q/Rectangle041.png'
              "
              alt="img"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full md:w-8/12 px-2 ms-12 mb-6 md:mb-0">
        <p class="text-text-7 leading-6 text-base font-medium my-0">
          {{ clientReview.short_description }}
        </p>
        <h4 class="text-text-13 leading-6 text-xl font-semibold mt-8 mb-6">
          {{ clientReview.name }}, {{ clientReview.position }}
        </h4>
        <img
          v-if="clientReview.company_logo"
          class="h-8 w-[8.7rem]"
          :src="clientReview.company_logo"
          alt="company_logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleClientReview",
  props: {
    clientReview: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    showVideo(link) {
      this.$emit("showVideo", link)
    },
  },
}
</script>
<style lang="scss" scoped>
.player::before {
  content: url("~/assets/images/icons/video-player.svg");
  position: absolute;
  top: 30%;
  left: 88%;
  z-index: 444;
}
</style>
