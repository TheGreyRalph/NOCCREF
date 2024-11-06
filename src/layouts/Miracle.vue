<template>
  <q-layout>
    <q-bar
      dark
      class="bg-heroBrown h-14 flex flex-row items-center justify-between bar-stu"
    >
      <div class="flex flex-row gap-x-3 items-center justify-start">
        <q-btn dense round flat icon="menu" size="md" @click="open()" />

        <p class="text-lg sm:text-sm md:text-base">
          Northern Cultural & Creative Festival
        </p>
      </div>
      <nav class="flex flex-row gap-x-3 text-sm sm:hidden md:flex lg:flex">
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
        <div class="flex flex-col gap-y-2 mt-2 pl-2 w-full">
          <p
            class="flex flex-row items-center hover:bg-fadedBlue w-full p-2 rounded-s-full cursor-pointer"
            v-for="(item, index) in sideBarOptions"
            @click="item.onClick"
            :key="index"
          >
            <q-icon class="text-textGrey mr-3" :name="item.value" />
            {{ item.name }}
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
import { useRouter } from "vue-router";
const dialog = ref(false);

const open = () => {
  dialog.value = true;
};

const close = () => {
  dialog.value = false;
};

const router = useRouter();

const goToAbout = () => {
  router.push({ path: "/day-one" });
};

const goToHome = () => {
  router.push({ path: "/" });
};

const sideBarOptions = [
  { name: "Home", value: "home", onClick: goToHome },
  { name: "Explore", value: "explore" },
  { name: "Exhibition", value: "collections" },
  { name: "Tickets", value: "confirmation_number" },
  { name: "News", value: "feed" },
  { name: "Stories", value: "auto_stories" },
  { name: "Day One", value: "auto_stories", onClick: goToAbout },
  { name: "Day Two", value: "auto_stories" },
  { name: "Day Three", value: "auto_stories" },
  { name: "Day Four", value: "auto_stories" },
  { name: "Day Five", value: "auto_stories" },
  { name: "Day Six", value: "auto_stories" },
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
