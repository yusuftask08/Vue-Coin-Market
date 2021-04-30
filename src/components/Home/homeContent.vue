<template>
  <div>
    <nav-bar />
    <ads />
    <div class="container-card">
      <div class="card-list">
        <div class="card ms-5" v-for="item in getpData" :key="item.id">
          <div class="card-header">
            <div class="card-img">
              <img :src="item.logo_url" />
            </div>
            <div class="card-header-title">
              <h3>{{ item.name }}</h3>
            </div>
          </div>
          <div class="card-body">
            <span style="padding: 10px">item value</span>
          </div>
          <p style="text-align: center; margin-bottom: 5px">item güncellemee</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ads from "@/components/Home/ads.vue";
import navBar from "@/components/Home/navBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    navBar,
    ads,
  },

  created() {
    this.$store.dispatch("getData");
  },
  computed: {
    ...mapGetters(["getpData"]),
  },
};
</script>
<style>
.container-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f2f2f2;
}
.card-list {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  width: 25%;
  border-radius: 10px;
  overflow: unset;
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header-title {
  display: flex;
  flex-direction: row;
}
.card-img {
  width: auto;
  margin-right: 10px;
}
.card-img img {
  height: 50px;
  width: 50px;
  background-position: 0 0;
  background-size: 100% 100%;
  box-shadow: 0 8px 24px -2px rgb(0 0 0 / 30%),
    0 -2px 12px 3px hsl(0deg 0% 61% / 10%);
  border-radius: 50%;
  border: 2px solid #fff;
}
.card-header-title h3 {
  font-weight: bold;
  margin-bottom: 5px;
  box-sizing: border-box;
}

.card-body {
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}

.card-body span {
  font-size: 30px;
  font-weight: 200;
}
</style>
</style>