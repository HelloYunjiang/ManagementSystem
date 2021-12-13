<template>
  <div>
    <!-- 搜索区 -->
    <el-card class="box-card">
      <div class="form-box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
        >
          <el-form-item label="商品分类" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择商品分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品类型" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品品牌" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择商品品牌">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生产厂家" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="销售渠道" prop="region1">
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button
                v-for="city in cities"
                :label="city"
                :key="city"
                >{{ city }}</el-checkbox-button
              >
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="进货价格" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="进货数量" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="零售价格" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="100px">
          <el-form-item label="商品备注" prop="name">
            <el-input
              v-model="textarea"
              type="textarea"
              placeholder="请输入备注"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
const cityOptions = ["淘宝", "天猫", "京东", "拼多多"];
export default {
  name: "AddGoods",
  data() {
    return {
      checkboxGroup1: ["上海"],
      cities: cityOptions,
      // 文本域
      textarea: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.box-card {
  position: relative;
  width: 100%;
  height: 89vh;
  margin-bottom: 10px;
}
.form-box {
  position: absolute;
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>