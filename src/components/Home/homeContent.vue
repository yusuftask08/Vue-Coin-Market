<template>
  <div>
    <nav-bar />
    <ads />
    <cards />
  </div>
</template>

<script>
import ads from "@/components/Home/ads.vue";
import navBar from "@/components/Home/navBar.vue";
import cards from "@/components/Home/cards.vue";

export default {
  components: {
    navBar,
    ads,
    cards,
  },
};
</script>
