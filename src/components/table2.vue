<template>
  <div style="overflow-y: scroll;height:400px"
       ref="read">
    <vxe-table :data="data"
               :scroll-y="{enabled: false}">
      <vxe-column type="seq"
                  width="60"></vxe-column>
      <vxe-column field="name"
                  title="Name"
                  width="60"
                  show-overflow></vxe-column>
      <vxe-column field="role"
                  title="Role"></vxe-column>
      <vxe-column field="age"
                  title="Age"></vxe-column>
    </vxe-table>
    <div class="read-con">按钮
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>
      <p>33</p>

    </div>
  </div>
</template>
<script>
const data = [
  { id: 10001, name: 'Test1', role: 'Develop Develop Develop Develop Develop Develop Develop Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
  { id: 10002, name: 'Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' }

];
export default {
  name: 'table2',
  data () {
    return {
      tableData: [],
      data,
      sortedInfo: null,
    };
  },
  created () {
    console.log(this.data)
  },
  mounted () {
    window.addEventListener('scroll', this.scrollEvent, true)
    console.log('ww', this.$parent)
    // window.addEventListener('scroll', this.handleScroll)
    // console.log('444', this.$root.$children[0].$children[0].$children[0].$children[1].$children[0].$children[1].$children[0].$children[1])
  },

  computed: {
    columns () {
      let { sortedInfo } = this;
      sortedInfo = sortedInfo || {};
      const columns = [

        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: true,
          sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        },

      ];
      return columns;
    },
  },
  methods: {
    scrollEvent () {
      // console.log(document.documentElement.scrollTop)
      // let _this = this
      // let read = _this.$el.querySelector('.read-con')
      console.log(this.$refs.read.scrollTop)
      // console.log(read.scrollToTop)
    },
    handleChange (pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter);

      this.sortedInfo = sorter;
    },
    clearFilters () {

    },
    clearAll () {

      this.sortedInfo = null;
    },
    setAgeSort () {
      this.sortedInfo = {
        order: 'descend',
        columnKey: 'age',
      };
    },
  },
};
</script>
<style >
html,
body {
  overflow: hidden;
}
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>