<template>
	<view class="container" @click="handlePageClick">
		<image class="background-image" src="/static/images/背景.jpg" mode="aspectFill"></image>
		<view class="header">
			<view class="title-container" @click="navigateToCopyright">
				<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
			</view>
		</view>
		<swiper class="swiper-container" 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000"
			:duration="300"
			:circular="true" 
			:skip-hidden-item-layout="true"
			previous-margin="150rpx" 
			next-margin="150rpx"
			:display-multiple-items="1"
			@change="handleChange">
			<swiper-item v-for="(item, index) in items" :key="index" 
				:class="['swiper-item', currentIndex === index ? 'swiper-item-active' : '']">
				<view class="swiper-content" @click="openWebView(item.url)">
					<image :src="item.imageUrl || item.image" mode="aspectFit" class="swiper-image"></image>
					<view class="swiper-title">
						<text>{{item.title}}</text>
						<text class="info-icon" @click.stop="showInfo(index)">ⓘ</text>
						<text class="heart-icon" @click.stop="toggleFavorite(index)">{{item.favorite ? '♥' : '♡'}}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="login-modal" v-if="showLoginModal">
			<view class="modal-content">
				<view class="agreement-section">
					<checkbox-group @change="handleAgreementChange" class="checkbox-group">
						<label class="agreement-label">
							<checkbox :checked="isAgreementChecked" style="transform: scale(0.8);" color="#999999" />
							<text class="agreement-text">我已阅读并同意</text>
						</label>
						<view class="agreement-links">
							<text class="agreement-link" @click="openAgreement">《用户协议》</text>
							<text class="agreement-text">、</text>
							<text class="agreement-link" @click="openPrivacyPolicy">《隐私政策》</text>
						</view>
					</checkbox-group>
				</view>
				<button class="login-btn" @click="handleLogin">微信快捷登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				hasUserInfo: false,
				userInfo: null,
				isAgreementChecked: false,
				showLoginModal: false,
				items: [
					{
						url: 'https://mobilejiaoderenshi.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/jiaoderenshi.jpg',
						title: '角的认识',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://sanjiaoxingderenshi.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/sanjiaoxingderenshi.jpg',
						title: '三角形的认识',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minidianxiansiwei.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/dianxiansiwei.jpg',
						title: '点线思维',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minisibianxingderenshi.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/sibianxingderenshi.jpg',
						title: '四边形的认识',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minixianjiaomiansiwei.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/xianjiaomiansiwei.jpg',
						title: '线角面思维',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://xiaoyudengyudayu.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/xiaoyudengyudayu.jpg',
						title: '小于等于大于',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://fenshupeidui.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/fenshupeidui.jpg',
						title: '分数配对',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://zhuijixiangyu.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/zhuijixiangyu.jpg',
						title: '追及相遇',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://chengfayumianji.pages.dev/',
						image: 'https://www.javascriptx.fun:3000/api/image/chengfayumianji.jpg',
						title: '乘法与面积',
						favorite: false,
						showInfo: false
					}
				],
				imageCache: new Map()
			}
		},
		onMounted() {
			// Preload all images
			this.items.forEach(async (item, index) => {
				const imageUrl = await this.fetchImage(item.image);
				this.$set(this.items[index], 'imageUrl', imageUrl);
			});
		},
		onLoad() {
			// 页面加载时检查JWT token
			const token = uni.getStorageSync('jwt_token');
			const tokenExpireTime = uni.getStorageSync('token_expire_time');
			
			// 检查token是否存在且未过期
			if (token && tokenExpireTime) {
				const now = new Date().getTime();
				if (now < tokenExpireTime) {
					// token未过期，验证有效性
					uni.request({
						url: 'https://www.javascriptx.fun:8443/verify_token',
						method: 'POST',
						header: {
							'Authorization': `Bearer ${token}`
						},
						success: (res) => {
							if (res.data.valid) {
								this.hasUserInfo = true;
							} else {
								// token无效，清除存储
								this.clearLoginStatus();
							}
						},
						fail: () => {
							// 验证失败，清除token
							this.clearLoginStatus();
						}
					});
				} else {
					// token已过期，清除存储
					this.clearLoginStatus();
				}
			}
		},
		methods: {
			openWebView(url) {
				if (!this.hasUserInfo) {
					this.showLoginModal = true;
					return;
				}
				// 已登录用户才能打开网页
				uni.navigateTo({
					url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
				});
			},
			
			navigateToCopyright() {
				uni.navigateTo({
					url: '/pages/copyright/copyright'
				})
			},
			
			toggleFavorite(index) {
				this.items[index].favorite = !this.items[index].favorite;
			},
			
			showInfo(index) {
				const item = this.items[index];
				let pagePath = '';
				
				switch(item.title) {
					case '角的认识':
						pagePath = '/pages/jiaoderenshi/jiaoderenshi';
						break;
					case '三角形的认识':
						pagePath = '/pages/sanjiaoxingderenshi/sanjiaoxingderenshi';
						break;
					case '点线思维':
						pagePath = '/pages/dianxiansiwei/dianxiansiwei';
						break;
					case '四边形的认识':
						pagePath = '/pages/sibianxingderenshi/sibianxingderenshi';
						break;
					case '线角面思维':
						pagePath = '/pages/xianjiaomiansiwei/xianjiaomiansiwei';
						break;
					case '小于等于大于':
						pagePath = '/pages/xiaoyudengyudayu/xiaoyudengyudayu';
						break;
					case '分数配对':
						pagePath = '/pages/fenshupeidui/fenshupeidui';
						break;
					case '追及相遇':
						pagePath = '/pages/zhuijixiangyu/zhuijixiangyu';
						break;
				}
				
				uni.navigateTo({
					url: pagePath
				});
			},
			
			handleChange(e) {
				this.currentIndex = e.detail.current;
			},
			handleAgreementChange(e) {
				this.isAgreementChecked = e.detail.value.length > 0;
			},

			openAgreement() {
				uni.navigateTo({
					url: '/pages/agreement/agreement'
				});
			},

			openPrivacyPolicy() {
				uni.navigateTo({
					url: '/pages/privacy/privacy'
				});
			},
			
			handleLogin() {
				if (!this.isAgreementChecked) {
					uni.showToast({
						title: '请先阅读并同意用户协议',
						icon: 'none'
					});
					return;
				}
				
				// 直接获取登录凭证
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						console.log('登录成功', loginRes.code);
						
						// 发送code到后端服务器获取OpenID并保存
						uni.request({
							url: 'https://www.javascriptx.fun:8443/login',
							method: 'POST',
							data: {
								code: loginRes.code,
								login_time: new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-')
							},
							success: (response) => {
								console.log('登录信息已保存到服务器', response.data);
								if (response.data.token) {
									// 计算token过期时间（例如30天后）
									const expireTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
									
									// 保存JWT token和过期时间到本地存储
									uni.setStorageSync('jwt_token', response.data.token);
									uni.setStorageSync('token_expire_time', expireTime);
									
									this.hasUserInfo = true;
									this.showLoginModal = false;
									uni.showToast({
										title: '登录成功',
										icon: 'success'
									});
								} else {
									uni.showToast({
										title: '登录失败，服务器未返回token',
										icon: 'none'
									});
								}
							},
							fail: (error) => {
								console.error('登录信息保存失败', error);
								let errorMessage = '登录失败，请稍后重试';
								
								// 处理不同类型的错误
								if (error.errno === 600002 || error.errMsg.includes('domain list')) {
									errorMessage = '请联系管理员配置服务器域名';
								} else if (error.errMsg.includes('ERR_NAME_NOT_RESOLVED')) {
									errorMessage = '服务器域名无法访问，请检查服务器配置';
								} else if (error.errMsg.includes('ERR_CONNECTION_REFUSED')) {
									errorMessage = '无法连接到服务器，请确认服务器是否正常运行';
								}
								
								uni.showToast({
									title: errorMessage,
									icon: 'none',
									duration: 3000
								});
							}
						});
					},
					fail: (err) => {
						console.error('登录失败', err);
						uni.showToast({
							title: '登录失败',
							icon: 'none'
						});
					}
				});
			},

			closeLoginModal() {
				this.showLoginModal = false;
			},
			
			handlePageClick() {
				if (!this.hasUserInfo) {
					this.showLoginModal = true;
				}
			},

			// 清除登录状态
			clearLoginStatus() {
				uni.removeStorageSync('jwt_token');
				uni.removeStorageSync('token_expire_time');
				this.hasUserInfo = false;
			},

			// Add new method to fetch image
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
					return '';
				}
			},
		}
	}
