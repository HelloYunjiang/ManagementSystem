<template>
  <div>
    <!-- 搜索区 -->
    <el-card class="box-card">
      <div slot="header">
        <span>搜索中心</span>
      </div>
      <div>
        <el-form :model="ruleForm" status-icon>
          <el-form-item>
            商品名称：<el-input
              v-model="ruleForm.pass"
              placeholder="请输入商品名称"
              autocomplete="off"
            ></el-input>
            商品类型：<el-input
              v-model="ruleForm.pass"
              placeholder="请输入商品类型"
              autocomplete="off"
            ></el-input>
            商品品牌：<el-input
              v-model="ruleForm.pass"
              placeholder="请输入商品品牌"
              autocomplete="off"
            ></el-input>
            生产厂家：<el-input
              v-model="ruleForm.pass"
              placeholder="请输入生产厂家"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            销售渠道：<el-select
              v-model="value"
              clearable
              placeholder="请选择销售渠道"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            上架状态：<el-select
              v-model="value"
              clearable
              placeholder="请选择上架状态"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            审核状态：<el-select
              v-model="value"
              clearable
              placeholder="请选择审核状态"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button @click="resetForm">重置</el-button>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 商品列表区 -->
    <el-card>
      <div slot="header">
        <span>商品列表</span>
        <el-button style="float: right" @click="toAddGoods">添加商品</el-button>
      </div>
      <div>
        <el-table :data="tableData" border highlight-current-row>
          <el-table-column type="selection" width="40" fixed></el-table-column>
          <el-table-column prop="id" label="商品id"> </el-table-column>
          <el-table-column prop="name" label="商品名称"> </el-table-column>
          <el-table-column prop="type" label="商品类型"> </el-table-column>
          <el-table-column prop="brand" label="商品品牌"> </el-table-column>
          <el-table-column prop="factory" label="生产厂家"> </el-table-column>
          <el-table-column prop="channel" label="销售渠道"> </el-table-column>
          <el-table-column prop="purchase" label="进货价格"> </el-table-column>
          <el-table-column prop="sell" label="零售价格"> </el-table-column>
          <el-table-column prop="purchaseNum" label="进货数量">
          </el-table-column>
          <el-table-column prop="sellNum" label="剩余数量"> </el-table-column>
          <el-table-column prop="sale" label="上架状态"> </el-table-column>
          <el-table-column prop="examine" label="审核状态"> </el-table-column>
          <el-table-column prop="remarks" label="商品备注"> </el-table-column>
          <el-table-column label="操作" width="120" fixed="right">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; margin-top: 20px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "GoodsList",
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      tableData: [
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      // =======分页======
      // 当前页（最开始的那一页，一般为1）
      currentPage: 1,
      // ============================
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  methods: {
    submitForm() {
      this.$refs.validate();
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    toAddGoods() {
      this.$router.push("/addGoods");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
<style scoped>
.box-card {
  width: 100%;
  margin-bottom: 10px;
}
.el-input,
.el-select {
  width: 18%;
  padding-right: 20px;
}
</style>