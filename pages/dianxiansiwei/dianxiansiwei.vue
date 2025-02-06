<template>
    <div class="game-instructions" style="background: #FFFFFF;">
        <!-- 返回按钮 -->
        <div class="back-button" @click="handleBack">
            <text class="back-text">返回</text>
        </div>

        <!-- 顶部留空区域 - 1/7高度 -->
        <div class="top-space"></div>
        
        <!-- 主要内容区域 -->
        <div class="content-container">
            <h1 class="title">点线思维训练</h1>
            
            <div class="instruction-cards">
                <!-- 点模式训练卡片 -->
                <div class="card">
                    <div class="card-icon">🎯</div>
                    <h3>点模式</h3>
                    <p>训练空间感知能力与精确定位</p>
                    <ul>
                        <li>增强视觉空间智能</li>
                        <li>提升手眼协调能力</li>
                        <li>培养精确判断能力</li>
                    </ul>
                </div>
        
                <!-- 线模式训练卡片 -->
                <div class="card">
                    <div class="card-icon">📏</div>
                    <h3>直线模式</h3>
                    <p>训练逻辑思维与空间关系</p>
                    <ul>
                        <li>强化数学逻辑智能</li>
                        <li>提高空间推理能力</li>
                        <li>发展策略规划技能</li>
                    </ul>
                </div>
        
                <!-- 射线模式训练卡片 -->
                <div class="card">
                    <div class="card-icon">↗️</div>
                    <h3>射线模式</h3>
                    <p>训练方向感与预测能力</p>
                    <ul>
                        <li>增强空间方向感</li>
                        <li>提升预测判断能力</li>
                        <li>锻炼抽象思维能力</li>
                    </ul>
                </div>
        
                <!-- 方向模式训练卡片 -->
                <div class="card">
                    <div class="card-icon">🧭</div>
                    <h3>方向模式</h3>
                    <p>训练空间规划与决策能力</p>
                    <ul>
                        <li>强化决策制定能力</li>
                        <li>提升空间规划技能</li>
                        <li>发展战略思维能力</li>
                    </ul>
                </div>
            </div>
        
            <!-- 进阶说明 -->
            <div class="progression-section">
                <h2>能力进阶</h2>
                <div class="progression-steps">
                    <div class="step">
                        <span class="step-number">1</span>
                        <p>基础训练：掌握各模式基本操作</p>
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <p>进阶挑战：提高准确度与速度</p>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <p>高级思维：组合多种模式训练</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.game-instructions {
    width: 100%;
    min-height: 100vh;
    background: #FFFFFF;
    position: relative;
    overflow-y: auto;
    padding: 0 1rem;
}

.top-space {
    height: 60px;
    min-height: auto;
}

.content-container {
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
    padding-bottom: 2rem;
}

.title {
    text-align: center;
    font-size: 2rem;
    color: #000000;
    margin-bottom: 2rem;
    font-weight: bold;
}

.instruction-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 2rem;
}

.card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}

.card h3 {
    color: #1a1a1a;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
}

.card p {
    color: #1f2937;
    margin-bottom: 1rem;
}

.card ul {
    list-style-type: none;
    padding-left: 0;
}

.card ul li {
    color: #1f2937;
    margin-bottom: 0.5rem;
    padding-left: 20px;
    position: relative;
}

.card ul li::before {
    content: "•";
    color: #3498db;
    position: absolute;
    left: 0;
}

.progression-section {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    margin-top: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.progression-section h2 {
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 1.5rem;
}

.progression-steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.step {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.step-number {
    background: #3498db;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.step p {
    color: #1f2937;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .content-container {
        padding: 15px;
    }

    .title {
        font-size: 1.5rem;
    }

    .card {
        padding: 15px;
    }

    .card h3 {
        font-size: 1.2rem;
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
    .game-instructions {
        height: 100vh;
        padding: 0;
    }
    
    .content-container {
        padding: 1rem 2rem;
    }
    
    .title {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }
    
    .instruction-cards {
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
    }
    
    .card {
        padding: 15px;
    }
    
    .card h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    
    .card-icon {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .progression-section {
        margin-top: 1.5rem;
        padding: 15px;
    }
    
    .progression-steps {
        flex-direction: row;
        justify-content: space-around;
    }
    
    .back-button {
        top: 20px;
    }
}

/* 较小屏幕的横屏适配 */
@media screen and (orientation: landscape) and (max-height: 600px) {
    .instruction-cards {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .card {
        padding: 10px;
    }
    
    .card h3 {
        font-size: 1.1rem;
    }
    
    .card-icon {
        font-size: 1.3rem;
    }
    
    .progression-steps {
        flex-direction: column;
        gap: 0.5rem;
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