<template>
  <div class="container fluid mt-0 py-16 mb-12 bg-offWhite">
    <h1
      class="text-text-5 leading-[2.25rem] sm:leading-[3.5rem] text-[1.75rem] sm:text-[2.5rem] text-center font-bold mb-8 mt-0 max-w-[664px] mx-auto"
    >
      {{ title }}
    </h1>
    <p
      class="max-w-[43.125rem] text-center mx-auto text-text-7 leading-5 sm:leading-7 text-sm sm:text-base font-medium"
    >
      {{ shortDescription }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CaseStudyHeading",
  props: {
    title: {
      type: String,
      default: "",
    },
    shortDescription: {
      type: String,
      default: "",
    },
  },
}
</script>
