"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: "",
      webviewStyles: {
        progress: {
          color: "#FF2442"
        }
      }
    };
  },
  onLoad(options) {
    if (options.url) {
      this.url = decodeURIComponent(options.url);
      this.refreshTimer = setInterval(() => {
        this.refreshWebview();
      }, 3e3);
    }
  },
  onUnload() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  },
  methods: {
    refreshWebview() {
      const timestamp = (/* @__PURE__ */ new Date()).getTime();
      const separator = this.url.includes("?") ? "&" : "?";
      this.url = `${this.url}${separator}t=${timestamp}`;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url,
    b: $data.webviewStyles
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
