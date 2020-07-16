import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total:0,
    cartItems:[
    ],
    currentOrder:{
      consignee:"",
      phone:"",
      address:"",
      payment:"",
      logistic:""
    }
  },
  mutations: {
    addCartItem(state,item){
      var index = state.cartItems.findIndex(function(i){return i.id==item.id});
      item.amount=item.amount|"1";
      if(index==-1){
        state.cartItems.push(item);
      }
    },
    deleteCartItem(state,id){
      state.cartItems=state.cartItems.filter(function(item){
        return item.id!=id;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
