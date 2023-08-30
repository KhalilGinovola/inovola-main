<template>
  <div class="bg-offWhite scroll-smooth">
    <Content />
  </div>
</template>

<script>
import Content from "~/components/home/content.vue"

export default {
  name: "HomePage",
  components: {
    Content,
  },
  head() {
    return {
      title: "Inovola",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Finding the right software development partner can change everything!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Software Development Partner, Development, Software, Recruitment, Digital Transformation, Recruitment, The pool of best talents, Technology competence, remote developers, Outsourcing, remote,  Customer-focused approach, Companies, HR as a Service, Dev Team",
        },
      ],
    }
  },
}
</script>
