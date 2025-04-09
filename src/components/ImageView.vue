<template>
  <img
    :src="src"
    :alt="alt"
    :class="`rounded-lg ${imgClass}`"
    v-bind="otherProps"
  />
</template>

<script setup lang="ts">

const props = defineProps<{
  src: string;
  alt?: string;
  imgClass?: string;
  [key: string]: any;
}>();


const { src, alt, imgClass, ...otherProps } = props;
</script>

<style>
/* Add the zoom-out effect on hover */
.zoom-effect {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: inline-block;
  position: relative;
  border-radius: 16px;
}

.zoom-effect img {
  transition: transform 0.8s ease;
  object-fit: cover;
}

.zoom-effect:hover img {
  transform: scale(1.2);
}

/* Overlay styling */
.zoom-effect::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.zoom-effect:hover::after {
  opacity: 1;
}
</style>
