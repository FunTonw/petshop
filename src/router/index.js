import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/deshboard',
    name: 'Deshboard',
    component: () => import('../views/Deshboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/Coupon.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Order.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/UserHome.vue'),
      },
      {
        path: 'aboutUs',
        component: () => import('../views/AboutUs.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'favorite',
        component: () => import('../views/UserFavorite.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'buy',
        component: () => import('../views/UserBuy.vue'),
      },
      {
        path: 'form',
        component: () => import('../views/UserForm.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
