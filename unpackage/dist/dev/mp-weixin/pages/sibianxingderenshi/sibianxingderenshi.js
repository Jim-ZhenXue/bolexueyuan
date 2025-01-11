"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "GameGuide",
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3b339e7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/sibianxingderenshi/sibianxingderenshi.js.map
