"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      items: [
        {
          url: "https://mobilejiaoderenshi.netlify.app",
          image: "/static/images/角的认识.jpg"
        },
        {
          url: "https://sanjiaoxingderenshi.netlify.app",
          image: "/static/images/三角形的认识.jpg"
        },
        {
          url: "https://mobiledianxiansiwei.netlify.app",
          image: "/static/images/点线思维.jpg"
        },
        {
          url: "https://sibianxingderenshi.netlify.app",
          image: "/static/images/四边形的认识.jpg"
        },
        {
          url: "https://xianjiaomiansiwei.netlify.app",
          image: "/static/images/线角面思维.jpg"
        }
      ]
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    this.statusBarHeight = sysInfo.statusBarHeight;
  },
  methods: {
    openWebView(url) {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
      });
    },
    navigateToCopyright() {
      common_vendor.index.navigateTo({
        url: "/pages/copyright/copyright"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.navigateToCopyright && $options.navigateToCopyright(...args)),
    c: common_vendor.o((...args) => $options.navigateToCopyright && $options.navigateToCopyright(...args)),
    d: $data.statusBarHeight + "px",
    e: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.image,
        b: index,
        c: common_vendor.o(($event) => $options.openWebView(item.url), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
