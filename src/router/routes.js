const routes = [
  {
    path: "/",
    component: () => import("layouts/Miracle.vue"),
    children: [{ path: "", component: () => import("pages/Landing.vue") }],
  },
  {
    path: "/day-one",
    component: () => import("layouts/Miracle.vue"),
    children: [{ path: "", component: () => import("pages/FirstDay.vue") }],
  },
  {
    path: "/day-two",
    component: () => import("layouts/Miracle.vue"),
    children: [{ path: "", component: () => import("src/pages/DayTwo.vue") }],
  },
  {
    path: "/day-three",
    component: () => import("layouts/Miracle.vue"),
    children: [{ path: "", component: () => import("src/pages/DayThree.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
