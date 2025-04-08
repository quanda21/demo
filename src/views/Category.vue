<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const photos = ref([])
const route = useRoute()
const category = ref('')
const contributors = ref([])
 
// Lấy danh sách ảnh từ API Unsplash theo chủ đề

const fetchTopicPhotos = async (topicId) => {
  try {
    const response = await fetch(`https://api.unsplash.com/topics/${topicId}/photos?per_page=24&client_id=BDJtgIpwKdj1jPBrRmJEQmq16cBgB02b_VZuHtrqcy8`)

    const data = await response.json()

    photos.value = data  

         //top người đóng góp ảnh
  
const contributorMap = new Map()
// lấy danh sách người đóng góp từ ảnh
data.forEach((photo) => {
  const user = photo.user
  if (user) {
        
    if (!contributorMap.has(user.username)) {  
      
      contributorMap.set(user.username, { 
        name: user.name, 
        username: user.username, 
        profile_image: user.profile_image?.small || '', 
        count: 0 
      })
    }
    //số lần đóng góp của người dùng
    contributorMap.get(user.username).count += 1
  }
})

//    4 người đóng góp hàng đầu
contributors.value = Array.from(contributorMap.values())
  .sort((a, b) => b.count - a.count)
  .slice(0, 4) 
} catch (error) {
console.error('Error fetching topic photos:', error)
}
}


// Gọi API mỗi khi topic được thay đổi
watchEffect(() => {
  if (route.params.category) {
    category.value = route.params.category 
    fetchTopicPhotos(route.params.category)
  }
})
</script>

<template>
  
<section class="flex justify-between top-0 mt-40  ">

  <div class="flex w-1/2 bg-gray-100 p-6 rounded-lg relative text-black">
  
  <div class="w-1/2 flex flex-col justify-center">
    <h2 class="text-xl font-bold">Unlock everything {{ category }} has to offer.</h2>
    <p class="text-gray-600 mt-2">Cancel anytime.</p>
    <el-button class="mt-4 bg-black text-white px-4 py-2 rounded">Upgrade to {{ category }}</el-button>
  </div>
    
  <div class="w-1/2 flex justify-center items-center">
    <img src="D:\CTVP\test_vue\src\assets\logo.svg " alt="Banner Image" class="w-3/4 h-auto object-cover rounded-lg">
  </div>
  </div>
   <div class="ml-5 flex-1 bg-gray-100 p-4 rounded-lg">
      <h3 class="text-lg font-bold text-black">Top Contributors</h3>
      <ul>
        <li v-for="(contributor, index) in contributors" :key="index" class="flex items-center gap-3 mt-2">
          <img :src="contributor.profile_image" class="w-10 h-10 rounded-full" alt="Contributor Avatar">
          <span class="text-black font-semibold">{{ contributor.name }} </span>
        </li>
      </ul>
    </div>

  <div class="w-1/6 ml-3 flex-1 bg-white p-4 rounded-lg relative">
    <img v-if="photos.length > 0" :src="photos[0].urls?.small" class="w-full h-60 object-cover rounded-lg shadow-lg">
    <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
      <h3 class="text-lg font-bold">{{ photos[0 ].user?.name || '' }}</h3>
    </div>
  </div>
</section>

<section class="p-6 grid grid-cols-3 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="relative group flex flex-col items-center">  
      <router-link :to="{ name: 'ImageDetail', params: { id: photo.id } }">
  <img v-if="photo.urls?.small" :src="photo.urls.small" class="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" >
</router-link>
      
      <div class="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white text-sm font-medium p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {{ photo.user?.name || 'Unknown' }}
      </div>
      
      <p class="text-sm text-gray-600 mt-2 text-center">{{ photo.description || '' }}</p>
    </div> 
  </section>
</template>
