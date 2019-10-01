<template>
  <div id="app">
  <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
<Header v-show="$route.path === '/login' || $route.path === '/register'|| $route.path === '/' ? true: false"></Header>
<AppBody></AppBody>
<Sidebar v-show="$route.path === '/dashboard' || $route.path === '/subjects'|| $route.path === '/personalInfo' ? true: false"></Sidebar>
  </div>
</template>

<script>
import Header from './components/frame/Header.vue'
import AppBody from './components/frame/Body.vue'
//import Sidebar from 'modules/basic/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody
    //Sidebar
  }
};
</script>
