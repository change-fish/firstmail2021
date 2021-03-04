import {request} from './request'

export function getGoodsDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend',
    
  })
}

//这里将放在不同地方的数据进行整合
//商品信息
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.newPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discount
    this.realPrice = itemInfo.lowNewPrice
    this.columns = columns
    this.services = services
  }
}

//商家信息
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

//参数信息
export class GoodsParam {
  constructor(info,rule){
    this.image = info.images ? info.images[0]:"";
    this.infos = this.set;
    this.sizes = rule.tables

  }
}