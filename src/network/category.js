import {request} from './request.js'

export function getCategory(){
  return request({
    url:'/category',
  })
}

export function getSubCategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getSubCategoryDetail(miniWallkey){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
    }
  })
}