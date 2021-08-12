<template>
    <div>

        <div class="flex">
  <div class="flex-none w-48 relative">
    <img v-bind:src="product.image" alt="" class="absolute inset-0 w-full h-full object-cover" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-xl font-semibold">
       {{ product.name }}
      </h1>
      <div class="text-xl myFont text-gray-500">
        $ {{ product.price }}
      </div>
      <div class="w-full flex-none text-sm myFont text-gray-500 mt-2">
        In Cart: <div class="text-xl myFont shadow-xl">4</div>
      </div>


    </div>
    <div class="flex items-baseline mt-4 mb-6" v-if="product.category === 'wear' ">
      <div class="space-x-2 flex">
        <label>
          <input class="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked>
          XS
        </label>
        <label>
          <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="s">
          S
        </label>
        <label>
          <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m">
          M
        </label>
        <label>
          <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l">
          L
        </label>
        <label>
          <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="xl">
          XL
        </label>
      </div>

    <div><a href="https://www.millet.fr/guide-des-tailles" target="_blank">Guide About Size</a></div>
     
    </div>
    <div class="" v-else></div>


    <div class="flex space-x-3 mb-4 text-sm font-medium">
      <div class="flex-auto flex space-x-3">
        <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Add</button>
        <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Remove</button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300 hover:bg-pink-400" type="button" aria-label="like">
        <svg width="20" height="20" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-gray-500">
      {{ description  }}
    </p>
  </form>
</div>

        
    </div>
</template>

<script>
export default {

    data() {
        return {
            
        }
    },

      props: {

        product : Object 

    },

    methods: {
        
    },

    computed: {

      description(){

          return this.product.description.substring(0,15)
      }

    },

  



    
}
</script>
<style scoped>

</style>