import Vue from 'vue';
import Vuex from  'vuex'
Vue.use(Vuex);
let store=new Vuex.Store({
  state:{
    modal:'',
    name:"5555"
  },
  mutations:{
    setModal(state,m){
      state.modal=m
    }
  }
})
export default store
