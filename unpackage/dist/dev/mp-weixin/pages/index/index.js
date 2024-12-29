"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      slides: [
        {
          url: "https://jiaoderenshi.netlify.app",
          image: "/static/images/角的认识.jpg"
        },
        {
          url: "https://sanjiaoxingderenshi.netlify.app",
          image: "/static/images/三角形的认识.jpg"
        },
        {
          url: "https://dianxiansiwei.netlify.app",
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
  methods: {
    openWebView(url) {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
      });
    },
    onSwiperChange(e) {
      this.current = e.detail.current;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.slides, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.o(($event) => $options.openWebView(item.url), index),
        c: $data.current === index ? 1 : "",
        d: index
      };
    }),
    b: common_vendor.o((...args) => $options.onSwiperChange && $options.onSwiperChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
