import Vue from 'vue'
import Vonic from 'vonic'
import Vuex from 'vuex'


// hjx Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import Login from './components/login.vue'

// Page Components
import Home from './components/components/Home'
import Button from './components/components/Button'
import MdButton from './components/components/MdButton'
import Input from './components/components/Input'
import InputDefault from './components/components/InputDefault'
import InputFloatingLabel from './components/components/InputFloatingLabel'
import Search from './components/components/Search'
import Radio from './components/components/Radio'
import Checkbox from './components/components/Checkbox'
import Toggle from './components/components/Toggle'
import RangeSlider from './components/components/RangeSlider'
import Badge from './components/components/Badge'
import Dialog from './components/components/Dialog'

// Layout
import Header from './components/components/Header'
import List from './components/components/List'
import Cells from './components/components/Cells'
import Tabs from './components/components/Tabs'
import ButtonBar from './components/components/ButtonBar'
import Scalable from './components/components/Scalable'

// Advanced
import Swiper from './components/components/Swiper'
import SwiperDefault from './components/components/SwiperDefault'
import SwiperVertical from './components/components/SwiperVertical'
import VSwipe from './components/components/VSwipe'
import Scroll from './components/components/Scroll'
import VueScroller from './components/components/VueScroller'
import Cascade from './components/components/Cascade'
import Accordion from './components/components/Accordion'
import Datepicker from './components/components/DatePicker'
import Popup from './components/components/Popup'
import ActionSheet from './components/components/ActionSheet'
import Tabbar from './components/components/Tabbar'
import TabbarHome from './components/components/tabbar/Home'
import TabbarDiscount from './components/components/tabbar/Discount'
import TabbarCart from './components/components/tabbar/Cart'
import TabbarUser from './components/components/tabbar/User'
import PageFromTabbar from './components/components/tabbar/PageFromTabbar'
import TabbarWithoutRoutes from './components/components/TabbarWithoutRoutes'
import Modal from './components/components/Modal'

import Test from './components/components/Test'

// Routes
Vue.use(Vuex);
const routes = [

  { path: '/', component: Tabbar ,redirect:'/tabbar/home'},
  { path: '/tabbar', component: Tabbar,
    children:[
    {
      path :'/tabbar/home',
      component:Modal,

    },
      {
        path :'/tabbar/cart',
        component:Index,

      },
      {
        path :'/tabbar/discount',
        component:Index,

      }, {
        path :'/tabbar/user',
        component:About,

      },

  ] },
  {
    path:'/about',component:Login
  }
]
import store from '../static/js/store'
Vue.use(Vonic.app, {
  routes: routes,
  store
})
