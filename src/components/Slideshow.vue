<template>
  <div :class="`slideshow-container ${containerClassName}`">
    <div
      :class="`slideshow-track ${trackClassName}`"
      :style="{ transform: `translateX(${translateX}px)` }"
      ref="track"
    >
      <div
        v-for="(item, index) in displayItems"
        :key="index"
        :class="`slideshow-item ${itemClassName}`"
      >
        <img :src="item" :class="`w-full h-auto block ${imgClass}`" alt="Slideshow Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DragFour from "../assets/noccref/DSC_0713.jpg";
import HorseRider from "../assets/noccref/Kaduna_Centenary_IMG_5221.jpg";
import DancingLady from "../assets/noccref/Kaduna_KADFEST_ 004_ IMG_M9A7433.jpg";
import NorthLeaders from "../assets/noccref/DSC_0458 (5).jpg";
import { ref, onMounted, onUnmounted, toRefs } from "vue";

const props = defineProps([
  "containerClassName",
  "trackClassName",
  "itemClassName",
  "imgClass",
]);

const {
  containerClassName,
  trackClassName,
  itemClassName,
  imgClass,
  ...otherProps
} = props;

const items = [DragFour, HorseRider, DancingLady, NorthLeaders];

const displayItems = [...items, ...items, ...items];

const track = ref(null);
const translateX = ref(0);
let animationFrameId;

const slideSpeed = 1; // Adjust this for speed of sliding

function animate() {
  translateX.value -= slideSpeed;
  const trackWidth = track.value.scrollWidth / 3; // Divide by 3 to get one full set of images

  // Reset position to create an infinite effect
  if (Math.abs(translateX.value) >= trackWidth) {
    translateX.value = 0;
  }

  animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
  animationFrameId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.slideshow-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slideshow-track {
  display: flex;
  transition: transform 0.1s linear;
  white-space: nowrap;
}

.slideshow-item {
  flex: 0 0 33.33%; /* Show 3 items in view */
  box-sizing: border-box;
  padding: 10px 0;
  height: 400px
}
</style>
