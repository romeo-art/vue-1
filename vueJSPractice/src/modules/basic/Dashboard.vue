<template>
  <div id="dashboard">
    <div class="jumbotron">
      <h1>Dashboard</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <center>
          <b-card-img id="image" :src="require('assets/user.png')" class="rounded-0"></b-card-img>
          <b-row no-gutters>
            <b-card-body>
              <h1>HI {{username}}</h1>
              <h3>Welcome to</h3>
              <h2>My University School of God</h2>
            </b-card-body>
          </b-row>
        </center>
      </b-card>
    </div>
  </div>
</template>
<style scoped>
#card {
  margin-top: 30px;
  margin-left: 400px;
}
.jumbotron{
    padding:20px;
    text-align: center;
}
#image {
  width: 250px;
  height: 220px;
}
#dashboard{
  margin-left: 145px;
}
</style>

<script>
import Sidebar from 'modules/basic/Sidebar.vue'
export default {
    components:{
        Sidebar
    },
  name: "card",
  data() {
    return {
      username: sessionStorage.getItem("username")
    };
  },
};
</script>
