<script setup lang="ts">
const NuberSelectedTrees = ref(0);
let SupplyWoods = 100;
let WoodPrice = 75;
const TotalPriceOfNft = 0;

const Total = computed(() => {
  return TotalPriceOfNft + NuberSelectedTrees.value * WoodPrice;
});

const VisiblePopUp = ref(false);

const ShowPopUp = () => {
  VisiblePopUp.value = !VisiblePopUp.value;
};

const OneTreeSelected = () => {
  WoodPrice = 75;
  SupplyWoods = 100;
  togglePopup();
  const pic = document.getElementById("CardTree");
  pic.setAttribute("src", "/tree1.png");
};

const TenTreeSelected = () => {
  WoodPrice = 619;
  SupplyWoods = 30;
  togglePopup();
  const pic = document.getElementById("CardTree");
  pic.setAttribute("src", "/tree2.jpg");
};

const HundredTreeSelected = () => {
  WoodPrice = 6090;
  SupplyWoods = 10;
  togglePopup();
  const pic = document.getElementById("CardTree");
  pic.setAttribute("src", "/tree3.jpg");
};

const SixHundredTreeSelected = () => {
  WoodPrice = 32990;
  SupplyWoods = 1;
  togglePopup();
  const pic = document.getElementById("CardTree");
  pic.setAttribute("src", "/tree4.png");
};

const togglePopup = () => {
  VisiblePopUp.value = !VisiblePopUp.value;
};

import { onMounted, onUnmounted, ref, computed } from "vue";
// import countdown from "countdown";

// // Устанавливаем конечную дату
// const endDate = new Date("2024-09-30");

// // Создаем реактивное свойство для оставшегося времени
// const timeRemaining = ref("");

// // Функция для обновления времени обратного отсчета
// const updateCountdown = () => {
//   const time = countdown(null, endDate);
//   timeRemaining.value = time.toString(); // Обновляем реактивное свойство
// };

// // Используем onMounted для запуска таймера при монтировании компонента
// onMounted(() => {
//   updateCountdown(); // Обновляем сразу при загрузке

//   // Устанавливаем интервал для обновления каждую секунду
//   const interval = setInterval(updateCountdown, 1000);

//   // Очищаем интервал при размонтировании компонента
//   onUnmounted(() => {
//     clearInterval(interval);
//   });
// });
</script>

