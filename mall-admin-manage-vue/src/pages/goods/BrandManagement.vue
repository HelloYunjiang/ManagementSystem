<template>
  <div>
    <el-card>
      <div slot="header">
        <span>分类数据列表</span>
        <el-button style="float: right">添加分类</el-button>
      </div>
      <div>
        <el-table :data="tableData" border highlight-current-row>
          <el-table-column
            type="index"
            label="编号"
            width="100"
          ></el-table-column>
          <el-table-column prop="brand" label="品牌名称"> </el-table-column>
          <el-table-column prop="country" label="所属国家">
          </el-table-column>
          <el-table-column prop="grade" label="用户喜爱程度"> </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.$index, tableData)"
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
  name: "BrandManagement",
  data() {
    return {
      tableData: [
        {
          brand: "华为",
          country: "中国",
          grade: "♥♥♥♥♥♥♥♥",
        },
        {
          brand: "苹果",
          country: "美国",
          grade: "♥♥♥♥♥♥",
        },
        {
          brand: "小米",
          country: "中国",
          grade: "♥♥♥♥♥",
        },
        {
          brand: "三星",
          country: "韩国",
          grade: "♥♥♥♥",
        },
      ],
    };
  },
};
</script>
<style scoped>

</style>