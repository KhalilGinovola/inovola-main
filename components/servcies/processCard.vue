<template>
  <div
    class="mb-[1.875rem] relative rounded-lg border-solid border border-border-2"
  >
    <div
      class="flex justify-center bg-offWhite rounded-bl-[4.25rem] rounded-br-[4.25rem] -translate-x-2/4 -top-0.5 left-1/2 w-[4.50rem] h-[2.50rem] absolute border-b-solid border-solid border-b-2 border-b-border-2 border-x border-x-solid border-x-border-2 border-t-offWhite"
    >
      <div
        class="flex justify-center -translate-y-[50%] top-0 rounded-full absolute w-fit h*-[6.5rem]"
      >
        <div
          class="flex justify-center items-center rounded-full mx-1 w-14 h-14 bg-black text-secondary text-center"
        >
          <span class="text-xl font-bold text-secondary leading-6">
            {{ item.id }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="bg-secondary rounded-lg pt-8 pb-8 px-6 text-center h-[320px] overflow-hidden"
    >
      <h4 class="text-xl font-bold leading-8 mt-8 mb-1.5 text-text-1">
        {{ item.title }} <br />
        {{ item.title2 }}
      </h4>
      <span class="text-sm font-medium text-text-7 leading-6 pb-3">
        {{ item.description }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
