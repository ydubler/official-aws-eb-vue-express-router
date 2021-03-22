<template>
  <div id="education" class="education">
    <h2>UNIVERSITY OF MONTANA</h2>
    <div class="education-item">
      <div class="education-item-text">
        <b>Bachelor of Computer Science</b><br />
        <div class="education-item-image">
          <img src="public/images/bachelor-cap.png" />
        </div>
        <br /><i>Summer 2020</i>
      </div>
      <br />
      <div class="education-item-image">
        <img src="public/images/mt-grizzly-logo.png" />
      </div>
      <div class="education-item-image">
        <img src="public/images/grizpaw-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "education",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-bottom: 0px;
  font-weight: 200;
}
u {
  text-decoration-color: lightgray;
}
.education {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  min-width: 300px;
  width: 80%;
  max-width: 1024px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.education-item {
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  border: solid 2px rgba(0, 0, 0, 0.253);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0px;
}
.education-item-text {
  display: inline-block;
  text-align: center;
  padding: 10px;
}
.education-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
