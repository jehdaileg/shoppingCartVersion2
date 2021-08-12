<template>
  
  <router-view />
</template>

<style lang="scss">

//@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

@font-face {
  font-family: "Merienda";
  src: local("Merienda"),
   url(./fonts/Merienda-Regular.ttf) format("truetype");
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
