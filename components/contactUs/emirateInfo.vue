<template>
  <div class="flex flex-col lg:flex-row">
    <div
      class="flex items-center w-full p-5 mt-[1.25rem] mb-[1.875rem] me-8 rounded-2xl shadow-[0_4px_20px_4px_rgba(0,0,0,0.12)]"
    >
      <div class="w-[3.75rem] h-[3.75rem]">
        <img
          class="object-cover"
          :src="require('@/assets/images/icons/map.svg')"
          alt="map"
        />
      </div>
      <div class="ms-3">
        <h5 class="text-text-1 text-2xl leading-8 font-semibold my-0">
          {{ $t("contactUs.location") }}
        </h5>
        <p class="text-text-7 text-sm leading-6 font-medium mb-0 mt-[0.628rem]">
          {{ $t("contactUs.location3") }}
        </p>
      </div>
    </div>
    <div
      class="flex items-center w-full p-5 mt-[1.25rem] mb-[1.875rem] me-8 rounded-2xl shadow-[0_4px_20px_4px_rgba(0,0,0,0.12)]"
    >
      <div class="w-[3.75rem] h-[3.75rem]">
        <img
          class="object-cover"
          :src="require('@/assets/images/icons/Phone.svg')"
          alt="Phone"
        />
      </div>
      <div class="ms-3">
        <h5 class="text-text-1 text-2xl leading-8 font-semibold my-0">
          {{ $t("contactUs.phone") }}
        </h5>
        <p class="text-text-7 text-sm leading-6 font-medium mb-0 mt-1">
          {{ $t("footer.sitePhone4") }}
        </p>
      </div>
    </div>
    <div
      class="flex items-center w-full p-5 mt-[1.25rem] mb-[1.875rem] rounded-2xl shadow-[0_4px_20px_4px_rgba(0,0,0,0.12)]"
    >
      <div class="w-[3.75rem] h-[3.75rem]">
        <img
          class="object-cover"
          :src="require('@/assets/images/icons/Email.svg')"
          alt="Email"
        />
      </div>
      <div class="ms-3">
        <h5 class="text-text-1 text-2xl leading-8 font-semibold my-0">
          {{ $t("contactUs.email") }}
        </h5>
        <p class="text-text-7 text-sm leading-6 font-medium mb-0 mt-3">
          {{ $t("footer.siteEmail") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmirateInfo",
}
</script>
