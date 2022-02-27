<template>
  <div class="hello">
    <div>
      <a-radio-group default-value="a"
                     button-style="solid"
                     @change="radioChange">
        <a-radio-button value="onemonth">
          近一个月
        </a-radio-button>
        <a-radio-button value="b">
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
    <a-range-picker @change="onChange"
                    :format="dateFormat"
                    v-model="dataRange" />

  </div>
</template>

<script>

import moment from 'moment';
export default {
  components: {

  },
  data () {
    return {
      dataRange: ['', ''],
      dateFormat: 'YYYY/MM/DD',
      start: '',
      endDate: ""


    };
  },
  name: 'search-form',
  props: {
  },
  methods: {
    onChange () { },
    radioChange (e) {

      this.getTimeRange(e.target.value)

    },
    getTimeRange (range) {
      // var todaytimestamp = new Date().getTime();
      if (range == 'onemonth') {
        this.start = moment().subtract(30, "days").format('YYYY-MM-DD')
        console.log(this.start)

      }
      this.endDate = moment().format('YYYY-MM-DD')
      this.dataRange = [moment(this.start, this.dateFormat), moment(this.endDate, this.dateFormat)]

      //设置时间选择器的时间

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
