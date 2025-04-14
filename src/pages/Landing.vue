<template>
  <div class="flex flex-col gap-y-3">
    <q-intersection :transition-duration="600" transition="scale" once>
      <div
        class="h-[calc(100vh-80px)] flex flex-row items-center justify-start no-wrap relative bg-heroBrown px-12"
      >
        <div class="custom-shape-divider-bottom-1729785380">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="flex-1 flex flex-col gap-y-2">
          <p
            class="text-4xl font-semibold sm:text-sm minLg:text-4xl font-dmSerif"
          >
            Diverse cultural heritage of Nothern Nigeria.
          </p>
          <p class="w-[70%] sm:text-sm md:w-[90%] minLg:block">
            The Northern Cultural and Creative Festival (NOCCREF) is poised to
            be the biggest creative and cultural event ever witnessed in Africa.
          </p>
        </div>
        <img
          class="flex-1 max-w-xs h-auto w-full sm:hidden md:hidden minLg:block"
          src="~assets/cartoon-woman-no-bg.png"
          alt="landing"
        />
      </div>
    </q-intersection>
    <q-intersection :transition-duration="600" transition="scale" once>
      <div
        class="row sm:column md:column minLg:row px-16 py-5 sm:py-12 sm:bg-heroBrown lg:bg-transparent"
      >
        <div class="col flex flex-col gap-y-5">
          <p class="text-sm tracking-wide">
            <q-icon class="text-textGrey" name="calendar_today" />
            Executive summary
          </p>
          <p class="text-sm text-textGrey w-[80%] xs:w-full minLg:w-[60%]">
            The Northern Cultural and Creative Festival (NOCCREF) is a week-long
            cultural and creative annual event that aims to showcase and promote
            the rich cultural heritage across the Northern part of Nigeria.
          </p>
          <p class="text-sm text-textGrey w-[80%] sm:w-full minLg:w-[60%]">
            The event is the brainchild of Rabitz Studios Limited, a Creative
            Media Company based in Kaduna, Northern Nigeria in collabora-tion
            with the Zazzau Emirate. Kaduna is the pilot state.
          </p>
          <button class="text-textBlue text-left">Learn more</button>
        </div>
        <div class="col q-pa-md sm:hidden minLg:block">
          <div class="column example-container">
            <div class="container mx-auto p-4">
              <div
                class="columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-2"
              >
                <div class="mb-2 break-inside-avoid">
                  <div class="zoom-effect">
                    <ImageView
                      :src="Models"
                      alt="masonry-lay"
                      imgClass="w-full h-full rounded-md shadow"
                    />
                  </div>
                </div>
                <div class="mb-2 break-inside-avoid w-full h-auto object-cover">
                  <div class="zoom-effect">
                    <ImageView
                      :src="TraditionalShirts"
                      alt="masonry-lay"
                      class="w-full h-full rounded-md shadow"
                    />
                  </div>
                </div>
                <div class="mb-2 break-inside-avoid">
                  <div class="zoom-effect">
                    <ImageView
                      :src="DancingWomen"
                      alt="masonry-lay"
                      class="w-full h-auto rounded-md shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-intersection>
    <q-intersection
      :transition-duration="600"
      transition="scale"
      once
      class="mt-12"
    >
      <p class="text-4xl font-semibold w-full text-center font-dmSerif mb-5">
        Objectives
      </p>
      <div class="wide-container h-[500px] px-12">
        <div
          v-for="(image, index) in noccref_obj"
          :key="index"
          @mouseenter="setHoveredImageIndex(index)"
          @mouseleave="resetHoveredImageIndex"
          :style="getHoveredStyles(index)"
          class="flex-image relative zoom-effect"
        >
          <img
            :src="image.image"
            alt="hover-image"
            class="flex-image h-full w-full object-cover rounded-lg"
          />
          <div
            :class="[
              'absolute top-0 left-0 flex justify-end flex-col gap-y-3 h-full w-full p-3 z-[9999]',
            ]"
          >
            <p
              v-show="showDesc && index === hoveredImageIndex"
              class="text-white text-lg font-semibold"
            >
              {{ image.description }}
            </p>
            <p
              :class="[
                'flex items-center justify-center rounded-full text-white border border-solid border-[#ffffff71] w-10 h-10 font-semibold',
              ]"
            >
              {{ index + 1 }}
            </p>
          </div>
        </div>
      </div>
    </q-intersection>
    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="flex justify-center mt-10">
        <p class="text-4xl font-semibold w-full text-center font-dmSerif">
          Continue your Journey
        </p>
        <div class="container mx-auto flex justify-center items-center my-12">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="relative transition-transform duration-300 -ml-4 w-[33%]"
            :style="getImageStyles(index)"
            @mouseenter="setHoveredIndex(index)"
          >
            <div class="zoom-effect">
              <ImageView
                :src="Models"
                :alt="`Image ${index + 1}`"
                class="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </q-intersection>
    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="px-12 flex flex-col gap-y-2 mt-8">
        <p class="text-4xl font-semibold w-full text-center font-dmSerif">
          What's new?
        </p>
        <p class="text-center text-sm">
          Fostering sector specific festivals and investment opportunities
        </p>
        <div class="flex flex-row gap-x-5 no-wrap h-[420px]">
          <div class="flex flex-col basis-[70%] gap-y-4 no-wrap">
            <div class="flex flex-row gap-x-4 no-wrap h-[210px]">
              <div class="w-[70%] h-[210px]">
                <div class="zoom-effect relative">
                  <ImageView
                    :src="FashionFestival"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                  <div
                    class="absolute w-full h-full top-0 left-0 p-4 flex items-end"
                  >
                    <p
                      class="text-2xl text-white font-semibold z-[9999] font-dmSerif"
                    >
                      Fashion Festival
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-[30%] h-[210px]">
                <div class="zoom-effect relative">
                  <ImageView
                    :src="FilmFestival"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                  <div
                    class="absolute w-full h-full top-0 left-0 p-4 flex items-end"
                  >
                    <p
                      class="text-2xl text-white font-semibold z-[9999] font-dmSerif"
                    >
                      Film Festival
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-x-4 no-wrap h-[210px]">
              <div class="w-[30%] h-[210px]">
                <div class="zoom-effect relative">
                  <ImageView
                    :src="MusicFestival"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                  <div
                    class="absolute w-full h-full top-0 left-0 p-4 flex items-end"
                  >
                    <p
                      class="text-2xl text-white font-semibold z-[9999] font-dmSerif"
                    >
                      Music Festival
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-[70%] h-full">
                <div class="zoom-effect relative">
                  <ImageView
                    :src="FoodFestival"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                  <div
                    class="absolute w-full h-full top-0 left-0 p-4 flex items-end"
                  >
                    <p
                      class="text-2xl text-white font-semibold z-[9999] font-dmSerif"
                    >
                      Food/Fusion Festival
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-[30%]">
            <div class="zoom-effect relative">
              <ImageView
                :src="SportFestival"
                alt="grid-media"
                imgClass="w-full h-full object-cover rounded-lg"
              />
              <div
                class="absolute w-full h-full top-0 left-0 p-4 flex items-end"
              >
                <p
                  class="text-2xl text-white font-semibold z-[9999] font-dmSerif"
                >
                  Sports Festival
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-intersection>

    <q-intersection
      :transition-duration="600"
      transition="scale"
      once
      class="mt-10 px-12 h-full bg-heroBrown py-5"
    >
      <div class="flex flex-col gap-y-3">
        <p class="text-4xl font-semibold w-full text-center font-dmSerif">
          About
        </p>
        <div class="flex flex-row gap-x-7 items-center justify-center">
          <q-card class="my-card w-[25%] h-[380px]">
            <q-card-section class="flex flex-col gap-y-1">
              <p
                class="text-xs text-textGrey text-justify tracking-wider leading-6"
              >
                The Northern Cultural and Creative Festival is poised to be the
                biggest creative and cultural event ever witnessed in Africa,
                with the aim of strengthening the Northern cultural and creative
                ecosystem by providing a platform for the promotion and export
                of Northern Nigerian heritage. The festival features a week-long
                celebration of creativity, arts, and culture, with various
                activities and events that highlight the rich cultural heritage
                of the Northern region of Nigeria.
              </p>
            </q-card-section>
          </q-card>
          <q-card class="my-card w-[25%] h-[380px]">
            <q-card-section class="flex flex-col gap-y-1">
              <p
                class="text-xs text-textGrey text-justify tracking-wider leading-6"
              >
                The festival is inspired by the need to preserve, promote, and
                showcase the diverse and rich cultural heritage of Northern
                Nigeria. Over the years, the Northern region of Nigeria has been
                blessed with a rich cultural heritage that is steeped in history
                and tradition. From the ancient empires of Kanem-Bornu, Sokoto
                Caliphate, the Hausa Kingdoms, to the remarkable Nok culture.
              </p>
            </q-card-section>
          </q-card>
          <q-card class="my-card w-[25%] h-[380px]">
            <q-card-section class="flex flex-col gap-y-1">
              <p
                class="text-xs text-textGrey text-justify tracking-wider leading-6"
              >
                The Northern Cultural and Creative Festival provides a unique
                opportunity showcase and celebrate the diversity and richness of
                Northern Nigerian culture to the rest of the world. The annual
                festival is an avenue to promote tourism, generate revenue, and
                create a platform for cultural exchange and diplomacy. It is an
                event that celebrates the past, present and future of Northern
                region, and seeks to inspire new generation of creatives and
                cultural entrepreneurs.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-intersection>

    <q-intersection
      :transition-duration="600"
      transition="scale"
      once
      class="mt-10"
    >
    </q-intersection>
    <Footer />
  </div>
