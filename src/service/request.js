import axios from 'axios';
import { BASE_URL, TIMEOUT } from './confing';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
instance.interceptors.response.use(confing => {
  // 1. 发送网路请求时，显示一个isLoading组件

  // 2. 某一些请求用户必须包含token，如果没有携带直接跳转到登录界面

  // 3. params/data参数序列化德操作
  // console.log("请求被拦截");

  return confing
})
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('请求错误');
        break;
      case 401:
        console.log('未授权访问');
        break;
      default:
        console.log('其他错误信息');

    }
  }
  return err
})
export default instance;