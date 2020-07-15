import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total:0,
    cartItems:[
      {
        id:"123456",
        img:"",
        title:"第一件商品",
        price:50,
        amount:1,
        option:""
      },
      {
        id:"123456",
        img:"",
        title:"第二件商品",
        price:87,
        amount:3,
        option:""
      }
    ]
  },
  mutations: {
    addCartItem(state,item){
      var index = state.cartItems.findIndex(function(i){return i.id==item.id});
      if(index==-1){
        state.cartItems.push(item);
      }
    },
    deleteCartItem(state,id){
      state.cartItems.filter(function(item){
        return item.id!=id;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
