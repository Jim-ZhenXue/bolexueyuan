<template>
	<view class="splash-container" @click="enterApp">
		<image :src="splashImage" mode="aspectFill" class="splash-image"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			splashImage: ''
		}
	},
	onLoad() {
		const images = ['/static/images/1.jpg', '/static/images/2.jpg', '/static/images/3.jpg'];
		const randomIndex = Math.floor(Math.random() * images.length);
		this.splashImage = images[randomIndex];
	},
	methods: {
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