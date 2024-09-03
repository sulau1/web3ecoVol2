<script setup lang="ts">
import { ref } from "vue";
const isAnswerVisible1 = ref(false);
const isAnswerVisible2 = ref(false);
const isAnswerVisible3 = ref(false);
const isAnswerVisible4 = ref(false);
const changeAnswer1 = () => {
  isAnswerVisible1.value = !isAnswerVisible1.value;
};
const changeAnswer2 = () => {
  isAnswerVisible2.value = !isAnswerVisible2.value;
};
const changeAnswer3 = () => {
  isAnswerVisible3.value = !isAnswerVisible3.value;
};
const changeAnswer4 = () => {
  isAnswerVisible4.value = !isAnswerVisible4.value;
};
</script>

<template>
  <div
    class="relative top-[1900px] h-[669px] w-[375px] lg:top-[400px] lg:h-[523px] lg:w-[1440px]"
  >
    <div
      class="relative left-[161px] top-[30px] h-[29px] w-[54px] lg:left-[675px] lg:top-[60px] lg:h-[44px] lg:w-[90px]"
    >
      <h1
        class="text-center text-[24px] font-bold uppercase leading-[29.26px] text-white lg:text-[36px] lg:leading-[43.88px]"
      >
        faq
      </h1>
    </div>
    <div
      class="relative left-[20px] top-[75px] h-[563.94px] w-[370px] lg:left-0 lg:top-[137px] lg:h-[326px] lg:w-[1440px] lg:px-[110px]"
    >
      <div class="h-[563.94px] w-[370px] lg:h-[326px] lg:w-[1228px]">
        <div
          class="w-[360px] border-t border-solid border-white/30 pt-[3px] lg:w-[1228px]"
        >
          <div
            @click="changeAnswer1"
            class="flex h-[86.39px] w-[360px] cursor-pointer flex-row lg:h-[50.8px] lg:w-[1228px]"
          >
            <div
              class="relative left-[20px] top-[14px] h-[20px] w-[619px] text-[16px] font-bold leading-[19.5px] text-white"
            >
              Вы продаете реальные или виртуальные участки земли с деревьями?
            </div>
            <div
              class="relative left-2 h-[17px] w-[24px] select-none text-[32px] font-bold text-green-button lg:left-[564px]"
            >
              {{ isAnswerVisible1 ? "-" : "+" }}
            </div>
          </div>

          <transition name="fade">
            <div
              v-if="isAnswerVisible1"
              class="flex w-[360px] flex-col gap-[15.39px] px-[20px] pt-[9px] lg:w-[1228px]"
            >
              <div
                class="h-[140px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:h-[40px] lg:w-[1118px]"
              >
                Мы продаем NFT-участки земли с деревьями в реальном мире.
                Продаваемые нами деревья токенизированы, то есть права на
                получение прибыли на них преобразуются в токены и заносятся в
                блокчейн.
              </div>
              <div
                class="h-[80px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:h-[20px] lg:w-[1118px]"
              >
                Каждый, кто владеет токеном, становится владельцем дерева и
                юридическим правом на получение прибыли от инвестиции.
              </div>
            </div>
          </transition>
        </div>

        <div
          class="w-[360px] border-t border-solid border-white/30 pt-[3px] lg:w-[1228px]"
        >
          <div
            @click="changeAnswer2"
            class="flex h-[86.39px] w-[360px] cursor-pointer flex-row lg:h-[50.8px] lg:w-[1228px]"
          >
            <div
              class="relative left-[20px] top-[14px] h-[20px] w-[619px] text-[16px] font-bold leading-[19.5px] text-white"
            >
              Какие есть защита и гарантии для инвестора?
            </div>
            <div
              class="relative left-2 h-[17px] w-[24px] select-none text-[32px] font-bold text-green-button lg:left-[564px]"
            >
              {{ isAnswerVisible2 ? "-" : "+" }}
            </div>
          </div>

          <transition name="fade">
            <div
              v-if="isAnswerVisible2"
              class="flex w-[360px] flex-col gap-[15.39px] px-[20px] pt-[9px] lg:w-[1228px]"
            >
              <div
                class="h-[140px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:h-[40px] lg:w-[1118px]"
              >
                Во-первых, проект официально зарегистрирован в Швейцарии — самой
                безопасной юрисдикции для инвестиций. Действует строгий договор
                оферты, созданный согласно регулятору Швейцарии. Все расчёты
                проводятся через блокчейн, что позволяет избежать посредников и
                лишних комиссий.
              </div>
              <div
                class="relative top-2 h-[80px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:top-0 lg:h-[20px] lg:w-[1118px]"
              >
                Во-вторых, наш проект — не какой-то завуалированный под utility
                инвестиционный токен, как это делают многие проекты. NFT —
                официально зарегистрированная ценная бумага, дающая право на
                получение прибыли.
              </div>
            </div>
          </transition>
        </div>

        <div
          class="relative top-[50px] w-[360px] border-t border-solid border-white/30 pt-[3px] lg:top-[30px] lg:w-[1228px]"
        >
          <div
            @click="changeAnswer3"
            class="flex h-[86.39px] w-[360px] cursor-pointer flex-row lg:h-[50.8px] lg:w-[1228px]"
          >
            <div
              class="relative left-[20px] top-[14px] h-[20px] w-[619px] text-[16px] font-bold leading-[19.5px] text-white"
            >
              Расскажите на уровне простого пользователя, что такое Web3Eco?
            </div>
            <div
              class="relative left-2 h-[17px] w-[24px] select-none text-[32px] font-bold text-green-button lg:left-[564px]"
            >
              {{ isAnswerVisible3 ? "-" : "+" }}
            </div>
          </div>

          <transition name="fade">
            <div
              v-if="isAnswerVisible3"
              class="flex w-[360px] flex-col gap-[15.39px] px-[20px] pt-[9px] lg:w-[1228px]"
            >
              <div
                class="h-[140px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:h-[40px] lg:w-[1118px]"
              >
                Во-первых, проект официально зарегистрирован в Швейцарии — самой
                безопасной юрисдикции для инвестиций. Действует строгий договор
                оферты, созданный согласно регулятору Швейцарии. Все расчёты
                проводятся через блокчейн, что позволяет избежать посредников и
                лишних комиссий.
              </div>
              <div
                class="relative top-2 h-[80px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:top-0 lg:h-[20px] lg:w-[1118px]"
              >
                Во-вторых, наш проект — не какой-то завуалированный под utility
                инвестиционный токен, как это делают многие проекты. NFT —
                официально зарегистрированная ценная бумага, дающая право на
                получение прибыли.
              </div>
            </div>
          </transition>
        </div>

        <div
          class="relative top-[100px] w-[360px] border-t border-solid border-white/30 pt-[3px] lg:top-[60px] lg:w-[1228px]"
        >
          <div
            @click="changeAnswer4"
            class="flex h-[86.39px] w-[360px] cursor-pointer flex-row lg:h-[50.8px] lg:w-[1228px]"
          >
            <div
              class="relative left-[20px] top-[14px] h-[20px] w-[619px] text-[16px] font-bold leading-[19.5px] text-white"
            >
              Как вы можете подтвердить, что участок принадлежит вам?
            </div>
            <div
              class="relative left-2 h-[17px] w-[24px] select-none text-[32px] font-bold text-green-button lg:left-[564px]"
            >
              {{ isAnswerVisible4 ? "-" : "+" }}
            </div>
          </div>

          <transition name="fade">
            <div
              v-if="isAnswerVisible4"
              class="flex w-[360px] flex-col gap-[15.39px] px-[20px] pt-[9px] lg:w-[1228px]"
            >
              <div
                class="h-[140px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:h-[40px] lg:w-[1118px]"
              >
                У нас есть документальное подтверждение права собственности на
                участок земли, официально зарегистрированное в кадастре
                Узбекистана.
              </div>
              <div
                class="relative h-[80px] w-[330px] text-[16px] font-medium leading-[19.5px] text-white lg:h-[20px] lg:w-[1118px]"
              >
                Нам нечего скрывать от своих инвесторов и вы можете ознакомиться
                с этими документами по ссылке. Более того, мы всегда рады
                провести экскурсию на нашей плантации для всех наших инвесторов.
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
