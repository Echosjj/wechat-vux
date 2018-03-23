// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AjaxPlugin, LoadingPlugin, AlertPlugin} from 'vux'
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.config.productionTip = false
// 定义请求
Vue.prototype.http = function (opts) {
  let vue = this
  vue.$vux.loading.show({
    text: 'Loading'
  })

  vue.$http({
    method: opts.method,
    url: opts.url,
    headers: opts.headers || {},
    params: opts.params || {},
    data: opts.data || {}
  }).then(function (response) {
    vue.$vux.loading.hide()
    opts.success(response.data.data)
  }).catch(function (error) {
    vue.$vux.loading.hide()
    if (!opts.error) {
      let response = error.response
      let errorMessage = '请求失败'

      if (response && response.data) {
        if (response.data.code === loginTimeOutErrorCode) {
          window.location.href = '/'
        }
        errorMessage = response.data.message
      }
      vue.$vux.alert.show({
        title: '提示',
        content: errorMessage
      })
    } else {
      opts.error(error.response.data.data)
    }
  })
}
Vue.prototype.get = function (opts) {
  opts.method = 'get'
  this.http(opts)
}
Vue.prototype.post = function (opts) {
  opts.method = 'post'
  this.http(opts)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
