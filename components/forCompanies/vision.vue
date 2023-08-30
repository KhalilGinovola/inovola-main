<template>
  <div>
    <div class="px-0 mb-8">
      <div class="flex gap-x-3 mt-6 items-start">
        <img src="~/assets/images/icons/yellow-point.svg" alt="like" />
        <div class="max-w-[34.25rem]">
          <p class="mt-0 text-text-9">
            <span class="text-text-8 font-bold text-xl leading-7">
              {{ $t("forCompanies.leadingCompanyTitle") }}</span
            >
            <span class="font-medium text-lg leading-7">
              {{ $t("forCompanies.leadingCompany") }}
            </span>
          </p>
          <p class="font-medium text-lg leading-7 text-text-9">
            {{ $t("forCompanies.word-of-mouth") }}
          </p>
          <p class="font-medium text-lg leading-7 text-text-9">
            {{ $t("forCompanies.successfulJourney") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisionContent",
}
</script>
