<template>
  <div class="flex flex-col gap-y-3">
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
        <p class="text-4xl font-semibold">Lorem ipsum dolor sit amet.</p>
        <p class="w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          natus ut facere veritatis tempore dolor earum saepe ad numquam
          aperiam? Necessitatibus nostrum facere beatae non.
        </p>
      </div>
      <img
        class="flex-1 max-w-xs h-auto w-full"
        src="~assets/cartoon-woman-no-bg.png"
        alt="landing"
      />
    </div>
    <div class="row mx-16 py-5">
      <div class="col flex flex-col gap-y-5">
        <p class="text-sm">Today in history</p>
        <p class="text-2xl font-light w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p class="text-sm text-textGrey w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          dicta ipsa rerum alias iure facilis aspernatur natus id aliquid cum.
        </p>
        <button class="text-textBlue text-left">Learn more</button>
      </div>
      <div class="col q-pa-md">
        <div class="column example-container">
          <div class="container mx-auto p-4">
            <div class="columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-2">
              <div class="mb-2 break-inside-avoid">
                <img
                  src="~assets/models.jpg"
                  alt="masonry-lay"
                  class="w-full h-full rounded-md shadow"
                />
              </div>
              <div class="mb-2 break-inside-avoid">
                <img
                  src="~assets/tradtional-shirts.jpg"
                  alt="masonry-lay"
                  class="w-full h-auto rounded-md shadow"
                />
              </div>
              <div class="mb-2 break-inside-avoid">
                <img
                  src="~assets/dancing-women.jpg"
                  alt="masonry-lay"
                  class="w-full h-auto rounded-md shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <p class="text-4xl font-light">Continue your Journey</p>
      <div class="container mx-auto flex justify-center my-12">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative transition-transform duration-300 -ml-4"
          :style="getImageStyles(index)"
          @mouseenter="setHoveredIndex(index)"
        >
          <img
            :src="image"
            :alt="`Image ${index + 1}`"
            class="w-[220px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    <div class="px-12 flex flex-col items-center justify-center">
      <p class="text-4xl font-light">What's new?</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        nisi!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "/src/assets/models.jpg",
  "/src/assets/models.jpg",
  "/src/assets/models.jpg",
]);

const hoveredIndex = ref(null);

// Function to set hovered index
const setHoveredIndex = (index) => {
  hoveredIndex.value = index;
};

// Function to calculate the styles for each image, including z-index
const getImageStyles = (index) => {
  let zIndex = index + 1; // By default, z-index will be the index + 1 (ascending order)

  if (hoveredIndex.value === index) {
    zIndex = images.value.length + 10; // Give a high z-index to the hovered image
  }

  return {
    zIndex: zIndex.toString(),
    transform: hoveredIndex.value === index ? "scale(1.1)" : "scale(1)",
    position: "relative",
  };
};
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
</style>
