<template>
  <div id="main"
       style="width:100%;height:100%">
    <button @click="dian()">点击改变</button>
    <a-card style="width:100%;height:100%">
      <a-row :gutter='[15,5]'
             style="height:100%;width:100%">
        <a-col :span="12"
               class="h33">
          <echartBox :title="doc"
                     ref="firstEchart"
                     id="firstEchart"
                     :dataList="dataList1"
                     v-bind:doc.sync="doc">
          </echartBox>
        </a-col>

      </a-row>
    </a-card>

    <a-button type="primary"
              @click="showModal">
      Open Modal with async logic
    </a-button>
    <a-modal title="Title"
             :visible="visible"
             :confirm-loading="confirmLoading"
             @ok="handleOk"
             @cancel="handleCancel"
             style="width:90%">
      <echart2 ref="echart2"
               :dataList="dataList1"
               id="2"></echart2>
    </a-modal>

  </div>
</template>

<script>
import echartBox from './components/echartBox'
import echart2 from './components/echart2'
export default {
  components: {
    echartBox,
    echart2
  },
  data () {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      dataList1: [
        { name: "南海诸岛", value: 0 },
        {
          name: '北京', value: 1,
        },
        { name: '天津', value: Math.round(Math.random() * 1000) },
        { name: '上海', value: Math.round(Math.random() * 1000) },
        { name: '重庆', value: Math.round(Math.random() * 1000) },
        { name: '河北', value: Math.round(Math.random() * 1000) },
        { name: '河南', value: Math.round(Math.random() * 1000) },
        { name: '云南', value: Math.round(Math.random() * 1000) },
        { name: '辽宁', value: Math.round(Math.random() * 1000) },
        { name: '黑龙江', value: 1 },
        { name: '湖南', value: Math.round(Math.random() * 1000) },
        { name: '安徽', value: Math.round(Math.random() * 1000) },
        { name: '山东', value: Math.round(Math.random() * 1000) },
        { name: '新疆', value: Math.round(Math.random() * 1000) },
        { name: '江苏', value: Math.round(Math.random() * 1000) },
        { name: '浙江', value: Math.round(Math.random() * 1000) },
        { name: '江西', value: Math.round(Math.random() * 1000) },
        { name: '湖北', value: Math.round(Math.random() * 1000) },
        { name: '广西', value: Math.round(Math.random() * 1000) },
        { name: '甘肃', value: Math.round(Math.random() * 1000) },
        { name: '山西', value: Math.round(Math.random() * 1000) },
        { name: '内蒙古', value: 0 },
        { name: '陕西', value: Math.round(Math.random() * 1000) },
        { name: '吉林', value: Math.round(Math.random() * 1000) },
        { name: '福建', value: Math.round(Math.random() * 1000) },
        { name: '贵州', value: Math.round(Math.random() * 1000) },
        { name: '广东', value: Math.round(Math.random() * 1000) },
        { name: '青海', value: Math.round(Math.random() * 1000) },
        { name: '西藏', value: Math.round(Math.random() * 1000) },
        { name: '四川', value: Math.round(Math.random() * 1000) },
        { name: '宁夏', value: Math.round(Math.random() * 1000) },
        { name: '海南', value: Math.round(Math.random() * 1000) },
        { name: '台湾', value: Math.round(Math.random() * 1000) },
        { name: '香港', value: Math.round(Math.random() * 1000) },
        { name: '澳门', value: Math.round(Math.random() * 1000) }
      ],
      doc: '哈哈哈'
    };
  },
  methods: {
    dian () {
      console.log('进入这里', this.$refs.firstEchart.$refs.echart2)
    },
    showModal () {
      this.visible = true;
    },
    handleOk (e) {
      console.log(e)
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel (e) {
      console.log(e)
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
  created () {

  },
  mounted () {
    console.log(this.dataList)


  }
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
::v-deep .ant-card-body {
  width: 100%;
  height: 100%;
}
.h33 {
  height: 33%;
}
::v-deep .ant-modal {
  width: 90% !important;
}
</style>