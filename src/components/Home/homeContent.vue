<template>
  <div>
    <nav-bar />
    <ads />
    <div class="container-card">
      <div class="card-list d-flex justify-content-center align-content-center">
        <div class="card ms-5" v-for="item in getpData" :key="item.id">
          <div class="card-header">
            <div class="card-img">
              <img :src="item.image" />
            </div>
            <div class="card-header-title">
              <h2>{{ item.name }}</h2>
            </div>
            <div class="card-header-price"></div>
          </div>
          <div class="card-body">
            <h3 :class="color">{{ item.current_price }}₺</h3>

            <!-- 24s değişim
            <div class="low-high">
              <span :class="color"> {{ item.high_24h }} ₺ </span>
              <span :class="color">24s low: {{ item.low_24h }} ₺ </span>
            </div> -->
          </div>

          <sparkline :data="item.sparkline_in_7d.price" />

          <!-- <p style="text-align: center; margin-bottom: 5px">item güncellemee</p> -->
          <!-- <p>{{ item.sparkline_in_7d }}</p> -->
        </div>
      </div>
      <div class="d-flex align-content-center justify-content-center">
        <button
          type="button"
          class="btn btn-outline-success align-content-center justify-content-centerm mb-1"
        >
          Daha fazla gör
        </button>
      </div>

      <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
    </div>
  </div>
</template>

<script>
import ads from "@/components/Home/ads.vue";
import navBar from "@/components/Home/navBar.vue";
import { mapGetters } from "vuex";
import sparkline from "@/components/charts/sparkline.vue";
import axios from "axios";
const api =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=6&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y";
const req =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y";
export default {
  components: {
    navBar,
    ads,
    sparkline,
  },
  data() {
    return {
      page: 1,
      list: [],
      name: "yusuf Taşkıran",
    };
  },
  methods: {
    // infiniteHandler($state) {
    //   axios
    //     .get(api, {
    //       params: {
    //         page: this.page,
    //       },
    //     })
    //     .then(({ data }) => {
    //       console.log("data :>> ", data);
    //       if (data.length) {
    //         this.page += 1;
    //         this.list.push(...data);
    //         $state.loaded();
    //       } else {
    //         $state.complete();
    //       }
    //     });
    // },
  },
  mounted() {
    this.$store.dispatch("getData");
    // this.$store.dispatch("getCurrenciesData");
    // this.$store.dispatch("getSparkData");
    // this.$store.dispatch("getCurSetInt");
  },

  computed: {
    ...mapGetters(["getpData"]),
    color() {
      return this.list.current_price > -1 ? "inc" : "dec";
    },
  },
};
</script>
<style>
.btn.btn-primary:active:hover,
.btn.btn-primary:hover {
  border-color: transparent!important;
  background-color: transparent!important;
}
.btn {
  width: 50% !important;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f2f2f2;
}
.inc {
  color: green;
}
.dec {
  color: green;
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
.low-high {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.low-high span {
  font-size: 20px;
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
  padding: 10px;
  flex-wrap: wrap;
  font-size: 20px;

  align-items: center;
}

</style>
