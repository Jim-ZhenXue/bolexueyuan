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
          image: "/static/images/角的认识.png",
          title: "角的认识",
          info: "通过互动方式学习角的基本概念和性质",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://msanjiaoxingderenshi.netlify.app",
          image: "/static/images/三角形的认识.png",
          title: "三角形的认识",
          info: "探索三角形的特性和分类",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://mdianxiansiwei.netlify.app",
          image: "/static/images/点线思维.png",
          title: "点线思维",
          info: "学习点和线的基本概念",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://msibianxingderenshi.netlify.app",
          image: "/static/images/四边形的认识.png",
          title: "四边形的认识",
          info: "了解各种四边形的特征",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://mxianjiaomiansiwei.netlify.app",
          image: "/static/images/线角面思维.png",
          title: "线角面思维",
          info: "深入理解几何中的线、角、面概念",
          favorite: false,
          showInfo: false
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
    },
    toggleFavorite(index) {
      this.items[index].favorite = !this.items[index].favorite;
    },
    showInfo(index) {
      const item = this.items[index];
      const info = {
        title: item.title,
        info: item.info,
        image: item.image
      };
      common_vendor.index.navigateTo({
        url: `/pages/info/info?info=${encodeURIComponent(JSON.stringify(info))}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.navigateToCopyright && $options.navigateToCopyright(...args)),
    c: $data.statusBarHeight + "px",
    d: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.favorite ? "♥" : "♡"),
        d: common_vendor.o(($event) => $options.toggleFavorite(index), index),
        e: common_vendor.o(($event) => $options.showInfo(index), index),
        f: common_vendor.o(($event) => $options.openWebView(item.url), index),
        g: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
