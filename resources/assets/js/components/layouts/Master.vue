<template>
  <div id="app">
    <ul class="nav">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
    </ul>
    
    <router-view></router-view>
  </div>
</template>