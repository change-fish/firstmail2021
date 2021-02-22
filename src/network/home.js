import {request} from './request.js'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'//服务器的数据地址
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}