<script setup>
import { ref, onMounted } from 'vue'

const images = ref([]) 
const collections = ref([]) // Khai báo biến collections để lưu trữ danh sách bộ sưu tập


// api lấy ảnh ngẫu nhiên
const fetchImages = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=BDJtgIpwKdj1jPBrRmJEQmq16cBgB02b_VZuHtrqcy8')
    images.value = await response.json()
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

// api lấy danh sách bộ sưu tập
const fetchCollections = async () => {
  try {
    const response = await fetch(' https://api.unsplash.com/search/collections?query=photo&per_page=4&client_id=BDJtgIpwKdj1jPBrRmJEQmq16cBgB02b_VZuHtrqcy8')
    console.log('API Response:', response) 
    const data = await response.json()
    console.log('Data:', data) 

    console.log('Collections API Data:', data) // Kiểm tra dữ liệu trả về

    // Lưu toàn bộ danh sách vào collections
    collections.value = data.results 
  } catch (error) {
    console.error('Error fetching collections:', error)
  }
}

onMounted(() => {
  fetchImages()
  fetchCollections()
})
</script>

<template>
     <section class="flex justify-between  top-0    mt-40  ">

<div class="flex w-1/2 bg-gray-100 p-6 rounded-lg relative text-black">

<div class="w-1/2 flex flex-col justify-center">
  <h2 class="text-xl font-bold">Unlock everything Photos has to offer.</h2>
  <p class="text-gray-600 mt-2">Cancel anytime.</p>
  <el-button class="mt-4 bg-black text-white px-4 py-2 rounded">Upgrade to Photos+</el-button>
</div>
  
<div class="w-1/2 flex justify-center items-center">
  <img src="D:\CTVP\test_vue\src\assets\logo.svg " alt="Banner Image" class="w-3/4 h-auto object-cover rounded-lg">
</div>
</div>
<div class="ml-5 flex-1 bg-gray-100 p-4 rounded-lg">
      <h3 class="text-lg font-bold text-black">Collections</h3>
      <ul>
        <li v-for="collection in collections" :key="collection.id" class="flex items-center gap-2 mt-2">
          <img :src="collection.cover_photo?.urls?.thumb" class="w-10 h-10 rounded" alt="Collection Image">
          <span class="text-black">{{ collection.title }}</span>
        </li>
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

    <!--    <section class="col-span-3 grid grid-cols-3 gap-4 auto-rows-auto">
            <div v-for="(image, index) in images" :key="index" class="w-full flex flex-col">
            <img :src="image.urls.small" class="w-full h-auto rounded-lg shadow-lg object-cover ">
            </div>
        </section> -->

        <!-- <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
         <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
         <button class="absolute top-2 right-2 text-gray-500" @click="closeModal">✖</button>
          <img :src="selectedImage.urls.regular" class="w-full h-auto rounded-lg" />
          <h3 class="text-lg font-bold mt-2">{{ selectedImage.user.name }}</h3>
          <p class="text-gray-600">{{ selectedImage.description || 'No description available' }}</p>
          <div class="flex items-center justify-between mt-4">
          <button @click="toggleLike" class="px-4 py-2 rounded-lg" :class="{'bg-red-500 text-white': selectedImage.liked, 'bg-gray-200': !selectedImage.liked}">
          {{ selectedImage.liked ? 'Unlike' : 'Like' }}
        </button>
      </div>
    </div>
  </div> -->



  <section class="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 p-3">
  <div
    v-for="(image, index) in images"
    :key="index"
    class="break-inside-avoid mb-4"
  >
    <router-link :to="{ name: 'ImageDetail', params: { id: image.id } }">
      <img
        :src="image.urls.small"
        class="w-full rounded-lg shadow-lg object-cover cursor-pointer"
      />
    </router-link>
  </div>
</section>


 </template>