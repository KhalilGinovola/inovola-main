<template>
  <div class="pt-[100px] pb-16 bg-white min-h-[604px]">
    <div class="container fluid mt-0 py-16 mb-12 bg-offWhite">
      <Skeleton
        class="container fluid mt-0 mb-12 bg-offWhite"
        width="100%"
        height="5rem"
      ></Skeleton>

      <div class="flex flex-wrap justify-center">
        <div class="flex text-text-6 me-12 items-center">
          <Skeleton
            class="flex text-text-6 me-12 items-center"
            width="10rem"
          ></Skeleton>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex justify-center">
        <div
          class="blog-header__blog-img flex justify-center w-full max-w-[1170px] max-h-[520px] rounded-lg object-cover mb-8"
          alt="blog image"
        >
          <Skeleton width="80rem" height="20rem"></Skeleton>
        </div>
      </div>
    </div>
  </div>
</template>
