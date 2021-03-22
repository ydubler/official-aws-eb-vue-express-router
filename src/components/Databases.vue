<template>
  <div id="databases" class="databases">
    <h2>DATABASES</h2>
    <div class="databases-item">
      <div class="databases-item-text">PostgreSQL</div>
      <div class="databases-item-image">
        <img src="public/images/psql-logo.png" />
      </div>
    </div>
    <div class="databases-item">
      <div class="databases-item-text">MySQL</div>
      <div class="databases-item-image">
        <img src="public/images/mysql-logo.png" />
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
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.253);
  border-top: none;
  border-bottom: none;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0px;
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
