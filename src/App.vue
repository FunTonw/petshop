<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app{
    margin: auto 0;
  }
  @import "./assets/all";
</style>
