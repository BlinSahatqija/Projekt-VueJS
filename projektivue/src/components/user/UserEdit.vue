<template>
  <div class="container features">
    <h3 id="h3edit">Edit the User</h3>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-centered">
        <form @submit="onSubmit">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" v-model="contacts.name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="LastName" v-model="contacts.lastname">
          </div>
          <div class="form-group">
            <label id="labeledit">Country:</label>   
            <select id="country" name="country" v-model="contacts.country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="kosova">Kosova</option>
              <option value="albania">Albania</option>
            </select>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="4" placeholder="Enter your comments about site" 
            v-model="contacts.description"></textarea>
          </div>
            <input type="submit" class="btn btn-secondary" value="Send">
        </form>
      </div>
    </div>
  </div>
</template>
