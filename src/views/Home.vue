<template>
  <div class="home">
    <BrowserInfo />
    <br />
    Yuri Dubler
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ydubler@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missoula,
    MT
    <!-- <Intro text="Full-stack web developer." /> -->
    <BachelorOfCS />
    <Education />
    <FullStackWebDeveloper />
    <FrontEnd />
    <BackEnd />
    <Databases />
    <Cloud />
    <SoftwareEngineer />
    <Languages />
    <DataStructures />
    <Algorithms />
    <Dijkstra />
    <!-- <Dijkstra msg="Dijkstra's Algorithm" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import FullStackWebDeveloper from "../components/FullStackWebDeveloper.vue";
import Intro from "../components/Intro.vue";
import FrontEnd from "../components/FrontEnd.vue";
import BackEnd from "../components/BackEnd.vue";
import Databases from "../components/Databases.vue";
import Cloud from "../components/Cloud.vue";
import SoftwareEngineer from "../components/SoftwareEngineer.vue";
import Languages from "../components/Languages.vue";
import DataStructures from "../components/DataStructures.vue";
import Algorithms from "../components/Algorithms.vue";
import BachelorOfCS from "../components/BachelorOfCS.vue";
import Education from "../components/Education.vue";
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
    FullStackWebDeveloper,
    FrontEnd,
    BackEnd,
    Databases,
    Cloud,
    SoftwareEngineer,
    Education,
    Languages,
    DataStructures,
    Algorithms,
    BachelorOfCS,
    Dijkstra,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
