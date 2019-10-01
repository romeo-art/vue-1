<template>
<div class="login">

<form id="formLogin">
<h2 class="text-center">Login</h2><br>
  <div class="form-group">
    <label for="email">Email</label>
    <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
  </div>

  <center><button type="submit" class="btn btn-primary" @click="submit">Login</button></center>
</form>

</div>
</template>
<style scoped>
  .login{
    width: 305px;
    border: solid gray 2px;
    margin-left: 38%;
    margin-top: 150px;
  }
</style>
<script>
import AUTH from 'services/auth'
export default {
  auth: AUTH,
  data() {
    return {
        email: "",
        password: ""
    };
  },
  methods: {
    submit: function (e) {
        e.preventDefault();
        AUTH.login(this.email, this.password)
    },
  }
};

  // methods: {
  //   onSubmit(evt) {
  //     evt.preventDefault();
  //     console.log(JSON.stringify(this.form));
  //   }
  // }

</script>