<template>
	<view class="splash-container" @click="enterApp">
		<!-- <view v-if="showMessage" class="top-left-text">
			<text class="char" style="transform: rotate(-15deg); color: #4B0082;">多</text>
			<text class="char" style="transform: rotate(-5deg); color: #0000FF;">元</text>
			<text class="char" style="transform: rotate(5deg); color: #00FF00;">智</text>
			<text class="char" style="transform: rotate(15deg); color: #FFFF00;">能</text>
			<text class="char" style="transform: rotate(25deg); color: #FF7F00;">思</text>
			<text class="char" style="transform: rotate(-5deg); color: #FF0000;">维</text>
		</view> -->
		<template v-if="showDigitalRain">
			<digital-rain></digital-rain>
		</template>
		<template v-else>
			<image :src="splashImage" mode="aspectFill" class="splash-image"></image>
		</template>
		<view v-if="showMessage" class="enter-message">＞ 点击屏幕进入 ＜</view>
	</view>
</template>

<script>
import DigitalRain from '@/components/DigitalRain.vue'

export default {
	components: {
		DigitalRain
	},
	data() {
		return {
			splashImage: '',
			images: [
				'https://www.javascriptx.fun:3000/api/image/1.jpg',
				'https://www.javascriptx.fun:3000/api/image/2.jpg',
				'https://www.javascriptx.fun:3000/api/image/3.jpg',
				'https://www.javascriptx.fun:3000/api/image/4.jpg',
				'https://www.javascriptx.fun:3000/api/image/5.jpg'
			],
			showMessage: false,
			showDigitalRain: false,
			imageCache: new Map()
		}
	},
	onShow() {
		this.selectRandomBackground();
		this.preloadIndexResources();
		setTimeout(() => {
			this.showMessage = true;
		}, 3000);
	},
	methods: {
		async fetchImage(imageUrl) {
			if (this.imageCache.has(imageUrl)) {
				return this.imageCache.get(imageUrl);
			}
			
			try {
				const response = await new Promise((resolve, reject) => {
					uni.request({
						url: imageUrl,
						responseType: 'arraybuffer',
						success: (res) => {
							resolve(res);
						},
						fail: (err) => {
							reject(err);
						}
					});
				});
				
				if (!response || response.statusCode !== 200) {
					throw new Error('Image not found');
				}
				
				const base64 = uni.arrayBufferToBase64(response.data);
				const finalUrl = `data:image/jpeg;base64,${base64}`;
				this.imageCache.set(imageUrl, finalUrl);
				return finalUrl;
			} catch (error) {
				console.error('Error fetching image:', error);
				this.showDigitalRain = true;
				return '';
			}
		},
		async selectRandomBackground() {
			// 增加一个数字雨的概率
			const useDigitalRain = Math.random() < 0.5; // 20%的概率显示数字雨
			
			if (useDigitalRain) {
				this.showDigitalRain = true;
				this.splashImage = '';
			} else {
				this.showDigitalRain = false;
				const randomIndex = Math.floor(Math.random() * this.images.length);
				console.log('Selected image index:', randomIndex);
				const imageUrl = this.images[randomIndex];
				const fetchedImage = await this.fetchImage(imageUrl);
				if (fetchedImage) {
					this.splashImage = fetchedImage;
				}
			}
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
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.top-left-text {
	position: fixed;
	top: 10px;
	left: 10px;
	z-index: 100;
	display: flex;
	gap: 5px;
	animation: fadeInOut 6s ease-in-out infinite;
}

.char {
	font-size: 50px;
	font-weight: bold;
	text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8), 4px 4px 0 rgba(0, 0, 0, 0.6), 6px 6px 0 rgba(0, 0, 0, 0.4);
	margin: 0 2px;
}

.enter-message {
	position: fixed;
	bottom: 20%;
	left: 0;
	width: 100%;
	text-align: center;
	color: white;
	font-size: 20px;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	z-index: 100;
	padding: 10px 0;
	animation: fadeInOut 6s ease-in-out infinite;
}
</style>