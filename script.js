// Paulie Yap Photography — gallery interactivity (categories, horizontal scroll, lightbox).
// Vanilla JS port of the Portfolio design's category/lightbox behavior — no build step.

(function () {
  const CATEGORIES = [
    { name: 'LANDSCAPE', group: 'FILM', items: [
      'R1-08053-0021-9cc1eb2d.JPG', 'R1-08053-0027-8209c95a.JPG', 'R1-08053-0028-9e8fc2da.JPG', 'R1-08054-003A-6fa307e2.JPG',
      'R1-04651-020A-70673c6d.JPG', 'R1-04651-014A-1db4cffd.JPG', 'R1-08054-023A.JPG', 'R1-08054-026A.JPG',
      'R1-08054-025A.JPG', 'R1-08054-005A-f47ed2d3.JPG', 'R1-08054-027A-4d68a381.JPG', 'R1-08054-024A.JPG',
      'R1-04651-018A-b8bef8b9.JPG', 'R1-04062-007A.JPG', '000072780007.jpg', 'R1-08052-0034-cc09fb0d.JPG',
      '000072780020-7386ebbb.jpg', '000072780013-c66a2285.jpg', '000072780012-5f4aaa13.jpg', '000072780004-a3243ded.jpg',
      '000072780021.jpg', 'R1-01128-0023-23d92c8c.JPG', 'R1-01128-0024-fd86a999.JPG', '000001-0177e1e6.JPG',
      '000042-b769bad7.JPG', '000054-1c5fd65b.JPG', '000058-4238fb7a.JPG', '000059-08a562e6.JPG',
      '000043.JPG', '000062.JPG'
    ]},
    { name: 'STREET', group: 'FILM', items: [
      '001196020029.tif-d10e502e.jpeg', 'C099044-R1-20-21.JPG', 'C099043-R1-28-8A.JPG', 'C099043-R1-03-33A.JPG',
      'R1-04423-0023.JPG', 'R1-00370-024A-41f43b2b.JPG', 'R1-00370-031A-dad46b2d.JPG', '00000021-a03256c2.JPG',
      'R1-09619-0023-5082613e.JPG', 'R1-04423-0024-0cb06390.JPG', 'R1-06292-0008-7abe1b8e.JPG'
    ]},
    { name: 'PORTRAITS', group: 'FILM', items: [
      'R1-08919-030A.JPG', 'R1-09619-0009-711e0a03.JPG', 'R1-09619-0008-67ccc177.JPG', 'R1-09619-0012-d765233f.JPG',
      'R1-07371-019A-4f234303.JPG', 'R1-09619-0011-90e8df02.JPG', 'R1-07371-021A-76238b41.JPG', '000013-8dc5c95c.JPG',
      'R1-07371-022A-b02a9636.JPG', 'R1-01128-0012.JPG', 'R1-01128-0001.JPG', 'R1-08919-029A.JPG',
      'R1-04062-013A.JPG', 'R1-07371-015A-f88380e7.JPG', 'R1-07371-018A-2519f9e7.JPG', 'R1-02656-028A.JPG',
      'R1-01128-0005.JPG'
    ]},
    { name: 'STILL LIFE', group: 'FILM', items: [
      'R1-08054-007A-0cd63e60.JPG', 'R1-08054-021A-7cf2f523.JPG', 'R1-05409-019A.JPG', '001196010035.tif.jpeg',
      'R1-08052-0023-8441f4fd.JPG', 'R1-04422-0024-5f3d28ea.JPG', 'R1-02656-031A.JPG'
    ]},
    { name: 'STREET', group: 'DIGITAL', items: [
      'paulieyap_edited-5181.jpg', 'DSCF3537.jpg', 'paulieyap_edited-5239.jpg', 'paulieyap_edited-5244.jpg',
      'paulieyap_edited-4990.jpg', 'paulieyap_edited-5029.jpg', 'edited-.jpg', 'py_edited2025-8124.jpg',
      'py_edited2025-8141.jpg', 'py_edited2025-8144.jpg', 'py_edited2025-8150.jpg', 'py_edited-0234.jpg',
      'py_edited-0435.jpg', 'py_edited-0629-compressed.jpg'
    ]},
    { name: 'PORTRAITS: COUPLES', group: 'DIGITAL', items: [
      'DSCF2019.jpg', 'DSCF2024.jpg', 'DSCF2047.jpg', 'DSCF2048.jpg', 'DSCF2051.jpg', 'DSCF2058.jpg',
      'DSCF2072.jpg', 'DSCF2088.jpg', 'DSCF2095.jpg', 'DSCF2099.jpg', 'DSCF2101.jpg', 'DSCF2113.jpg',
      'DSCF2128.jpg', 'DSCF2114.jpg', 'DSCF2090.jpg', 'DSCF2107.jpg', 'DSCF2111.jpg', 'py_edited2025-1500.jpg',
      'py_edited2025-1499.jpg'
    ]},
    { name: 'PORTRAITS: UNHOLY', group: 'DIGITAL', items: [
      'paulieyap_edited-5668.jpg', 'paulieyap_edited-5496.jpg', 'paulieyap_edited-5400.jpg', 'paulieyap_edited-5561.jpg',
      'paulieyap_edited-5545.jpg', 'paulieyap_edited-5571-3.jpg', 'paulieyap_edited-5666.jpg', 'paulieyap_edited-5436.jpg',
      'paulieyap_edited-5539.jpg', 'paulieyap_edited-5541.jpg', 'paulieyap_edited-5540.jpg', 'paulieyap_edited-5655.jpg',
      'paulieyap_edited-5456.jpg'
    ]},
    { name: 'MUSIC', group: 'DIGITAL', items: [
      'second pic_resized-e5e56bd8.jpg', 'edited 3-.jpg', 'edited 2-.jpg', 'edited--8972948d.jpg', 'edited-04539.jpg',
      'edited 4-04542.jpg', 'edited-04454.jpg', 'edited-04503.jpg', 'edited-04531.jpg', 'first pic.jpg',
      'edited 4-.jpg', 'edited 5-.jpg', 'edited-04469.jpg', 'edited-04498.jpg', 'edited-04514.jpg',
      'paulie-edited-03451.jpg', 'paulie-edited-03453.jpg', 'paulie-edited-03539.jpg', 'edited 6-.jpg'
    ]}
  ];

  const IMAGE_DIR = 'images/';
  const state = { view: 'home', activeCat: null, lightboxCat: null, lightboxIdx: null };

  const galleryHome = document.getElementById('gallery-home');
  const categoryView = document.getElementById('category-view');
  const categoryGrid = document.getElementById('category-grid');
  const categoryTitle = document.getElementById('category-title');
  const categoryCount = document.getElementById('category-count');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    }
    if (children) children.forEach((c) => c && node.appendChild(c));
    return node;
  }

  function photo(catIndex, itemIndex, size) {
    const filename = CATEGORIES[catIndex].items[itemIndex];
    const wrap = el('div', { class: 'photo', style: size ? `width:${size}` : '' });
    const img = el('img', {
      src: IMAGE_DIR + filename,
      alt: '',
      loading: 'lazy',
      'data-name': filename
    });
    img.addEventListener('error', () => photoMissing(img, filename));
    wrap.appendChild(img);
    wrap.addEventListener('click', () => openLightbox(catIndex, itemIndex));
    return wrap;
  }

  function photoMissing(img, label) {
    const ph = el('div', { class: 'ph' }, [el('span', { text: label })]);
    img.replaceWith(ph);
  }

  function renderHome() {
    galleryHome.innerHTML = '';
    ['FILM', 'DIGITAL'].forEach((groupName) => {
      const catsInGroup = CATEGORIES
        .map((cat, i) => ({ cat, i }))
        .filter(({ cat }) => cat.group === groupName);
      if (!catsInGroup.length) return;

      const groupEl = el('div', { class: 'gallery-group' });
      groupEl.appendChild(el('h2', { class: 'group-title', text: groupName }));

      catsInGroup.forEach(({ cat, i }) => {
        const block = el('div', { class: 'cat-block' });
        const header = el('div', { class: 'cat-header' }, [
          el('h3', { class: 'cat-name', text: cat.name + ' →' }),
          el('span', { class: 'cat-count', text: String(cat.items.length) })
        ]);
        header.addEventListener('click', () => openCategory(i));
        block.appendChild(header);

        const row = el('div', { class: 'cat-row' });
        const scroller = el('div', { class: 'hscroll', id: 'hscroll-' + i });
        cat.items.forEach((_, itemIndex) => scroller.appendChild(photo(i, itemIndex)));
        const btnLeft = el('button', { class: 'btn btn-icon hscroll-arrow hscroll-arrow-left', type: 'button', text: '‹' });
        const btnRight = el('button', { class: 'btn btn-icon hscroll-arrow hscroll-arrow-right', type: 'button', text: '›' });
        btnLeft.addEventListener('click', () => scroller.scrollBy({ left: -480, behavior: 'smooth' }));
        btnRight.addEventListener('click', () => scroller.scrollBy({ left: 480, behavior: 'smooth' }));
        row.appendChild(btnLeft);
        row.appendChild(scroller);
        row.appendChild(btnRight);
        block.appendChild(row);

        groupEl.appendChild(block);
      });

      galleryHome.appendChild(groupEl);
    });
  }

  function openCategory(catIndex) {
    state.view = 'category';
    state.activeCat = catIndex;
    const cat = CATEGORIES[catIndex];
    categoryTitle.textContent = cat.name;
    categoryCount.textContent = cat.items.length;
    categoryGrid.innerHTML = '';
    cat.items.forEach((_, itemIndex) => categoryGrid.appendChild(photo(catIndex, itemIndex)));
    categoryView.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeCategory() {
    state.view = 'home';
    state.activeCat = null;
    categoryView.hidden = true;
    document.body.style.overflow = '';
  }

  function openLightbox(catIndex, itemIndex) {
    state.lightboxCat = catIndex;
    state.lightboxIdx = itemIndex;
    renderLightbox();
    lightbox.hidden = false;
  }

  function renderLightbox() {
    const filename = CATEGORIES[state.lightboxCat].items[state.lightboxIdx];
    lightboxImg.src = IMAGE_DIR + filename;
    lightboxImg.alt = filename;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    state.lightboxCat = null;
    state.lightboxIdx = null;
  }

  function lightboxStep(delta) {
    const items = CATEGORIES[state.lightboxCat].items;
    state.lightboxIdx = (state.lightboxIdx + delta + items.length) % items.length;
    renderLightbox();
  }

  document.getElementById('category-back').addEventListener('click', closeCategory);
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => lightboxStep(-1));
  document.getElementById('lightbox-next').addEventListener('click', () => lightboxStep(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.hidden) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') lightboxStep(-1);
      else if (e.key === 'ArrowRight') lightboxStep(1);
    } else if (!categoryView.hidden && e.key === 'Escape') {
      closeCategory();
    }
  });

  document.querySelectorAll('img[data-placeholder-label]').forEach((img) => {
    img.addEventListener('error', () => photoMissing(img, img.dataset.placeholderLabel));
  });

  renderHome();
})();
