import Vue from 'vue';
import VueRouter from "vue-router";

//安装路由
Vue.use(VueRouter);
// 引入组件
import Login from "../pages/Login.vue";
import Main from "../pages/Main.vue";
import HomePage from "../pages/HomePage.vue";
// 商品
import GoodsList from "../pages/goods/GoodsList.vue";
import AddGoods from "../pages/goods/AddGoods.vue";
import GoodsClassification from "../pages/goods/GoodsClassification.vue";
import GoodsCategory from "../pages/goods/GoodsCategory.vue";
import BrandManagement from "../pages/goods/BrandManagement.vue";
// 订单
import OrderList from "../pages/order/OrderList.vue";
import OrderSetting from "../pages/order/OrderSetting.vue";
import ReturnApplication from "../pages/order/ReturnApplication.vue";
import ReturnReason from "../pages/order/ReturnReason.vue";
// // 营销
import BrandRecommendation from "../pages/market/BrandRecommendation.vue";
import NewArrivals from "../pages/market/NewArrivals.vue";
import MultiPersonPurchase from "../pages/market/MultiPersonPurchase.vue";
import CouponList from "../pages/market/CouponList.vue";
import SecondKillActivityList from "../pages/market/SecondKillActivityList.vue";
// // 权限
// import UserList from "../pages/jurisdiction/UserList.vue";
// import RoleList from "../pages/jurisdiction/RoleList.vue";
// import MenuList from "../pages/jurisdiction/MenuList.vue";
// import ResourceList from "../pages/jurisdiction/ResourceList.vue";

//导出路由
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/main', component: Main, redirect: '/homePage', children: [
                { path: '/homePage', component: HomePage },
                // 商品
                { path: '/goodsList', component: GoodsList },
                { path: '/addGoods', component: AddGoods },
                { path: '/goodsClassification', component: GoodsClassification },
                { path: '/goodsCategory', component: GoodsCategory },
                { path: '/brandManagement', component: BrandManagement },
                // 订单
                { path: '/orderList', component: OrderList },
                { path: '/orderSetting', component: OrderSetting },
                { path: '/returnApplication', component: ReturnApplication },
                { path: '/returnReason', component: ReturnReason },
                // 营销
                { path: '/brandRecommendation', component: BrandRecommendation },
                { path: '/newArrivals', component: NewArrivals },
                { path: '/multiPersonPurchase', component: MultiPersonPurchase },
                { path: '/couponList', component: CouponList },
                { path: '/secondKillActivityList', component: SecondKillActivityList },
                // // 权限
                // { path: '/userList', component: UserList },
                // { path: '/roleList', component: RoleList },
                // { path: '/menuList', component: MenuList },
                // { path: '/resourceList', component: ResourceList }
            ]
        }
    ]
})