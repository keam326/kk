/* ============================================
   Portfolio Stylesheet — Alex Chen
   ============================================ */

:root {
  --bg: #0f1117;
  --bg-soft: #161a23;
  --card: #1c2130;
  --border: #2a3040;
  --text: #e8eaf0;
  --muted: #9aa3b5;
  --accent: #6c8cff;
  --accent-2: #5eead4;
  --radius: 14px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ---------- Nav ---------- */
nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(15,17,23,.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1000px; margin: 0 auto; padding: 14px 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.logo { font-weight: 700; color: var(--text); }
.logo span { color: var(--accent); }
.nav-links { display: flex; gap: 22px; list-style: none; }
.nav-links a { color: var(--muted); font-size: .95rem; }
.nav-links a:hover { color: var(--text); text-decoration: none; }

/* ---------- Hero ---------- */
.hero {
  max-width: 1000px; margin: 0 auto; padding: 110px 24px 80px;
}
.hero .hello {
  color: var(--accent-2);
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 1rem; margin-bottom: 12px;
}
.hero h1 { font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.15; }
.hero h1 span { color: var(--accent); }
.hero p.sub {
  color: var(--muted); font-size: 1.15rem;
  max-width: 600px; margin: 18px 0 30px;
}
.btn-row { display: flex; gap: 14px; flex-wrap: wrap; }
.btn-row-center { justify-content: center; }
.btn {
  display: inline-block; padding: 12px 22px; border-radius: 10px;
  font-weight: 600; font-size: .95rem;
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn:hover { text-decoration: none; transform: translateY(-2px); }
.btn-primary { background: var(--accent); color: #0f1117; }
.btn-primary:hover { box-shadow: 0 8px 24px rgba(108,140,255,.35); }
.btn-ghost { border: 1px solid var(--border); color: var(--text); }
.btn-ghost:hover { border-color: var(--accent); }

/* ---------- Sections ---------- */
section { max-width: 1000px; margin: 0 auto; padding: 70px 24px; }
.section-title {
  font-size: 1.6rem; margin-bottom: 8px;
  display: flex; align-items: center; gap: 12px;
}
.section-title::after {
  content: ""; flex: 1; height: 1px; background: var(--border);
}
.section-sub { color: var(--muted); margin-bottom: 34px; }

/* ---------- About ---------- */
.about-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
.about-grid p { color: var(--muted); margin-bottom: 16px; }
.skills h3 { font-size: 1rem; margin-bottom: 12px; color: var(--text); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  background: var(--card); border: 1px solid var(--border);
  padding: 6px 12px; border-radius: 8px; font-size: .85rem;
  font-family: "SF Mono", Menlo, Consolas, monospace; color: var(--accent-2);
}

/* ---------- Projects ---------- */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 26px;
  transition: transform .18s ease, border-color .18s ease;
}
.card:hover { transform: translateY(-5px); border-color: var(--accent); }
.card .emoji { font-size: 1.8rem; }
.card h3 { margin: 12px 0 8px; font-size: 1.1rem; }
.card p { color: var(--muted); font-size: .93rem; margin-bottom: 14px; }
.card .tech {
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: .78rem; color: var(--accent-2); margin-bottom: 14px;
}
.card .links { display: flex; gap: 16px; font-size: .9rem; font-weight: 600; }

/* ---------- Experience / Education ---------- */
.timeline { border-left: 2px solid var(--border); padding-left: 26px; }
.timeline-item { position: relative; margin-bottom: 34px; }
.timeline-item::before {
  content: ""; position: absolute; left: -33px; top: 6px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 0 4px rgba(108,140,255,.2);
}
.timeline-item h3 { font-size: 1.05rem; }
.timeline-item .meta {
  color: var(--accent-2); font-size: .85rem;
  font-family: "SF Mono", Menlo, Consolas, monospace; margin: 4px 0 8px;
}
.timeline-item ul { color: var(--muted); padding-left: 18px; }
.timeline-item li { margin-bottom: 4px; }

/* ---------- Contact ---------- */
.contact-box {
  background: var(--bg-soft); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 50px 30px; text-align: center;
}
.contact-box h2 { font-size: 1.7rem; margin-bottom: 10px; }
.contact-box p { color: var(--muted); margin-bottom: 24px; }

/* ---------- Footer ---------- */
footer {
  text-align: center; color: var(--muted); font-size: .85rem;
  padding: 30px 24px; border-top: 1px solid var(--border);
}

/* ---------- Responsive ---------- */
@media (max-width: 700px) {
  .about-grid { grid-template-columns: 1fr; }
  .hero-grid { grid-template-columns: 1fr; }
  .avatar { width: 180px; height: 180px; }
  .nav-links { display: none; }
}

/* ---------- Hero photo / avatar ---------- */
.hero-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  align-items: center;
}
.hero-photo { display: flex; justify-content: center; }
.avatar {
  position: relative;
  width: 240px; height: 240px;
  border-radius: 50%;
  border: 3px solid var(--accent);
  box-shadow: 0 0 0 8px rgba(108,140,255,.15), 0 20px 50px rgba(0,0,0,.45);
  overflow: hidden;
  background: var(--card);
}
.avatar img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.avatar-initials {
  position: absolute; inset: 0;
  display: none;
  align-items: center; justify-content: center;
  font-size: 4.5rem; font-weight: 700;
  color: var(--accent);
  background: var(--card);
  letter-spacing: 2px;
}
.avatar.no-img .avatar-initials { display: flex; }