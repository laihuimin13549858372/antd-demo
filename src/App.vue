<template>
  <div id="app"
       style="height:100%">
    <a-layout id="components-layout-demo-fixed-sider"
              style="height:100%">
      <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
        <div class="logo" />
        <a-menu theme="dark"
                mode="inline"
                :default-selected-keys="['4']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span class="nav-text">nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="bar-chart" />
            <span class="nav-text">nav 4</span>
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="cloud-o" />
            <span class="nav-text">nav 5</span>
          </a-menu-item>
          <a-menu-item key="6">
            <a-icon type="appstore-o" />
            <span class="nav-text">nav 6</span>
          </a-menu-item>
          <a-menu-item key="7">
            <a-icon type="team" />
            <span class="nav-text">nav 7</span>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="shop" />
            <span class="nav-text">nav 12</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" />
        <a-layout-content :style="{ margin: '64px 0px 0', overflow: 'initial' }">
          <div :style="{ padding: '0px', background: '#fff', textAlign: 'center',height:'100%' }">
            <router-view></router-view>
            <!-- <table2 /> -->
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// import table2 from './components/table2.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Atable from './components/table.vue'
// import searchForm from './components/searchForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Atable,
    // searchForm
    // table2

  },
  data () {
    return {
      // selectOptions2: ['a1', 'b1']
      selectOptions2: ['1a1a1a1a1a1a1a1a1a1a1a1a1a1a1', '2b1b1b1b1b1b1b1b1', '3a1a1a1a1a1a1a1a1a1a1a1a1a1a1', '4b1b1b1b1b1b1b1b1', '5a1a1a1a1a1a1a1a1a1a1a1a1a1a1', '6b1b1b1b1b1b1b1b1']
    };
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
