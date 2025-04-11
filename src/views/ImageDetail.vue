


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  Share, InfoFilled, Download, MoreFilled, StarFilled ,Location,Calendar,Camera,Check,Close
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()
const imageId = route.params.id
const image = ref(null)

const fetchImageDetail = async () => {
  try {
    const res = await fetch(`https://api.unsplash.com/photos/${imageId}?client_id=BDJtgIpwKdj1jPBrRmJEQmq16cBgB02b_VZuHtrqcy8`)
    image.value = await res.json()
    image.value.liked = false
  } catch (e) {
    console.error('Failed to load image detail:', e)
  }
}

const toggleLike = () => {
  image.value.liked = !image.value.liked
}

const downloadImage = (url) => {
  const link = document.createElement('a')
  link.href = url
  link.download = 'unsplash-image.jpg'
  link.click()
}


onMounted(fetchImageDetail)
</script>

<template>
  <div v-if="image" class="max-w-5xl mx-auto p6 mt10 bg-white rounded-lg shadow">
    
    <button @click="router.back()" class="flex items-center gap-1 text-gray-600 hover:text-black">
        
  <el-icon class="text-black"><Close /></el-icon> 
 
           </button>
    <div class="flex justify-between items-center mb4">

      <div class="flex items-center gap3">
        <img :src="image.user.profile_image.medium" class="w10 h10 rounded-full" />
        <div>
          <div class="font-semibold text-black hover:underline cursor-pointer">{{ image.user.name }}</div>
          <div class="text-sm text-blue-500">Available for hire</div>
        </div>
      </div>
 
      <div class="flex items-center gap2">
        <button @click="toggleLike" class="hover:text-red-600">
               <el-icon :class="image.liked ? 'text-red-500' : 'text-gray-500'">
              <i :class="image.liked ? 'i-ep:heart-filled' : 'i-ep:heart'" />
               </el-icon>
            </button>

        <button @click="downloadImage(image.urls.full)" class="hover:text-black text-gray-500">
          <el-icon><Download /></el-icon>
        </button>
      </div>
    </div>

    
    <div class="border rounded-md overflow-hidden">
      <img :src="image.urls.regular" class="w-full object-cover" />
    </div>

    
    <div class="flex justify-between items-center mt4 px2">
      <div class="flex gap10 text-sm text-gray-700">
        <div>
          <div class="font-semibold">{{ image.views.toLocaleString() }}</div>
          <div class="text-gray-500">Views</div>
        </div>
        <div>
          <div class="font-semibold">{{ image.downloads.toLocaleString() }}</div>
          <div class="text-gray-500">Downloads</div>
        </div>
        <div>
          <div class="font-semibold">Wallpapers</div>
          <div class="text-gray-500">Featured in</div>
        </div>
      </div>

      <div class="flex gap2">
        <button class="flex items-center gap1 text-gray-600 hover:text-black">
          <el-icon><Share /></el-icon> Share
        </button>
        <button class="flex items-center gap1 text-gray-600 hover:text-black">
          <el-icon><InfoFilled /></el-icon> Info
        </button>
        <button class="text-gray-600 hover:text-black">
          <el-icon><MoreFilled /></el-icon>
        </button>
      </div>
    </div>

    <div class="mt6 space-y-2 text-sm text-gray-800">
    <!-- Địa điểm -->
    <div class="flex items-center gap-2">
      <el-icon><Location /></el-icon>
      <span>{{ image.location?.name || '' }}</span>
    </div>

    <!-- Ngày đăng -->
    <div class="flex items-center gap-2">
      <el-icon><Calendar /></el-icon>
      <span>Published {{ new Date(image.created_at).toDateString() }}</span>
    </div>

    <!-- Thiết bị chụp -->
    <div class="flex items-center gap-2">
      <el-icon><Camera /></el-icon>
      <span>{{ image.exif?.make || 'Camera' }}, {{ image.exif?.model || '' }}</span>
    </div>

    <!-- Bản quyền -->
    <div class="flex items-center gap-2">
      <el-icon><Check /></el-icon>
      <span>Free to use under the Unsplash License</span>
    </div>
  </div>
  </div>
</template>
