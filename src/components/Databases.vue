<template>
  <div id="databases" class="databases">
    <h2><u>DATABASES</u></h2>
    <div class="databases-item">
      <div class="databases-item-text">PostgreSQL</div>
      <div class="databases-item-image">
        <img src="public/images/node-logo.png" />
      </div>
    </div>
    <div class="databases-item">
      <div class="databases-item-text">MySQL</div>
      <div class="databases-item-image">
        <img src="public/images/php-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "databases",
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
.databases {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.databases-item {
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
.databases-item:hover {
  background-color: rgba(99, 99, 99, 0.068);
  border: solid 1px black;
  border-radius: 10px;
}
.databases-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.databases-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