</template>
<!-- <SlideShow imgClass="!w-full !h-full !object-cover" /> -->

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ImageView from "../components/ImageView.vue";
import Footer from "../components/Footer.vue";
import Slideshow from "../components/Slideshow.vue";
import Drummer from "../assets/african-drummer.jpg";
import Models from "../assets/models.jpg";
import CulturalExchange from "../assets/noccref/Cultural Exchange.jpg";
import Diversity from "../assets/noccref/dances.jpg";
import InternetUsers from "../assets/noccref/internet-users.jpg";
import Skills from "../assets/noccref/skilla.jpg";
import Tourism from "../assets/noccref/Igabi_Maraba_Pottery_04_IMG_99211.jpg";
import Peace from "../assets/noccref/Kano Sanusi.jpeg";
import FoodFestival from "../assets/noccref/b102b3cf7ab61304af70092d768d35f3d31b8482-4032x2268.jpg";
import FilmFestival from "../assets/noccref/camera-1867184_1280-1170x700.jpg";
import MusicFestival from "../assets/noccref/Music 1.png";
import FashionFestival from "../assets/noccref/NNCCFF.jpg";
import SportFestival from "../assets/noccref/WhatsApp-Image-2023-10-03-at-06.34.55.jpeg";
import TraditionalShirts from "../assets/tradtional-shirts.jpg";
import DancingWomen from "../assets/dancing-women.jpg";
import LandTribe from "../assets/land-tribe.jpg";
import LandView from "../assets/land-view.jpg";
import SlideShow from "../components/Slideshow.vue";

