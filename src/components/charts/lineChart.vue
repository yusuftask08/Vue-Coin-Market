
<script>
import { Line } from "vue-chartjs";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  extends: Line,
  data() {
    return {
      label: [],
      data: [],
      t: [],
      p: [],
      fil: [],
      name: [],
    };
  },
  async mounted() {
    await axios
      .get(
        `https://api.nomics.com/v1/currencies/sparkline?key=e155d0a6b8f354183d85f8917ee205a5&ids=BTC,ETH,XRP,CHZ,TRX,DOT,DOGE,HOT,RVN,CHZ,BTT,BNB,USDT&start=2021-04-14T00%3A00%3A00Z`
      )
      .then((resp) => {
        // this.label = resp.data.map((e) => e.currency);
        // this.data = resp.data.map((e) => e.prices);
        // this.t = resp.data.map((e) => e.timestamps);
        // // this.temps = response.data.list.map((list) => {
        // //   return list.main.temp;
        // // });
        // console.log("this.label :>> ", this.label);
        // console.log("this.label :>> ", this.data);
        // console.log("this.label :>> ", this.t);
      });

    this.renderChart(
      {
        labels: this.data,

        datasets: [
          {
            label: this,
            data: this.data,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data",
        },
      }
    );
  },

  // computed: {
  //   ...mapGetters({ Sdata: "getpSparkData" }),
  // },
};
</script>