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
            width="60"
          ></el-table-column>
          <el-table-column prop="category" label="分类名称"> </el-table-column>
          <el-table-column prop="total" label="商品数量"> </el-table-column>
          <el-table-column prop="unit" label="计数单位"> </el-table-column>
          <el-table-column prop="grade" label="客户喜爱程度"> </el-table-column>
          <el-table-column label="操作" width="120" fixed="right">
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
  name: "goodsClassification",
  data() {
    return {
      tableData: [
        {
          category: "服装",
          total:123,
          unit:"件",
          grade: "♥♥♥♥♥",
        },
        {
          category: "电子产品",
          total:123,
          unit:"部",
          grade: "♥♥♥♥♥",
        },
        {
          category: "日用品",
          total:123,
          unit:"个",
          grade: "♥♥♥♥♥",
        },
      ],
    };
  },
  methods: {
    handleClick(index, rows) {
      rows.splice(index, 1);
    },
  },
};
</script>
<style scoped>
</style>