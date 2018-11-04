import HomePage from './views/Home'
import AboutPage from './views/About'
import FormPage from './views/Form'
import DynamicRoutePage from './views/DynamicRoute'
import NotFoundPage from './views/NotFound'

import PanelLeftPage from './views/PanelLeft'
import PanelRightPage from './views/PanelRight'

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
