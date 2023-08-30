<template>
  <div class="community-developers mb-4 sm:mb-[72px] p-0">
    <div
      class="mb-0 bg-offWhite pt-[3.5rem] sm:pt-[4.5rem] pb-[10rem] sm:pb-[11.5rem]"
    >
      <h2
        class="w-full mt-0 mx-auto px-2 sm:w-2/3 leading-10 md:leading-[3.25rem] text-2xl sm:text-[2rem] md:text-[2.5rem] font-bold text-center text-text-5 mb-0"
      >
        {{ $t("community.heading") }}
        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-4xl.svg')] bg-no-repeat bg-center px-2"
          >{{ $t("community.secondHeading") }}</span
        >
      </h2>
      <p
        class="max-w-[440px] text-sm mb-0 px-[0.625rem] pb-0 pt-1 sm:text-lg leading-6 sm:leading-8 font-medium text-text-7 mx-auto text-center mt-0 sm:mt-4"
      >
        {{ $t("community.description") }}
      </p>
    </div>
    <div class="mt-[-8.5rem] pb-3 px-[0.625rem]">
      <div
        class="h-[525px] max-w-[970px] mx-auto relative"
        @click="playCommunityVideo"
      >
        <video
          id="head-video"
          class="w-full h-full absolute left-0 bottom-0 top-0 rounded-2xl"
          :poster="require(`@/assets/images/images/landing.png`)"
        >
          <source
            src="https://hr.inovola-stage.com/uploads/INOVOLA%20Outing%202022_1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <img
          v-if="!isPlayed"
          class="playerIcon absolute z-50 cursor-pointer left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
          src="~/assets/images/developers/playerIcon.svg"
          alt="inovola"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityDevelopers",
  data() {
    return {
      isPlayed: false,
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    playCommunityVideo() {
      const vid = document.getElementById("head-video")
      if (this.isPlayed === false) {
        vid.play()
        this.isPlayed = true
      } else {
        vid.pause()
        this.isPlayed = false
      }
      vid.addEventListener("ended", function () {
        vid.load()
        this.isPlayed = false
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.community-developers {
  video[poster] {
    -o-object-fit: fill;
    object-fit: fill;
  }
}
</style>
