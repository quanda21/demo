<template>
  <Header />
  <main class="mt-16 p-4">

    <router-view></router-view>
  </main>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>