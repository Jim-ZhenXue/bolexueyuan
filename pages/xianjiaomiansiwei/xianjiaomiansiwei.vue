<template>
	<div class="game-description" style="background: #FFFFFF;">
		<!-- 返回按钮 -->
		<div class="back-button" @click="handleBack">
			<text class="back-text">返回</text>
		</div>
		
		<!-- 顶部留空区域 -->
		<div class="top-space" style="background: white;"></div>
		
		<!-- 主要内容区域 -->
		<div class="content">
			<h1 class="title">面向思维训练</h1>
			
			<!-- 介绍卡片 -->
			<div class="intro-card">
				<div class="card-content">
					<h2>简介</h2>
					<p>这是一款独特的思维训练，通过图形创作来培养多元智能。您将通过操作三角形来创建各种形状，每个关卡都针对不同的思维能力进行训练。</p>
				</div>
			</div>
			
			<!-- 关卡说明列表 -->
			<div class="levels-container">
				<div class="level-card">
					<div class="level-header">
						<div class="level-badge">Level 1</div>
						<h3>描边大师</h3>
					</div>
					<div class="level-content">
						<p>训练空间感知能力和形状认知：</p>
						<ul>
							<li>通过创建完整的图形轮廓来提高空间想象力</li>
							<li>锻炼形状识别和空间关系理解</li>
							<li>培养几何直觉和视觉思维能力</li>
						</ul>
					</div>
				</div>
				
				<div class="level-card">
					<div class="level-header">
						<div class="level-badge">Level 2</div>
						<h3>面积探索</h3>
					</div>
					<div class="level-content">
						<p>训练数学思维和逻辑推理：</p>
						<ul>
							<li>理解面积概念和计算方法</li>
							<li>发展问题解决策略</li>
							<li>强化空间规划能力</li>
						</ul>
					</div>
				</div>
				
				<div class="level-card">
					<div class="level-header">
						<div class="level-badge">Level 3</div>
						<h3>周长挑战</h3>
					</div>
					<div class="level-content">
						<p>训练计算能力和策略思维：</p>
						<ul>
							<li>优化图形设计以达到目标周长</li>
							<li>培养数学思维和估算能力</li>
							<li>发展策略规划技能</li>
						</ul>
					</div>
				</div>
				
				<div class="level-card">
					<div class="level-header">
						<div class="level-badge">Level 4</div>
						<h3>角度魔法</h3>
					</div>
					<div class="level-content">
						<p>训练创造力和几何思维：</p>
						<ul>
							<li>探索不同角度组合的可能性</li>
							<li>提升创意思维和想象力</li>
							<li>加强空间推理能力</li>
						</ul>
					</div>
				</div>
			</div>
			
			<!-- 技能提升总结 -->
			<div class="skills-summary">
				<h2>多元智能提升</h2>
				<div class="skills-grid">
					<div class="skill-item">
						<i class="fas fa-brain"></i>
						<h4>逻辑数学智能</h4>
						<p>通过面积计算和周长优化提升数学思维</p>
					</div>
					<div class="skill-item">
						<i class="fas fa-cube"></i>
						<h4>空间智能</h4>
						<p>培养空间想象力和形状操作能力</p>
					</div>
					<div class="skill-item">
						<i class="fas fa-lightbulb"></i>
						<h4>创造力</h4>
						<p>激发创意思维和问题解决能力</p>
					</div>
					<div class="skill-item">
						<i class="fas fa-chess"></i>
						<h4>策略思维</h4>
						<p>培养规划能力和决策技巧</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.game-description {
	width: 100%;
	min-height: 100vh;
	background: #FFFFFF;
	position: relative;
	overflow-y: auto;
	padding-bottom: 2rem;
}

.top-space {
	height: 60px;
	min-height: auto;
}

.content {
	padding: 0 1rem;
	max-width: 100%;
	margin: 0 auto;
	padding-bottom: 2rem;
}

