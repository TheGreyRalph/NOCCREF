<template>
  <div className="mt-8 md:mt-0">
    <h3 className="text-festival-gold font-semibold mb-4 text-lg">
      Stay Updated
    </h3>
    <p className="text-gray-300 mb-4">
      Subscribe to our newsletter for festival updates, event highlights, and
      exclusive content.
    </p>
    <form className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        placeholder="Your email address"
        value="{email}"
        required
        className="bg-gray-800 text-white border-gray-700 focus:border-festival-orange"
      />
      <Button
        type="submit"
        className="bg-festival-orange hover:bg-festival-ochre text-white"
      >
        Subscribe
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const email: Ref<string, string> = ref(""); 
</script>

<style scoped></style>
