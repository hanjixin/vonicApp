<template>
  <div class="page " v-nav="{ hideNavbar: true}">
    <!--<div class="bar bar-header bar-energized">-->
      <!--<div class="buttons">-->
        <!--<button>55</button>-->
      <!--</div>-->
      <!--<h1 class="title">bar-energized</h1>-->
      <!--<div class="buttons">-->
        <!--<button>55</button>-->
      <!--</div>-->
    <!--</div>-->

    <div class="page-content text-center">
      <div class="bar bar-header bar-energized">
        <div class="buttons">
          <!--<button></button>-->
         <button class="button button-icon"><span><i class="icon ion-ios-arrow-back"></i></span></button>
        </div>
        <h1 class="title">bar-energized</h1>
        <div class="buttons">
          <!--<button class="button button-icon"><span><i class="icon ion-ios-arrow-back"></i></span></button>-->
        </div>
        </div>
    <!--<mdbutton></mdbutton>-->

      <h2 class="padding " v-text="msg" ></h2>
       <div>c</div>
      <router-link class="button button-assertive" to="/about">
        <i class="ion-information-circled"></i> About
      </router-link >
      <h2 @click="showModal">模态框</h2>

    </div>
  </div>
</template>
<script>
  import Headers from './components/Header.vue'
  import Search from "./components/Search.vue";
  import Mdbutton from "./components/MdButton.vue";
  import Login from "./login.vue"
  export default {
    components: {
      Mdbutton,
      Search},

    data () {
      return {
        msg: 'Hello! Vonic.',
        value:'555',
        modal: undefined
      }
    },
    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)},
    mounted() {
      $modal.fromComponent(Login, {
        title: '登录',
        theme: 'balanced',
//        destroyOnHide:true,
        onHide: () => {
          console.log('modal hide')
        }
      }).then((modal) => {
        console.log(modal,this.$store.state.modal)
        this.modal = modal
        this.$store.commit('setModal',modal);
      })

    },
    methods:{
      showModal(){
        this.modal.show();
      },
      hideModal(){
        this.modal.hide();
      }
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    /*padding-top: 100px;*/
  }
</style>
