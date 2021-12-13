<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header">
            <span>热门商品</span>
          </div>
          <div>
            <el-row :gutter="2">
              <el-col :span="8">
                <div>
                  <div>衣服</div>
                  <br />
                  <div>已售{{ X }}件</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div>
                  <div>裤子</div>
                  <br />
                  <div>已售{{ Y }}件</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div>
                  <div>鞋子</div>
                  <br />
                  <div>已售{{ Z }}件</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header">
            <span>商品总览</span>
          </div>
          <el-row :gutter="2">
            <el-col :span="6">
              <div>
                <div>全部商品</div>
                <br />
                <div>总共{{ X }}件</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div>已上架</div>
                <br />
                <div>总共{{ Y }}件</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div>已下架</div>
                <br />
                <div>总共{{ Z }}件</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div>库存紧张</div>
                <br />
                <div>总共{{ Q }}件</div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header">
            <span>用户总览</span>
          </div>
          <el-row :gutter="2">
            <el-col :span="6">
              <div>
                <div>总用户</div>
                <br />
                <div>总共{{ X + 666 }}人</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div>VIP用户</div>
                <br />
                <div>总共{{ Y }}人</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div>本月新增</div>
                <br />
                <div>总共{{ Z }}人</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div>今日新增</div>
                <br />
                <div>总共{{ Q }}人</div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <i class="el-icon-s-order"></i>
          <span>今日订单总数 {{ Q }} 件</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <i class="el-icon-s-order"></i>
          <span>本月订单总数 {{ Q }} 件</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <i class="el-icon-s-finance"></i>
          <span>今日销售总额 {{ Q }} 元</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <i class="el-icon-s-finance"></i>
          <span>本月销售总额 {{ Q }} 元</span>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>待处理事务</span>
      </div>
      <div>
        <el-row :gutter="2">
          <el-col :span="8">
            <div>
              <div>
                待付款订单数 <span style="color: red">( {{ X }} )</span>
              </div>
              <br />
              <div>
                待发货订单数 <span style="color: red">( {{ Y }} )</span>
              </div>
              <br />
              <div>
                已发货订单数 <span style="color: red">( {{ Z }} )</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <div>
                已完成订单数 <span style="color: red">( {{ X }} )</span>
              </div>
              <br />
              <div>
                新缺货登记数 <span style="color: red">( {{ Y }} )</span>
              </div>
              <br />
              <div>
                待处理退货订单数 <span style="color: red">( {{ Z }} )</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <div>
                待确认收获订单数 <span style="color: red">( {{ X }} )</span>
              </div>
              <br />
              <div>
                待退款处理订单数 <span style="color: red">( {{ Y }} )</span>
              </div>
              <br />
              <div>
                广告位即将到期数 <span style="color: red">( {{ Z }} )</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单统计</span>
      </div>
      <div>
        <div id="myChart" :style="{ width: '800px', height: '400px' }"></div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      X: 300,
      Y: 200,
      Z: 100,
      Q: 50,
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 60],
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
.box-card {
  width: 100%;
  margin-bottom: 10px;
}
</style>