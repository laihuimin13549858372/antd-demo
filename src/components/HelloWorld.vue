<template>
  <div class="hello">

    <a-select mode="multiple"
              :style="`width: 20%;  `"
              placeholder="Please select"
              @change="handleChange"
              ref="selectRef"
              @focus="getfocus"
              v-model="checkValue">
      <!-- @blur="blur"
              @focus="focus"
              :open="open" -->
      <div slot="dropdownRender"
           class="dropDown"
           slot-scope="menu"
           ref="dropDownRef">

        <div style=" cursor: pointer;">

          <a-checkbox :indeterminate="indeterminate"
                      @change="onCheckAllChange"
                      :checked="checkAll">全选</a-checkbox>
          <a-divider />
          <v-nodes :vnodes="menu" />

          <a-divider />
          <a-button type="link"
                    @click.stop.prevent="clearAll"
                    ref="clearRef"
                    style="float:left;padding:0">清空重置</a-button>
          <a-button style="float:right;margin-left:5px"
                    @click="closeSelect();cancle()">取消</a-button>
          <a-button style="float:right"
                    type="primary"
                    @click="closeSelect();cancle()">确定</a-button>
        </div>

      </div>

      <a-select-option v-for="(item,i) in selectOptions"
                       :key="i"
                       :value="item">
        <a-checkbox :value="item"
                    :checked="checkValue.indexOf(item)!=-1">
        </a-checkbox> {{item}}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {

  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data () {
    return {
      ready: false,
      open: false,
      // visibility: '0',
      searchValue: '',
      checkAll: false,
      checkValue: [],
      // selectOptions: ['a1', 'b1'],
      indeterminate: false,
    };
  },
  name: 'a-select-all',
  props: {
    selectOptions: {
      type: Array,
      default: function () {
        return []
      }

    }
  },
  mounted () {
    // this.initSelect()
  },
  // 销毁监听事件
  destroyed () {
    this.$refs.selectRef.$el.removeEventListener('click', this.openSelect)
  },
  methods: {
    getfocus () {
      // alert(0)
      document.querySelector('.ant-select-search__field').focus();

    },
    openSelect () {//点击，打开下拉框
      // console.log('展开')
      this.open = true
    },
    closeSelect () {//点击取消，关闭下拉框
      // console.log('收起')
      this.open = false
    },
    initSelect () {//初始化执行，输入框添加点击事件，点击展开下拉框
      let that = this
      this.$nextTick(() => {
        that.$refs.selectRef.$el.addEventListener('click', that.openSelect, false);
      })
    },

    cancle () { },
    onSearch () { },
    onCheckAllChange (e) {

      Object.assign(this, {
        checkValue: e.target.checked ? this.selectOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
      // document.querySelector('.ant-select-selection__rendered').innerHTML = this.checkValue.join('，')

    },
    handleChange () {
      this.indeterminate = !!this.checkValue.length && this.checkValue.length < this.selectOptions.length;
      this.checkAll = this.checkValue.length === this.selectOptions.length;
      // document.querySelector('.ant-select-selection__rendered').innerHTML = this.checkValue.join('，')
    },
    // 清空 -- 清空select绑定的值
    clearAll () {
      this.checkValue = [];
      this.checkAll = false;
      this.indeterminate = false;
      // document.querySelector('.ant-select-selection__rendered').innerHTML = this.checkValue.join('，')

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-divider-horizontal {
  margin: 0;
}
::v-deep .ant-select-selection__rendered {
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500px;
  text-align: left; */
}
.ant-select-dropdown {
  box-shadow: none;
}
</style>
