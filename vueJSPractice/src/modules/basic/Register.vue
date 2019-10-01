<template>
<div class="register">

<form id="formRegister">
<h2 class="text-center">Register</h2><br>
  <div class="form-group">
    <label for="username">Username</label>
    <input v-model="username" type="text" class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input v-model="confirmedPassword" type="password" class="form-control" id="conPassword" placeholder="Repeat Password">
  </div>
  <center><button class="btn btn-primary" @click="submit">Submit</button></center>
</form>

</div>
</template>
<style scoped>
  .register{
    width: 305px;
    border: solid gray 2px;
    margin-left: 38%;
    margin-top: 150px;
  }
</style>
<script>
import AUTH from 'services/auth'
export default {
  auth:AUTH,
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmedPassword: ""
    }
  },
  methods: {
    submit: function(e){
      e.preventDefault();
      sessionStorage.setItem("username: ", this.username),
      sessionStorage.setItem("Email: ", this.email),
      sessionStorage.setItem("Password", this.password),
      AUTH.register(this.email,this.password)
    }
  },
}
</script>