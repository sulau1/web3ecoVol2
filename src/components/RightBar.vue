<script setup lang="ts"></script>

<template>
  <div id="RightBar" class="hidden lg:block">
    <div
      class="grey-border fixed right-0 top-[100px] z-10 flex flex-col items-center gap-[10px] rounded-[100px] bg-blackRightBar p-[28px] backdrop-blur-sm lg:h-[424px] lg:w-[104px]"
    >
      <div class="grid-row grid gap-8">
        <div
          @click="LinkToTelegram"
          class="h-[48px] w-[48px] cursor-pointer"
          :style="{ backgroundImage: `url(/telegram.png)` }"
        ></div>
        <div
          @click="LinkToX"
          class="h-[48px] w-[48px] cursor-pointer"
          :style="{ backgroundImage: `url(/x.png)` }"
        ></div>
        <div
          @click="LinkToInstagram"
          class="h-[48px] w-[48px] cursor-pointer"
          :style="{ backgroundImage: `url(/instagram.png)` }"
        ></div>
        <div
          @click="LinkToVk"
          class="h-[48px] w-[48px] cursor-pointer"
          :style="{ backgroundImage: `url(/vk.png)` }"
        ></div>
        <div
          @click="LinkToWeb3"
          class="h-[48px] w-[48px] cursor-pointer"
          :style="{ backgroundImage: `url(/web3.png)` }"
        ></div>
      </div>
    </div>
  </div>
</template>
