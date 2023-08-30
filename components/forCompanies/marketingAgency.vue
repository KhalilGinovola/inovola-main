<template>
  <div
    class="flex flex-col-reverse md:flex-row mt-10 md:mt-[6.5rem] mb-[4.5rem] md:mb-20"
  >
    <div class="flex items-center w-full md:w-1/2">
      <img
        class="max-w-full object-cover"
        src="~/assets/images/images/our-values.svg"
        loading="lazy"
        alt="marketing"
      />
    </div>
    <div
      class="w-full md:w-1/2 flex flex-col justify-center text-center sm:text-start"
    >
      <h1
        class="font-bold text-text-5 leading-10 sm:leading-[3.5rem] text-[1.5rem] sm:text-[2.75rem] mb-7"
      >
        {{ $t("forCompanies.weStrategic") }}

        <span
          class="bg-[url('~/assets/images/backgrounds/span-yellow-3xl.svg')] bg-no-repeat bg-center px-2"
          >{{ $t("forCompanies.MarketingAgency") }}</span
        >
      </h1>
      <p class="font-medium text-base text-text-11 mt-0 leading-7">
        {{ $t("forCompanies.weBelieve") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketingAgency",
}
</script>
