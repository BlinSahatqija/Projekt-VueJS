<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header"><h3>Login Form</h3></div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">              
              <div class="imgcontainer">
                <img :src="avatar" alt="Avatar" class="avatar">
              </div>
              <div class="form-group row">
                <label for="email"><b>Email</b></label>
                <input id="email"
                type="email"
                name="email"
                value
                required
                autofocus
                >

                <label for="password"><b>Password</b></label>
                <input id="password"
                type="password"
                name="password"
                required
                >

                <button type="submit">Login</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
              </div>            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
