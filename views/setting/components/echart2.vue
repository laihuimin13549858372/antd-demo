<template>
  <div ref="chart"
       :id="id"
       style="width:400px;height:400px">

  </div>
</template>

<script>
import * as echarts from "echarts";
import './map/js/china.js'
export default {
  name: 'echart2',
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      },
    },
    id: {
      type: String,
    }
  },

  data () {
    return {
      myChart: null
    };
  },
  created () {

  },
  mounted () {

    this.initChart(this.dataList);

  },
  watch: {
    dataList: {
      handler (n) {
        var dataList = n;
        this.$nextTick(() => { this.initChart(dataList) })

        console.log('echarts子组件中的参数： ' + n)
      },
      deep: true,// 深度监听父组件传过来对象变化
      immediate: true
    }
  },
  methods: {
    //初始化中国地图
    initChart (dataList) {
      console.log(dataList)
      this.myChart && this.myChart.dispose();
      this.myChart = echarts.init(document.getElementById(this.id));

      var option = {
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
          formatter: function (params,) {
            return params.seriesName + '<br />' + params.name + '：' + params.value
          }//数据格式化
        },
        visualMap: {
          min: 0,
          max: 10000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          // text: ["高", "低"],
          pieces: [{
            gt: 200,
            label: "> 200 人",
            color: "yellow"
          }, {
            gte: 100,
            lte: 200,
            label: "100 - 200 人",
            color: "#ffa31b"
          }, {
            gte: 1,
            lte: 100,
            label: "1 - 100 人",
            color: "#2fff1d"
          }],
          show: !0
        },

        series: [{
          name: '名称',
          type: 'map',
          zoom: 1.0,
          mapType: 'china',
          roam: false,
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 10,
                color: '#ddd'
              }
            },
            emphasis: {
              show: true
            }

          },
          data: dataList
        }]
      };
      this.myChart.setOption(option, true);
      this.myChart.getDom().style.width = '600px'
      this.myChart.resize();
      window.addEventListener("resize", () => {
        this.myChart.getDom().style.width = '600px'
        this.myChart.resize();
      })

    }

  },

};
</script>

<style scoped>
#china_map_box {
  height: 100%;
  position: relative;
}
#china_map_box #china_map {
  height: 100%;
}
#china_map_box .china_map_logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#main {
  width: 500px;
  height: 500px;
}
/*默认长宽比0.75*/
</style>