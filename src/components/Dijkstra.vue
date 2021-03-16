<template>
  <div id="dijkstra" class="main">
    width: {{ screenWidth }}<br />
    height: {{ screenHeight }}<br />
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
    <h1>{{ msg }}</h1>
    <div
      class="dijkstra-svg"
      v-bind:style="{ width: screenWidthPx, height: screenHeightPx }"
    >
      Hellos
    </div>
  </div>
</template>

<script>
export default {
  name: "dijkstra",
  data() {
    return {
      name: "home",
      screenHeight: window.screen.height,
      screenWidth: window.screen.width,
      screenHeightPx: window.screen.height + "px",
      screenWidthPx: window.screen.width + "px",
    };
  },
  props: {
    msg: String,
  },
  mounted: function () {
    console.log("dijkstra mounted");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  background-color: lightblue;
}
.dijkstra-svg {
  background-color: lime;
}
</style>