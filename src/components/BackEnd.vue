<template>
  <div id="back-end" class="back-end">
    <h2><u>BACK END</u></h2>
    <div class="back-end-item">
      <div class="back-end-item-text">Node.js & Express</div>
      <div class="back-end-item-image">
        <img src="public/images/node-logo.png" />
      </div>
    </div>
    <div class="back-end-item">
      <div class="back-end-item-text">PHP & Laravel</div>
      <div class="back-end-item-image">
        <img src="public/images/php-logo.png" />
        <img src="public/images/laravel-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "back-end",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-bottom: 0px;
}
u {
  text-decoration-color: lightgray;
}
.back-end {
  vertical-align: top;
  display: inline-block;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.back-end-item {
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 5px;
  background-color: rgba(0, 204, 255, 0.068);
  border: solid 1px white;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0px;
}
.back-end-item:hover {
  background-color: rgba(99, 99, 99, 0.068);
  border: solid 1px black;
  border-radius: 10px;
}
.back-end-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.back-end-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
