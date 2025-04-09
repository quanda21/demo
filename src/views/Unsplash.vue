<script setup>
import { ref, onMounted } from 'vue'

// Khai báo biến images 
const images = ref([])

const fetchImages = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/search/photos?page=1&per_page=15&query=unsplash&client_id=BDJtgIpwKdj1jPBrRmJEQmq16cBgB02b_VZuHtrqcy8')
    const data = await response.json()
    
    // Gán dữ liệu từ response vào images
    images.value = data.results  
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

onMounted(fetchImages)
</script>


<template>
     <section class="flex justify-between  top-0    mt-40  ">

<div class="flex w-1/2 bg-gray-100 p-6 rounded-lg relative text-black">

<div class="w-1/2 flex flex-col justify-center">
  <h2 class="text-xl font-bold">Unlock everything Unsplash+ has to offer.</h2>
  <p class="text-gray-600 mt-2">Cancel anytime.</p>
  <el-button class="mt-4 bg-black text-white px-4 py-2 rounded">Upgrade to Unsplash+</el-button>
</div>
  
<div class="w-1/2 flex justify-center items-center">
  <img src="D:\CTVP\test_vue\src\assets\logo.svg " alt="Banner Image" class="w-3/4 h-auto object-cover rounded-lg">
</div>
</div>
<div class=" ml-5 flex-1 bg-gray-100 p-4 rounded-lg relative uno-nav-link  border-black">
  <h3 class="text-lg font-bold">Collections</h3>
  <ul>
    <li class="flex items-center gap-2 mt-2 "><img src="" class="w-10 h-10 rounded "> Lucky Bites</li>
    <li class="flex items-center gap-2 mt-2"><img src="" class="w-10 h-10 rounded"> Spring Awakening</li>
    <li class="flex items-center gap-2 mt-2"><img src="" class="w-10 h-10 rounded"> Ocean/Waves</li>
    <li class="flex items-center gap-2 mt-2"><img src="" class="w-10 h-10 rounded"> Camping</li>
  </ul>
</div>
<div class="w-1/6 ml-3 flex-1 bg-gray-100 p-4 rounded-lg relative">
  
  <ul class=" text-left">
    <el-button class="mt-4 bg-gray-100  text-black  py-1 rounded min-w-max ">Strategy</el-button>
    <el-button class="mt-4 bg-gray-100  text-black py-1 rounded min-w-max ">Holi</el-button>
    <el-button class="mt-4 bg-gray-100  text-black  py-1 rounded min-w-max ">Appreciation</el-button>
    <el-button class="mt-4 bg-gray-100   text-black   py-1 rounded min-w-max ">Cell Tower</el-button>
    <el-button class="mt-4 bg-gray-100   text-black   py-1 rounded min-w-max ">Blonde</el-button>
  </ul>

</div>

</section>
<section class="p-6columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">  
  <div v-for="(image, index) in images" :key="index" class="w-full flex flex-col">
    <router-link :to="{ name: 'ImageDetail', params: { id: image.id } }">
      <img :src="image.urls.small" class="w-full h-auto rounded-lg shadow-lg object-cover cursor-pointer" />
    </router-link>
  </div>
</section>

</template>

