<template>
  <div id="bachelor-of-cs" class="bachelor-of-cs">
    <h2>Bachelor of Computer Science.</h2>
    <br />
    <h4>
      As a Bachelor of Computer Science I have been exposed to the foundations
      of computing including computer architecture, data structures, algorithms,
      algorithmic complexity, parallel computing, and more.
    </h4>
    <br />
    <!-- <img src="public/images/design-graphic.png" />
    <img src="public/images/development-graphic.png" /> -->
  </div>
</template>

<script>
export default {
  name: "bachelor-of-cs",
  data() {
    return {
      name: "intro",
    };
  },
  mounted: function () {
    console.log("bachelor-of-cs mounted");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  display: inline-block;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
  max-width: 1024px;
}
h4 {
  display: inline-block;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
  max-width: 1024px;
  font-weight: 100;
}
img {
  display: inline-block;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}
.bachelor-of-cs {
  display: block;
  width: 100%;
  height: auto;
  text-align: center;
}
.special-text {
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 3px;
}
</style>
