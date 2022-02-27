<template>
  <div class="hello">
    <div>
      404
    </div>
    <div>
      404
    </div>
    <div>
      404
    </div>
    <div>
      404
    </div>
    <div>
      404
    </div>

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
    alert(99)
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
