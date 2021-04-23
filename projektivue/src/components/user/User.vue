<template>
  <div class="container">
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">LastName</th>
          <th scope="col">Country</th>
          <th scope="col">Comments</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact._id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.lastname }}</td>
          <td>{{ contact.country }}</td>
          <td>{{ contact.description }}</td>
          <button type="button" style="margin-right:5px" class="btn btn-primary" @click.stop="editcontact(contact._id)">Edit</button>
          <button type="button" class="btn btn-danger" @click.stop="deletecontact(contact._id)">Delete</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
  export default {
    name: 'ShowContacts',
      data(){
        return{
          contacts:{}
        }
      },
      created () {
      axios.get(`http://localhost:4000/contacts/`)
        .then(response => {
          this.contacts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      methods: {
        editcontact(contactid){
          this.$router.push({
          name: 'useredit',
          params: { id: contactid }
        })
      },
        deletecontact(contactid){
          axios.delete('http://localhost:4000/contacts/' + contactid)
          .then((result) => {
            //refresh on same page
            this.$router.go({
              
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>