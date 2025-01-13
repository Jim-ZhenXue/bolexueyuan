"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      splashImage: "",
      images: ["/static/images/1.jpg", "/static/images/2.jpg", "/static/images/3.jpg"]
    };
  },
  onShow() {
    this.selectRandomImage();
  },
  methods: {
    selectRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      common_vendor.index.__f__("log", "at pages/splash/splash.vue:21", "Selected image index:", randomIndex);
      this.splashImage = this.images[randomIndex];
    },
    enterApp() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.splashImage,
    b: common_vendor.o((...args) => $options.enterApp && $options.enterApp(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/splash/splash.js.map
