<template>
    <div class="game-description" style="background: #000000;">
      <!-- 顶部留空区域 - 1/7高度 -->
      <div class="top-space" style="background: #000000;"></div>
      
      <!-- 主要内容区域 -->
      <div class="content-container">
        <h1 class="title">三角形的认识</h1>
        
        <div class="section">
          <h2>游戏简介</h2>
          <p>这是一个充满趣味的几何思维训练游戏，通过探索三角形的性质来提升你的多元智能！</p>
        </div>
  
        <div class="learning-path">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>空间智能训练</h3>
              <p>通过观察和操作不同的三角形，培养空间想象力和几何直觉</p>
            </div>
          </div>
  
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>逻辑数学智能</h3>
              <p>分析三角形的性质，运用数学推理能力解决问题</p>
            </div>
          </div>
  
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>反思学习能力</h3>
              <p>在游戏过程中总结经验，建立系统的几何思维方法</p>
            </div>
          </div>
        </div>
  
        <div class="features">
          <div class="feature-card">
            <h3>趣味关卡</h3>
            <p>循序渐进的关卡设计，让你在游戏中轻松掌握知识</p>
          </div>
          <div class="feature-card">
            <h3>即时反馈</h3>
            <p>每一步操作都有清晰的反馈，帮助你理解和改正</p>
          </div>
          <div class="feature-card">
            <h3>成就系统</h3>
            <p>通过完成挑战获得成就，记录你的学习进步</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .game-description {
    width: 100%;
    min-height: 100vh;
    background: #000000;
  }
  
  .top-space {
    height: calc(100vh / 7);
  }
  
  .content-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 2.5rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .section {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  
  .learning-path {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .step {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    background: #3498db;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .step-content {
    flex: 1;
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .feature-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  
  /* 移动端适配 */
  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
  
    .content-container {
      padding: 15px;
    }
  
    .features {
      grid-template-columns: 1fr;
    }
  }
  
  h2, h3 {
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #1f2937;
    line-height: 1.6;
  }
  </style>