<template>
    <div class="game-guide" style="background: #000000;">
        <!-- 返回按钮 -->
        <div class="back-button" @click="handleBack">
            <text class="back-text">返回</text>
        </div>

        <!-- 顶部留空区域 -->
        <div class="top-space" style="background: #000000;"></div>
        
        <!-- 主要内容区域 -->
        <div class="content">
            <h1 class="title">变形记：思维训练之旅</h1>
            
            <div class="level-container">
                <!-- 第一关：空间思维训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <h2>第一关：空间变形</h2>
                        <div class="skill-tag">空间思维</div>
                    </div>
                    <p>通过操控方块的旋转和变形，培养：</p>
                    <ul>
                        <li>空间想象能力</li>
                        <li>几何思维能力</li>
                        <li>形状识别能力</li>
                    </ul>
                </div>
        
                <!-- 第二关：逻辑思维训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <h2>第二关：逻辑推理</h2>
                        <div class="skill-tag">逻辑思维</div>
                    </div>
                    <p>通过解决变形序列问题，提升：</p>
                    <ul>
                        <li>推理分析能力</li>
                        <li>模式识别能力</li>
                        <li>决策判断能力</li>
                    </ul>
                </div>
        
                <!-- 第三关：创造力训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <h2>第三关：创意突破</h2>
                        <div class="skill-tag">创造思维</div>
                    </div>
                    <p>通过自由组合变形，激发：</p>
                    <ul>
                        <li>创新思维能力</li>
                        <li>问题解决能力</li>
                        <li>灵活应变能力</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'GameGuide',
    methods: {
        handleBack() {
            uni.navigateBack({
                delta: 1
            });
        }
    }
}
</script>
  
<style scoped>
.game-guide {
    width: 100%;
    min-height: 100vh;
    background: #000000;
    position: relative;
    overflow-y: auto;
}

.top-space {
    height: calc(100vh / 7);
    min-height: 60px;
}

.content {
    padding: 15px;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 2rem;
}

.title {
    text-align: center;
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
}

.level-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.level-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.level-card:hover {
    transform: translateY(-5px);
}

.level-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.level-header h2 {
    color: #1a1a1a;
    font-size: 1.5rem;
    margin: 0;
}

.skill-tag {
    background: #3498db;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

li {
    margin: 10px 0;
    padding-left: 20px;
    position: relative;
    color: #1f2937;
}

li::before {
    content: "•";
    color: #3498db;
    position: absolute;
    left: 0;
    font-weight: bold;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .title {
        font-size: 1.5rem;
    }

    .level-header h2 {
        font-size: 1.2rem;
    }

    .content {
        padding: 15px;
    }
}

p {
    color: #1f2937;
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
    color: #ffffff;
    font-size: 16px;
}
</style>