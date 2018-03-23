/**
 * Created by sunjinjin on 2018/3/23.
 */
import fetch from './fetch'
import querystring from 'querystring'
import {BASE_URL} from './config'

/**
 * 登录
 * @param data
 */
export function login (data) {
  return fetch
    .post(`${BASE_URL}/login`, data, {
      transformRequest: [data => querystring.stringify(data)]
    })
    .then(res => res.data)
}
