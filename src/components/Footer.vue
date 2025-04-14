<template>
  <footer className="bg-festival-navy relative">
    <div className="absolute inset-0 bg-african-pattern opacity-10"></div>

    <div className="container relative mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FooterLogo />
        </div>
        <div className="lg:col-span-2">
          <FooterLinks />
        </div>
        <div className="lg:col-span-1 flex flex-col justify-between">
          <FooterSocial />
          <FooterNewsletter />
        </div>
      </div>
    </div>

    <div
      className="container relative mx-auto px-4 py-8 border-t border-gray-800"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        <div className="flex items-start">
          <div
            className="w-2 h-2 mt-2 rounded-full bg-festival-orange mr-3"
          ></div>
          <p className="text-gray-300 text-sm">
            Showcase the Richness of Northern Nigerian Heritage
          </p>
        </div>
        <div className="flex items-start">
          <div
            className="w-2 h-2 mt-2 rounded-full bg-festival-orange mr-3"
          ></div>
          <p className="text-gray-300 text-sm">
            Promote Diversity and Growth Opportunities
          </p>
        </div>
        <div className="flex items-start">
          <div
            className="w-2 h-2 mt-2 rounded-full bg-festival-orange mr-3"
          ></div>
          <p className="text-gray-300 text-sm">
            Promote Unity, Peace and Progress in the Northern Region
          </p>
        </div>
      </div>
    </div>

    <div className="relative bg-black/40 py-4">
      <div
        className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} NOCCREF - A project by Rabitz Studios
          Limited in collaboration with Zazzau Emirate
        </p>
        <div className="mt-3 md:mt-0">
          <a
            href="/privacy"
            className="text-gray-400 text-sm hover:text-festival-orange mr-4"
            >Privacy Policy</a
          >
          <a
            href="/terms"
            className="text-gray-400 text-sm hover:text-festival-orange"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterLinks from "./FooterLinks.vue";
import FooterLogo from "./FooterLogo.vue";
import FooterSocial from "./FooterSocial.vue";
import FooterNewsletter from "./FooterNewsletter.vue";
</script>

<style scoped></style>
