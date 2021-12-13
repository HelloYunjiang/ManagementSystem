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
            订单号：<el-input
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
        <el-table :data="tableData" border highlight-current-row>
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column
            type="index"
            label="编号"
            width="60"
          ></el-table-column>
          <el-table-column prop="id" label="订单号"> </el-table-column>
          <el-table-column prop="name" label="商品名称"> </el-table-column>
          <el-table-column prop="type" label="商品类型"> </el-table-column>
          <el-table-column prop="brand" label="商品品牌"> </el-table-column>
          <el-table-column prop="factory" label="生产厂家"> </el-table-column>
          <el-table-column prop="date" label="购买日期"> </el-table-column>
          <el-table-column label="操作" width="120" fixed="right">
            <template v-slot="scope">
              <el-button
                @click="handleClick(scope.$index,tableData)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "OrderList",
  data() {
    return {
      tableData: [
        {
          id: "1324235315235",
          name: "华为Mate40 Pro",
          type: "旗舰机",
          brand: "华为",
          factory: "比亚迪",
          date: "2020-10-16",
        },
      ],
      value: "",
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
        alert(value);
      } else {
        alert("请输入订单号");
      }
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