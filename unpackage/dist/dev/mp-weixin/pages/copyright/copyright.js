"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      touchStartX: 0
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    this.statusBarHeight = sysInfo.statusBarHeight;
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    handleImageError(e) {
      common_vendor.index.__f__("error", "at pages/copyright/copyright.vue:48", "Image load error:", e);
      common_vendor.index.showToast({
        title: "图片加载失败",
        icon: "none"
      });
    },
    handleImageLoad() {
      common_vendor.index.__f__("log", "at pages/copyright/copyright.vue:55", "Image loaded successfully");
    },
    touchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    touchEnd(e) {
      const touchEndX = e.changedTouches[0].clientX;
      const moveDistance = touchEndX - this.touchStartX;
      if (moveDistance > 50) {
        this.goBack();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    c: $data.statusBarHeight + "px",
    d: common_assets._imports_1,
    e: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    f: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/copyright/copyright.js.map
