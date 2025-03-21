import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Lazy-load components for better performance
const RandomMode = () => import("./pages/RandomMode.vue");
const LeadMode = () => import("./pages/LeadMode.vue");
const FollowMode = () => import("./pages/FollowMode.vue");
const ParagraphMode = () => import("./pages/ParagraphMode.vue"); // Corrected typo
const Settings = () => import("./pages/Settings.vue");

// Define route configurations with consistent naming and structure
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "隨機模式", // Random Mode
    component: RandomMode,
    meta: { title: "隨機模式", requiresAuth: false }, // Optional metadata
  },
  {
    path: "/lead-mode",
    name: "聲母模式", // Lead Mode
    component: LeadMode,
    meta: { title: "聲母模式", requiresAuth: false },
  },
  {
    path: "/follow-mode",
    name: "韻母模式", // Follow Mode
    component: FollowMode,
    meta: { title: "韻母模式", requiresAuth: false },
  },
  {
    path: "/paragraph-mode", // Renamed from "/p-mode" for consistency
    name: "段落模式", // Paragraph Mode
    component: ParagraphMode,
    meta: { title: "段落模式", requiresAuth: false },
  },
  {
    path: "/settings",
    name: "設定", // Settings
    component: Settings,
    meta: { title: "設定", requiresAuth: false },
  },
  // Catch-all route for 404 handling
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("./pages/NotFound.vue"), // You'll need to create this
  //   meta: { title: "頁面未找到" },
  // },
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use BASE_URL for flexibility
  routes,
});

// Optional: Navigation guard for title updates or logging
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Shuangpin App"; // Default title
  console.log(`Navigating from ${from.path} to ${to.path}`);
  next();
});

export default router;