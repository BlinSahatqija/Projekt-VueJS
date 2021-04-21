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