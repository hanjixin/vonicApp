<template>
  <div>
    <div class="page " v-nav="{ hideNavbar: true}">
      <div class="page-content ">
        <div class="bar bar-header bar-energized">
          <div class="buttons">
            <!--<button></button>-->
            <button class="button button-icon"  @click="onHide" ><span><i class="icon ion-ios-arrow-back"></i></span></button>
          </div>
          <h1 class="title">bar-energized</h1>
          <div class="buttons">
            <!--<button class="button button-icon"><span><i class="icon ion-ios-arrow-back"></i></span></button>-->
          </div>
        </div>
        <div class="container" style="width: 70%;margin: 0 auto;padding-top: 50px">
          <h1 class="text-center">用户登录</h1>
          <div style="height: 30px"></div>
          <von-input type="text" v-model="username" placeholder="用户名" label="用户名" floating-label="true"></von-input>
          <von-input type="password" v-model="email" placeholder="密码" label="密码" floating-label="true"></von-input>
          <div style="height: 30px"></div>
          <div class="padding-top">
            <md-button class="md-button button button-positive button-block">登录</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../static/js/store'
  export default {
    name :'login',
    data:function () {
      return {
        username:'',
        phone:'',
        email:''
      }
    },
    created:function () {
//      console.log(this.$store.state.modal)
    },
    methods:{
      onHide(){
        console.log(store.state.modal.hide())
//       this.onHide();

      }
    }
  }
</script>
<style>
  .page-content{
   /*margin-top: 20px;*/
    padding-top: 44px;
  }
</style>
