<template>
  <div class="home">
    <Intro />
    <Dijkstra msg="Dijkstra's Algorithm" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dijkstra from "../components/Dijkstra.vue";
import Intro from "../components/Intro.vue";

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
    Intro,
    Dijkstra,
  },
};
</script>
