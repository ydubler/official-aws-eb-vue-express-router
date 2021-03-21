<template>
  <div id="full-stack-web-developer" class="full-stack-web-developer">
    <h2>Full-stack web developer.</h2>
    <br />
    <h4>
      As a full-stack web developer I have experience in every stage of the
      product lifecycle from development to deployment, front to back.
    </h4>
    <br />
    <!-- <img src="public/images/design-graphic.png" />
    <img src="public/images/development-graphic.png" /> -->
  </div>
</template>

<script>
export default {
  name: "full-stack-web-developer",
  data() {
    return {
      name: "intro",
    };
  },
  mounted: function () {
    console.log("intro mounted");
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
.full-stack-web-developer {
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
