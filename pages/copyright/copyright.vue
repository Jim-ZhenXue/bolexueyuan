<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="nav-bar">
				<view class="back-btn" @click="goBack">
					<text class="back-icon">&#xe600;</text>
				</view>
				<text class="title">关于我们</text>
			</view>
		</view>
		
		<view class="content">
			<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
			<text class="app-name">多元思维</text>
			<text class="version">Version 1.0.0</text>
			
			<view class="info-section">
				<text class="section-title">简介</text>
				<text class="description">多元思维，是由链接生涯教育科技有限公司伯乐学院推出的数字化产品，致力于提供优质的思维训练。我们运用现代科技手段，让知识变得更加有趣和高效。</text>
			</view>
			
			<view class="info-section">
				<text class="section-title">联系我们</text>
				<text class="contact-item">邮箱：contact@linkcareer.com</text>
				<text class="contact-item">地址：上海市杨浦区丰达商务广场8号楼810室</text>
			</view>
			
			<view class="copyright-text">
				<text>© 2024 LinkCareer</text>
				<text>All Rights Reserved</text>
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
	background-color: #FFFFFF;
}

.header {
	background: #FFFFFF;
}

.nav-bar {
	height: 88rpx;
	display: flex;
	align-items: center;
	position: relative;
}

.back-btn {
	position: absolute;
	left: 30rpx;
	height: 88rpx;
	display: flex;
	align-items: center;
}

.back-icon {
	font-family: "iconfont";
	font-size: 36rpx;
	color: #333333;
}

.title {
	width: 100%;
	text-align: center;
	font-size: 36rpx;
	font-weight: 600;
	color: #333333;
}

.content {
	padding: 60rpx 40rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.logo {
	width: 160rpx;
	height: 160rpx;
	margin-bottom: 30rpx;
}

.app-name {
	font-size: 40rpx;
	font-weight: 600;
	color: #333333;
	margin-bottom: 16rpx;
}

.version {
	font-size: 28rpx;
	color: #999999;
	margin-bottom: 60rpx;
}

.info-section {
	width: 100%;
	margin-bottom: 40rpx;
}

.section-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #333333;
	margin-bottom: 20rpx;
	display: block;
}

.description {
	font-size: 28rpx;
	color: #666666;
	line-height: 1.6;
	display: block;
}

.contact-item {
	font-size: 28rpx;
	color: #666666;
	line-height: 1.8;
	display: block;
}

.copyright-text {
	margin-top: 80rpx;
	text-align: center;
}

.copyright-text text {
	font-size: 24rpx;
	color: #999999;
	display: block;
	line-height: 1.6;
}
</style> 