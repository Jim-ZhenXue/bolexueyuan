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
      images: [
        "https://www.javascriptx.fun:3000/api/image/1.jpg",
        "https://www.javascriptx.fun:3000/api/image/2.jpg",
        "https://www.javascriptx.fun:3000/api/image/3.jpg",
        "https://www.javascriptx.fun:3000/api/image/4.jpg",
        "https://www.javascriptx.fun:3000/api/image/5.jpg"
      ],
      showMessage: false,
      showDigitalRain: false,
      imageCache: /* @__PURE__ */ new Map()
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
    async fetchImage(imageUrl) {
      if (this.imageCache.has(imageUrl)) {
        return this.imageCache.get(imageUrl);
      }
      try {
        const response = await new Promise((resolve, reject) => {
          common_vendor.index.request({
            url: imageUrl,
            responseType: "arraybuffer",
            success: (res) => {
              resolve(res);
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
        if (!response || response.statusCode !== 200) {
          throw new Error("Image not found");
        }
        const base64 = common_vendor.index.arrayBufferToBase64(response.data);
        const finalUrl = `data:image/jpeg;base64,${base64}`;
        this.imageCache.set(imageUrl, finalUrl);
        return finalUrl;
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/splash/splash.vue:79", "Error fetching image:", error);
        this.showDigitalRain = true;
        return "";
      }
    },
    async selectRandomBackground() {
      const useDigitalRain = Math.random() < 0.5;
      if (useDigitalRain) {
        this.showDigitalRain = true;
        this.splashImage = "";
      } else {
        this.showDigitalRain = false;
        const randomIndex = Math.floor(Math.random() * this.images.length);
        common_vendor.index.__f__("log", "at pages/splash/splash.vue:94", "Selected image index:", randomIndex);
        const imageUrl = this.images[randomIndex];
        const fetchedImage = await this.fetchImage(imageUrl);
        if (fetchedImage) {
          this.splashImage = fetchedImage;
        }
      }
    },
    preloadIndexResources() {
      common_vendor.index.__f__("log", "at pages/splash/splash.vue:104", "Preloading index.vue resources...");
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
