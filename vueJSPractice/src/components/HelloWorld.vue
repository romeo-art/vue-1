<template>
  <div class="hello">
    <h1 class="text-primary">Welcome to my Tutorial</h1>
    <button  v-on:click="btn" class="btn btn-outline-primary">Sample Test</button>

  </div>
    
  
</template>

<script>

import tutorialForm from './form/form.vue'
export default {
  name: 'HelloWorld',
  components:{
    tutorialForm
  },
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