const images = ref([
  "./src/assets/models.jpg",
  "./src/assets/models.jpg",
  "./src/assets/models.jpg",
  "./src/assets/models.jpg",
  // "/assets/models.jpg",
]);

const noccref_obj = [
  {
    image: CulturalExchange,
    description: "Showcase the Richness of the Northern Nigerian Heritage",
    color: "#318CE7",
  },
  {
    image: Diversity,
    description: "Promote Northern Nigerian Diversity and Opportunities",
    color: "#6699CC",
  },
  {
    image: InternetUsers,
    description: "Enhance Social and Economic Growth for the Northern Region",
    color: "#5072A7",
  },
  {
    image: Skills,
    description:
      "Empower Northern Nigerian Youth with Skills and Opportunities",
    color: "#0039a6",
  },
  {
    image: Tourism,
    description: "Promote Tourism in the Northern Region",
    color: "#13274F",
  },
  {
    image: Peace,
    description: "Promote Unity, Peace and Progress in the Northern Region",
    color: "#0a2351",
  },
];

const noccref_color = [
  "#318CE7",
  "#6699CC",
  "#5072A7",
  "#0039a6",
  "#13274F",
  "#0a2351",
];

const centerImageIndex = Math.floor(images.value.length / 2);

const slide = ref(1);
const autoplay = ref(true);
const hoveredIndex = ref(centerImageIndex || null);
const hoveredImageIndex = ref(0);
const currentIndex = ref(0);
const container = ref(null);
const showDesc = ref(true);
const descTimeout = ref(null);

let intervalId;

const setHoveredIndex = (index) => {
  hoveredIndex.value = index;
};

const setHoveredImageIndex = (index) => {
  clearTimeout(descTimeout.value);
  hoveredImageIndex.value = index;
  descTimeout.value = setTimeout(() => {
    showDesc.value = true;
  }, 900);
};

const resetHoveredImageIndex = () => {
  hoveredImageIndex.value = null;
  showDesc.value = false;
  clearTimeout(descTimeout.value);
};

const getImageStyles = (index) => {
  const centerIndex = Math.floor(images.value.length / 2);
  let zIndex;
  let width;

  if (index === hoveredIndex.value) {
    zIndex = images.value.length + 10;
    width = 240;
  } else {
    zIndex = images.value.length - Math.abs(index - centerIndex);
    const distanceFromHovered = Math.abs(index - hoveredIndex.value);
    width = Math.max(240 - distanceFromHovered * 10, 100);
  }

  return {
    zIndex: zIndex.toString(),
    width: `${width}px`,
    transform: hoveredIndex.value === index ? "scale(1.1)" : "scale(1)",
    position: "relative",
  };
};

const getHoveredStyles = (index) => {
  let width;

  if (index === hoveredImageIndex.value) {
    width = 300;
  } else {
    width = 80;
  }

  return {
    width: `${width}px`,
    transitionDuration: "1000ms",
  };
};

const startSlideshow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000);
};

onMounted(() => {
  startSlideshow();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style lang="scss">
.custom-shape-divider-bottom-1729785380 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1729785380 svg {
  position: relative;
  display: block;
  width: calc(243% + 1.3px);
  height: 140px;
}

.custom-shape-divider-bottom-1729785380 .shape-fill {
  fill: #ffffff;
}

.swiper {
  width: 240px;
  height: 320px;
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

.wide-container {
  display: flex;
  gap: 10px; /* Optional, adds space between images */
}

.flex-image {
  transition: width 0.3s ease; /* Smooth transition for width */
}

.first-image {
  width: 250px; /* Initial width for the first image */
}

.slideshow-container {
  overflow: hidden;
  width: 100%;
}

.slideshow-wrapper {
  display: flex;
  transition: transform 1s ease-in-out;
}
</style>
