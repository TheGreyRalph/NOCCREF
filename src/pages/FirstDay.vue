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
      <div class="mt-10 px-[80px] flex flex-row items-center justify-between">
        <div class="flex flex-col gap-y-3 w-[33%]">
          <p>Explore the northern culture</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            accusamus et eos nesciunt iste illo!
          </p>
          <button class="py-3 px-4 rounded-md border border-solid border-black">Enroll Now</button>
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
    <!-- <div class="mt-11">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="slideShowModules"
        class="w-full"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide
        ><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide
        ><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide
        ><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>

<script setup>
import LandView from "../assets/noccref/DSC_0718 fade.png";
import DragOne from "../assets/noccref/121.png";
import DragTwo from "../assets/noccref/DSC_0093.jpg";
import DragThree from "../assets/noccref/DSC_0458 (5).jpg";
import DragFour from "../assets/noccref/DSC_0713.jpg";
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
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
