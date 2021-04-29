<template>
  <div class="container">
    <div class="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p>
    </div>
    <h2>Our Team</h2>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/genat.jpg" alt="Genat" style="width:100%">
          <div class="container">
            <h2>Genat Hadri</h2>
            <p class="title">CEO & Founder</p>
            <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>gh43836@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/blin.jpg" alt="Blin" style="width:100%">
          <div class="container">
            <h2>Blin Sahatqija</h2>
            <p class="title">CEO & Founder</p>
               <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>bs45605@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/titan.jpg" alt="Titan" style="width:100%">
          <div class="container">
            <h2>Titan Shala</h2>
            <p class="title">CEO & Founder</p>
               <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>ts44423@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #474e5d;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

</style>