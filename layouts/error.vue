<template>
  <div
    class="flex flex-col justify-center items-center min-h-full py-28 text-center bg-offWhite-2"
  >
    <div>
      <img
        :src="require('~/assets/images/backgrounds/404.png')"
        alt=""
        class="max-w-full"
      />

      <div v-if="error.statusCode === 404">
        <h1 class="font-semibold text-3xl leading-9 text-primary">
          {{ $t("shared.notFound") }}
        </h1>
        <p
          class="font-normal text-lg leading-7 text-text-17 max-w-[385px] mx-auto mb-8"
        >
          {{ $t("shared.notFoundDesc") }}
        </p>
      </div>
      <div v-else>
        <h1 class="font-semibold text-3xl leading-9 text-primary">
          {{ $t("shared.errorOccurred") }}
        </h1>
        <p
          class="font-normal text-lg leading-7 text-text-17 max-w-[385px] mx-auto mb-8"
        >
          {{ $t("shared.notFoundDesc") }}
        </p>
      </div>
    </div>
    <div>
      <Button
        class="primary-outlined p-button-outlined py-4 px-8 me-4 hover:bg-primary hover:text-secondary font-semibold text-xl leading-6"
        aria-label="Button"
        @click="backHomePage"
      >
        {{ $t("shared.backToHome") }}
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorLayout",
  layout: "default",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    backHomePage() {
      this.$router.push(this.localePath("/"))
    },
  },
}
</script>
