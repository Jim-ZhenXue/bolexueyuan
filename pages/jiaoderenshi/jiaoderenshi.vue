<template>
    <div class="instructions-container" style="background: #000000;">
        <!-- 返回按钮 -->
        <div class="back-button" @click="handleBack">
            <text class="back-text">返回</text>
        </div>

        <!-- 顶部留空区域 - 1/7高度 -->
        <div class="top-space"></div>
        
        <!-- 主要内容区域 -->
        <div class="content-wrapper">
            <h1 class="title">转转乐角度探险：智能训练之旅</h1>
            
            <div class="level-cards">
                <!-- 第1关：直角训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <span class="level-number">第1关</span>
                        <span class="level-name">直角大师</span>
                    </div>
                    <div class="level-content">
                        <div class="training-points">
                            <p>🧮 数学空间智能：识别和创建90度角</p>
                            <p>👁️ 视觉空间智能：培养角度的直观认知</p>
                            <p>🎯 精确控制能力：精准调整到90度位置</p>
                        </div>
                    </div>
                </div>
        
                <!-- 第2关：45度角训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <span class="level-number">第2关</span>
                        <span class="level-name">一半的艺术</span>
                    </div>
                    <div class="level-content">
                        <div class="training-points">
                            <p>🔄 逻辑推理能力：理解角度分割概念</p>
                            <p>📐 空间分析能力：掌握角度比例关系</p>
                            <p>🎨 艺术审美能力：体验对称之美</p>
                        </div>
                    </div>
                </div>
        
                <!-- 第3关：145度角训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <span class="level-number">第3关</span>
                        <span class="level-name">精确掌控</span>
                    </div>
                    <div class="level-content">
                        <div class="training-points">
                            <p>🔍 观察力训练：细致识别刻度</p>
                            <p>🧠 数学计算能力：综合角度运算</p>
                            <p>✋ 精细动作控制：准确定位特定角度</p>
                        </div>
                    </div>
                </div>
        
                <!-- 第4关：平角训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <span class="level-number">第4关</span>
                        <span class="level-name">平角探索</span>
                    </div>
                    <div class="level-content">
                        <div class="training-points">
                            <p>📏 几何概念理解：掌握平角特性</p>
                            <p>👀 视觉判断能力：识别直线对齐</p>
                            <p>🤔 抽象思维能力：理解180度概念</p>
                        </div>
                    </div>
                </div>
        
                <!-- 第5关：270度角训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <span class="level-number">第5关</span>
                        <span class="level-name">优角挑战</span>
                    </div>
                    <div class="level-content">
                        <div class="training-points">
                            <p>🔄 空间旋转认知：理解大角度概念</p>
                            <p>🧮 数学思维能力：掌握角度叠加</p>
                            <p>🎯 目标定位能力：准确找到目标角度</p>
                        </div>
                    </div>
                </div>
        
                <!-- 第6关：周角训练 -->
                <div class="level-card">
                    <div class="level-header">
                        <span class="level-number">第6关</span>
                        <span class="level-name">圆满一周</span>
                    </div>
                    <div class="level-content">
                        <div class="training-points">
                            <p>🌟 整体思维能力：理解角度周期性</p>
                            <p>🎨 空间完整认知：把握圆周概念</p>
                            <p>🏆 成就感培养：完成最终挑战</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.instructions-container {
    min-height: 100vh;
    background: #000000;
    padding: 0 1rem;
    position: relative;
    overflow-y: auto;
}

.top-space {
    height: 60px;
    min-height: auto;
}

.content-wrapper {
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    padding-bottom: 2rem;
}

.title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    color: #ffffff;
    background: linear-gradient(45deg, #9d6eff, #66a3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.level-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
}

.level-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    padding: 1.25rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.level-card:hover {
    transform: translateY(-2px);
}

.level-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.level-number {
    background: linear-gradient(45deg, #7c4dff, #448aff);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
}

.level-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #3f51b5;
}

.training-points {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.training-points p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #1f2937;
    font-size: 0.95rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .title {
        font-size: 1.25rem;
    }
    
    .level-card {
        padding: 1rem;
    }
    
    .level-name {
        font-size: 1.1rem;
    }
    
    .training-points p {
        font-size: 0.9rem;
    }
}

/* 动画效果 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.level-card {
    animation: fadeIn 0.5s ease-out forwards;
}

.level-card:nth-child(1) { animation-delay: 0.1s; }
.level-card:nth-child(2) { animation-delay: 0.2s; }
.level-card:nth-child(3) { animation-delay: 0.3s; }
.level-card:nth-child(4) { animation-delay: 0.4s; }
.level-card:nth-child(5) { animation-delay: 0.5s; }
.level-card:nth-child(6) { animation-delay: 0.6s; }

.back-button {
    position: fixed;
    top: 44px;
    left: 15px;
    z-index: 999;
    padding: 8px 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    backdrop-filter: blur(5px);
}

.back-text {
    color: #ffffff;
    font-size: 16px;
}

/* 横屏适配 */
@media screen and (orientation: landscape) {
    .instructions-container {
        height: 100vh;
        overflow-y: auto;
        padding: 0;
    }
    
    .level-cards {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 2rem;
    }
    
    .title {
        font-size: 1.8rem;
        margin: 0.5rem 0 1.5rem;
    }
    
    .back-button {
        top: 20px;
    }
    
    .level-card {
        max-height: calc(100vh - 200px);
        overflow-y: auto;
    }
}

/* 较小屏幕的横屏适配 */
@media screen and (orientation: landscape) and (max-height: 600px) {
    .level-cards {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .title {
        font-size: 1.4rem;
        margin: 0.3rem 0 1rem;
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