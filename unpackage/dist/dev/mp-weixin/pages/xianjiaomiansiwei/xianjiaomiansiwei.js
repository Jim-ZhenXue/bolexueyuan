"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-18b62e8f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/xianjiaomiansiwei/xianjiaomiansiwei.js.map
