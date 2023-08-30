<template>
  <div
    class="news-letters-container text-start bg-primary text-secondary flex flex-col md:flex-row justify-between items-center rounded-xl px-[2.19rem] py-[2.94rem]"
  >
    <div class="max-w-[700px]">
      <h1
        class="my-0 pb-0 text-[2rem] leading-[3rem] sm:text-[2.5rem] font-bold"
      >
        {{ heading }}
      </h1>
      <p class="my-0 pt-4 font-medium text-sm sm:text-lg leading-6">
        {{ description }}
      </p>
    </div>
    <div class="news-letters-container__btn me-2 mt-12 sm:mt-0">
      <div
        class="flex border-b-[1px] border-x-0 border-t-0 border-b-secondary border-solid pb-1"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <InputText
          v-model="email"
          class="border-none bg-inherit text-white"
          type="text"
          :placeholder="$t('forms.Email')"
        />
        <img
          :class="['cursor-pointer', { 'rotate-y-180': isRTL }]"
          :src="
            hovered
              ? require('~/assets/images/icons/yellow-send-icon.svg')
              : require('~/assets/images/icons/sendButton.svg')
          "
          alt="sendButton"
          @click="sendEmail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SUBSCRIBE_NEWSLETTER } from "~/utils/storeActions"
export default {
  name: "NewsLetters",
  props: {
    heading: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      email: "",
      hovered: false,
    }
  },
  computed: {
    isEmailValid() {
      return this.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {
    sendEmail() {
      if (this.isEmailValid) {
        this.$store
          .dispatch("home/" + SUBSCRIBE_NEWSLETTER, this.email)
          .then(() => {
            this.email = ""
          })
      }
    },
  },
}
</script>
