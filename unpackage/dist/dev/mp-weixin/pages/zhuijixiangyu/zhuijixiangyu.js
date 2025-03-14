"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProjectDescription",
  data() {
    return {
      intelligences: [
        {
          title: "逻辑-数学智能",
          icon: "fas fa-calculator",
          description: "通过具体的数学问题，培养学生的数学推理和分析能力：",
          features: [
            "互动式探索速度、距离和时间关系",
            "通过参数调整观察数值变化规律",
            "培养数学模型思维和问题求解能力",
            "锻炼预测结果和验证假设的能力"
          ]
        },
        {
          title: "视觉-空间智能",
          icon: "fas fa-eye",
          description: "利用直观的可视化表示强化空间认知：",
          features: [
            "动态图形展示抽象数学概念",
            "利用色彩区分不同元素",
            "空间位置变化直观呈现速度差异",
            "通过视觉反馈增强空间推理能力"
          ]
        },
        {
          title: "身体-运动智能",
          icon: "fas fa-running",
          description: "通过操作和互动强化感知运动协调：",
          features: [
            "通过滑块调整参数培养精细运动技能",
            "触摸互动增强手眼协调能力",
            "通过主动操作体验速度和位移概念",
            "利用物理动作辅助理解抽象概念"
          ]
        },
        {
          title: "人际智能",
          icon: "fas fa-users",
          description: "促进协作学习和交流：",
          features: [
            "小组讨论预测结果和分析现象",
            "共同探索不同参数组合的效果",
            "分享发现和解决方案",
            "培养表达数学思维的能力"
          ]
        },
        {
          title: "内省智能",
          icon: "fas fa-brain",
          description: "帮助学生反思自己的学习过程：",
          features: [
            "鼓励学生自我提问和思考",
            "通过试错培养元认知技能",
            "建立数学概念的深层理解",
            "提高自主学习和问题解决的能力"
          ]
        }
      ]
    };
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    b: common_vendor.f($data.intelligences, (intel, index, i0) => {
      return {
        a: common_vendor.n(intel.icon),
        b: common_vendor.t(intel.title),
        c: common_vendor.t(intel.description),
        d: common_vendor.f(intel.features, (feature, i, i1) => {
          return {
            a: common_vendor.t(feature),
            b: i
          };
        }),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc45a3a7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/zhuijixiangyu/zhuijixiangyu.js.map
