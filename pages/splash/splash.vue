<template>
	<view class="splash-container" @click="enterApp">
		<image :src="splashImage" mode="aspectFill" class="splash-image"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			splashImage: '',
			images: ['/static/images/1.jpg', '/static/images/2.jpg', '/static/images/3.jpg']
		}
	},
	onShow() {
		this.selectRandomImage();
	},
	methods: {
		selectRandomImage() {
			const randomIndex = Math.floor(Math.random() * this.images.length);
			console.log('Selected image index:', randomIndex);
			this.splashImage = this.images[randomIndex];
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
</style> 