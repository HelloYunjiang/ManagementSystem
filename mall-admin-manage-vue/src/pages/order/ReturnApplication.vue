<template>
  <div>
    <!-- 搜索区 -->
    <el-card>
      <div slot="header">
        <span>搜索中心</span>
      </div>
      <div>
        <el-form status-icon>
          <el-form-item>
            退货商品订单号：<el-input
              v-model="value"
              placeholder="请输入订单号"
              autocomplete="off"
            ></el-input>
            <el-button type="primary" @click="Search(value)">搜索</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 商品列表区 -->
    <el-card>
      <div slot="header">
        <span>订单列表</span>
      </div>
      <div>
        <el-table :data="tableData" border highlight-current-rowx>
          <el-table-column type="selection" width="40" fixed></el-table-column>
          <el-table-column
            type="index"
            label="编号"
            width="60"
          ></el-table-column>
          <el-table-column prop="id" label="退款订单号"> </el-table-column>
          <el-table-column prop="name" label="商品名称"> </el-table-column>
          <el-table-column prop="type" label="商品类型"> </el-table-column>
          <el-table-column prop="brand" label="商品品牌"> </el-table-column>
          <el-table-column prop="factory" label="生产厂家"> </el-table-column>
          <el-table-column prop="date" label="购买日期"> </el-table-column>
          <el-table-column prop="reason" label="退货原因"> </el-table-column>
          <el-table-column prop="price" label="商品价格"> </el-table-column>
          <el-table-column label="操作" width="120" fixed="right">
            <template v-slot="scope">
              <el-button
                @click="handleClick(scope.$index, tableData)"
                type="text"
                size="small"
                >删除</el-button
              >
              <el-button @click="dialogVisible = true" type="text" size="small"
                >退款</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-dialog
      title="退款方式"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-radio-group v-model="radio">
        <el-radio :label="1">支付宝</el-radio>
        <el-radio :label="2">微信</el-radio>
      </el-radio-group>
      <br /><br />
      <el-input
        v-model="textarea"
        type="textarea"
        placeholder="给买家的一些话"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "ReturnApplication",
  data() {
    return {
      dialogVisible: false,
      radio: "1",
      tableData: [
        {
          id: "1324235315235",
          name: "华为Mate40 Pro",
          type: "旗舰机",
          brand: "华为",
          factory: "比亚迪",
          date: "2020-10-16",
          reason: "没有喜欢的粉色",
          price: 12999,
        },
      ],
      value: "",
      textarea: "",
    };
  },
  methods: {
    resetForm() {
      this.value = "";
    },
    handleClick(index, rows) {
      rows.splice(index, 1);
    },
    Search(value) {
      if (value !== "") {
        alert(value + "处理完毕");
      } else {
        alert("请输入订单号");
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
.el-card {
  width: 100%;
  margin-bottom: 10px;
}
.el-input,
.el-select {
  width: 18%;
  padding-right: 20px;
}
</style>