<template>
  <div
    id="Price"
    class="relative top-[-100px] h-[1091px] w-[335px] lg:top-[400px] lg:h-[675px] lg:w-[1440px]"
  >
    <div
      class="relative left-[30px] flex h-[951px] flex-col gap-[34px] rounded-[20px] bg-gray-image lg:left-[104px] lg:top-[60px] lg:h-[555px] lg:w-[1232px] lg:flex-row"
    >
      <!-- ---------------------------------------1--------------------------------------------------- -->
      <div
        class="z-30 h-[542px] w-[335px] rounded-[20px] lg:h-[555px] lg:w-[420px]"
      >
        <img
          id="CardTree"
          src="/tree1.png"
          alt="tree1"
          class="h-[542px] w-[335px] rounded-[20px] bg-cover lg:h-[555px] lg:w-[420px]"
        />
        <div
          class="relative top-[-110px] h-[110px] w-[335px] rounded-[20px] bg-custom-gray-pic backdrop-blur lg:w-[420px]"
        >
          <div>
            <div
              @click="ShowPopUp"
              class="relative left-[80px] top-[43px] flex h-[24px] w-[260px] cursor-pointer select-none flex-row gap-4"
            >
              <div
                class="text-[24px] font-black leading-[24px] text-green-line"
              >
                Выберите NFT
              </div>
              <img
                id="ArrowShowPopUP"
                src="/arrowDown.svg"
                alt="VisiblePopUp"
                width="32"
                height="32"
                class="transition-transform duration-300"
                :class="{
                  'rotate-180 transform': VisiblePopUp, //разворот
                  'rotate-0 transform': !VisiblePopUp, //стрелка исходное
                }"
              />
            </div>

            <div
              id="popup"
              v-show="VisiblePopUp"
              class="absolute left-[60px] top-[80px] z-50 flex h-[170px] w-[260px] flex-col gap-2 bg-blackRightBar"
            >
              <div
                @click="OneTreeSelected"
                class="relative left-[30px] top-[10px] h-[30px] w-[200px] cursor-pointer select-none px-[10px] py-[7px] hover:bg-green-button"
              >
                <p
                  class="text-center text-[16px] font-bold uppercase leading-[16px] text-mint-green"
                >
                  1 дерево
                </p>
              </div>
              <div
                @click="TenTreeSelected"
                class="relative left-[30px] top-[10px] h-[30px] w-[200px] cursor-pointer select-none px-[10px] py-[7px] hover:bg-green-button"
              >
                <p
                  class="text-center text-[16px] font-bold uppercase leading-[16px] text-mint-green"
                >
                  10 деревьев
                </p>
              </div>
              <div
                @click="HundredTreeSelected"
                class="relative left-[30px] top-[10px] h-[30px] w-[200px] cursor-pointer select-none px-[10px] py-[7px] hover:bg-green-button"
              >
                <p
                  class="text-center text-[16px] font-bold uppercase leading-[16px] text-mint-green"
                >
                  100 деревьев
                </p>
              </div>
              <div
                @click="SixHundredTreeSelected"
                class="relative left-[30px] top-[10px] h-[30px] w-[200px] cursor-pointer select-none px-[10px] py-[7px] hover:bg-green-button"
              >
                <p
                  class="text-center text-[16px] font-bold uppercase leading-[16px] text-mint-green"
                >
                  600 деревьев
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- -------------------------------------------2--------------------------------------------------- -->
      <div class="h-full w-full">
        <div
          class="absolute left-[40px] right-0 top-[550px] z-10 flex h-[40px] w-[305px] flex-row gap-2 lg:left-[950px] lg:top-[22px] lg:w-[212px]"
        >
          <div
            class="relative top-[10px] h-[40px] w-[131px] text-[16px] font-medium leading-[19.5px] text-white lg:top-[0] lg:w-[66px]"
          >
            PUBLIC ROUND
          </div>
          <div
            class="flex h-[40px] w-[138px] flex-row gap-[13px] rounded-[10px] bg-custom-white text-[16px] leading-[19.5px]"
          >
            {{ timeRemaining }}
          </div>
        </div>
        <div
          class="relative left-[15px] top-[20px] flex h-[217px] w-[305px] flex-col gap-4 lg:left-0 lg:top-[97px] lg:h-[276px] lg:gap-[28px]"
        >
          <div
            class="relative z-20 h-[29px] w-[163px] lg:h-[44px] lg:w-[244px]"
          >
            <h1
              class="text-[24px] font-bold leading-[29.26px] text-white lg:text-[36px] lg:leading-[43.88px]"
            >
              Купить NFT
            </h1>
          </div>

          <div
            class="relative z-20 flex h-[92px] w-[249px] flex-col gap-4 lg:h-[136px] lg:w-[305px] lg:gap-[32px]"
          >
            <div
              class="flex h-[20px] w-[154px] flex-row gap-2 text-[20px] font-black uppercase leading-[20px] text-white lg:h-[24px] lg:w-[190px] lg:text-[24px] lg:leading-[24px]"
            >
              <span
                class="text-[20px] font-black leading-[20px] text-mint-green lg:text-[24px] lg:leading-[24px]"
                >Supply</span
              >
              0/{{ SupplyWoods }}
            </div>

            <div
              class="flex h-[24px] flex-row gap-2 text-[20px] font-black uppercase leading-[20px] text-white lg:text-[24px] lg:leading-[24px]"
            >
              <span
                class="text-[20px] font-black leading-[20px] text-mint-green lg:text-[24px] lg:leading-[24px]"
                >Price</span
              >
              {{ WoodPrice }} usdt
            </div>

            <div
              class="flex h-[24px] w-[350px] flex-row gap-2 text-[20px] font-black uppercase leading-[20px] text-white lg:text-[24px] lg:leading-[24px]"
            >
              <span
                class="text-[20px] font-black leading-[20px] text-mint-green lg:text-[24px] lg:leading-[24px]"
                >Total price</span
              >
              {{ Total }}.00 usdt
            </div>
          </div>

          <div class="relative flex h-[40px] w-full flex-row gap-4">
            <div
              class="flex h-[40px] w-[138px] flex-row gap-5 rounded-[10px] bg-custom-white"
            >
              <div
                class="flex h-[40px] w-[138px] flex-row gap-5 rounded-[10px] bg-custom-white"
              >
                <button
                  @click="NuberSelectedTrees--"
                  :disabled="NuberSelectedTrees === 0"
                  :class="{
                    'cursor-not-allowed bg-gray-300': NuberSelectedTrees === 0,
                  }"
                  class="relative left-[2px] top-[2px] h-[36px] w-[36px] cursor-pointer rounded-[10px] bg-white"
                >
                  <div class="relative h-[18px] w-[18px] px-[11px] py-[11px]">
                    <div
                      class="relative left-[-2px] w-[10.5px] border-[2px] border-black"
                    ></div>
                  </div>
                </button>

                <div
                  class="relative left-[15px] top-[10px] h-[24px] w-[50px] font-bold"
                >
                  <p>{{ NuberSelectedTrees }}</p>
                </div>

                <button
                  @click="NuberSelectedTrees++"
                  :disabled="NuberSelectedTrees === SupplyWoods"
                  :class="{
                    'cursor-not-allowed bg-gray-300':
                      NuberSelectedTrees === SupplyWoods,
                  }"
                  class="relative right-[2px] top-[2px] h-[36px] w-[36px] cursor-pointer rounded-[10px] bg-black"
                >
                  <div
                    class="h-[18px] w-[18px] items-center px-[11px] py-[11px]"
                  >
                    <div
                      class="relative left-[-2px] top-[-11px] select-none font-bold text-white"
                    >
                      +
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div
              class="h-[40] w-[151px] select-none rounded-[10px] bg-custom-white px-[10px] py-[10px]"
            >
              <div
                class="h-[20px] w-[231px] text-[16px] font-semibold uppercase leading-[19.5px]"
              >
                usdt (Polygon)
              </div>
            </div>

            <div
              @click="SmartContract"
              class="absolute left-[20px] top-[50px] flex h-[32px] w-[276px] flex-row items-center lg:relative lg:left-[150px] lg:top-0 lg:h-[40px] lg:w-[284px]"
            >
              <div
                class="h-[20px] w-[232px] cursor-pointer items-center text-[16px] font-bold leading-[19.5px] text-mint-green hover:text-dark-mint-green"
              >
                Ссылка на смарт-контракт
              </div>
              <div
                class="h-[32px] w-[32px] cursor-pointer rounded-full bg-mint-green px-[10px] py-[6px] lg:h-[40px] lg:w-[40px] lg:py-[10px]"
              >
                <img
                  src="/Polygon_Blockchain_Matic_Logo.svg"
                  alt="Logo"
                  class="h-[18px] w-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="relative left-[10px] top-[50px] h-[60px] w-[315px] rounded-[100px] bg-green-gradient transition duration-300 hover:bg-darker-green-gradient lg:left-[30px] lg:top-[153px] lg:w-[712px]"
        >
          <div
            class="h-[20px] w-full items-center text-[16px] font-semibold uppercase leading-[19.5px] text-white"
          >
            выпустить nft
          </div>
        </button>

        <div
          class="relative left-[40px] top-[50px] h-[20px] w-[278px] text-[16px] leading-[19.5px] text-white lg:left-[270px] lg:top-[153px]"
        >
          Нет USDT на Polygon?
          <span
            @click="Change"
            class="cursor-pointer font-bold text-green-line hover:text-darker-green-theme"
            >Обменять.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
