<template>
  <div class="page has-navbar" v-nav="{ title: 'Components',
      showBackButton: true,
      onBackButtonClick: back,
      showMenuButton: true,
      showSettingButton: true,
      onMenuButtonClick: toggleSidebar}">

    <div class="page-content ">
      <div class="list">
      <div class="" style="background: deepskyblue;">
        <div class="list " style="height: 150px">
          <div class=" item-icon-right"  style="display: flex;justify-content: space-around;background:none;height: 150px;line-height: 150px">
            <div><img  style="width: 50px;height: 50px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3527057335,2195036363&fm=173&s=CDC3A844CD22A37E0C65A917010090C1&w=640&h=426&img.JPEG" alt=""></div>
            <div style="height:150px;line-height: 150px">
              <h2>username</h2>
              <h2>loginMode</h2>
            </div>
            <i class="icon ion-ios-arrow-right"></i>

          </div>

        </div>

      </div>
      <!--<h2 class="padding">Nothing here.</h2>-->
      <!--<cells  style="display: flex;justify-content: space-between">-->
        <!--<div>-->
          <!--<img style="width: 50px;height: 50px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3527057335,2195036363&fm=173&s=CDC3A844CD22A37E0C65A917010090C1&w=640&h=426&img.JPEG" alt="">-->
          <!--<p>我的余额</p>-->
        <!--</div>-->
        <!--<div>-->
          <!--<img style="width: 50px;height: 50px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3527057335,2195036363&fm=173&s=CDC3A844CD22A37E0C65A917010090C1&w=640&h=426&img.JPEG" alt="">-->
          <!--<p>兑换红包</p>-->
        <!--</div>-->
        <!--<div>-->
          <!--<img style="width: 50px;height: 50px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3527057335,2195036363&fm=173&s=CDC3A844CD22A37E0C65A917010090C1&w=640&h=426&img.JPEG" alt="">-->
          <!--<p>我的积分</p>-->
        <!--</div>-->
      <!--</cells>-->
        <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
      <div class="list">

        <a class="item item-icon-left item-icon-right" href="#">
          <i class="icon ion-ios-navigate" style="color:#4b8bf4"></i>
         收货地址
          <i class="icon ion-ios-arrow-right"></i>
        </a>

        <a class="item item-icon-left item-icon-right" href="#">
          <i class="icon ion-heart" style="color: red"></i>
          我的收藏
          <i class="icon ion-ios-arrow-right"></i>
        </a>

        <a class="item item-icon-left item-icon-right" href="#">
          <i class="icon ion-ios-paper" style="color: #4b8bf4"></i>
          美食相册

          <i class="icon ion-ios-arrow-right"></i>
        </a>

        <a class="item item-icon-left item-icon-right" href="#">
          <i class="icon ion-bag" style="color: green"></i>
          积分商城
          <span class="badge badge-assertive">0</span>
          <i class="icon ion-ios-arrow-right"></i>
        </a>

      </div>

    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data :function () {
      return{
        entrances :['<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>我的余额</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>兑换红包</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>我的积分</span></div>',]
      }
    },
    methods: {
      back() {
        $router.back('/')
      },
      toggleSidebar(){},
      onCellClick(){}
    }
  }
</script>
<style>

</style>
