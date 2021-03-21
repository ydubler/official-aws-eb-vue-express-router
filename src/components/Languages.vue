<template>
  <div id="programming-languages" class="programming-languages">
    <h2>LANGUAGES</h2>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">HTML / CSS / JavaScript</div>
      <div class="programming-languages-item-image">
        <img src="public/images/html-css-js-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">SQL</div>
      <div class="programming-languages-item-image">
        <img src="public/images/sql-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">SVG</div>
      <div class="programming-languages-item-image">
        <img src="public/images/svg-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">C</div>
      <div class="programming-languages-item-image">
        <img src="public/images/c-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">C++</div>
      <div class="programming-languages-item-image">
        <img src="public/images/cplusplus-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">C#</div>
      <div class="programming-languages-item-image">
        <img src="public/images/csharp-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">Objective-C</div>
      <div class="programming-languages-item-image">
        <img src="public/images/obj-c-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">Java</div>
      <div class="programming-languages-item-image">
        <img src="public/images/java-logo.png" />
      </div>
    </div>
    <div class="programming-languages-item">
      <div class="programming-languages-item-text">Python</div>
      <div class="programming-languages-item-image">
        <img src="public/images/python-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "programming-languages",
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
.programming-languages {
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 4px;
}
.programming-languages-item {
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.253);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0px;
}
.programming-languages-item-text {
  display: inline-block;
  text-align: left;
  padding: 10px;
}
.programming-languages-item-image {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
</style>
