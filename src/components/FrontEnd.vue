<template>
  <div id="front-end" class="front-end">
    <h2><u>FRONT END</u></h2>
    <div class="front-end-item">
      <div class="front-end-item-text">React</div>
      <div class="front-end-item-image">
        <img src="public/images/react-logo.png" />
      </div>
    </div>
    <div class="front-end-item">
      <div class="front-end-item-text">React-Native</div>
      <div class="front-end-item-image">
        <img src="public/images/react-logo.png" />
      </div>
    </div>
    <div class="front-end-item">
      <div class="front-end-item-text">Vue.js</div>
      <div class="front-end-item-image">
        <img src="public/images/vue-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "front-end",
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
.front-end {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.front-end-item {
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
.front-end-item:hover {
  background-color: rgba(99, 99, 99, 0.068);
  border: solid 1px black;
  border-radius: 10px;
}
.front-end-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.front-end-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
