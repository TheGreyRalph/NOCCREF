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
          <p class="text-4xl font-semibold sm:text-sm minLg:text-4xl">
            Lorem ipsum dolor sit amet.
          </p>
          <p class="w-[70%] sm:text-sm md:w-[90%] minLg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            natus ut facere veritatis tempore dolor earum saepe ad numquam
            aperiam? Necessitatibus nostrum facere beatae non.
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
          <p class="text-sm">
            <q-icon class="text-textGrey" name="calendar_today" />
            Today in history
          </p>
          <p
            class="text-2xl font-light w-[60%] sm:text-sm md:text-xl minLg:text-text2xl sm:w-[90%] minLg:w-[60%]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p class="text-sm text-textGrey w-[80%] sm:w-full minLg:w-[60%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            dicta ipsa rerum alias iure facilis aspernatur natus id aliquid cum.
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
    <q-intersection :transition-duration="600" transition="scale" once>
      <div class="flex justify-center">
        <p class="text-4xl font-light">Continue your Journey</p>
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
        <p class="text-4xl font-light text-center">What's new?</p>
        <p class="text-center text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          nisi!
        </p>
        <div class="flex flex-row gap-x-5 no-wrap h-[420px]">
          <div class="flex flex-col basis-[70%] gap-y-4 no-wrap">
            <div class="flex flex-row gap-x-4 no-wrap h-[210px]">
              <div class="w-[70%] h-[210px]">
                <div class="zoom-effect">
                  <ImageView
                    :src="LandTribe"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div class="w-[30%] h-[210px]">
                <div class="zoom-effect">
                  <ImageView
                    :src="TraditionalShirts"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-x-4 no-wrap h-[210px]">
              <div class="w-[30%] h-[210px]">
                <div class="zoom-effect">
                  <ImageView
                    :src="TraditionalShirts"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div class="w-[70%] h-full">
                <div class="zoom-effect">
                  <ImageView
                    :src="LandView"
                    alt="grid-media"
                    imgClass="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="basis-[30%]">
            <div class="zoom-effect">
              <ImageView
                :src="Drummer"
                alt="grid-media"
                imgClass="w-full h-full object-cover rounded-lg"
              />
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
      <div class="wide-container h-[500px] px-12">
        <ImageView
          v-for="(image, index) in images"
          :key="index"
          :src="Models"
          alt="hover-image"
          imgClass="flex-image h-auto object-cover"
        />
      </div>
    </q-intersection>
    <!-- <Slideshow /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ImageView from "../components/ImageView.vue";
import Slideshow from "../components/Slideshow.vue";
import Drummer from "../assets/african-drummer.jpg";
import Models from "../assets/models.jpg";
import TraditionalShirts from "../assets/tradtional-shirts.jpg";
import DancingWomen from "../assets/dancing-women.jpg";
import LandTribe from "../assets/land-tribe.jpg";
import LandView from "../assets/land-view.jpg";

const images = ref([
  "./src/assets/models.jpg",
  "./src/assets/models.jpg",
  "./src/assets/models.jpg",
  "./src/assets/models.jpg",
  // "/assets/models.jpg",
]);

const slide = ref(1);
const autoplay = ref(true);

const centerImageIndex = Math.floor(images.value.length / 2);
const hoveredIndex = ref(centerImageIndex || null);

const setHoveredIndex = (index) => {
  hoveredIndex.value = index;
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

const currentIndex = ref(0);
const container = ref(null);
let intervalId;

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
  width: 80px;
  transition: width 0.3s ease; /* Smooth transition for width */
}

.flex-image:hover {
  width: 250px; /* Width on hover */
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
