<template>
  <div class="home">
    <BrowserInfo />
    <Intro />
    <FrontEnd />
    <BackEnd />
    <Cloud />
    <br />
    <div class="horizontal-break-placeholder"></div>
    <Dijkstra msg="Dijkstra's Algorithm" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "../components/Intro.vue";
import FrontEnd from "../components/FrontEnd.vue";
import BackEnd from "../components/BackEnd.vue";
import Cloud from "../components/Cloud.vue";
import Dijkstra from "../components/Dijkstra.vue";
import BrowserInfo from "../components/BrowserInfo.vue";

export default {
  name: "home",
  data() {
    return {
      name: "home",
      screenHeight: window.screen.height,
      screenWidth: window.screen.width,
    };
  },
  components: {
    BrowserInfo,
    Intro,
    FrontEnd,
    BackEnd,
    Cloud,
    Dijkstra,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.horizontal-break-placeholder {
  display: block;
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: rgba(0, 247, 255, 0.267);
}
</style>
