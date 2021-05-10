import axios from 'axios';
import { Notification, Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/notification.css'
import 'element-ui/lib/theme-chalk/message-box.css'
import 'element-ui/lib/theme-chalk/message.css'
import {BASE_URL} from '../config/index.js';

// 创建axios实例
const Axios = axios.create({
	// axios中请求配置有baseURL选项，表示请求URL公共部分
	baseURL: BASE_URL,
	// 超时
	timeout: 10000,
})

Axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg =  res.data.msg
    if (code === 200) {
      return res.data
    } else {
      Notification.error({
        title: msg,
      })
      return Promise.reject('error')
    }
  },
  (error) => {
    console.log('err' + error)
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default Axios