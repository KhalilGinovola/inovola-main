<template>
  <div class="container fluid mt-0 py-16 mb-12 bg-offWhite">
    <h1
      class="text-text-5 leading-[56px] text-[40px] text-center font-bold mb-8 mt-0 max-w-[664px] mx-auto"
    >
      {{ blog.title }}
    </h1>

    <div class="flex flex-wrap justify-center">
      <div class="flex text-text-6 me-12 items-center">
        <img
          class="me-2"
          :src="require('~/assets/images/icons/profile-circle.svg')"
          alt="profile image"
          width="20px"
          height="20px"
        />
        {{ blog.author.name }}
      </div>
      <div class="flex text-text-6 items-center">
        <img
          class="me-2"
          alt="Calendar image"
          :src="require('~/assets/images/icons/Calendar.svg')"
        />
        {{ $moment(blog.publish_date).format("MMM DD, yyyy") }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "BlogHeading",
  computed: {
    ...mapState("blogs", {
      blog: (state) => state.blog,
    }),
  },
}
</script>
