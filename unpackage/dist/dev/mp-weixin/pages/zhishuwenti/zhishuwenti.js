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
          description: "通过具体的数学模型，培养学生的空间推理和计算能力：",
          features: [
            "直观展示等距种植的数学原理",
            "通过数字和视觉的对应关系加深距离概念理解",
            "培养空间关系的数学表征能力",
            "为几何思维打下基础"
          ]
        },
        {
          title: "视觉-空间智能",
          icon: "fas fa-eye",
          description: "利用直观的空间表示强化空间认知：",
          features: [
            "将抽象的距离概念转化为可视化表示",
            "通过线性和环形两种模式对比不同空间布局",
            "利用颜色和形状区分不同元素",
            "空间关系的理解促进数学概念建构"
          ]
        },
        {
          title: "身体-运动智能",
          icon: "fas fa-hand-pointer",
          description: "通过交互操作强化感知运动协调：",
          features: [
            "拖动滑块调整总距离",
            "通过按钮添加或删除树木",
            "切换不同种植模式体验空间变化",
            "通过主动操作体验数学关系变化过程"
          ]
        },
        {
          title: "人际智能",
          icon: "fas fa-users",
          description: "促进协作学习和交流：",
          features: [
            "讨论不同树木数量和距离组合的关系",
            "合作探索线性和环形种植的异同",
            "分享发现和解题策略",
            "培养数学表达和沟通能力"
          ]
        },
        {
          title: "内省智能",
          icon: "fas fa-brain",
          description: "帮助学生反思自己的学习过程：",
          features: [
            "通过预测结果培养空间直觉",
            "对种植模式进行深度思考",
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b1439e4a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/zhishuwenti/zhishuwenti.js.map
