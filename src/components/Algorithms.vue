<template>
  <div id="algorithms" class="algorithms">
    <h2>ALGORITHMS</h2>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Sorting</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Quicksort</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Heapsort</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Mergesort</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Hashing</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Shortest Paths</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Dijkstra's Algorithm</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Breadth First Search</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Depth First Search</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">A*</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
    <div class="algorithms-item">
      <div class="algorithms-item-text">Minimum Spanning Trees</div>
      <div class="algorithms-item-image">
        <!-- <img src="public/images/node-logo.png" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "algorithms",
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
.algorithms {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.algorithms-item {
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
.algorithms-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.algorithms-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
