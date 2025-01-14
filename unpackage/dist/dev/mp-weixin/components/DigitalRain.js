"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "DigitalRain",
  data() {
    return {
      ctx: null,
      columns: 0,
      drops: [],
      characters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      animationInterval: null,
      canvasWidth: 0,
      canvasHeight: 0
    };
  },
  mounted() {
    const systemInfo = common_vendor.index.getSystemInfoSync();
    this.canvasWidth = systemInfo.windowWidth;
    this.canvasHeight = systemInfo.windowHeight;
    this.initCanvas();
  },
  beforeDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  },
  methods: {
    async initCanvas() {
      try {
        const query = common_vendor.index.createSelectorQuery().in(this);
        query.select("#digitalRain").fields({ node: true, size: true }).exec((res) => {
          const canvas = res[0].node;
          const ctx = canvas.getContext("2d");
          canvas.width = this.canvasWidth;
          canvas.height = this.canvasHeight;
          this.ctx = ctx;
          this.columns = Math.floor(this.canvasWidth / 12) + 1;
          this.drops = [];
          for (let i = 0; i < this.columns; i++) {
            this.drops.push(Math.floor(Math.random() * this.canvasHeight / 12));
          }
          this.startAnimation();
        });
      } catch (error) {
        common_vendor.index.__f__("error", "at components/DigitalRain.vue:64", "Canvas initialization error:", error);
      }
    },
    draw() {
      if (!this.ctx)
        return;
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.fillStyle = "#0F0";
      this.ctx.font = "10px monospace";
      for (let i = 0; i < this.drops.length; i++) {
        const text = this.characters[Math.floor(Math.random() * this.characters.length)];
        const x = i * 12;
        const y = this.drops[i] * 12;
        const alpha = y / this.canvasHeight;
        this.ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
        this.ctx.fillText(text, x, y);
        if (y >= this.canvasHeight && Math.random() > 0.95) {
          this.drops[i] = 0;
        } else {
          this.drops[i]++;
        }
      }
    },
    startAnimation() {
      this.animationInterval = setInterval(() => {
        this.draw();
      }, 50);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/DigitalRain.js.map
