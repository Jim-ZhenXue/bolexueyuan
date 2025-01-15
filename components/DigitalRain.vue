<template>
	<canvas 
		type="2d" 
		id="digitalRain"
		canvas-id="digitalRain"
		:style="{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }"
	></canvas>
</template>

<script>
export default {
	name: 'DigitalRain',
	data() {
		return {
			ctx: null,
			columns: 0,
			drops: [],
			characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			animationInterval: null,
			canvasWidth: 0,
			canvasHeight: 0
		}
	},
	mounted() {
		// 获取系统信息
		const systemInfo = uni.getSystemInfoSync();
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
				// 获取canvas上下文
				const query = uni.createSelectorQuery().in(this);
				query.select('#digitalRain')
					.fields({ node: true, size: true })
					.exec((res) => {
						const canvas = res[0].node;
						const ctx = canvas.getContext('2d');
						
						canvas.width = this.canvasWidth;
						canvas.height = this.canvasHeight;
						
						this.ctx = ctx;
						// 减小字符间距，增加列数
						this.columns = Math.floor(this.canvasWidth / 12) + 1;
						
						// 初始化drops数组
						this.drops = [];
						for (let i = 0; i < this.columns; i++) {
							this.drops.push(Math.floor(Math.random() * this.canvasHeight / 12));
						}
						
						this.startAnimation();
					});
			} catch (error) {
				console.error('Canvas initialization error:', error);
			}
		},
		draw() {
			if (!this.ctx) return;
			
			this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // 调整透明度使拖尾效果更明显
			this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
			
			this.ctx.fillStyle = '#0F0';
			this.ctx.font = '10px monospace'; // 减小字体大小
			
			for (let i = 0; i < this.drops.length; i++) {
				const text = this.characters[Math.floor(Math.random() * this.characters.length)];
				const x = i * 12; // 减小字符间距
				const y = this.drops[i] * 12;
				
				// 根据y位置调整透明度，创造渐变效果
				const alpha = (y / this.canvasHeight);
				this.ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
				this.ctx.fillText(text, x, y);
				
				if (y >= this.canvasHeight && Math.random() > 0.95) { // 调整重置概率
					this.drops[i] = 0;
				} else {
					this.drops[i]++;
				}
			}
		},
		startAnimation() {
			this.animationInterval = setInterval(() => {
				this.draw();
			}, 50); // 调整动画速度
		}
	}
}
</script>

<style>
canvas {
	background-color: black;
}
</style>
