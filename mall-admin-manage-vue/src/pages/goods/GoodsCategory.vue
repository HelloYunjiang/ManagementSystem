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
          <el-table-column prop="type" label="商品类型"> </el-table-column>
          <el-table-column prop="belong" label="所属商品分类">
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
  name: "GoodsCategory",
  data() {
    return {
      tableData: [
        {
          type: "手机",
          belong: "电子产品",
          grade: "♥♥♥♥♥",
        },
        {
          type: "衣服",
          belong: "服装",
          grade: "♥♥♥♥",
        },
        {
          type: "电脑",
          belong: "电子产品",
          grade: "♥♥♥♥♥",
        },
        {
          type: "裤子",
          belong: "服装",
          grade: "♥♥♥♥",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>