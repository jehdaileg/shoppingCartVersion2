  <template>
      <div>
          <div class="lg:w-8/4 md:w-8/2 p-6 w-full">
          
          <a class="block relative h-48 rounded overflow-hidden">
            
            <img alt="ecommerce" class="object-cover object-center w-full h-full block image-view" v-bind:src="product.image">
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.category }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ product.name }}</h2>
            <p class="mt-1 text-gray-500">${{ product.price }}</p>
    
  <button class="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded">
    View
  </button>

          </div>
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

          product: Object

      },

        computed: {

      },



      components: {
  
      },

    

      
      methods: {
          
      },
      
  }
  </script>

  <style scoped>

  .image-view {

        height: 150px;
        width: 150px;
    }

  </style>
