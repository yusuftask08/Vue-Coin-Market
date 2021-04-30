<template>
  <div id="app">
    <nav-bar> </nav-bar>
    <transition name="fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
import navBar from "@/components/Home/navBar.vue";
export default {
  components: {
    navBar,
  },
};
</script>
<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0;
}
.fade-leave-enter {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
</style>