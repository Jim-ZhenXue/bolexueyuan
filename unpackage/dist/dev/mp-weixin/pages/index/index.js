"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    openWebView(url) {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o(($event) => $options.openWebView("https://jiaoderenshi.netlify.app")),
    c: common_assets._imports_1,
    d: common_vendor.o(($event) => $options.openWebView("https://sanjiaoxingderenshi.netlify.app")),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => $options.openWebView("https://dianxiansiwei.netlify.app"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
