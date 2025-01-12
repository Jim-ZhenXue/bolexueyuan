<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="nav-bar">
				<view class="back-btn" @click="goBack">
					<text class="back-icon">〈</text>
				</view>
				<image class="nav-logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
			</view>
		</view>
		
		<view class="content">
			<text class="app-name">多元智能思维 1.0.0</text>
			
			<view class="info-section">
				<text class="section-title">链接生涯教育科技有限公司伯乐学院 出品</text>
				<text class="description">思维训练，适应个体的知识加工模式</text>
			</view>
			
			<view class="info-section">
				<text class="section-title">联系我们</text>
				<text class="contact-item">微信：xuezhenscript</text>
				<text class="contact-item">地址：上海市杨浦区丰达商务广场8号楼810室</text>
			</view>
			
			<view class="copyright-text">
				<text>© 2025 LinkCareer. All Rights Reserved</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0
		}
	},
	onLoad() {
		const sysInfo = uni.getSystemInfoSync();
		this.statusBarHeight = sysInfo.statusBarHeight;
	},
	methods: {
		goBack() {
			uni.navigateBack();
		}
	}
}
</script>

<style>
@font-face {
	font-family: "iconfont";
	src: url('data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAKcAAsAAAAABlAAAAJPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACCcApcdgE2AiQDCAsGAAQgBYRnBzYbpQXIHpIkBQQKEABBBNk/H7t7X0iCJNWrR4gQhUThUCxULBYj4uG/9ev9mZn7RZNokSSaRBKNRIJEiJBIEBohQWg0XqK5vwKtgYHhKhx4UZwWGmh8kJwc6qjqpXoVhbpxuwRwgDzA+vN5+0NPk0wSQgPxf46ZLj0B+YHOMUcZ2hjvDeiNAQU6x6AoEiuQxA1jF7zAxxCgkU8Rod2ZvUcoZMxUgG5drg6FwqJQyMyVQrFiYQ4zVarSVOoC4EP4fvyHhUJBUmVm7uXOLQ1s/EZ/M+tGRQQB4RQQYBmQiJuVpgOKILpFo0U+qhYDX1XD36wqigX7VXvWBrCPVWR+PFUNkEMqsDvLy0DbhavqfDtV3b+8d/vl/cP1+9Hc3aPt+6ebL0+jfo8vbtwzp5LxkZGvXPtv377/9u3Xl3u/f/z8NjXc7Grg+s2+gcN7J2xvhZ2XAU4XAQD/zzO3AC75v0w7APDjnxgAeNWPvwA+VvyKP5h1qWJmXSxQKGWRiVWmQqWadVCoNYNG1fK7a7XiESQyAhZ8EQh6+ULS2Q9KvfyRif2HSjP8oVAfJTTaE+nKWq0EcsgRbIH+QBzkOM0tL5K9oXyeknJfkXlBEsYjquKCG3JGPGafscSJQo5jA16Cc6jrHFjKC1TrNSg3VxJ9nFJvKYuD3EGOgFqA9gHCgjgcLS88n98bJC9XScruNyTGE0TCjIdocbyCVZpVxXh9njKJRkTi4WgG2AJyHNJxHGCRj1CKqj4NSdNWknipR0l6K4X1+WXGZ24ANPI5ZYgUOUpUUaPVrKO8Zp1mjpzJEgAAAAA=') format('woff2');
}

.container {
	min-height: 100vh;
	background-color: #000000;
}

.header {
	background: #000000;
}

.nav-bar {
	height: 44rpx;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
}

.nav-logo {
	width: 40rpx;
	height: 40rpx;
	filter: drop-shadow(0 0 5rpx rgba(76, 175, 80, 0.3));
}

.back-btn {
	position: absolute;
	left: 0;
	height: 44rpx;
	width: 44rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.back-icon {
	font-size: 19rpx;
	color: #FFFFFF;
	font-weight: normal;
	transform: scale(1.3, 1);
}

.title {
	width: 100%;
	text-align: center;
	font-size: 18rpx;
	font-weight: 600;
	color: #ffffff;
	background: linear-gradient(45deg, #FFFFFF, #2196F3);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.content {
	padding: 15rpx 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #000000;
}

.logo {
	width: 160rpx;
	height: 160rpx;
	margin-bottom: 30rpx;
	filter: drop-shadow(0 0 10rpx rgba(76, 175, 80, 0.3));
}

.app-name {
	font-size: 20rpx;
	font-weight: 600;
	color: #E0E0E0;
	margin-bottom: 4rpx;
	text-shadow: 0 0 5rpx rgba(9, 143, 242, 0.3);
}

.version {
	font-size: 14rpx;
	color: #E0E0E0;
	margin-bottom: 15rpx;
}

.info-section {
	width: calc(100% - 100rpx);
	margin: 0 50rpx 12rpx 50rpx;
	background: rgba(255, 255, 255, 0.05);
	padding: 12rpx;
	border-radius: 10rpx;
	border: 1rpx solid rgba(255, 255, 255, 0.2);
}

.section-title {
	font-size: 16rpx;
	font-weight: 600;
	color: #E0E0E0;
	margin-bottom: 6rpx;
	display: block;
}

.description {
	font-size: 14rpx;
	color: #E0E0E0;
	line-height: 1.6;
	display: block;
}

.contact-item {
	font-size: 14rpx;
	color: #E0E0E0;
	line-height: 1.8;
	display: block;
}

.copyright-text {
	margin-top: 0;
	text-align: center;
}

.copyright-text text {
	font-size: 12rpx;
	color: #757575;
	display: block;
	line-height: 1.6;
}
</style> 