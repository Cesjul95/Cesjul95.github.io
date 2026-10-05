// Floating skills: chips drift gently and get pushed by the cursor/finger and by each other.
// Physics (Matter.js, vendored) loads only when the section is visible, and never with reduced motion.
(() => {
  const list = document.querySelector(".skills");
  if (!list || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

  const load = () => new Promise((ok, fail) => {
    if (window.Matter) return ok();
    const s = document.createElement("script");
    s.src = "assets/vendor/matter.min.js";
    s.onload = ok; s.onerror = fail;
    document.head.appendChild(s);
  });

  let started = false;
  new IntersectionObserver((entries, io) => {
    if (started || !entries.some((e) => e.isIntersecting)) return;
    started = true; io.disconnect();
    load().then(start).catch(() => {});
  }, { threshold: 0.15 }).observe(list);

  function start() {
    const { Engine, Bodies, Body, Composite } = Matter;
    const chips = [...list.children];

    // Measure the natural flow layout first, so each chip starts exactly where it already is.
    const base = list.getBoundingClientRect();
    const home = chips.map((el) => ({ x: el.offsetLeft + el.offsetWidth / 2, y: el.offsetTop + el.offsetHeight / 2, w: el.offsetWidth, h: el.offsetHeight }));
    const naturalH = list.offsetHeight;

    let W = base.width, H = Math.max(naturalH * 1.8, innerWidth < 600 ? 320 : 230);
    list.classList.add("physics");
    list.style.height = H + "px";
    document.querySelector(".hint")?.removeAttribute("hidden");

    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    const bodies = chips.map((el, i) => {
      const p = home[i];
      const b = Bodies.rectangle(p.x, p.y, p.w, p.h, { chamfer: { radius: p.h / 2 }, restitution: 0.7, friction: 0, frictionAir: 0.02, density: 0.001 });
      Body.setInertia(b, Infinity); // stay upright so the text remains readable
      b.seed = Math.random() * 100;
      Body.setVelocity(b, { x: (Math.random() - 0.5) * 3, y: Math.random() * 2.5 }); // initial nudge so they spread out
      return b;
    });
    Composite.add(engine.world, bodies);

    let walls = [];
    const buildWalls = () => {
      Composite.remove(engine.world, walls);
      const t = 80, o = { isStatic: true, restitution: 0.7, friction: 0 };
      walls = [
        Bodies.rectangle(W / 2, -t / 2, W + t * 2, t, o), Bodies.rectangle(W / 2, H + t / 2, W + t * 2, t, o),
        Bodies.rectangle(-t / 2, H / 2, t, H + t * 2, o), Bodies.rectangle(W + t / 2, H / 2, t, H + t * 2, o),
      ];
      Composite.add(engine.world, walls);
    };
    buildWalls();

    // Pointer: pushes chips away while it moves over the area; a tap gives a stronger shove.
    const ptr = { x: -999, y: -999, on: false };
    const rel = (e) => { const r = list.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const shove = (x, y, R, k) => bodies.forEach((b) => {
      const dx = b.position.x - x, dy = b.position.y - y, d = Math.hypot(dx, dy);
      if (d < R && d > 0.01) { const f = (1 - d / R) * k * b.mass; Body.applyForce(b, b.position, { x: (dx / d) * f, y: (dy / d) * f }); }
    });
    list.addEventListener("pointermove", (e) => { Object.assign(ptr, rel(e), { on: true }); });
    list.addEventListener("pointerleave", () => { ptr.on = false; });
    list.addEventListener("pointerdown", (e) => { const p = rel(e); shove(p.x, p.y, 140, 0.06); });

    // Keep the field correct if the layout changes (resize, orientation).
    new ResizeObserver(() => {
      const w = list.clientWidth;
      if (Math.abs(w - W) < 1) return;
      W = w; buildWalls();
      bodies.forEach((b) => { const hw = (b.bounds.max.x - b.bounds.min.x) / 2; if (b.position.x + hw > W) Body.setPosition(b, { x: W - hw - 2, y: b.position.y }); });
    }).observe(list);

    let visible = true, last = performance.now();
    new IntersectionObserver((e) => { visible = e[0].isIntersecting; if (visible) last = performance.now(); }).observe(list);

    (function frame(now) {
      requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      const dt = Math.min(now - last, 1000 / 60); last = now;
      bodies.forEach((b) => { // slow wandering so they feel like they float
        const m = b.mass * 0.00003;
        Body.applyForce(b, b.position, { x: Math.sin(now * 0.0006 + b.seed) * m, y: Math.cos(now * 0.0008 + b.seed * 1.7) * m });
      });
      if (ptr.on) shove(ptr.x, ptr.y, 120, 0.003);
      Engine.update(engine, dt);
      bodies.forEach((b, i) => {
        const p = home[i];
        chips[i].style.transform = `translate(${(b.position.x - p.w / 2).toFixed(1)}px, ${(b.position.y - p.h / 2).toFixed(1)}px)`;
      });
    })(performance.now());
  }
})();
