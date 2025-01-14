<template>
	<view class="splash-container" @click="enterApp">
		<view v-if="showMessage" class="top-left-text">
			<text class="char" style="transform: rotate(-15deg);">多</text>
			<text class="char" style="transform: rotate(-5deg);">元</text>
			<text class="char" style="transform: rotate(5deg);">智</text>
			<text class="char" style="transform: rotate(15deg);">能</text>
			<text class="char" style="transform: rotate(25deg);">思</text>
			<text class="char" style="transform: rotate(-5deg);">维</text>
		</view>
		<image :src="splashImage" mode="aspectFill" class="splash-image"></image>
		<view v-if="showMessage" class="enter-message">＞ 点击屏幕进入游戏 ＜</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			splashImage: '',
			images: ['/static/images/1.jpg', '/static/images/2.jpg', '/static/images/3.jpg', '/static/images/4.jpg', '/static/images/5.jpg'],
			showMessage: false
		}
	},
	onShow() {
		this.selectRandomImage();
		this.preloadIndexResources();
		setTimeout(() => {
			this.showMessage = true;
		}, 3000);
	},
	methods: {
		selectRandomImage() {
			const randomIndex = Math.floor(Math.random() * this.images.length);
			console.log('Selected image index:', randomIndex);
			this.splashImage = this.images[randomIndex];
		},
		preloadIndexResources() {
			// Example: Preload data or resources for index.vue
			console.log('Preloading index.vue resources...');
			// Add actual preload logic here
		},
		enterApp() {
			uni.reLaunch({
				url: '/pages/index/index'
			});
		}
	}
}
</script>

<style>
@keyframes fadeInOut {
	0%, 30%, 100% { opacity: 0; }
	40%, 90% { opacity: 1; }
}

.splash-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
}

.splash-image {
	width: 100%;
	height: 100%;
}

.top-left-text {
	position: absolute;
	top: 10px;
	left: 10px;
	color: white;
	font-size: 50px;
	font-weight: bold;
	text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8), 4px 4px 0 rgba(0, 0, 0, 0.6), 6px 6px 0 rgba(0, 0, 0, 0.4);
	display: flex;
	animation: fadeInOut 9s ease-in-out infinite;
}

.char {
	margin: 0 2px;
}

.enter-message {
	position: absolute;
	bottom: 20%;
	width: 100%;
	text-align: center;
	color: white;
	font-size: 24px;
	background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
	padding: 10px 0;
	animation: fadeInOut 9s ease-in-out infinite;
}
</style> 