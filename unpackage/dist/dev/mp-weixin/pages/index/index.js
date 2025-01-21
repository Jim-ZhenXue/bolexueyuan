"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      hasUserInfo: false,
      userInfo: null,
      isAgreementChecked: false,
      showLoginModal: false,
      items: [
        {
          url: "https://mobilejiaoderenshi.netlify.app",
          image: "/static/images/角的认识.jpg",
          title: "角的认识",
          info: "通过互动方式学习角的基本概念与性质",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://sanjiaoxingderenshi.netlify.app",
          image: "/static/images/三角形的认识.jpg",
          title: "三角形的认识",
          info: "探索三角形的特性和分类",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://minidianxiansiwei.netlify.app",
          image: "/static/images/点线思维.jpg",
          title: "点线思维",
          info: "学习点和线的基本概念",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://minisibianxingderenshi.netlify.app",
          image: "/static/images/四边形的认识.jpg",
          title: "四边形的认识",
          info: "了解各种四边形的特征",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://minixianjiaomiansiwei.netlify.app",
          image: "/static/images/线角面思维.jpg",
          title: "线角面思维",
          info: "深入理解几何中的线、角、面概念",
          favorite: false,
          showInfo: false
        },
        {
          url: "https://dengshi.netlify.app",
          image: "/static/images/线角面思维.jpg",
          title: "线角面思维",
          info: "深入理解几何中的线、角、面概念",
          favorite: false,
          showInfo: false
        }
      ]
    };
  },
  methods: {
    openWebView(url) {
      if (!this.hasUserInfo) {
        this.showLoginModal = true;
        return;
      }
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
      let pagePath = "";
      switch (item.title) {
        case "角的认识":
          pagePath = "/pages/jiaoderenshi/jiaoderenshi";
          break;
        case "三角形的认识":
          pagePath = "/pages/sanjiaoxingderenshi/sanjiaoxingderenshi";
          break;
        case "点线思维":
          pagePath = "/pages/dianxiansiwei/dianxiansiwei";
          break;
        case "四边形的认识":
          pagePath = "/pages/sibianxingderenshi/sibianxingderenshi";
          break;
        case "线角面思维":
          pagePath = "/pages/xianjiaomiansiwei/xianjiaomiansiwei";
          break;
      }
      common_vendor.index.navigateTo({
        url: pagePath
      });
    },
    handleChange(e) {
      this.currentIndex = e.detail.current;
    },
    handleAgreementChange(e) {
      this.isAgreementChecked = e.detail.value.length > 0;
    },
    openAgreement() {
      common_vendor.index.navigateTo({
        url: "/pages/agreement/agreement"
      });
    },
    openPrivacyPolicy() {
      common_vendor.index.navigateTo({
        url: "/pages/privacy/privacy"
      });
    },
    handleLogin() {
      if (!this.isAgreementChecked) {
        common_vendor.index.showToast({
          title: "请先阅读并同意用户协议",
          icon: "none"
        });
        return;
      }
      common_vendor.index.getUserProfile({
        desc: "用于完善用户资料",
        success: (res) => {
          this.userInfo = res.userInfo;
          this.hasUserInfo = true;
          this.showLoginModal = false;
          common_vendor.index.login({
            provider: "weixin",
            success: (loginRes) => {
              common_vendor.index.__f__("log", "at pages/index/index.vue:201", "登录成功", loginRes.code);
              common_vendor.index.showToast({
                title: "登录成功",
                icon: "success"
              });
            },
            fail: (err) => {
              common_vendor.index.__f__("error", "at pages/index/index.vue:209", "登录失败", err);
              common_vendor.index.showToast({
                title: "登录失败",
                icon: "none"
              });
            }
          });
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/index/index.vue:218", "获取用户信息失败", err);
          common_vendor.index.showToast({
            title: "获取用户信息失败",
            icon: "none"
          });
        }
      });
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    handlePageClick() {
      if (!this.hasUserInfo) {
        this.showLoginModal = true;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.o((...args) => $options.navigateToCopyright && $options.navigateToCopyright(...args)),
    d: common_vendor.f($data.items.slice(0, 5), (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.o(($event) => $options.showInfo(index), index),
        d: common_vendor.t(item.favorite ? "♥" : "♡"),
        e: common_vendor.o(($event) => $options.toggleFavorite(index), index),
        f: common_vendor.o(($event) => $options.openWebView(item.url), index),
        g: index,
        h: common_vendor.n($data.currentIndex === index ? "swiper-item-active" : "")
      };
    }),
    e: common_vendor.o((...args) => $options.handleChange && $options.handleChange(...args)),
    f: $data.showLoginModal
  }, $data.showLoginModal ? {
    g: $data.isAgreementChecked,
    h: common_vendor.o((...args) => $options.openAgreement && $options.openAgreement(...args)),
    i: common_vendor.o((...args) => $options.openPrivacyPolicy && $options.openPrivacyPolicy(...args)),
    j: common_vendor.o((...args) => $options.handleAgreementChange && $options.handleAgreementChange(...args)),
    k: common_vendor.o((...args) => $options.handleLogin && $options.handleLogin(...args))
  } : {}, {
    l: common_vendor.o((...args) => $options.handlePageClick && $options.handlePageClick(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
