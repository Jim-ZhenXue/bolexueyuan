<template>
	<view class="container">
		<view class="content">
			<view class="title">隐私政策</view>
			<view class="section">
				<view class="section-title">1. 信息收集</view>
				<view class="text">
					我们收集的信息包括但不限于：您的微信账号信息、使用记录等。我们承诺对这些信息进行严格保密和安全保护。
				</view>
			</view>
			<view class="section">
				<view class="section-title">2. 信息使用</view>
				<view class="text">
					收集到的信息将用于：提供和改进服务、个性化用户体验、发送服务通知等。未经您的同意，我们不会向第三方分享您的个人信息。
				</view>
			</view>
			<view class="section">
				<view class="section-title">3. 信息安全</view>
				<view class="text">
					我们采用业界标准的安全技术和程序来保护您的个人信息，防止未经授权的访问、使用或泄露。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		}
	}
}
</script>

<style>
.container {
	padding: 20px;
}

.content {
	background-color: #fff;
	border-radius: 8px;
	padding: 15px;
}

.title {
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
}

.section {
	margin-bottom: 20px;
}

.section-title {
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 10px;
}

.text {
	font-size: 14px;
	line-height: 1.6;
	color: #333;
}
</style>
