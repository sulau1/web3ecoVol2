<script setup>
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 0) {
    header.classList.add("bg-active");
  } else {
    header.classList.remove("bg-active");
  }
});

import MainGreenButton from "../components/ButtonWithThinBorder.vue";
</script>

<template>
  <header
    id="main-header"
    class="fixed left-1/2 top-0 z-50 hidden h-[98px] w-full -translate-x-1/2 transform bg-opacity-80 md:block"
  >
    <div
      class="flex h-[90px] w-[375px] flex-row items-center space-x-4 pl-[104px] pt-[24px] lg:mx-auto lg:h-[50px] lg:w-[1232px]"
    >
      <div
        @click="scrollToTop"
        class="relative left-[-620px] h-[22px] w-[120px] cursor-pointer lg:left-[0px] lg:top-[-7px]"
      >
        <img src="/web3Logo.png" class="bg-cover" alt="Logo" />
      </div>

      <div class="flex-row-1 flex h-[20px] w-screen gap-10 lg:w-[995px]">
        <div
          @click="scrollToTocen"
          class="h-[20px] w-[129px] cursor-pointer font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
        >
          О токенизации
        </div>
        <div
          @click="scrollToHowToGet"
          class="h-[20px] w-[129px] cursor-pointer font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
        >
          Как получить?
        </div>
        <div
          @click="scrollToBuyNft"
          class="h-[20px] w-[129px] cursor-pointer font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
        >
          Купить NFT
        </div>

        <div
          @click="scrollToIncome"
          class="h-[20px] w-[129px] cursor-pointer font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
        >
          Доходность
        </div>
      </div>
      <div class="h-[24px] w-[24px]">
        <img
          src="/iconPerson.png"
          class="h-full w-full object-cover"
          alt="Person"
        />
      </div>
      <MainGreenButton>Connect</MainGreenButton>
    </div>
  </header>
</template>

<style scoped>
.bg-active {
  background-image: linear-gradient(
    135deg,
    #141514 25%,
    #2f2f2e90 57%,
    #191918 90%
  );
}
</style>
