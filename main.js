// CURSOR
const dot = document.getElementById('cur-dot'),
      ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});
(function anim() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(anim);
})();

// MARQUEE
const skills = ['HTML','CSS','JavaScript','PHP','Python','TypeScript','React','Vue.js','Figma','WordPress','SQL','Godot','Bootstrap','Tailwind','Git'];
const track  = document.getElementById('marquee');
track.innerHTML = [...skills, ...skills].map(s => `<span class="marquee-item">${s}<span>✦</span></span>`).join('');

// REVEAL
const ios = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('up'); ios.unobserve(e.target); }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ios.observe(el));

// COUNT UP
function countUp(el, target, dur = 1600) {
  let s = null;
  requestAnimationFrame(function st(ts) {
    if (!s) s = ts;
    const p = Math.min((ts - s) / dur, 1);
    el.textContent = Math.round(p * target);
    if (p < 1) requestAnimationFrame(st);
  });
}
const statsObs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    const el = e.target.querySelector('.stat-num');
    if (el) countUp(el, +el.dataset.target);
    statsObs.unobserve(e.target);
  }
}), { threshold: 0.5 });
document.querySelectorAll('.stat-block').forEach(b => statsObs.observe(b));




