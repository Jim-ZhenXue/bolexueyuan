<template>
    <div class="project-description">
      <h1>追及相遇</h1>
      
      <div class="introduction">
        <p>
          本项目视觉化的方式帮助学习者理解和探索"追及相遇"数学问题。
          该工具基于多元智能理论设计，通过多种感官和认知途径促进学习。
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
          通过将抽象的数学概念转化为互动可视化的形式，本工具帮助学生直观理解速度、距离和时间之间的关系。
          学生可以通过调整参数，立即看到结果，促进实验性学习和深度理解。
        </p>
      </div>
      
      <div class="usage-guide">
        <h2>使用指南</h2>
        <ol>
          <li>调整红色和蓝色车辆的速度</li>
          <li>设置两车的初始距离</li>
          <li>点击"开始"按钮启动模拟</li>
          <li>观察两车的运动和相遇情况</li>
          <li>通过时间和距离显示分析运动规律</li>
          <li>使用"重置"按钮可随时重新开始</li>
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
            description: '通过具体的数学问题，培养学生的数学推理和分析能力：',
            features: [
              '互动式探索速度、距离和时间关系',
              '通过参数调整观察数值变化规律',
              '培养数学模型思维和问题求解能力',
              '锻炼预测结果和验证假设的能力'
            ]
          },
          {
            title: '视觉-空间智能',
            icon: 'fas fa-eye',
            description: '利用直观的可视化表示强化空间认知：',
            features: [
              '动态图形展示抽象数学概念',
              '利用色彩区分不同元素',
              '空间位置变化直观呈现速度差异',
              '通过视觉反馈增强空间推理能力'
            ]
          },
          {
            title: '身体-运动智能',
            icon: 'fas fa-running',
            description: '通过操作和互动强化感知运动协调：',
            features: [
              '通过滑块调整参数培养精细运动技能',
              '触摸互动增强手眼协调能力',
              '通过主动操作体验速度和位移概念',
              '利用物理动作辅助理解抽象概念'
            ]
          },
          {
            title: '人际智能',
            icon: 'fas fa-users',
            description: '促进协作学习和交流：',
            features: [
              '小组讨论预测结果和分析现象',
              '共同探索不同参数组合的效果',
              '分享发现和解决方案',
              '培养表达数学思维的能力'
            ]
          },
          {
            title: '内省智能',
            icon: 'fas fa-brain',
            description: '帮助学生反思自己的学习过程：',
            features: [
              '鼓励学生自我提问和思考',
              '通过试错培养元认知技能',
              '建立数学概念的深层理解',
              '提高自主学习和问题解决的能力'
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .project-description {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    color: #ffffff;
    background-color: #000000;
    border-radius: 8px;
    font-family: 'Arial', sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #3498db;
    margin-bottom: 30px;
  }
  
  h2 {
    color: #3498db;
    margin-top: 0;
  }
  
  .introduction {
    background-color: rgba(52, 152, 219, 0.1);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    border-left: 4px solid #3498db;
  }
  
  .intelligence-sections {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .intelligence-card {
    background-color: rgba(52, 152, 219, 0.05);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(52, 152, 219, 0.2);
  }
  
  .intelligence-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  .card-header {
    background-color: rgba(52, 152, 219, 0.2);
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .card-header i {
    font-size: 24px;
    color: #3498db;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-content ul {
    padding-left: 20px;
  }
  
  .card-content li {
    margin-bottom: 8px;
  }
  
  .pedagogical-value, .usage-guide {
    background-color: rgba(52, 152, 219, 0.05);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-left: 4px solid #3498db;
  }
  
  .usage-guide ol {
    padding-left: 20px;
  }
  
  .usage-guide li {
    margin-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    .intelligence-sections {
      grid-template-columns: 1fr;
    }
  }
  </style>