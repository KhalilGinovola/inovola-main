<template>
  <div class="review mb-14 md:mb-6">
    <div class="max-w-full">
      <div class="flex mt-8">
        <h2
          class="text-2xl sm:text-[2rem] font-bold text-text leading-8 sm:leading-[3rem] mb-0 mt-0"
        >
          {{ $t("reviews.customerSay") }}
          <span
            class="bg-[url('~/assets/images/backgrounds/span-yellow-bg.svg')] bg-no-repeat bg-center px-1"
          >
            {{ $t("reviews.aboutUs") }}
          </span>
        </h2>
        <img
          src="~/assets/images/images/question-mark.svg"
          alt="question"
          :class="[
            ' sm:-mt-6 w-[37px] h-[42px] sm:w-[75.5px] sm:h-[85px]',
            { 'rotate-y-180': isRTL },
          ]"
        />
      </div>
      <p
        class="max-w-lg text-sm mb-0 pb-6 sm:pb-0 sm:text-base font-normal sm:font-medium text-text-8 leading-5 sm:leading-[1.625rem] mt-3 sm:mt-4 pt-0"
      >
        {{ $t("reviews.reviewDescription") }}
      </p>
    </div>
    <div
      class="flex items-center flex-col md:flex-row justify-around lg:justify-start"
    >
      <div
        class="flex md:block justify-center w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 my-10 max-w-full px-12 md:px-0 relative"
      >
        <div
          class="player cursor-pointer relative w-fit inline-block"
          @click="showVideo"
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
      <div class="flex flex-col w-full md:w-1/2 px-2 ms-5">
        <p
          v-if="clientReview.short_description"
          class="text-text-7 leading-6 text-base font-medium"
        >
          {{ clientReview.short_description }}
        </p>
        <h4
          v-if="clientReview.name || clientReview.position"
          class="text-text-13 leading-6 text-xl font-semibold"
        >
          {{ clientReview.name }}, {{ clientReview.position }}
        </h4>
      </div>
    </div>
    <Dialog
      :visible="displayReviewVideo"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
      :close-on-escape="true"
      :closable="true"
    >
      <template #header>
        <h3 class="py-0 my-0">Review</h3>
        <Button icon="pi pi-times" class="p-button-text" @click="closeVideo" />
      </template>
      <iframe
        width="100%"
        height="100%"
        :src="clientReview.youtube_link"
        title="Review Client"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "CustomerReview",
  props: {
    clientReview: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      displayReviewVideo: false,
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    showVideo() {
      this.displayReviewVideo = true
    },
    closeVideo() {
      this.displayReviewVideo = false
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
