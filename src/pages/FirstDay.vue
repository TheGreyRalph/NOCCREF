<template>
  <div class="flex flex-col gap-y-3">
    <q-intersection :transition-duration="600" transition="scale" once>
      <div
        class="h-[80vh] relative flex flex-row items-center justify-between hero-entry"
      >
        <div
          class="flex h-full w-full text-white items-center justify-center bg-[#00000071]"
        >
          <div class="flex flex-col gap-y-4">
            <p class="text-white text-4xl text-center">Opening Ceremony</p>
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              nihil?
            </p>
            <div
              class="flex flex-row gap-x-5 flex-1 items-center justify-center"
            >
              <button
                class="border border-solid border-white py-3 px-6 rounded-sm"
              >
                Get Tickets
              </button>
              <button
                class="border border-solid border-white py-3 px-6 rounded-sm"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </q-intersection>
    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="px-[80px] mt-10 flex flex-col gap-y-3">
        <p class="text-2xl font-semibold">What to expect?</p>
        <div class="flex flex-row gap-4">
          <span class="zoom-effect flex-1">
            <ImageView
              :src="Rmd"
              alt="highlight-imgs"
              class="flex-1 w-full h-[200px] !object-fit rounded-lg"
            />
          </span>
          <span class="zoom-effect flex-1">
            <ImageView
              :src="HorseRider"
              alt="highlight-imgs"
              class="flex-1 w-full h-[200px] object-cover rounded-lg"
            />
          </span>
          <span class="zoom-effect flex-1">
            <ImageView
              :src="DancingLady"
              alt="highlight-imgs"
              class="flex-1 w-full h-[200px] !object-fit rounded-lg"
            />
          </span>
        </div>
      </div>
    </q-intersection>

    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="mt-10 px-[80px] flex flex-row items-center justify-between">
        <div class="flex flex-col gap-y-3 w-[43%]">
          <p>Explore the northern culture</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            accusamus et eos nesciunt iste illo!
          </p>
          <button class="py-3 px-4 rounded-md border border-solid border-black">
            Enroll Now
          </button>
        </div>
        <div class="flex items-end mr-9">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="w-[320px] h-[400px]"
          >
            <swiper-slide v-for="(image, index) in carouselImages" :key="index">
              <img :src="image" class="w-full h-full object-cover" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </q-intersection>
    <q-intersection :transition-duration="600" transition="scale" once>
      <div
        class="mt-10 mx-[80px] flex flex-row gap-x-11 items-start justify-start h-[400px] bg-lightGrayDay rounded-lg p-10"
      >
        <div class="basis-[60%]">
          <span class="zoom-effect flex-1 h-full">
            <ImageView
              :src="NorthLeaders"
              alt="highlight-imgs"
              class="flex-1 w-full h-[320px] !object-fit rounded-lg bg-left-top"
            />
          </span>
        </div>
        <div class="basis-[35%]">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            deserunt, optio qui facere assumenda explicabo in odit ipsa vero
            quasi quod consequatur rerum velit voluptatibus adipisci eos
            accusantium placeat rem.
          </p>
        </div>
      </div>
    </q-intersection>
  </div>
</template>

<script setup>
import LandView from "../assets/noccref/DSC_0718 fade.png";
import ImageView from "../components/ImageView.vue";
import DragOne from "../assets/noccref/121.png";
import DragTwo from "../assets/noccref/DSC_0093.jpg";
import DragThree from "../assets/noccref/DSC_0458 (5).jpg";
import DragFour from "../assets/noccref/DSC_0713.jpg";
import Rmd from "../assets/noccref/istockphoto-537311780-612x612.jpg";
import HorseRider from "../assets/noccref/Kaduna_Centenary_IMG_5221.jpg";
import DancingLady from "../assets/noccref/Kaduna_KADFEST_ 004_ IMG_M9A7433.jpg";
import NorthLeaders from "../assets/noccref/DSC_0458 (5).jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ref } from "vue";
const modules = ref([EffectCards]);
const slideShowModules = ref([Autoplay, Pagination, Navigation]);
const carouselImages = ref([DragOne, DragTwo, DragThree, DragFour]);
</script>

<style lang="scss">
.hero-entry {
  background: url("../assets/noccref/Cultural Exchange.jpg") no-repeat center
    center/cover;
}

.swiper {
  width: 320px;
  height: 400px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
  color: #d9dee2;
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
