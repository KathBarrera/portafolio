"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { PROFILE } from "@/lib/data";
import { asset } from "@/lib/asset";
import { prefersReducedMotion } from "@/lib/hooks";
import { scrollToTarget } from "@/lib/scroll";

const css = `
.hero{position:relative;min-height:100svh;overflow:clip;isolation:isolate;background:var(--paper)}
.hero-ghost{position:absolute;left:50%;top:clamp(110px,22svh,260px);transform:translateX(-50%);z-index:-1;margin:0;
  font-weight:800;letter-spacing:-.05em;line-height:.8;white-space:nowrap;font-size:clamp(76px,15vw,300px);
  color:transparent;-webkit-text-stroke:1.2px rgba(75,29,63,.16);user-select:none;
  animation:ghost-in 1.8s var(--ease) both .1s}
@keyframes ghost-in{from{opacity:0;letter-spacing:.02em}to{opacity:1;letter-spacing:-.05em}}

/* centre piece: arch + monogram + floating data chips (replaces the reference's portrait video) */
.hero-stage{position:absolute;left:50%;bottom:0;width:min(34vw,460px);height:min(78svh,740px);transform:translateX(-50%);
  animation:stage-in 1.6s var(--ease) both}
@keyframes stage-in{from{opacity:0;transform:translate(-50%,28px)}to{opacity:1;transform:translate(-50%,0)}}
.arch{position:absolute;inset:0 6% 0;border-radius:999px 999px 0 0;overflow:hidden;
  background:linear-gradient(180deg,var(--rose) 0%,#c98f9c 55%,var(--ink) 100%)}
.arch::before{content:"";position:absolute;inset:0;background:
  radial-gradient(120% 70% at 50% 0%,rgba(255,255,255,.35),transparent 60%),
  repeating-linear-gradient(0deg,rgba(255,255,255,.06) 0 1px,transparent 1px 28px)}
.arch-mono{position:absolute;left:0;right:0;top:20%;text-align:center;font-family:var(--font-serif);font-style:italic;
  font-size:clamp(150px,19vw,280px);line-height:1;color:var(--paper);letter-spacing:-.04em;text-shadow:0 30px 60px rgba(75,29,63,.35)}
.arch-bars{position:absolute;left:12%;right:12%;bottom:0;height:34%;display:flex;align-items:flex-end;gap:5%}
.arch-bars i{flex:1;border-radius:10px 10px 0 0;background:rgba(244,236,223,.18);box-shadow:inset 0 0 0 1px rgba(244,236,223,.22);
  transform-origin:bottom;animation:bar-up 1.6s var(--ease) both;animation-delay:calc(.5s + var(--i) * .08s)}
@keyframes bar-up{from{transform:scaleY(.05)}}
.chipf{position:absolute;display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:14px;background:var(--card);
  box-shadow:var(--hair),0 18px 40px -22px rgba(75,29,63,.45);font:500 12px/1 var(--font-mono);color:var(--ink);white-space:nowrap;
  animation:chip-in 1.2s var(--ease) both,float 6s ease-in-out infinite;animation-delay:calc(.9s + var(--i) * .12s),calc(var(--i) * -1.4s)}
.chipf b{font:700 17px/1 var(--font-sans);letter-spacing:-.03em}
.chipf small{font-size:10px;color:var(--mute);text-transform:uppercase}
.chipf .dot{width:8px;height:8px;border-radius:50%;background:var(--rose);box-shadow:0 0 0 3px rgba(216,167,177,.35)}
@keyframes chip-in{from{opacity:0;transform:translateY(14px) scale(.96)}}
@keyframes float{50%{translate:0 -8px}}

.hero-copy{position:absolute;left:var(--gutter);bottom:clamp(40px,10svh,120px);z-index:2;max-width:min(30vw,470px)}
.hero-kicker{font:500 12px/1.4 var(--font-mono);text-transform:uppercase;letter-spacing:.02em;color:var(--mute);margin:0 0 18px}
.hero-kicker b{color:var(--ink);font-weight:500}
.h1{margin:0;font-weight:700;letter-spacing:-.045em;line-height:.95;font-size:clamp(46px,5.6vw,100px);color:var(--ink)}
.hero-line{display:block;overflow:hidden;padding-bottom:.08em;margin-bottom:-.08em}
.hero-line>span{display:block;animation:line-up 1.2s var(--ease) both;animation-delay:calc(.25s + var(--i) * .1s)}
@keyframes line-up{from{transform:translateY(105%)}to{transform:none}}
.hero-roles{margin:20px 0 0;color:var(--ink-2);font-size:15px;line-height:1.5;max-width:36ch}
.hero-ctas{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.hero-fade{animation:fade-up 1.2s var(--ease) both;animation-delay:calc(.5s + var(--i) * .08s)}
@keyframes fade-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.hero-side{position:absolute;right:var(--gutter);bottom:clamp(40px,10svh,120px);z-index:2;display:flex;flex-direction:column;align-items:flex-end;gap:18px;text-align:right}
.hero-side p,.hero-scroll span{margin:0;font:500 12px/1.5 var(--font-mono);text-transform:uppercase;color:var(--mute)}
.hero-side .otw{color:var(--paper)}
.otw{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;background:var(--ink);color:var(--paper);font:500 11.5px/1.3 var(--font-mono);text-transform:uppercase;max-width:250px;text-align:left}
.otw b{flex:none;width:8px;height:8px;border-radius:50%;background:var(--rose);animation:otw 1.8s var(--ease) infinite}
@keyframes otw{0%{box-shadow:0 0 0 0 rgba(216,167,177,.7)}100%{box-shadow:0 0 0 8px rgba(216,167,177,0)}}
.hero-scroll{display:inline-flex;align-items:center;gap:10px}
.hero-scroll i{width:1px;height:34px;background:var(--line);position:relative;overflow:hidden}
.hero-scroll i::after{content:"";position:absolute;left:0;top:-40%;width:1px;height:40%;background:var(--ink);animation:drip 2.2s var(--ease) infinite}
@keyframes drip{to{top:100%}}
@media (max-width:899px){
  .hero{display:flex;flex-direction:column;padding-top:var(--nav-h);min-height:auto}
  .hero-ghost{top:calc(var(--nav-h) + 6svh)}
  .hero-stage{position:relative;left:auto;bottom:auto;transform:none;width:min(64vw,360px);height:54svh;max-height:540px;margin:0 auto;animation-name:stage-in-m}
  @keyframes stage-in-m{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
  .arch-mono{font-size:clamp(130px,40vw,220px)}
  .chipf{padding:8px 11px}
  .chipf b{font-size:15px}
  .hero-copy{position:relative;left:auto;bottom:auto;max-width:none;padding:28px var(--gutter) 56px}
  .hero-side{display:none}
}
@media (min-width:900px) and (max-width:1180px){.hero-copy{max-width:30vw}.h1{font-size:clamp(42px,5.2vw,68px)}}
`;

