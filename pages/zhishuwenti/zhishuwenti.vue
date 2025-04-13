<template>
    <div class="project-description">
      <!-- 添加返回按钮 -->
      <div class="back-button" @click="handleBack">
        <text class="back-text">返回</text>
      </div>
      
      <!-- 添加顶部空间，避免内容被返回按钮覆盖 -->
      <div class="top-space"></div>
      
      <h1>树木种植问题模拟</h1>
      
      <div class="introduction">
        <p>
          本项目通过交互式可视化方式帮助学习者理解树木种植问题中的数学概念。
          该工具基于空间几何和数学原理设计，通过直观的线性和环形布局展示，
          使抽象的距离和间隔概念转化为可见可操作的实体，促进数学思维发展。
        </p>
      </div>
      
      <div class="intelligence-sections">
        <div class="intelligence-card" v-for="(intel, index) in intelligences" :key="index">
          <div class="card-header">
            <i :class="intel.icon"></i>
            <h2>{{ intel.title }}</h2>
          </div>
          <div class="card-content">
            <p>{{ intel.description }}</p>
            <ul>
              <li v-for="(feature, i) in intel.features" :key="i">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="pedagogical-value">
        <h2>教学价值</h2>
        <p>
          通过将树木种植问题转化为可视化的空间表示，本工具帮助学生建立数与空间的联系。
          学生可以直观地看到不同种植方式下树木的分布和间距关系，加深对数学概念的理解。
          这种表示法不仅适用于初学者，也为进一步学习几何和空间关系打下基础。
        </p>
      </div>
      
      <div class="usage-guide">
        <h2>使用指南</h2>
        <ol>
          <li>选择线性种植或环形种植模式</li>
          <li>使用滑块调整总距离大小</li>
          <li>点击添加或删除树木按钮改变树木数量</li>
          <li>观察树木间距如何自动调整以保持等距</li>
          <li>查看界面上显示的距离和间隔数据</li>
          <li>尝试不同的树木数量和总距离组合，观察变化规律</li>
        </ol>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectDescription',
    data() {
      return {
        intelligences: [
          {
            title: '逻辑-数学智能',
            icon: 'fas fa-calculator',
            description: '通过具体的数学模型，培养学生的空间推理和计算能力：',
            features: [
              '直观展示等距种植的数学原理',
              '通过数字和视觉的对应关系加深距离概念理解',
              '培养空间关系的数学表征能力',
              '为几何思维打下基础'
            ]
          },
          {
            title: '视觉-空间智能',
            icon: 'fas fa-eye',
            description: '利用直观的空间表示强化空间认知：',
            features: [
              '将抽象的距离概念转化为可视化表示',
              '通过线性和环形两种模式对比不同空间布局',
              '利用颜色和形状区分不同元素',
              '空间关系的理解促进数学概念建构'
            ]
          },
          {
            title: '身体-运动智能',
            icon: 'fas fa-hand-pointer',
            description: '通过交互操作强化感知运动协调：',
            features: [
              '拖动滑块调整总距离',
              '通过按钮添加或删除树木',
              '切换不同种植模式体验空间变化',
              '通过主动操作体验数学关系变化过程'
            ]
          },
          {
            title: '人际智能',
            icon: 'fas fa-users',
            description: '促进协作学习和交流：',
            features: [
              '讨论不同树木数量和距离组合的关系',
              '合作探索线性和环形种植的异同',
              '分享发现和解题策略',
              '培养数学表达和沟通能力'
            ]
          },
          {
            title: '内省智能',
            icon: 'fas fa-brain',
            description: '帮助学生反思自己的学习过程：',
            features: [
              '通过预测结果培养空间直觉',
              '对种植模式进行深度思考',
              '建立数与形的内在联系',
              '发展元认知和自我评估能力'
            ]
          }
        ]
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
  
  <style scoped>
  .project-description {
    max-width: 1200px; /* 增加最大宽度以适应iPad */
    margin: 0 auto;
    padding: 30px;
    color: #ffffff;
    background-color: #000000;
    border-radius: 8px;
    font-family: 'Arial', sans-serif;
    position: relative;
    overflow-x: hidden; /* 防止水平滚动 */
    height: 100vh; /* 全屏高度 */
    box-sizing: border-box;
  }
  
  /* 添加顶部空间，避免内容被返回按钮覆盖 */
  .top-space {
    height: 70px; /* 增加高度以适应iPad */
    width: 100%;
  }
  
  .back-button {
    position: fixed;
    top: calc(env(safe-area-inset-top) + 20px); /* 兼容iPad安全区域 */
    left: 20px;
    z-index: 999;
    background-color: #ffcc33;
    padding: 12px 24px; /* 增大按钮尺寸以便于触摸 */
    border-radius: 8px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent; /* 移除点击高亮 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .back-text {
    color: #333333;
    font-size: 18px; /* 增大文字以便于阅读 */
    font-weight: bold;
  }
  
  h1 {
    text-align: center;
    color: #ffcc33;
    margin-bottom: 30px;
    font-size: 36px; /* 增大标题字体 */
  }
  
  h2 {
    color: #ffcc33;
    margin-top: 0;
    font-size: 24px; /* 增大二级标题字体 */
  }
  
  .introduction {
    background-color: rgba(255, 204, 51, 0.1);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    border-left: 4px solid #ffcc33;
    font-size: 18px; /* 增大正文字体 */
    line-height: 1.6; /* 增加行高提高可读性 */
  }
  
  .intelligence-sections {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* iPad上使用2列布局 */
    gap: 25px;
    margin-bottom: 30px;
  }
  
  .intelligence-card {
    background-color: rgba(255, 204, 51, 0.05);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255, 204, 51, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .intelligence-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  .card-header {
    background-color: rgba(255, 204, 51, 0.2);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .card-header i {
    font-size: 28px;
    color: #ffcc33;
  }
  
  .card-content {
    padding: 20px;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .card-content ul {
    padding-left: 20px;
  }
  
  .card-content li {
    margin-bottom: 10px;
  }
  
  .pedagogical-value, .usage-guide {
    background-color: rgba(255, 204, 51, 0.05);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 25px;
    border-left: 4px solid #ffcc33;
    font-size: 18px;
    line-height: 1.6;
  }
  
  .usage-guide ol {
    padding-left: 25px;
  }
  
  .usage-guide li {
    margin-bottom: 15px;
  }
  
  /* iPad 特定样式 */
  @media (min-width: 768px) and (max-width: 1024px) {
    .project-description {
      padding: 40px;
      max-width: 100%;
      overflow-y: auto; /* 允许垂直滚动 */
      -webkit-overflow-scrolling: touch; /* 平滑滚动 */
    }
    
    .intelligence-sections {
      grid-template-columns: repeat(2, 1fr); /* 保持2列布局 */
    }
    
    /* 确保内容水平布局不被破坏 */
    .intelligence-card {
      min-height: 350px; /* 固定卡片高度，保持一致性 */
      display: flex;
      flex-direction: column;
    }
    
    .card-content {
      flex: 1;
    }
    
    /* 改善触摸交互 */
    .back-button, 
    .intelligence-card,
    .usage-guide li {
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    
    .back-button:active,
    .intelligence-card:active {
      transform: scale(0.98);
    }
    
    /* 优化iPad横屏布局 */
    @media (orientation: landscape) {
      .intelligence-sections {
        grid-template-columns: repeat(3, 1fr); /* 横屏时使用3列 */
      }
    }
    
    /* 优化iPad竖屏布局 */
    @media (orientation: portrait) {
      .intelligence-sections {
        grid-template-columns: repeat(2, 1fr); /* 竖屏时使用2列 */
      }
    }
  }
  
  /* 小型设备（如手机）样式 */
  @media (max-width: 767px) {
    .intelligence-sections {
      grid-template-columns: 1fr;
    }
    
    h1 {
      font-size: 28px;
    }
    
    .project-description {
      padding: 20px;
    }
  }
  </style>