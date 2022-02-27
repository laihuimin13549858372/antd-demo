const MyPlugin = {
  install: function (Vue) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      alert('00')
    }
  }

}

export default MyPlugin;

