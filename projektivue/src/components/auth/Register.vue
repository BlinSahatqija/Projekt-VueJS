<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header"><h3>Register Form</h3></div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">            
              <div class="imgcontainer">
                <img :src="avatar" alt="Avatar" class="avatar">
              </div>
                <div class="form-group row">
                <label for="name"><b>Name</b></label>
                  <input id="name"
                  type="text"
                  name="name"
                  value
                  required
                  autofocus
                  v-model="form.name">

                  <label for="email"><b>Email</b></label>
                  <input id="email"
                  type="email"
                  name="email"
                  value
                  required
                  autofocus
                  v-model="form.email">

                  <label for="password"><b>Password</b></label>
                  <input id="password"
                  type="password"
                  name="password"
                  required
                  v-model="form.password">

                  <button type="submit">Register</button>
                </div>            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null,
      avatar:"https://www.w3schools.com/howto/img_avatar2.png"
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
             .then(data => {
              this.$router.push({name: 'home',})
            })
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
<style scoped src="@/assets/style.css"></style>