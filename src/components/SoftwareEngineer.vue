<template>
  <div id="software-engineer" class="software-engineer">
    <h2>Software engineer.</h2>
    <br />
    <h4>
      As a Bachelor of Computer Science I have a strong foundation in important
      algorithms and their most efficient data-structure-specific
      implementations
    </h4>
    <br />
    <!-- <img src="public/images/design-graphic.png" />
    <img src="public/images/development-graphic.png" /> -->
  </div>
</template>

<script>
export default {
  name: "software-engineer",
  data() {
    return {
      name: "intro",
    };
  },
  mounted: function () {
    console.log("software-engineer mounted");
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
.software-engineer {
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
