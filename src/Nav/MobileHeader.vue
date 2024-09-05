<script setup>
import { ref } from "vue";
import "../table/TableProcessOfTocenization.vue";
import "../table/MobileHowToGetNFT.vue";
import "../table/TableNftPriceForecast.vue";
import "../table/MobileTableAboutIncome.vue";
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToTokenization = () => {
  const element = document.getElementById("Tokenization");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};
const scrollToHowToGet = () => {
  const element = document.getElementById("HowToGet");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};
const scrollToPrice = () => {
  const element = document.getElementById("Price");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};
const scrollToIncome = () => {
  const element = document.getElementById("Income");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="md:hidden">
    <div
      id="main-header"
      class="fixed top-0 z-50 flex h-[90px] w-screen flex-row gap-[190px] bg-black/90 bg-opacity-80 pl-[20px] pt-[34px]"
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
      class="fixed right-0 top-0 z-50 text-white"
      @click.stop
    >
      <div class="flex flex-col items-center pt-40">
        <div class="flex h-[20px] w-[200px] flex-col gap-10">
          <div
            @click="scrollToTokenization"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            О токенизации
          </div>
          <div
            @click="scrollToHowToGet"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            Как получить?
          </div>
          <div
            @click="scrollToPrice"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            Купить NFT
          </div>

          <div
            @click="scrollToIncome"
            class="h-[20px] w-[129px] cursor-pointer text-right font-mono text-[16px] font-medium leading-[19.5px] text-white transition duration-300 hover:text-green-line"
          >
            Доходность
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #PopUpMenu {
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  z-index: 9999;
}

#PopUpMenu.v-enter-active,
#PopUpMenu.v-leave-active {
  transform: translateX(0);
} */
</style>
