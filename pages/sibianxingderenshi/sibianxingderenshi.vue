<template>
	<view class="detail-container">
		<view class="top-bar" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="back-button" @click="goBack">
				<text class="back-icon">←</text>
			</view>
			<text class="page-title">四边形的认识</text>
		</view>
		<view class="content">
			<image src="/static/images/四边形的认识.png" mode="aspectFit" class="detail-image"></image>
			<view class="detail-content">
				<text class="description">了解各种四边形的特征</text>
				<view class="features">
					<text class="feature-item">• 认识四边形的基本要素：边、角、对角线</text>
					<text class="feature-item">• 学习特殊四边形：平行四边形、矩形、正方形、梯形</text>
					<text class="feature-item">• 理解四边形的性质和特征</text>
					<text class="feature-item">• 探索四边形在生活中的应用</text>
				</view>
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
.detail-container {
	flex: 1;
	background-color: #ffffff;
	min-height: 100vh;
}

.top-bar {
	background-color: #ffffff;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}

.back-button {
	padding: 5px 10px;
}

.back-icon {
	font-size: 24px;
	color: #333;
}

.page-title {
	flex: 1;
	text-align: center;
	font-size: 18px;
	margin-right: 40px;
	color: #333;
}

.content {
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.detail-image {
	width: 200px;
	height: 150px;
	margin-bottom: 30px;
}

.detail-content {
	width: 100%;
	padding: 0 20px;
}

.description {
	font-size: 16px;
	line-height: 1.6;
	color: #666;
	text-align: center;
	margin-bottom: 30px;
}

.features {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.feature-item {
	font-size: 14px;
	color: #333;
	line-height: 1.4;
}
</style> 