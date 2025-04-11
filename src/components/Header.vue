<script setup>
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem, ElIcon,ElTooltip } from 'element-plus'
import { BellFilled, UserFilled, Menu, Search , Camera } from '@element-plus/icons-vue'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-sm py-3 px-6 z-10">

<div class="flex -between gap-2">
  <div class=" text-black"> 
    <img src="D:\CTVP\test_vue\src\assets\logo.svg " alt="Unsplash "   class="h-8">
  </div>
  <div class="flex  bg-gray-200 p-2 rounded-full w-75% min-w-50">
    <el-button :icon="Search" circle />
    <input type="text" class="border-none outline-none bg-transparent w-full" placeholder="Search photos and illustrations">
    <el-tooltip content="Scan image" placement="top">
    <el-icon class="w-10 h-full cursor-pointer text-gray-600">
      <Camera />
    </el-icon>
  </el-tooltip>  </div>
  <div class="flex items-center gap-5">
    
      <el-button  link class="text-sm h-full flex items-center  px-5 py-2">Get Unsplash+</el-button>
      <el-button  class="text-sm h-full flex items-center px-3 py-1">Submit an image</el-button>
    <div class="flex items-center gap-5">
      <el-icon class="w-5 h-5 text-black"><BellFilled /></el-icon>
      <!-- Dropdown  -->
<el-dropdown trigger="click">
  <span class="flex items-center cursor-pointer">
    <el-icon class="w-5 h-5 text-black"><UserFilled /></el-icon>
  </span>
  <template #dropdown>
    <el-dropdown-menu class="w-48 shadow-lg border border-gray-200 bg-white rounded-lg">
      <el-dropdown-item>View profile</el-dropdown-item>
      <el-dropdown-item>Stats</el-dropdown-item>
      <el-dropdown-item>Download history</el-dropdown-item>
      <el-dropdown-item>Account settings</el-dropdown-item>

      <el-dropdown-item divided class="text-red-500" @click="$router.push('/login')">Logout</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>     

      <el-icon class="w-5 h-5 text-black"><Menu /></el-icon>
    </div>
  </div>
</div>
<nav class="flex justify-between overflow-x-auto  w-full justify-center gap-4 mt-2 border-b pb-2 bg-white whitespace-nowrap">
  <router-link to="/photos" class="text-black text-sm pb-1 hover:text-red font-medium border-b-2 border-transparent hover:border-black">Photos</router-link>
  <router-link to="/illustrations" class="uno-nav-link uno-nav-link-hover">Illustrations </router-link>
  <router-link to="/unsplash" class="uno-nav-link uno-nav-link-hover">Unsplash+</router-link>  
  <span class="text-gray-400 text-sm self-center">|</span>
  <router-link to="/p/wallpapers"class="uno-nav-link uno-nav-link-hover">Wallpapers</router-link>
  <router-link to="/p/nature" class="uno-nav-link uno-nav-link-hover">Nature</router-link>
  <router-link to="/p/3d-renders" class="uno-nav-link uno-nav-link-hover">3D Renders</router-link>
  <router-link to="/p/textures-patterns" class="uno-nav-link uno-nav-link-hover">Textures</router-link> 
  <RouterLink  to="/p/architecture-interior" class="uno-nav-link uno-nav-link-hover">Architecture & Interiors</RouterLink>
 <RouterLink   to="/p/travel"class="uno-nav-link uno-nav-link-hover">Travel</RouterLink>
 <RouterLink   to="/p/film"class="uno-nav-link uno-nav-link-hover">Film</RouterLink>
 <RouterLink   to="/p/street-photography" class="uno-nav-link uno-nav-link-hover">Street Photography</RouterLink>
 <RouterLink   to="/p/people"class="uno-nav-link uno-nav-link-hover">People</RouterLink>
 <RouterLink   to="/p/animals"class="uno-nav-link uno-nav-link-hover">Animals</RouterLink>
 <RouterLink   to="/p/experimental"class="uno-nav-link uno-nav-link-hover">Experimental</RouterLink>
 <RouterLink   to="/p/fashion-beauty"class="uno-nav-link uno-nav-link-hover">Fashion & Beauty</RouterLink>
</nav>

</header>
</template>








