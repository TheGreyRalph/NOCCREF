<template>
  <q-layout>
    <q-bar
      dark
      class="bg-heroBrown h-14 flex flex-row items-center justify-between bar-stu"
    >
      <div class="flex flex-row gap-x-1 items-center justify-start">
        <q-btn dense round flat icon="menu" size="md" @click="open()" />

        <p class="text-lg">Northern Cultural & Creative Festival</p>
      </div>
      <nav class="flex flex-row gap-x-3 text-sm">
        <RouterLink to="#">Exhibition</RouterLink>
        <RouterLink to="#">Tickets</RouterLink>
        <RouterLink to="#">News</RouterLink>
        <RouterLink to="#">Stories</RouterLink>
      </nav>
    </q-bar>
    <q-dialog v-model="dialog" position="left" class="menu-dialog">
      <div
        class="h-full w-72 bg-white flex flex-col items-start justify-start gap-y-2 overflow-y-scroll p-2"
      >
        <q-btn dense round flat icon="menu" size="md" @click="close()" />
        <div class="flex flex-col gap-y-2 mt-2">
          <p class="" v-for="(item, index) in sideBarOptions" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
const dialog = ref(false);

const open = () => {
  dialog.value = true;
};

const close = () => {
  dialog.value = false;
};

const sideBarOptions = [
  "Home",
  "Explore",
  "Exhibition",
  "Tickets",
  "News",
  "Stories",
];
</script>

<style lang="scss">
.menu-dialog .q-dialog__backdrop {
  background: rgba(0, 0, 0, 0) !important;
}

.menu-dialog .q-dialog__inner {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2) !important;
}

.menu-dialog .q-dialog__inner--minimized > div {
  max-height: 100%;
}
</style>
