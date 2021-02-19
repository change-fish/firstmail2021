import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })

  //axios拦截器的使用
  //1.请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })
  //2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  //这里直接返回instance，是一个promise
  return instance(config)
}