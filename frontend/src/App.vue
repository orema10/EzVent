<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> |
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  margin-top: 70px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;

  #nav {
    margin-top: -70px;
    width: 100%;
    position: fixed;
    padding-bottom: 20px;
    background-color: #3d3d3d;
    a {
      font-weight: bold;
      color: white;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
