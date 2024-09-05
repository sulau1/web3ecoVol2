<script lang="ts"></script>

<template>
  <div class="relative top-[7000px] md:hidden">
    <div
      class="flex h-[201px] w-screen flex-col items-center justify-center gap-2 border-t-[3px] border-white/30 px-[10px] pb-0 pt-[3px]"
    >
      <div
        class="text-[16px] font-normal leading-[19.5px] text-white cursor-pointer hover:text-darker-green-theme duration-300"
      >
        Privacy Policy
      </div>

      <div
        class="text-[16px] font-normal leading-[19.5px] text-white cursor-pointer hover:text-darker-green-theme duration-300"
      >
        Terms of use
      </div>
      <div class="flex flex-row gap-8">
        <img
          @click="LinkToTelegram"
          src="/telegram.png"
          alt=""
          class="h-[48px] w-[48px] cursor-pointer bg-cover"
        />
        <img
          @click="LinkToX"
          src="/x.png"
          alt="w-[48px] h-[48px] bg-cover cursor-pointer"
        />
        <img
          @click="LinkToWeb3"
          src="/web3.png"
          alt="w-[48px] h-[48px] bg-cover cursor-pointer"
        />
      </div>
      <div class="text-[16px] font-normal leading-[19.5px] text-white">
        Web3eco © All Rights Reserved. 2023
      </div>
    </div>
  </div>
</template>
