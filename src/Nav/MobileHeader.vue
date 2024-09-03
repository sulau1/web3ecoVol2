<script setup></script>

<template>
  <div class="md:hidden">
    <div
      id="main-header"
      class="fixed top-0 z-50 flex h-[90px] w-screen flex-row gap-[190px] bg-black bg-opacity-80 pl-[20px] pt-[34px]"
    >
      <img
        @click="scrollToTop"
        src="/web3Logo.png"
        class="h-[22px] w-[120px] bg-cover"
        alt="Logo"
      />
      <img @click="toggleMenu" src="/menu.svg" class="h-[32px] w-[32px]" />
    </div>

    <!-- Серый фон, который покрывает экран -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-black/90 bg-opacity-50"
      @click="closeMenu"
    ></div>

    <!-- Меню, которое выплывает -->
    <div
      v-if="isMenuOpen"
      id="PopUpMenu"
      class="fixed right-0 top-0 z-50 h-screen w-[70%] bg-black text-white"
    >
      <div class="flex h-[375px] w-[90px] flex-col items-center pt-40">
        <div class="flex h-[20px] w-screen flex-col gap-10">
          <div
            @click="scrollToTocenMobile"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            О токенизации
          </div>
          <div
            @click="scrollToHowToGetMobile"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            Как получить?
          </div>
          <div
            @click="scrollToBuyNftMobile"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            Купить NFT
          </div>

          <div
            @click="scrollToIncomeMobile"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            Доходность
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
