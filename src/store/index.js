import { createStore } from 'vuex'

const store = createStore({
  state: {
    cartList:[]
  },
  mutations: {
    //mutation内做的事情尽量少一点
    addCount(state,index){
      state.cartList[index].count += 1
      //console.log(state.cartList[0].count);
    },
    addToCart(state,payLoad){
      state.cartList.push(payLoad)
    },
  },
  actions: {
    //先判断购物车内是否已经有该商品，如果有，数量加一，如果没有，加到购物车内
    addCart(context,payLoad){
      return new Promise((resolve) => {
        let isProduct = false
        let length = context.state.cartList.length
        let index = 0

        for(let i = 0; i < length; i++){
          if(context.state.cartList[i].iid === payLoad.iid){
            isProduct = true
            index = i
          }
        }

        if(isProduct){
          //state.cartList[index].count += 1
          context.commit('addCount',index)
          resolve('加入购物车成功')
        }else{
          //state.cartList.push(payLoad)
          context.commit('addToCart',payLoad)
          resolve('加入购物车成功')
        }
      })
    },
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    },
  },
  
  modules: {
  },
})

export default store
