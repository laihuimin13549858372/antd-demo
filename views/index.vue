<template>
  <div class="hello"
       style="display:flex;height:100%;">
    <div style="background-color:red;height:300px">00000000000000</div>
    <div style="background-color:blue;flex:1"></div>

    <div style="background-color:pink;height:600px"></div>

    <!-- <router-view></router-view> -->

  </div>
</template>

<script>

export default {
  components: {

  },
  mounted () {
    console.log(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    console.log('000', to, from, next)
  },
  data () {
    return {
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
