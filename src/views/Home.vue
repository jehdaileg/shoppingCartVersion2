<template>
 
   <div :class="isDark ? 'dark' : ''">

     <header class="text-gray-600 body-font dark:bg-black">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl"><fa icon="shopping-cart" class="mr-1" />eshop</span>
    </a>
   
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center rounded-full">
      <a class="rounded hex-color border-b-4 border-blue-400 mr-5 hover:text-pink-900 cursor-pointer">Home</a>
      <a class="hex-color border-b-4 border-blue-400 mr-5 hover:text-pink-900 cursor-pointer">Products</a>
      <a class="hex-color border-b-4 border-blue-400 mr-5 hover:text-pink-900 cursor-pointer">Categories</a>
      <a class="hex-color border-b-4 border-blue-400 mr-5 hover:text-pink-900 cursor-pointer"><fa :icon="['fas', 'shopping-cart']" /></a>
      <a class="hex-color border-b-4 border-blue-400 mr-5 hover:text-pink-900 cursor-pointer">Login/Register</a>
      
     <button class="flex  bg-black  text-white font-bold py-1 px-2 rounded"

          @click="activateOrDesactivateDarkMode()"
     >
              
              <div class="2xl:w-16">

                <fa v-if="isDark" :icon="['fas', 'toggle-on']" />

                <fa v-else :icon="['fas', 'toggle-off']"/>
                
              </div>
         <div class="font-bold 2xl:flex ml-2">Dark Mode</div>


  </button>

   
      

    </nav>

  </div>
</header>

   <div class="allProducts dark:bg-black">

          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
         
         <ProductSummary

         v-for="product in items"
         :key = "product.id"
         :product = "product"

         
          />
       
      </div>
    </div>
 
</section>

   </div>

   

<footer class="text-gray-600 body-font dark:bg-black">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl"><fa icon="shopping-cart" class="mr-1" />eshop</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 eshop —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@jehdai_le_grand</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>


   </div>
     
</template>

<script>
// @ is an alias to /src
import items from "../database/index.js";

import ProductSummary from "../components/products/ProductSummary.vue";

export default {
  watch: {
  },
  name: "Home",
  components: {

     ProductSummary
    
  },

  data() {
     return {

        items: items, 

        isDark: true,


      

        

     }
  },
  
  methods: {

    activateOrDesactivateDarkMode(){

      this.isDark = !this.isDark

    }

    
  },
};
</script>

<style>

   .hex-color {
     color : #99ccff;
   }

   .image-view {

      height: 150px;
      width: 150px;
   }

   .darkmode {

     background-color: black;
   }
</style>
