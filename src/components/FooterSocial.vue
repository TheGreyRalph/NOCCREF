<template>
  <div className="mt-8 md:mt-0">
    <h3 className="text-festival-gold font-semibold mb-4 text-lg">
      Connect With Us
    </h3>

    <div className="flex space-x-4 mb-6">
      <a
        href="https://facebook.com/noccref"
        target="_blank"
        rel="noreferrer"
        className="text-gray-300 hover:text-festival-orange transition-colors"
      >
        <Facebook size="{20}" />
      </a>
      <a
        href="https://instagram.com/noccref"
        target="_blank"
        rel="noreferrer"
        className="text-gray-300 hover:text-festival-orange transition-colors"
      >
        <Instagram size="{20}" />
      </a>
      <a
        href="https://twitter.com/noccref"
        target="_blank"
        rel="noreferrer"
        className="text-gray-300 hover:text-festival-orange transition-colors"
      >
        <Twitter size="{20}" />
      </a>
      <a
        href="https://youtube.com/noccref"
        target="_blank"
        rel="noreferrer"
        className="text-gray-300 hover:text-festival-orange transition-colors"
      >
        <Youtube size="{20}" />
      </a>
    </div>

    <div className="space-y-3">
      <div className="flex items-center text-gray-300">
        <Mail size="{16}" className="mr-2 text-festival-gold" />
        <a
          href="mailto:info@noccref.com"
          className="hover:text-festival-orange transition-colors"
        >
          info@noccref.com
        </a>
      </div>
      <div className="flex items-center text-gray-300">
        <Phone size="{16}" className="mr-2 text-festival-gold" />
        <a
          href="tel:+2348000000000"
          className="hover:text-festival-orange transition-colors"
        >
          +234 800 000 0000
        </a>
      </div>
      <div className="flex items-start text-gray-300">
        <MapPin size="{16}" className="mr-2 mt-1 text-festival-gold" />
        <span>Rabitz Studios Limited, Kaduna, Northern Nigeria</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
