<template>
  <div id="back-end" class="back-end">
    <h2><u>Back-End</u></h2>
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
.back-end {
  vertical-align: top;
  display: inline-block;
  margin: 20px;
  width: auto;
}
.back-end-item {
  text-align: center;
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.068);
  margin-bottom: 5px;
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
