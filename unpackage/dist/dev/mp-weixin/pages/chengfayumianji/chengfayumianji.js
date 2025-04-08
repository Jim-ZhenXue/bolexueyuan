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
          description: "通过具体的数学模型，培养学生的数学推理和计算能力：",
          features: [
            "直观展示乘法的面积模型",
            "通过数字和网格的对应关系加深乘法理解",
            "培养数量关系的空间表征能力",
            "为代数思维打下基础"
          ]
        },
        {
          title: "视觉-空间智能",
          icon: "fas fa-eye",
          description: "利用直观的网格表示强化空间认知：",
          features: [
            "将抽象数字转化为可视化面积",
            "利用颜色区分不同元素和区域",
            "通过网格数量直观呈现乘法结果",
            "空间关系的理解促进数学概念建构"
          ]
        },
        {
          title: "身体-运动智能",
          icon: "fas fa-hand-pointer",
          description: "通过拖动和操作强化感知运动协调：",
          features: [
            "拖动红色圆点改变面积大小",
            "通过箭头按钮调整乘数和被乘数",
            "触摸互动增强手眼协调能力",
            "通过主动操作体验乘法变化过程"
          ]
        },
        {
          title: "人际智能",
          icon: "fas fa-users",
          description: "促进协作学习和交流：",
          features: [
            "讨论不同因数组合产生的面积变化",
            "合作探索乘法规律和性质",
            "分享发现和解题策略",
            "培养数学表达和沟通能力"
          ]
        },
        {
          title: "内省智能",
          icon: "fas fa-brain",
          description: "帮助学生反思自己的学习过程：",
          features: [
            "通过预测结果培养数学直觉",
            "对乘法模式进行深度思考",
            "建立数与形的内在联系",
            "发展元认知和自我评估能力"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13ffc011"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chengfayumianji/chengfayumianji.js.map
