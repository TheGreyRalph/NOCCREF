<template>
  <div
    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
    v-for="(group, index) in linkGroups"
    :key="index"
  >
    <div key="{index}">
      <h3 className="text-festival-gold font-semibold mb-4 text-lg">
        {{ group.title }}
      </h3>
      <ul
        className="space-y-2"
        v-for="(link, linkIndex) in group.links"
        :key="linkIndex"
      >
        <li key="{linkIndex}">
          <Link
            to="{link.href}"
            className="text-gray-300 hover:text-festival-orange transition-colors duration-200"
          >
            {{ link.name }}
          </Link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkGroup } from "src/interface";

const linkGroups: LinkGroup[] = [
  {
    title: "Festival",
    links: [
      { name: "About NOCCREF", href: "/about" },
      { name: "Objectives", href: "/objectives" },
      { name: "Deliverables", href: "/deliverables" },
      { name: "Schedule", href: "/schedule" },
    ],
  },
  {
    title: "Activities",
    links: [
      { name: "Training Programs", href: "/training" },
      { name: "Creative Fair", href: "/creative-fair" },
      { name: "Games Day", href: "/games" },
      { name: "Durbar Ceremony", href: "/durbar" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Ticket Information", href: "/tickets" },
      { name: "Become a Sponsor", href: "/sponsor" },
    ],
  },
];
</script>

<style scoped></style>
