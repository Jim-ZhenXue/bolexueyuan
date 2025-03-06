"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      projectInfo: {
        name: "分数配对游戏",
        version: "1.0.0",
        lastUpdated: "2025-03-06",
        fractionTypes: ["数字分数", "块状分数", "圆形分数"],
        tiltRange: { min: -5, max: 5 },
        animationDuration: 1e3
      }
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
    a: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-963e0762"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/fenshupeidui/fenshupeidui.js.map
