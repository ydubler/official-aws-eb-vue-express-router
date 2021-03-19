<template>
  <div id="browser-info" class="browser-info">
    <div v-if="$isMobile()">browser: MOBILE</div>
    <div v-else>browser: DESKTOP OR TABLET</div>
    width: {{ screenWidth }} height: {{ screenHeight }}
  </div>
</template>

<script>
export default {
  name: "browser-info",
  data() {
    return {
      name: "browser-info",
      screenHeight: window.screen.height,
      screenWidth: window.screen.width,
      screenHeightPx: window.screen.height + "px",
      screenWidthPx: window.screen.width + "px",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.browser-info {
  position: fixed;
  top: 0;
  left: 0;
  text-align: left;
  font-size: 8px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.719);
  display: inline-block;
}
</style>
