<template>
  <div>
    <el-card class="card-header">
      <div slot="header">
        <span>退/换货原因设置</span>
        <el-button class="right-btn" @click="dialogVisible = true">添加退/换货原因</el-button
        >
      </div>
      <div>
        <el-table :data="tableData" border highlight-current-row>
          <el-table-column type="selection" width="40" fixed></el-table-column>
          <el-table-column
            type="index"
            label="编号"
            width="80"
          ></el-table-column>
          <el-table-column prop="reason" label="退货原因"> </el-table-column>
          <el-table-column prop="change" label="换货原因"> </el-table-column>
          <el-table-column label="操作" width="120">
            <template v-slot="scope">
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
    <el-dialog
      title="添加退/换货原因"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :model="formData" ref="formData">
        <span>退货原因：</span><br /><br />
        <el-form-item>
          <el-input type="textarea" v-model="formData.addReason"></el-input>
        </el-form-item>
        <span>换货原因：</span><br /><br />
        <el-form-item>
          <el-input type="textarea" v-model="formData.addChange"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm">重 置</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "ReturnReason",
  data() {
    return {
      dialogVisible: false,
      formData: {
        addReason: "12121321",
        addChange: "1212",
      },
      tableData: [
        {
          reason: "华为",
          change: "中国",
        },
        {
          reason: "华为",
          change: "中国",
        },
        {
          reason: "华为",
          change: "中国",
        },
        {
          reason: "华为",
          change: "中国",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleClick(index, rows) {
      rows.splice(index, 1);
    },
    resetForm() {
      this.formData.addReason = "";
      this.formData.addChange = "";
    },
  },
};
</script>
<style scoped>
.right-btn{
    position: relative;
    left: 83%;
    /* padding: 6px 10px; */
}
.card-header{
  position: relative;
}
</style>