<template>
  <div id="cloud" class="cloud">
    <h2><u>Cloud</u></h2>
    <div class="cloud-item">
      <div class="cloud-item-text">AWS & Elastic Beanstalk</div>
      <div class="cloud-item-image">
        <img src="public/images/node-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cloud",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cloud {
  vertical-align: top;
  display: inline-block;
  margin: 20px;
  width: auto;
}
.cloud-item {
  text-align: center;
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.068);
  margin-bottom: 5px;
}
.cloud-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.cloud-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
