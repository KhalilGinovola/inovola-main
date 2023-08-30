<template>
  <div>
    <ul class="list-none px-0 mb-8">
      <li class="flex gap-x-3 mt-6 items-start">
        <img src="~/assets/images/icons/yellow-point.svg" alt="like" />
        <div>
          <p class="max-w-[34.25rem] m-0 text-text-9">
            <span class="text-text-8 font-bold text-xl leading-7">
              {{ $t("forCompanies.Create") }}
            </span>
            <span class="font-medium text-lg leading-7">
              {{ $t("forCompanies.CreateHealthy") }}
            </span>
          </p>
        </div>
      </li>
      <li class="flex gap-x-3 mt-5 items-start">
        <img src="~/assets/images/icons/yellow-point.svg" alt="like" />
        <div>
          <p class="max-w-[34.25rem] m-0 text-text-9">
            <span class="text-text-8 font-bold text-xl leading-7">
              {{ $t("forCompanies.Invest") }}
            </span>
            <span class="font-medium text-lg leading-7">{{
              $t("forCompanies.InvestTalents")
            }}</span>
          </p>
        </div>
      </li>
      <li class="flex gap-x-3 mt-5 items-start">
        <img src="~/assets/images/icons/yellow-point.svg" alt="like" />
        <div>
          <p class="max-w-[34.25rem] m-0 text-text-9">
            <span class="text-text-8 font-bold text-xl leading-7">
              {{ $t("forCompanies.Enhance") }}
            </span>
            <span class="font-medium text-lg leading-7">
              {{ $t("forCompanies.EnhanceBusiness") }}</span
            >
          </p>
        </div>
      </li>
      <li class="flex gap-x-3 mt-5 items-start">
        <img src="~/assets/images/icons/yellow-point.svg" alt="like" />
        <div>
          <p class="max-w-[34.25rem] m-0 text-text-9">
            <span class="text-text-8 font-bold text-xl leading-7">
              {{ $t("forCompanies.Delivering") }}
            </span>
            <span class="font-medium text-lg leading-7">
              {{ $t("forCompanies.DeliveringInnovative") }}</span
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MissionContent",
}
</script>
