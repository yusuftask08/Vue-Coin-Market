<template>
  <div>
    <trend
      style="width: 100%; height: 100%"
      :data="this.data"
      :gradient="['#42b983', '#f94144', '#42b983']"
      auto-draw
      smooth
      :padding="12"
      :stroke-width="1"
    >
    </trend>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style>
</style>