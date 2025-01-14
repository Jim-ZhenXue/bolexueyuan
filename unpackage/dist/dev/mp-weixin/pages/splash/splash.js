"use strict";
const common_vendor = require("../../common/vendor.js");
const DigitalRain = () => "../../components/DigitalRain.js";
const _sfc_main = {
  components: {
    DigitalRain
  },
  data() {
    return {
      splashImage: "",
      images: ["/static/images/1.jpg", "/static/images/2.jpg", "/static/images/3.jpg", "/static/images/4.jpg", "/static/images/5.jpg"],
      showMessage: false,
      showDigitalRain: false
    };
  },
  onShow() {
    this.selectRandomBackground();
    this.preloadIndexResources();
    setTimeout(() => {
      this.showMessage = true;
    }, 3e3);
  },
  methods: {
    selectRandomBackground() {
      const useDigitalRain = Math.random() < 0.5;
      if (useDigitalRain) {
        this.showDigitalRain = true;
        this.splashImage = "";
      } else {
        this.showDigitalRain = false;
        const randomIndex = Math.floor(Math.random() * this.images.length);
        common_vendor.index.__f__("log", "at pages/splash/splash.vue:54", "Selected image index:", randomIndex);
        this.splashImage = this.images[randomIndex];
      }
    },
    preloadIndexResources() {
      common_vendor.index.__f__("log", "at pages/splash/splash.vue:60", "Preloading index.vue resources...");
    },
    enterApp() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
  }
};
if (!Array) {
  const _component_digital_rain = common_vendor.resolveComponent("digital-rain");
  _component_digital_rain();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showDigitalRain
  }, $data.showDigitalRain ? {} : {
    b: $data.splashImage
  }, {
    c: $data.showMessage
  }, $data.showMessage ? {} : {}, {
    d: common_vendor.o((...args) => $options.enterApp && $options.enterApp(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/splash/splash.js.map
