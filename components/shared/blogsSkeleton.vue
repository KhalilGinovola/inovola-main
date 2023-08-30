<template>
  <div class="mb-[6.5rem] mt-24">
    <Skeleton
      class="container mt-0 mb-12"
      width="100%"
      height="20rem"
    ></Skeleton>
    <div class="container">
      <div class="flex flex-wrap justify-center">
        <div v-for="service in 6" :key="service" class="m-5">
          <Skeleton width="20rem" height="16rem"></Skeleton>
        </div>
      </div>
    </div>
  </div>
</template>
