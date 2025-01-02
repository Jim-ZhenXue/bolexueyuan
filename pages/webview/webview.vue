<template>
	<view>
		<web-view :src="url" :webview-styles="webviewStyles"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				webviewStyles: {
					progress: {
						color: '#FF2442'
					}
				}
			}
		},
		onLoad(options) {
			if (options.url) {
				this.url = decodeURIComponent(options.url);
				// 设置定时器，每3秒刷新一次页面
				this.refreshTimer = setInterval(() => {
					this.refreshWebview();
				}, 3000);
			}
		},
		onUnload() {
			// 清除定时器
			if (this.refreshTimer) {
				clearInterval(this.refreshTimer);
			}
		},
		methods: {
			refreshWebview() {
				// 添加时间戳参数来强制刷新缓存
				const timestamp = new Date().getTime();
				const separator = this.url.includes('?') ? '&' : '?';
				this.url = `${this.url}${separator}t=${timestamp}`;
			}
		}
	}
</script>

<style>
</style> 