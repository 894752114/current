<template>
  <div class="app-wrapper">
    <sidebar class="side-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>
<script>
import { Sidebar, Navbar, AppMain } from "./components";
export default {
  name: "layout",
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
};
</script>
<style lang="scss">
.app-wrapper {
  height: 100%;
  .main-container {
    position: relative;
    height: 100%;
    margin-left: 210px;
    overflow: hidden;
  }
}
</style>