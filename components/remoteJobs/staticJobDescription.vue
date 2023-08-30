<template>
  <div>
    <ul class="list-none px-0 mb-8">
      <li class="flex gap-x-3 mt-6">
        <img src="~/assets/images/icons/remoteJobs/like.svg" alt="like" />
        <div>
          <p class="m-0 text-xs leading-5 sm:text-sm font-semibold text-text-8">
            {{ $t("prosJobs.heading1") }}
          </p>
          <p
            class="m-0 pt-1 leading-5 text-xs sm:text-sm font-normal text-text-9"
          >
            {{ $t("prosJobs.descriprtion1") }}
          </p>
        </div>
      </li>
      <li class="flex gap-x-3 mt-5">
        <img src="~/assets/images/icons/remoteJobs/heart.svg" alt="heart" />
        <div>
          <p class="m-0 leading-5 text-xs sm:text-sm font-semibold text-text-8">
            {{ $t("prosJobs.heading2") }}
          </p>
          <p
            class="m-0 pt-1 leading-5 text-xs sm:text-sm font-normal text-text-9"
          >
            {{ $t("prosJobs.descriprtion2") }}
          </p>
        </div>
      </li>
      <li class="flex gap-x-3 mt-5">
        <img src="~/assets/images/icons/remoteJobs/star.svg" alt="star" />
        <div>
          <p class="m-0 leading-5 text-xs sm:text-sm font-semibold text-text-8">
            {{ $t("prosJobs.heading3") }}
          </p>
          <p
            class="m-0 pt-1 leading-5 text-xs sm:text-sm font-normal text-text-9"
          >
            {{ $t("prosJobs.descriprtion3") }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StaticJobDescription",
}
</script>
