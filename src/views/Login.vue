
<template>   

  <section class="p-0">
  
     <div class="flex justify-center items-center h-screen">
       <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
         <h2 class="text-2xl text-black font-bold mb-6 text-center">Login</h2>
         <form @submit.prevent="handleLogin">
           <div class="mb-4">
             <label for="username" class="block text-gray-700">Username</label>
             <input type="text" id="username" v-model="username" class="w-full p-2 border border-gray-300 rounded" required />
           </div>
           <div class="mb-4">
             <label for="password" class="block text-gray-700">Password</label>
             <input type="password" id="password" v-model="password" class="w-full p-2 border border-gray-300 rounded" required />
           </div>
           <div class="mb-4">
                 <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
           </div>
           <div class="text-center">
                 <a href="#" class="text-blue-500 hover:text-blue-700">Forgot Password?</a>
           </div>
         </form>
       </div>
     </div>
   </section>
 </template>
<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = async () => {
    if (username.value === 'admin' && password.value === 'password') {
        alert('Login successful!')
        window.location.href = '/photos'
    } else {
    
        alert('Invalid username or password')
    }
}
</script>
