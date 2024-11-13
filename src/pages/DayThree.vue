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
            <p class="text-white text-4xl text-center !font-dmSerif">Creative Fair</p>
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
      <div class="px-20 mt-10 flex flex-col gap-y-3">
        <p class="text-2xl font-semibold">What to expect?</p>
        <div
          class="flex flex-row gap-4 overflow-x-auto flex-nowrap w-[calc(100vw-160px)]"
        >
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="Rmd"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="HorseRider"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="DancingLady"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="Rmd"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="HorseRider"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="DancingLady"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="Rmd"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="HorseRider"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="DancingLady"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="Rmd"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="HorseRider"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div class="zoom-effect !w-1/3 flex-shrink-0">
            <ImageView
              :src="DancingLady"
              alt="highlight-imgs"
              class="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </q-intersection>

    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="mt-10 px-20 flex flex-row items-center justify-between">
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
      <div class="px-20 mt-10">
        <q-timeline color="secondary" layout="comfortable" side="right">
          <q-timeline-entry heading body="Timeline heading" />
          <q-timeline-entry
            title="Professional film-training by Nollywood/Hollywood giants"
            subtitle="February 22, 1986"
            body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quaerat."
          />
          <q-timeline-entry
            title="Professional photography training by industry experts"
            subtitle="February 22, 1986"
            body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quaerat."
          />
          <q-timeline-entry
            title="Crafts and painting training by industry experts"
            subtitle="February 22, 1986"
            body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quaerat."
          />
          <q-timeline-entry
            title="Training on 'Understanding the business of the creative industry' "
            subtitle="February 22, 1986"
            body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quaerat."
          />
        </q-timeline>
      </div>
    </q-intersection>
    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="px-20">
        <q-card class="q-pa-md q-mt-lg">
          <q-card-section class="text-h5">Countdown to Event</q-card-section>
          <q-card-section class="q-mt-md row justify-around">
            <q-badge color="primary" :floating="false" class="q-pa-md">
              <div class="text-h4">{{ timeLeft.days }} {{ " " }}</div>
              <p>Day(s)</p>
            </q-badge>
            <q-badge color="primary" :floating="false" class="q-pa-md">
              <div class="text-h4">{{ timeLeft.hours }}</div>
              <p>Hour(s)</p>
            </q-badge>
            <q-badge color="primary" :floating="false" class="q-pa-md">
              <div class="text-h4">{{ timeLeft.minutes }}</div>
              <p>Minute(s)</p>
            </q-badge>
            <q-badge color="primary" :floating="false" class="q-pa-md">
              <div class="text-h4">{{ timeLeft.seconds }}</div>
              <p>Second(s)</p>
            </q-badge>
          </q-card-section>
        </q-card>
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

import { onMounted, ref } from "vue";
const modules = ref([EffectCards]);
const slideShowModules = ref([Autoplay, Pagination, Navigation]);
const carouselImages = ref([DragOne, DragTwo, DragThree, DragFour]);

const targetDate = ref(new Date("2024-12-31T23:59:59").getTime());
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const intervalId = ref(null);
const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const distance = targetDate.value - now;

  if (distance > 0) {
    timeLeft.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  } else {
    clearInterval(intervalId.value);
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

onMounted(() => {
  calculateTimeLeft();
  intervalId.value = setInterval(calculateTimeLeft, 1000);
});
</script>

<style lang="scss">
.hero-entry {
  background: url("../assets/noccref/APNBWUP4A5HJHPUOC7ZYWSQHI4.jpg") no-repeat top
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
