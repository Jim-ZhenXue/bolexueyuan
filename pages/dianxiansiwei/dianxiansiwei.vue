<template>
    <div class="game-instructions" style="background: #000000;">
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
  
        <!-- 游戏进阶说明 -->
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
    background: #000000;
  }
  
  .top-space {
    height: calc(100vh / 7);
  }
  
  .content-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    color: #2c3e50;
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
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .card p {
    color: #34495e;
    margin-bottom: 1rem;
  }
  
  .card ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .card ul li {
    color: #7f8c8d;
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
    background: white;
    border-radius: 15px;
    padding: 20px;
    margin-top: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .progression-section h2 {
    color: #2c3e50;
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
  </style>