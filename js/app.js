// Vyom — n8n Template Library App Logic
// app.js

(function () {
  'use strict';

  /* ── State ─────────────────────────────────────────── */
  let state = {
    activeCategory: 'all',
    activeDept: 'All',
    searchQuery: '',
    currentTemplate: null,
  };

  /* ── DOM References ────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const grid         = $('#templateGrid');
  const countEl      = $('#templateCount');
  const searchInput  = $('#searchInput');
  const modalOverlay = $('#modalOverlay');
  const modalBody    = $('#modalBody');
  const toast        = $('#toast');

  /* ── Init ──────────────────────────────────────────── */
  function init() {
    buildCategoryFilters();
    buildDeptFilters();
    renderGrid();
    bindEvents();
  }

  /* ── Build Category Pills ──────────────────────────── */
  function buildCategoryFilters() {
    const container = $('#categoryFilters');
    if (!container) return;

    CATEGORIES.forEach(cat => {
      const count = cat.id === 'all'
        ? TEMPLATES.length
        : TEMPLATES.filter(t => t.category === cat.id).length;

      if (cat.id !== 'all' && count === 0) return;

      const pill = document.createElement('button');
      pill.className = 'filter-pill' + (cat.id === 'all' ? ' active' : '');
      pill.dataset.category = cat.id;
      pill.setAttribute('id', `cat-${cat.id}`);
      pill.innerHTML = `<span>${cat.icon}</span> ${cat.label} <span class="count">(${count})</span>`;
      pill.addEventListener('click', () => setCategory(cat.id));
      container.appendChild(pill);
    });
  }

  /* ── Build Department Pills ────────────────────────── */
  function buildDeptFilters() {
    const container = $('#deptFilters');
    if (!container) return;

    DEPARTMENTS.forEach(dept => {
      const pill = document.createElement('button');
      pill.className = 'filter-pill dept-pill' + (dept === 'All' ? ' active' : '');
      pill.dataset.dept = dept;
      pill.setAttribute('id', `dept-${dept.toLowerCase()}`);
      pill.textContent = dept;
      pill.addEventListener('click', () => setDept(dept));
      container.appendChild(pill);
    });
  }

  /* ── Filter Logic ──────────────────────────────────── */
  function getFiltered() {
    const q = state.searchQuery.toLowerCase().trim();

    return TEMPLATES.filter(t => {
      const catOk  = state.activeCategory === 'all' || t.category === state.activeCategory;
      const deptOk = state.activeDept === 'All' || t.department === state.activeDept;

      let searchOk = true;
      if (q) {
        searchOk = (
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some(tag => tag.toLowerCase().includes(q)) ||
          t.department.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
        );
      }
      return catOk && deptOk && searchOk;
    });
  }

  /* ── Set Category ──────────────────────────────────── */
  function setCategory(id) {
    state.activeCategory = id;
    $$('.filter-pill[data-category]').forEach(p => {
      p.classList.toggle('active', p.dataset.category === id);
    });
    renderGrid();
  }

  /* ── Set Department ────────────────────────────────── */
  function setDept(dept) {
    state.activeDept = dept;
    $$('.filter-pill[data-dept]').forEach(p => {
      p.classList.toggle('active', p.dataset.dept === dept);
    });
    renderGrid();
  }

  /* ── Render Grid ───────────────────────────────────── */
  function renderGrid() {
    const filtered = getFiltered();

    // Update count
    if (countEl) {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${TEMPLATES.length}</strong> templates`;
    }

    // Clear
    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-title">No templates found</div>
          <div class="empty-subtitle">Try adjusting your search or filters to find what you're looking for.</div>
          <div class="empty-action">
            <button class="btn-secondary" onclick="clearFilters()" id="clearFiltersBtn">Clear all filters</button>
          </div>
        </div>`;
      return;
    }

    // Render cards with staggered animation
    filtered.forEach((template, i) => {
      const card = createCard(template, i);
      grid.appendChild(card);
    });
  }

  /* ── Create Card ───────────────────────────────────── */
  function createCard(t, index) {
    const catObj  = CATEGORIES.find(c => c.id === t.category) || { icon: '🎯', label: t.category };
    const delay   = Math.min(index * 30, 300);
    const tagsHtml = t.tags.slice(0, 3).map(tag => `<span class="card-tag">${tag}</span>`).join('');

    const card = document.createElement('div');
    card.className = 'template-card';
    card.style.animationDelay = `${delay}ms`;
    card.dataset.id = t.id;
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', t.title);

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${catObj.icon}</div>
        <div class="card-badges">
          <span class="dept-badge dept-${t.department}">${t.department}</span>
        </div>
      </div>
      <div class="card-title">${escapeHtml(t.title)}</div>
      <div class="card-description">${escapeHtml(t.description)}</div>
      <div class="card-tags">${tagsHtml}</div>
      <div class="card-footer">
        <span class="card-category-label">${catObj.icon} ${catObj.label}</span>
        <button class="card-download-btn" data-id="${t.id}" aria-label="Download ${t.title}">
          ↓ Download
        </button>
      </div>`;

    // Click card → open modal
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.card-download-btn')) {
        openModal(t);
      }
    });

    // Click download button → direct download
    card.querySelector('.card-download-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      downloadTemplate(t);
    });

    return card;
  }

  /* ── Open Modal ────────────────────────────────────── */
  function openModal(t) {
    state.currentTemplate = t;
    const catObj  = CATEGORIES.find(c => c.id === t.category) || { icon: '🎯', label: t.category };
    const tagsHtml = t.tags.map(tag => `<span class="card-tag">${escapeHtml(tag)}</span>`).join('');

    modalBody.innerHTML = `
      <button class="modal-close" id="modalCloseBtn" aria-label="Close modal">✕</button>

      <div class="modal-header">
        <div class="modal-icon">${catObj.icon}</div>
        <div class="modal-title-block">
          <div class="modal-title">${escapeHtml(t.title)}</div>
          <div class="modal-meta">
            <span class="dept-badge dept-${t.department}">${t.department}</span>
            <span class="dept-badge" style="background:rgba(255,208,0,0.1);color:var(--yellow-primary)">${catObj.label}</span>
          </div>
        </div>
      </div>

      <p class="modal-description">${escapeHtml(t.description)}</p>

      <div class="modal-tags">${tagsHtml}</div>

      <div class="modal-section-label">File</div>
      <div class="modal-url-block" style="margin-bottom:24px">
        <span class="modal-url-text">templates/${escapeHtml(t.file)}</span>
      </div>

      <div class="modal-actions">
        <button class="modal-download-btn" id="modalDownloadBtn">
          ↓ Download JSON Template
        </button>
      </div>`;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Bind modal buttons
    $('#modalCloseBtn').addEventListener('click', closeModal);
    $('#modalDownloadBtn').addEventListener('click', () => downloadTemplate(t));
  }

  /* ── Close Modal ───────────────────────────────────── */
  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    state.currentTemplate = null;
  }

  /* ── Download Template ─────────────────────────────── */
  async function downloadTemplate(t) {
    const localPath = `templates/${t.file}`;
    const fileName  = getFileName(t.file);

    // Show loading state on any active download buttons
    $$(`[data-id="${t.id}"].card-download-btn, #modalDownloadBtn`).forEach(btn => {
      btn.textContent = '⏳ Preparing...';
      btn.disabled = true;
    });

    try {
      // Try local file first (works when files are placed in /templates/)
      const res = await fetch(localPath, { method: 'HEAD' });
      if (res.ok) {
        triggerDownload(localPath, fileName);
        resetDownloadBtns(t);
        showToast(`✓ Downloading: ${t.title.slice(0, 38)}...`);
        return;
      }
    } catch (_) {
      // Local file not available — fall through to remote
    }

    // Fallback: fetch the raw file and download it as a blob
    // (keeps the download seamless with no GitHub URL ever shown)
    try {
      const res = await fetch(t.rawUrl);
      if (!res.ok) throw new Error('fetch failed');
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      triggerDownload(blobUrl, fileName);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
      showToast(`✓ Downloading: ${t.title.slice(0, 38)}...`);
    } catch (err) {
      showToast('⚠ Download failed. Please try again.');
    }

    resetDownloadBtns(t);
  }

  function triggerDownload(href, fileName) {
    const a = document.createElement('a');
    a.href = href;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function resetDownloadBtns(t) {
    const cardBtn = document.querySelector(`.card-download-btn[data-id="${t.id}"]`);
    if (cardBtn) { cardBtn.textContent = '↓ Download'; cardBtn.disabled = false; }
    const modalBtn = $('#modalDownloadBtn');
    if (modalBtn) { modalBtn.textContent = '↓ Download JSON Template'; modalBtn.disabled = false; }
  }


  /* ── Copy URL ──────────────────────────────────────── */
  function copyUrl(url) {
    navigator.clipboard.writeText(url).then(() => {
      const btn = $('#copyUrlBtn');
      if (btn) {
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = '📋 Copy';
          btn.classList.remove('copied');
        }, 2000);
      }
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✓ URL copied to clipboard');
    });
  }

  /* ── Show Toast ────────────────────────────────────── */
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* ── Bind Global Events ────────────────────────────── */
  function bindEvents() {
    // Search
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        state.searchQuery = e.target.value;
        renderGrid();
      }, 200));
    }

    // Modal overlay click
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Scroll to templates
    const scrollBtn = $('#scrollToTemplates');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        $('#filtersSection')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // How to use button
    const howToBtn = $('#howToBtn');
    if (howToBtn) {
      howToBtn.addEventListener('click', () => {
        document.querySelector('.how-section')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  /* ── Clear Filters (global) ────────────────────────── */
  window.clearFilters = function () {
    state.searchQuery    = '';
    state.activeCategory = 'all';
    state.activeDept     = 'All';
    if (searchInput) searchInput.value = '';
    $$('.filter-pill[data-category]').forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
    $$('.filter-pill[data-dept]').forEach(p => p.classList.toggle('active', p.dataset.dept === 'All'));
    renderGrid();
  };

  /* ── Utilities ─────────────────────────────────────── */
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function getFileName(filePath) {
    return filePath.split('/').pop();
  }

  /* ── Animate hero stats ────────────────────────────── */
  function animateCount(el, target, duration = 1200) {
    const start  = performance.now();
    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  /* ── Intersection Observer for hero stats ──────────── */
  function initStatCounters() {
    const statEls = $$('[data-count]');
    if (!statEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statEls.forEach(el => observer.observe(el));
  }

  /* ── Start ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initStatCounters();
  });

})();
