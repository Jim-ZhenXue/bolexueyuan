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
            <h1 class="title">分数配对</h1>
            
            <div class="instruction-cards">
                <!-- 分数表示卡片 -->
                <div class="card">
                    <div class="card-icon">🔢</div>
                    <h3>多种分数表示</h3>
                    <p>理解不同形式的分数等价关系</p>
                    <ul>
                        <li>数字分数（如 1/2, 3/4）</li>
                        <li>块状分数（通过填充块显示）</li>
                        <li>圆形分数（通过扇形显示）</li>
                    </ul>
                </div>
        
                <!-- 天平机制卡片 -->
                <div class="card">
                    <div class="card-icon">⚖️</div>
                    <h3>天平比较机制</h3>
                    <p>直观比较分数大小关系</p>
                    <ul>
                        <li>可视化分数大小比较</li>
                        <li>根据大小关系自动倾斜</li>
                        <li>平滑动画效果展示</li>
                    </ul>
                </div>
        
                <!-- 游戏玩法卡片 -->
                <div class="card">
                    <div class="card-icon">🎮</div>
                    <h3>互动玩法</h3>
                    <p>通过拖放操作进行分数配对</p>
                    <ul>
                        <li>拖放分数到天平两侧</li>
                        <li>检查分数是否相等</li>
                        <li>记录正确配对组合</li>
                    </ul>
                </div>
        
                <!-- 学习价值卡片 -->
                <div class="card">
                    <div class="card-icon">🧠</div>
                    <h3>数学学习价值</h3>
                    <p>增强分数概念理解与应用</p>
                    <ul>
                        <li>强化等价分数认知</li>
                        <li>提升分数比较能力</li>
                        <li>培养数学直觉思维</li>
                    </ul>
                </div>
            </div>
        
            <!-- 游戏流程说明 -->
            <div class="progression-section">
                <h2>互动流程</h2>
                <div class="progression-steps">
                    <div class="step">
                        <span class="step-number">1</span>
                        <p>从分数网格中选择并拖放分数到天平两侧</p>
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <p>点击"检查"按钮验证分数是否相等</p>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <p>正确匹配获得积分，错误时天平倾斜显示大小关系</p>
                    </div>
                    <div class="step">
                        <span class="step-number">4</span>
                        <p>错误匹配时点击"再试一次"按钮重置天平</p>
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

.progression-section, .tech-section {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    margin-top: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.progression-section h2, .tech-section h2 {
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

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.tech-item {
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    background: rgba(240, 240, 240, 0.5);
    transition: transform 0.2s ease;
}

.tech-item:hover {
    transform: scale(1.05);
}

.tech-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.tech-item h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.tech-item p {
    font-size: 0.9rem;
    color: #34495e;
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
    
    .progression-section, .tech-section {
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
    
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
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
    
    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<script>
export default {
    data() {
        return {
            projectInfo: {
                name: '分数配对游戏',
                version: '1.0.0',
                lastUpdated: '2025-03-06',
                fractionTypes: ['数字分数', '块状分数', '圆形分数'],
                tiltRange: { min: -5, max: 5 },
                animationDuration: 1000
            }
        }
    },
    methods: {
        handleBack() {
            uni.navigateBack({
                delta: 1
            });
        }
    }
}
</script>