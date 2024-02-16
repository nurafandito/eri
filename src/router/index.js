import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/coming-soon.vue'),
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/about.vue'),
      meta: { title: 'About Us' },
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
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../views/coming-soon.vue'),
      meta: { title: 'Contact Us' },
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404.vue'),
      meta: { title: 'Error 404 (Not Found)' },
    },
  ],
});

const maintenance = true;

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Equine Resources Indonesia';
  document.title = to.name === '404' ? to.meta.title : to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle;

  if (maintenance && to.path !== '/') {
    next({ name: 'home' });
  } else {
    next();
  }
});

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'auto' });
});

export default router;
