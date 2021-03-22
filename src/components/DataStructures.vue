<template>
  <div id="data-structures" class="data-structures">
    <h2>DATA STRUCTURES</h2>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Array</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Stack</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Queue</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Linked List</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Heap</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Binary Tree</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="data-structures-item">
      <div class="data-structures-item-text">Graphs & Digraphs</div>
      <div class="data-structures-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "data-structures",
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
.data-structures {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.data-structures-item {
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
.data-structures-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.data-structures-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
