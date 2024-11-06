<template>
  <div class="slideshow-container" ref="container">
    <div
      class="slideshow-wrapper"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img
          :src="image"
          alt="Slideshow Image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const images = ref([
  "./src/assets/models.jpg",
  "./src/assets/tradtional-shirts.jpg",
  "./src/assets/dancing-women.jpg",
  "./src/assets/land-tribe.jpg",
  "/assets/land-view.jpg",
]);

const currentIndex = ref(0);
let intervalId;

const startSlideshow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 3000); // Slide every 3 seconds
};

const stopSlideshow = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startSlideshow();
});

onBeforeUnmount(() => {
  stopSlideshow();
});
</script>

<style scoped>
.slideshow-container {
  overflow: hidden;
  width: 100%;
  max-width: 800px; /* Adjust as needed */
  margin: auto;
}

.slideshow-wrapper {
  display: flex;
  transition: transform 1s ease-in-out;
  width: calc(100% * 5); /* Adjust based on the number of images */
}

.slide {
  flex: 0 0 100%; /* Each slide takes 100% of the container's width */
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
