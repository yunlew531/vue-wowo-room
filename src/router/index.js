import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Customer",
    component: () => import("/@/components/views/Customer.vue"),
  },
  {
    path: "/backEnd",
    name: "BackEnd",
    component: () => import("/@/components/views/BackEnd.vue"),
    children: [
      {
        path: "orderTable",
        name: "OrderTable",
        component: () => import("/@/components/orderTable.vue"),
      }
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});