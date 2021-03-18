import {request} from './request.js'

export function getCategoryData(){
  return request({
    url:'/category',
   /*  params:{
      type,
      page,
    } */
  })
}