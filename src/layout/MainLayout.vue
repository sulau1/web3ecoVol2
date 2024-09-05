<script setup>
import Header from "../Nav/Header.vue";
import MobileHeader from "../nav/MobileHeader.vue";
import RightBar from "../components/RightBar.vue";
import TableFirstScreen from "../table/TableFirstScreen.vue";
import TableProcessOfTocenization from "../table/TableProcessOfTocenization.vue";
import TableHowToGetNft from "../table/TableHowToGetNft.vue";
import MobileHowToGetNft from "../table/MobileHowToGetNFT.vue";
import TableNftPriceForecast from "../table/TableNftPriceForecast.vue";
import BuyNftWithCard from "../components/BuyNftWithCard.vue";
import TableYouCanChooseTwoKindsOfNft from "../table/TableYouCanChooseTwoKindsOfNft.vue";
import TableAboutIncome from "../table/TableAboutIncome.vue";
import MobileTableAboutIncome from "../table/MobileTableAboutIncome.vue";
import faq from "../components/faq.vue";
import Footer from "../Nav/Footer.vue";
import MobileFooter from "../nav/MobileFooter.vue";
</script>

<template>
  <Header></Header>
  <MobileHeader></MobileHeader>
  <RightBar></RightBar>
  <div
    class="w-[400px] h-[1600px] lg:w-[1440px] lg:h-[869px] mx-auto"
    :style="{ backgroundImage: `url(/FirstVector.png)` }"
  >
    <TableFirstScreen></TableFirstScreen>
    <div
      class="relative left-[-35px] top-[206px] h-[180px] w-[180px] rounded-full bg-cover lg:left-[803px] lg:top-[-215px] lg:h-[329px] lg:w-[328px]"
      :style="{ backgroundImage: `url(/ForestFirstScreen.png)` }"
    ></div>
    <img
      src="/appleFirst.png"
      alt=""
      class="absolute left-[-70px] -z-20 top-[180px] h-[599.83px] w-[516.52px] select-none lg:left-[979px] lg:top-[-10.92px] lg:h-[803.87px] lg:w-[633px]"
    />
    <div
      class="relative left-[161px] top-[157px] h-[119px] w-[119px] rounded-full bg-cover lg:left-[1107px] lg:top-[-233px] lg:h-[203px] lg:w-[203px]"
      :style="{ backgroundImage: `url(/Paporotnik.png)` }"
    ></div>
    <TableProcessOfTocenization></TableProcessOfTocenization>
    <TableHowToGetNft></TableHowToGetNft>
    <MobileHowToGetNft></MobileHowToGetNft>
    <TableNftPriceForecast></TableNftPriceForecast>
    <BuyNftWithCard></BuyNftWithCard>
    <TableYouCanChooseTwoKindsOfNft></TableYouCanChooseTwoKindsOfNft>
    <TableAboutIncome></TableAboutIncome>
    <MobileTableAboutIncome></MobileTableAboutIncome>
    <faq></faq>
  </div>
  <Footer></Footer>
  <MobileFooter></MobileFooter>
</template>

<style scoped></style>
