const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', name: 'loginPage', component: () => import('pages/loginPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'me', name: 'me', component: () => import('pages/IndexPage.vue') },
      { path: 'turmas', name: 'turmasPage', component: () => import('pages/turmas.vue') }
    ]
  },
  {
    path: '/turma/:Id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'turmaPage', component: () => import('pages/turma.vue') }
    ],
    props: true
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
