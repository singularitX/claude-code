// ============================================================
// SKILL DATA
// ============================================================
var skillData = [
  {
    category: 'Agent 开发',
    skills: [
      { name: 'LLM API 集成', score: 85 },
      { name: '提示词工程', score: 80 },
      { name: 'Agent 框架', score: 75 }
    ]
  },
  {
    category: '前端核心',
    skills: [
      { name: 'JavaScript/TS', score: 80 },
      { name: 'CSS/动画', score: 75 },
      { name: 'HTML/Semantic', score: 78 }
    ]
  },
  {
    category: '框架生态',
    skills: [
      { name: 'React/Next.js', score: 75 },
      { name: 'Vue/Nuxt', score: 80 },
      { name: 'Node.js', score: 70 }
    ]
  },
  {
    category: '工程化',
    skills: [
      { name: 'Git 版本控制', score: 82 },
      { name: 'Vite/构建工具', score: 78 },
      { name: 'CI/CD', score: 65 }
    ]
  },
  {
    category: 'AI 工具',
    skills: [
      { name: 'Claude Code', score: 85 },
      { name: 'AI 编程', score: 82 },
      { name: '自动化工作流', score: 75 }
    ]
  },
  {
    category: '成长中',
    skills: [
      { name: '后端基础', score: 60 },
      { name: '数据库', score: 55 },
      { name: 'Linux/运维', score: 50 }
    ]
  }
];

// ============================================================
// RENDER SKILL GRID
// ============================================================
(function renderSkills() {
  var grid = document.getElementById('skill-grid');
  var html = '';
  skillData.forEach(function(cat) {
    html += '<div class="skill-category"><h3>' + cat.category + '</h3>';
    cat.skills.forEach(function(s) {
      html += '<div class="skill-item">';
      html += '<div class="skill-head"><span class="skill-name">' + s.name + '</span><span class="skill-score">' + s.score + '</span></div>';
      html += '<div class="skill-bar"><div class="skill-fill" style="--fill:' + s.score + '%" data-fill="' + s.score + '"></div></div>';
      html += '</div>';
    });
    html += '</div>';
  });
  grid.innerHTML = html;
})();

// ============================================================
// SCROLL REVEAL
// ============================================================
(function scrollReveal() {
  var reveals = document.querySelectorAll('.reveal');
  var skillFills = document.querySelectorAll('.skill-fill');

  function isInView(el) {
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
  }

  function handleScroll() {
    reveals.forEach(function(el) {
      if (isInView(el)) { el.classList.add('visible'); }
    });
    skillFills.forEach(function(el) {
      if (isInView(el)) { el.classList.add('visible'); }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial check
})();

// ============================================================
// SMOOTH SCROLL FOR CTA
// ============================================================
(function smoothCta() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
})();

// ============================================================
// COPY EMAIL
// ============================================================
(function copyEmail() {
  document.querySelectorAll('[data-copy]').forEach(function(button) {
    button.addEventListener('click', async function() {
      var value = button.getAttribute('data-copy');
      var originalText = button.textContent;
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = '已复制';
        setTimeout(function() { button.textContent = originalText; }, 1600);
      } catch(e) {
        button.textContent = '复制失败';
        setTimeout(function() { button.textContent = originalText; }, 1600);
      }
    });
  });
})();