</script>

<style>
	page {
		background: #000000;
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: fixed;
	}
	
	.container {
		position: fixed;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: #000000;
		overflow: hidden;
		touch-action: none;
	}

	.background-image {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
	}

	.header {
		width: 100%;
		height: 66rpx;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		background: transparent;
		position: relative;
		z-index: 101;
	}

	.title-container {
		display: flex;
		align-items: center;
		padding: 8rpx 34rpx 8rpx 24rpx;
		border-radius: 50rpx;
		max-width: fit-content;
		cursor: pointer;
	}

	.logo {
		height: 80rpx;
		width: 80rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;
	}

	.title {
		font-size: 32rpx;
		color: #ffffff;
	}

	.swiper-container {
		flex: 1;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	
	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		will-change: transform;
		transform-style: preserve-3d;
	}
	
	.swiper-content {
		width: 100%;
		height: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: transparent;
		border-radius: 20rpx;
		padding: 20rpx;
		position: relative;
		will-change: transform;
		transform-style: preserve-3d;
	}
	
	.swiper-image {
		width: 100%;
		height: 70%;
		border-radius: 12rpx;
		will-change: transform;
		backface-visibility: hidden;
	}
	
	.swiper-title {
		color: #ffffff;
		font-size: 18rpx;
		margin-top: 20rpx;
		text-align: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10rpx;
	}
	
	.heart-icon, .info-icon {
		color: #ffffff;
		font-size: 18rpx;
		padding: 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	/* 非当前项的样式 */
	.swiper-item:not(.swiper-item-active) .swiper-content {
		transform: scale(0.8);
		opacity: 0.6;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.swiper-item:not(.swiper-item-active) .swiper-image {
		filter: brightness(0.7);
		transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* 当前项的样式 */
	.swiper-item-active .swiper-content {
		transform: scale(1);
		opacity: 1;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.swiper-item-active .swiper-image {
		filter: brightness(1);
		transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.login-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	.modal-content {
		background-color: #fff;
		border-radius: 12px;
		width: 40%;
		padding: 20px;
	}

	.agreement-section {
		margin-bottom: 20px;
	}

	.checkbox-group {
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	.agreement-label {
		display: flex;
		align-items: center;
	}

	.agreement-links {
		display: flex;
		align-items: center;
	}

	.agreement-text {
		color: #999999;
	}

	.agreement-link {
		color: #999999;
	}

	.login-btn {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: linear-gradient(to right, #FFD8C3, #FFB088);
		color: #fff;
		font-size: 16px;
		border-radius: 25px;
		border: none;
	}

	.login-btn:active {
		opacity: 0.8;
	}
</style>
