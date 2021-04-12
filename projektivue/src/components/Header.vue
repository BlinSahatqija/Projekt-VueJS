<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" style="margin-bottom:60px">
      <b-navbar-brand href="#">JobPortal</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="nav-link" to="/" >
              <a>Home</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about" >
              <a>About</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/contact" >
              <a>Contact us</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/user" >
              <a>User</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/addjobs" >
              <a>Add Jobs</a>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="user.loggedIn">
            <b-nav-item>
              <a class="nav-link">{{ user.data.displayName }}</a>
            </b-nav-item>
            <b-nav-item>
              <a class="nav-link" >Log out</a>
            </b-nav-item>
          </template>
          <template v-else>
            <b-nav-item >
              <router-link class="nav-link" to="login">Login</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="register">Register</router-link>
            </b-nav-item>
          </template>
          <!-- <b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0" @click="darkThemeSwitch">DarkMode</b-button>
          </b-nav-form> -->
          <b-nav-item-dropdown text="Settings" right style="margin-top:7px">
            <b-dropdown-item id="mode" >DarkMode</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>

</script>