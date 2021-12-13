<template>
  <div>
    <el-card>
      <div class="form-box">
        <el-form :model="ruleForm" label-width="160px">
          <el-form-item label="秒杀订单存活时间：" prop="name">
            <el-input placeholder="请输入时间" v-model="ruleForm.name">
              <template slot="append">分</template>
            </el-input>
            <span>超时未付款，订单自动关闭</span>
          </el-form-item>
          <el-form-item label="常规订单存活时间：" prop="name">
            <el-input placeholder="请输入时间" v-model="ruleForm.name">
              <template slot="append">分</template>
            </el-input>
            <span>超时未付款，订单自动关闭</span>
          </el-form-item>
          <el-form-item label="订单发货时间：" prop="name">
            <el-input placeholder="请输入时间" v-model="ruleForm.name">
              <template slot="append">天</template>
            </el-input>
            <span>超时未收货，订单自动完成</span>
          </el-form-item>
          <el-form-item label="订单完成时间：" prop="name">
            <el-input placeholder="请输入时间" v-model="ruleForm.name">
              <template slot="append">天</template>
            </el-input>
            <span>自动交易结束</span>
          </el-form-item>
          <el-form-item label="订单完成时间：" prop="name">
            <el-input placeholder="请输入时间" v-model="ruleForm.name">
              <template slot="append">天</template>
            </el-input>
            <span>自动五星好评</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleForm)"
              >完成</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "OrderSetting",
  data() {
    return {
      input2: "12321",
      ruleForm: {
        name: "1232122",
      },
    };
  },
  methods: {
    submitForm(ruleForm) {
      alert(ruleForm.name + " submit success");
    },
  },
};
</script>
<style scoped>
.el-card {
  position: relative;
  width: 100%;
  height: 89vh;
  margin-bottom: 10px;
}
.el-form {
  position: absolute;
  width: 28%;
  min-width: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
span {
  color: red;
}
</style>