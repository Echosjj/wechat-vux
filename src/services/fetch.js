/**
 * Created by sunjinjin on 2018/3/23.
 */
import Vue from 'vue'
import axios from 'axios'
import {LoadingPlugin, AlertPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 创建axios实例
const service = axios.create({
  baseUrl: ''
})

//request拦截器
// service.interceptors.request.use(config => {
//   let token = getStorage('TOKEN')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token.access_token}`
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

service.interceptors.response.use((response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
}, (error) => {
  const response = error.response
  const { status, statusText, config } = response

  const errortext = codeMessage[status] || statusText
  Vue.$vux.alert.show({
    title: '提示',
    content: errortext
  })

  // if (status === 401) {
  //   store.dispatch('login')
  //   return
  // }
  // if (status === 403) {
  //   router.push('/exception/403')
  //   return
  // }
  // if (status <= 504 && status >= 500) {
  //   router.push('/exception/500')
  //   return
  // }
  // if (status >= 404 && status < 422) {
  //   router.push('/exception/404')
  // }
})
export default service
