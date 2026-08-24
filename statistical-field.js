(function () {
  const bg = document.querySelector('.stat-field-bg');
  if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const layers = [
    { el: bg.querySelector('.sf-glow'), factor: 10 },
    { el: bg.querySelector('.sf-cells'), factor: 7 },
    { el: bg.querySelector('.sf-dots'), factor: 5 },
    { el: bg.querySelector('.sf-curve-1'), factor: 8 },
    { el: bg.querySelector('.sf-curve-2'), factor: 6 },
    { el: bg.querySelector('.sf-curve-3'), factor: 4 }
  ].filter(x => x.el);

  let rx = 0;
  let ry = 0;
  let cx = 0;
  let cy = 0;
  let raf = null;

  function update() {
    cx += (rx - cx) * 0.08;
    cy += (ry - cy) * 0.08;

    for (const layer of layers) {
      const dx = cx * layer.factor;
      const dy = cy * layer.factor;
      layer.el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }

    raf = requestAnimationFrame(update);
  }

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    rx = x * 2;
    ry = y * 2;

    if (!raf) raf = requestAnimationFrame(update);
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    rx = 0;
    ry = 0;
  });
})();