.title {
	text-align: center;
	color: #000000;
	font-size: 2rem;
	margin-bottom: 2rem;
	font-weight: bold;
}

.intro-card {
	background: rgba(255, 255, 255, 0.9);
	border-radius: 15px;
	padding: 1.5rem;
	margin-bottom: 2rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.level-card {
	background: rgba(255, 255, 255, 0.9);
	border-radius: 15px;
	padding: 1.5rem;
	margin-bottom: 1.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	transition: transform 0.3s ease;
}

.level-card:hover {
	transform: translateY(-5px);
}

.level-header {
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
}

.level-badge {
	background: #4CAF50;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 20px;
	margin-right: 1rem;
	font-weight: bold;
}

.level-content ul {
	padding-left: 1.5rem;
	margin-top: 0.5rem;
}

.level-content li {
	margin-bottom: 0.5rem;
	color: #1f2937;
}

.skills-summary {
	background: rgba(255, 255, 255, 0.9);
	border-radius: 15px;
	padding: 1.5rem;
	margin-top: 2rem;
}

.skills-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;
	margin-top: 1.5rem;
}

.skill-item {
	text-align: center;
	padding: 1rem;
}

.skill-item i {
	font-size: 2rem;
	color: #4CAF50;
	margin-bottom: 0.5rem;
}

.skill-item h4 {
	color: #1a1a1a;
	margin: 0.5rem 0;
}

.skill-item p {
	color: #1f2937;
	font-size: 0.9rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
	.title {
		font-size: 1.5rem;
	}

	.content {
		padding: 0 1rem;
	}

	.skills-grid {
		grid-template-columns: 1fr;
	}
}

.back-button {
	position: fixed;
	top: 44px;
	left: 15px;
	z-index: 999;
	padding: 8px 15px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 20px;
}
.back-text {
	color: #000000;
	font-size: 16px;
}

/* 横屏适配 */
@media screen and (orientation: landscape) {
	.game-description {
		height: 100vh;
		padding-bottom: 0;
	}
	
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		padding: 1rem 2rem;
		height: calc(100vh - 80px);
		overflow-y: auto;
	}
	
	.title {
		grid-column: 1 / -1;
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
	
	.intro-card {
		grid-column: 1 / -1;
		margin-bottom: 1rem;
	}
	
	.levels-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	
	.level-card {
		margin-bottom: 0;
		height: 100%;
	}
	
	.skills-summary {
		margin-top: 0;
	}
	
	.skills-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	
	.back-button {
		top: 20px;
	}
}

/* 较小屏幕的横屏适配 */
@media screen and (orientation: landscape) and (max-height: 600px) {
	.content {
		gap: 1rem;
		padding: 0.5rem 1.5rem;
	}
	
	.title {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	
	.intro-card {
		padding: 1rem;
	}
	
	.level-card {
		padding: 1rem;
	}
	
	.level-content li {
		margin-bottom: 0.3rem;
		font-size: 0.9rem;
	}
	
	.skills-summary {
		padding: 1rem;
	}
	
	.skill-item {
		padding: 0.5rem;
	}
	
	.skill-item i {
		font-size: 1.5rem;
	}
}

/* 超小屏幕的横屏适配 */
@media screen and (orientation: landscape) and (max-height: 450px) {
	.content {
		grid-template-columns: 1fr;
	}
	
	.levels-container {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, auto);
	}
	
	.skills-grid {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, auto);
	}
	
	.level-card {
		padding: 0.8rem;
	}
	
	.level-content ul {
		padding-left: 1rem;
	}
	
	.level-content li {
		font-size: 0.85rem;
		margin-bottom: 0.2rem;
	}
	
	.level-badge {
		padding: 0.3rem 0.8rem;
		font-size: 0.9rem;
	}
	
	.level-header h3 {
		font-size: 1rem;
	}
}
</style>

<script>
export default {
	methods: {
		handleBack() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
}
</script>