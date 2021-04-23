<template>
  <div class="container features">
   <section class="main-banner" id="container" style="background: #12171c url(https://assets.techcircle.in/images/2016/11/thinkstockphotos-515594438.jpg) no-repeat">
      <div class="container">
        <div class="caption">
          <h1 style="font-size:82px">JOB PORTAL</h1>
        </div>
      </div>
    </section>
    <div style="margin:40px">
      <h1>Welcome to the Home Page!</h1>
      <p id="par">The #1 job site to find remote, work from home, and flexible job opportunities since 2007. Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on JobPortal today.</p>
    </div>
    <div class="row">
      <div class="container card col-12 col-sm-12 col-md-4 col-lg-3" style="width: 18rem; margin-bottom:20px" 
        v-for="job in jobfields" :key="job._id">
        <img class="card-img-top" :src="photo" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" style="font-weight:600">{{ job.title }}</h5>
          <p class="card-text">{{ job.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><em>Category: </em> {{ job.category }}</li>
          <li class="list-group-item"><em>City: </em>{{ job.city }}</li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>

/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateJobs',
  data () {
    return {
      photo:"https://banner2.cleanpng.com/20180529/osf/kisspng-job-hunting-intern-employment-website-cover-letter-job-search-5b0d9f89959ea1.4692299715276194656129.jpg",
      jobfields:{},
      jobs: {}
    }
  },created () {
    axios.get(`http://localhost:4000/jobs`)
    .then(response => {
      this.jobfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  // methods: {
  //   onSubmit (evt) {
  //     evt.preventDefault()
  //     axios.post(`http://localhost:4000/jobs`, this.jobs)
  //     .then(function (response) {
  //       console.log(response);
  //       })
      
  //   }
  // }
}
</script>
<style scoped>
  .main-banner{
    background-size:cover !important;
    background-position:center !important;
    padding:14% 0;
    position:relative;
    text-align:center;
    color:#ffffff;
    margin:0;
  }
  .main-banner .caption{
    position:relative;
  }
  .main-banner:before{
    content:"";
    display:block;
    top:0;
    bottom:0;
    left:0;
    right:0;
    position:absolute;
    background:rgba(12,20,25,0.3);
  }
</style>