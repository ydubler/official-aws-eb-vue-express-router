<template>
  <div id="intro" class="intro">
    <h2>
      Hi there! My name is Yuri Dubler and I'm an aspiring software engineer and
      full stack web developer. I have experience creating and connecting smooth
      and efficient front-ends with their back-end counterparts.
    </h2>
  </div>
</template>

<script>
export default {
  name: "intro",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  display: block;
  width: 100%;
  height: auto;
  text-align: center;
}
h2 {
  display: inline-block;
  text-align: left;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
  max-width: 1024px;
}
.special-text {
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 3px;
}
</style>
