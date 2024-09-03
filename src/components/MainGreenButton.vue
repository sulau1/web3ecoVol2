<script setup lang="ts"></script>

<template>
  <button
    class="duration-300 relative left-[70px] h-[60px] w-[216px] rounded-[100px] bg-green-gradient pb-[20px] pl-[40px] pr-[40px] pt-[20px] transition hover:bg-darker-green-gradient lg:left-[0px]"
  >
    <div
      class="h-[20px] w-full text-center text-[16px] font-semibold leading-[19.5px] text-white"
    >
      <slot></slot>
    </div>
  </button>
</template>
