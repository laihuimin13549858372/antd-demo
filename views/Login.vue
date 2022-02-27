<template>
  <div class="hello"
       style="display:flex;    flex-direction: column;
    height: 100%;">
    <div style="background-color:red;height:100px">

    </div>
    <div style="flex:1">
      <a-table :columns="columns"
               :data-source="data"
               :pagination="{ pageSize: 50 }"
               :scroll="{ y: 240 }" />
    </div>

    <div style="background-color:pink;height:200px">999999999999</div>

    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default {
  components: {

  },
  data () {
    return {
      data,
      columns,

    };
  },
  name: 'login',
  props: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
