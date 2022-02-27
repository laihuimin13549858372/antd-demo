import Vue from 'vue'
import Moment from 'moment'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import MyPlugin from "./install.js"

Vue.use(VXETable, {
  size: 'small'
})
console.log('MyPlugin', MyPlugin)
Vue.use(MyPlugin)
// 定义全局时间戳过滤器
Vue.filter('formatDate', function (value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})

VXETable.setup({
  // 默认尺寸
  size: 'small',
  // 所有内容超过隐藏
  showAllOverflow: null,
  // 所有表头内容超过隐藏
  showHeaderAllOverflow: null,
  // 默认快捷菜单
  contextMenu: null,
  // 自定义图标配置
  iconMap: {
    sortAsc: 'vxe-icon--caret-top',
    sortDesc: 'vxe-icon--caret-bottom',
    filter: 'vxe-icon--funnel',
    edit: 'vxe-icon--edit-outline',
    tree: 'vxe-icon--caret-right',
    jumpPrev: 'vxe-icon--d-arrow-left',
    jumpNext: 'vxe-icon--d-arrow-right',
    prevPage: 'vxe-icon--arrow-left',
    nextPage: 'vxe-icon--arrow-right'
  },
  // 默认 tooltip 主题样式
  tooltipConfig: {
    theme: 'dark'
  },
  // 默认分页参数
  pager: {
    pageSize: 10,
    pagerCount: 7,
    pageSizes: [10, 15, 20, 50, 100],
    layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  // 默认优化配置项
  optimization: {
    animat: true,
    // 当列大于 40 条时自动启用横向 X 滚动渲染
    scrollX: {
      gt: 40,
      oSize: 5,
      rSize: 16
    },
    // 当数据大于 500 条时自动启用纵向 Y 滚动渲染
    scrollY: {
      gt: 500,
      oSize: 20,
      rSize: 80
    }
  }
})



Vue.config.productionTip = false
Vue.use(Antd);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