/** Floating data chips around the arch: facts from the profile. */
const CHIPS: { label: string; value: string; style: React.CSSProperties }[] = [
  { label: "clientes", value: "30.000", style: { left: "-14%", top: "30%" } },
  { label: "test", value: "χ²  ·  VIF", style: { right: "-12%", top: "18%" } },
  { label: "modelo", value: "SHAP", style: { right: "-8%", top: "56%" } },
  { label: "deploy", value: "K8s", style: { left: "-6%", top: "68%" } },
];

const BARS = [38, 62, 48, 80, 58, 92, 70];

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  // subtle parallax on the floating chips
  useEffect(() => {
    const el = stage.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.querySelectorAll<HTMLElement>("[data-depth]").forEach((c) => {
          const d = Number(c.dataset.depth);
          c.style.transform = `translate3d(${(x * d).toFixed(1)}px,${(y * d).toFixed(1)}px,0)`;
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToTarget(id);
  };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <style>{css}</style>
      <p className="hero-ghost" aria-hidden="true">
        {PROFILE.firstName.toUpperCase()}
      </p>

      <div ref={stage} className="hero-stage" aria-hidden="true">
        <div className="arch">
          <span className="arch-mono">kb</span>
          <div className="arch-bars">
            {BARS.map((h, i) => (
              <i key={i} style={{ height: `${h}%`, ["--i" as string]: i }} />
            ))}
          </div>
        </div>
        {CHIPS.map((c, i) => (
          <span key={c.label} data-depth={8 + i * 5} style={{ position: "absolute", ...c.style }}>
            <span className="chipf" style={{ position: "relative", ["--i" as string]: i }}>
              <span className="dot" />
              <span>
                <small>{c.label}</small>
                <br />
                <b>{c.value}</b>
              </span>
            </span>
          </span>
        ))}
      </div>

      <div className="hero-copy">
        <p className="hero-kicker hero-fade" style={{ ["--i" as string]: 0 }}>
          <b>{PROFILE.name}</b> · {PROFILE.location}
        </p>
        <h1 id="hero-title" className="h1">
          <span className="hero-line">
            <span style={{ ["--i" as string]: 0 }}>Ciencia</span>
          </span>
          <span className="hero-line">
            <span style={{ ["--i" as string]: 1 }}>
              de <em>datos.</em>
            </span>
          </span>
        </h1>
        <p className="hero-roles hero-fade" style={{ ["--i" as string]: 1 }}>
          {PROFILE.roles.join(" · ")}
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary hero-fade" style={{ ["--i" as string]: 2 }} onClick={(e) => go(e, "#work")}>
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-ghost hero-fade" style={{ ["--i" as string]: 3 }} onClick={(e) => go(e, "#contact")}>
            Hablemos
          </a>
          <a href={asset(PROFILE.resume)} download className="btn btn-ghost hero-fade" style={{ ["--i" as string]: 4 }}>
            CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-side hero-fade" style={{ ["--i" as string]: 5 }}>
        <p className="otw">
          <b aria-hidden="true" />
          {PROFILE.openTo}
        </p>
        <p>
          {PROFILE.current.title}
          <br />@ {PROFILE.current.org}
        </p>
        <a href="#about" className="hero-scroll" onClick={(e) => go(e, "#about")}>
          <span>Desliza</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
