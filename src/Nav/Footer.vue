<script setup></script>

<template>
  <div class="hidden md:block">
    <div
      class="absolute h-[198px] w-screen bg-footer-black lg:h-[100px] lg:w-full top-[6000px]"
    >
      <div
        class="relative top-[26px] flex h-[48px] w-[1232px] flex-col gap-[50px] text-white lg:left-[304px] lg:flex-row"
      >
        <div
          class="relative top-[20px] h-[20px] w-[408px] text-[16px] font-normal leading-[19.5px]"
        >
          Web3eco © All Rights Reserved. 2023
        </div>
        <div
          class="relative top-[20px] flex h-[20px] w-[258px] flex-row gap-[50px]"
        >
          <div
            @click="TermsOfUse"
            class="h-[20px] w-[102px] text-[16px] font-normal leading-[19.5px] hover:text-darker-green-theme cursor-pointer"
          >
            Terms of use
          </div>
          <div
            @click="privacyPolicy"
            class="h-[20px] w-[109px] text-[16px] font-normal leading-[19.5px] hover:text-darker-green-theme cursor-pointer"
          >
            Privacy Policy
          </div>
        </div>
        <div
          class="relative left-[400px] flex h-[48px] w-[350px] flex-row gap-8"
        >
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>
