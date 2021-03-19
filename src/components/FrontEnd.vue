<template>
  <div id="front-end" class="front-end">
    <h2><u>Front-End</u></h2>
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
.front-end {
  vertical-align: top;
  display: inline-block;
  margin: 20px;
  width: auto;
}
.front-end-item {
  text-align: center;
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.068);
  margin-bottom: 5px;
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
