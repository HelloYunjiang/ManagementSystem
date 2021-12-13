<template>
  <div>
    <el-card class="card-box">
      <div slot="header">
        <span>搜索品牌</span>
        <el-button class="right-btn">添加品牌</el-button>
      </div>
      <div>
        <el-table :data="brandData" border highlight-current-row>
          <el-table-column type="selection" width="40" fixed></el-table-column>
          <el-table-column
            type="index"
            label="编号"
            width="120"
          ></el-table-column>
          <el-table-column prop="brand" label="品牌"></el-table-column>
          <el-table-column prop="grade" label="用户喜爱程度"></el-table-column>
          <el-table-column prop="order" label="排名"></el-table-column>
          <el-table-column prop="recommend" label="已推荐"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BrandRecommendation",
  data() {
    return {
      brandData: [
        {
          brand: "华为",
          grade: "100",
          order: 1,
          recommend: "是",
        },
        {
          brand: "小米",
          grade: "98",
          order: 2,
          recommend: "是",
        },
      ],
    };
  },
};
</script>
<style scoped>
.right-btn {
  position: relative;
  left: 89%;
  padding: 6px 10px;
}
.card-box {
  width: 100%;
}
</style>