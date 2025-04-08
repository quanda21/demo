import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Illustrations from '../views/Illustrations.vue'
import Unsplash from '../views/Unsplash.vue' 
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import ImageDetail from '../views/ImageDetail.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },

  { path: '/photos', component: Photos },
  { path: '/illustrations', component: Illustrations},
  { path: '/unsplash', component: Unsplash },
  {
    path: '/p/:category', 
    name: 'Category',
    component: Category,
    props: true, 
  },

  { path: '/image/:id', name: 'ImageDetail',
     component: ImageDetail,
      props: true 
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
