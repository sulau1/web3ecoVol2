<script setup lang="ts">
import MainGreenButton from "../components/MainGreenButton.vue";
</script>

<template>
  <div
    class="relative top-[150px] grid h-[368px] w-[335px] grid-cols-1 gap-8 lg:left-[104px] lg:top-[194px] lg:h-[360px] lg:w-[631px] lg:gap-[56px]"
  >
    <div
      class="relative left-[20px] grid h-[276px] w-[335px] grid-cols-1 gap-[16px] lg:left-0 lg:h-[244px] lg:w-[631px] lg:gap-[24px]"
    >
      <div
        class="h-[120px] w-[335px] text-center text-[32px] font-black leading-[40px] text-white lg:h-[120px] lg:w-[631px] lg:text-left lg:text-[48px] lg:leading-[60px]"
      >
        Выберите свой NFT-участок плантации
      </div>
      <div
        class="relative top-[30px] grid h-[140px] w-[309px] grid-cols-1 text-center text-[16px] font-medium leading-[19.5px] text-white lg:h-[100px] lg:w-[616px] lg:text-left"
      >
        <div>
          И получайте прибыль от продажи древесины в USDT, а также токены
          проекта.
        </div>
        <div>
          Достаточно всего лишь от 500$, чтобы сделать первый шаг к спасению
          планеты.
        </div>
      </div>
    </div>
    <MainGreenButton class="relative left-[60px]">
      Выпустить NFT</MainGreenButton
    >
  </div>
</template>
