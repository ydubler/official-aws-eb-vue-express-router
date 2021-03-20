<template>
  <div id="cloud" class="cloud">
    <h2><u>CLOUD</u></h2>
    <div class="cloud-item">
      <div class="cloud-item-text">AWS Elastic Beanstalk</div>
      <div class="cloud-item-image">
        <img src="public/images/aws-logo.png" />
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
h2 {
  margin-bottom: 0px;
  font-weight: 200;
}
u {
  text-decoration-color: lightgray;
}
.cloud {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
  color: rgb(83, 83, 83);
}
.cloud-item {
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
.cloud-item:hover {
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.253);
  border-radius: 10px;
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
