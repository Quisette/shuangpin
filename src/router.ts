import RandomMode from "./pages/RandomMode.vue";
import LeadMode from "./pages/LeadMode.vue";
import FollowMode from "./pages/FollowMode.vue";
import ParagraphMode from "./pages/PragraphMode.vue";
import Settings from "./pages/Settings.vue";

import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "隨機模式",
    component: RandomMode,
  },
  {
    path: "/lead-mode",
    name: "聲母模式",
    component: LeadMode,
  },
  {
    path: "/follow-mode",
    name: "韻母模式",
    component: FollowMode,
  },
  {
    path: "/p-mode",
    name: "段落模式",
    component: ParagraphMode,
  },
  {
    path: "/settings",
    name: "設定",
    component: Settings,
  },
];
