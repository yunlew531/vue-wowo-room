import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Customer",
    component: () => import("/@/components/views/Customer.vue"),
  },
  {
    path: "/backEnd",
    component: () => import("/@/components/views/BackEnd.vue"),
    children: [
      {
        path: "OrderTable",
        name: "OrderTable",
        component: () => import("/@/components/orderTable.vue"),
      },
      {
        path: "categoryRevenueProportion",
        name: "CategoryRevenueProportion",
        component: () => import("/@/components/CategoryRevenueProportion.vue"),
      }
    ],
  },
];

export default createRouter({
  history: createWebHistory("/vue-wowo-room/"),
  routes,
  linkActiveClass: "translate-x-2"
});