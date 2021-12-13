<template>
  <div id="app">
    <el-container style="height: 100vh">
      <el-card body-style="padding:0">
        <el-aside width="200px !important">
          <el-scrollbar style="height: 100%; width: 100%">
            <el-menu unique-opened router>
              <el-menu-item index="/homePage">
                <i class="el-icon-s-home"></i>
                <span>主页</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-goods"></i>
                  <span>商品</span>
                </template>
                <el-menu-item index="/goodsList">
                  <i class="el-icon-s-home"></i>
                  <span>商品列表</span>
                </el-menu-item>
                <el-menu-item index="/addGoods">
                  <i class="el-icon-s-home"></i>
                  <span>添加商品</span>
                </el-menu-item>
                <el-menu-item index="/goodsClassification">
                  <i class="el-icon-s-home"></i>
                  <span>商品分类</span>
                </el-menu-item>
                <el-menu-item index="/goodsCategory">
                  <i class="el-icon-s-home"></i>
                  <span>商品类型</span>
                </el-menu-item>
                <el-menu-item index="/brandManagement">
                  <i class="el-icon-s-home"></i>
                  <span>品牌管理</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-order"></i>
                  <span>订单</span>
                </template>
                <el-menu-item index="/orderList">
                  <i class="el-icon-s-home"></i>
                  <span>订单列表</span>
                </el-menu-item>
                <el-menu-item index="/orderSetting">
                  <i class="el-icon-s-home"></i>
                  <span>订单设置</span>
                </el-menu-item>
                <el-menu-item index="/returnApplication">
                  <i class="el-icon-s-home"></i>
                  <span>退货申请处理</span>
                </el-menu-item>
                <el-menu-item index="/returnReason">
                  <i class="el-icon-s-home"></i>
                  <span>退货原因设置</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>营销</span>
                </template>
                <el-menu-item index="/brandRecommendation">
                  <i class="el-icon-s-grid"></i>
                  <span>品牌推荐</span>
                </el-menu-item>
                <el-menu-item index="/newArrivals">
                  <i class="el-icon-s-grid"></i>
                  <span>新品推荐</span>
                </el-menu-item>
                <el-menu-item index="/multiPersonPurchase">
                  <i class="el-icon-s-grid"></i>
                  <span>人气推荐</span>
                </el-menu-item>
                <el-menu-item index="/couponList">
                  <i class="el-icon-s-ticket"></i>
                  <span>优惠券列表</span>
                </el-menu-item>
                <el-menu-item index="/secondKillActivityList">
                  <i class="el-icon-alarm-clock"></i>
                  <span>秒杀活动列表</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-lock"></i>
                  <span>权限</span>
                </template>
                <el-menu-item index="/userList">
                  <i class="el-icon-s-grid"></i>
                  <span>用户列表</span>
                </el-menu-item>
                <el-menu-item index="/roleList">
                  <i class="el-icon-s-grid"></i>
                  <span>角色列表</span>
                </el-menu-item>
                <el-menu-item index="/menuList">
                  <i class="el-icon-s-grid"></i>
                  <span>菜单列表</span>
                </el-menu-item>
                <el-menu-item index="/resourceList">
                  <i class="el-icon-s-ticket"></i>
                  <span>资源列表</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
      </el-card>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-card>
            <span>王小虎</span>
            <el-dropdown trigger="click">
              <i
                class="el-icon-menu"
                style="margin-right: 20px; margin-left: 10px"
              ></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-card>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.el-menu {
  border-right: none;
}
.el-aside {
  min-width: 200px !important;
}
.el-header {
  padding: 0;
}
.el-main {
  padding: 10px;
}
span {
  color: black;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>>