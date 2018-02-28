import HomePage from './pages/home'
import AboutPage from './pages/about'
import FormPage from './pages/form.vue'
import DynamicRoutePage from './pages/dynamic-route'
import NotFoundPage from './pages/not-found'

import PanelLeftPage from './pages/panel-left'
import PanelRightPage from './pages/panel-right'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/panel-right/',
    component: PanelRightPage
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
]
