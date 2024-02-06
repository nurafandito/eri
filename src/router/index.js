import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/consulting',
      name: 'consulting',
      component: () => import('../views/consulting.vue'),
      meta: { title: 'Consulting' },
    },
    {
      path: '/saddlery',
      name: 'saddlery',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Saddlery' },
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/education.vue'),
      meta: { title: 'Education' },
    },
    {
      path: '/logistic',
      name: 'logistic',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Logistic' },
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Media' },
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Product' },
    },
    {
      path: '/publication',
      name: 'publication',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Publication' },
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Resources' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Equine Resources Indonesia';

  if (to.meta.title) {
    document.title = `${to.meta.title} | ${defaultTitle}`;
  } else {
    document.title = defaultTitle;
  }

  next();
});

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'auto' });
});

export default router;
