<template>
  <div class="container">
    <div>
      <h2>Contact Us</h2>
      <p>Swing by for a cup of coffee, or leave us a message:</p>
    </div>
    <div class="row">
      <div class="column">
        <img :src="contactphoto" style="width:100%">
      </div>
      <div class="column">
        <form @submit="onSubmit">
            <label>First Name</label>
            <input type="text" id="fname" name="name" placeholder="Your name.." v-model="contacts.name">
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." v-model="contacts.lastname">
            <label >Country</label>
              <select id="country" name="country" v-model="contacts.country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="kosova">Kosova</option>
                <option value="albania">Albania</option>
              </select>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." rows="6" v-model="contacts.description"></textarea>
            <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import router from '@/router'
export default {
  name: 'CreateContacts',
  data () {
    return {
      contactphoto: "https://www.w3schools.com/w3images/map.jpg",
      contacts:{},
    }
  },
  methods: {
    onSubmit () {     
      axios.post(`http://localhost:4000/contacts`, this.contacts)
      .then(response => {
        router.push({
          name: 'home',
        })
      })      
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>