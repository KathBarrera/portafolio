/**
 * Mini interfaces ilustrativas para los paneles de Proyectos.
 * Solo sugieren qué hace cada proyecto: están rotuladas como "Boceto ilustrativo" y no son capturas.
 * Las únicas cifras que aparecen son las que figuran en los README de los proyectos.
 */

import { Fragment } from "react";

const css = `
.mu{position:relative;width:100%;height:100%;border-radius:18px;background:var(--paper);box-shadow:var(--hair);overflow:hidden;font-family:var(--font-sans);color:var(--ink)}
.mu-bar{display:flex;align-items:center;gap:6px;height:34px;padding:0 14px;border-bottom:1px solid var(--line);background:var(--card)}
.mu-bar i{width:8px;height:8px;border-radius:50%;background:var(--soft);box-shadow:inset 0 0 0 1px var(--line)}
.mu-bar i:first-child{background:var(--rose)}
.mu-bar span{margin-left:8px;font:500 10.5px/1 var(--font-mono);color:var(--mute)}
.mu-pad{position:absolute;inset:34px 0 0;padding:18px}
.mu-box{background:var(--card);border-radius:12px;box-shadow:var(--hair)}
.mu-lbl{font:500 9.5px/1 var(--font-mono);text-transform:uppercase;color:var(--mute)}
.mu-sk{height:7px;border-radius:4px;background:var(--soft)}
.mu-big{font-weight:700;letter-spacing:-.05em;line-height:1;margin-top:6px}
@keyframes mu-flow{to{stroke-dashoffset:-24}}
@keyframes mu-pulse{0%,100%{opacity:.35}50%{opacity:1}}
@keyframes mu-grow{from{transform:scaleY(.15)}}
@keyframes mu-growx{from{transform:scaleX(.1)}}
@keyframes mu-blink{50%{opacity:0}}
.mu-flow{stroke-dasharray:4 4;animation:mu-flow 1.2s linear infinite}
`;

function Bar({ title }: { title: string }) {
  return (
    <div className="mu-bar" aria-hidden="true">
      <i />
      <i />
      <i />
      <span>{title}</span>
    </div>
  );
}

/** 01 · Dash dashboard: KPIs, default rate by payment status, correlation heatmap. */
function CreditDash() {
  const heat = [
    [1, 0.8, 0.6, 0.2, 0.1],
    [0.8, 1, 0.7, 0.3, 0.1],
    [0.6, 0.7, 1, 0.4, 0.2],
    [0.2, 0.3, 0.4, 1, 0.5],
    [0.1, 0.1, 0.2, 0.5, 1],
  ];
  return (
    <>
      <Bar title="dash-credit-kv.onrender.com" />
      <div className="mu-pad" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 12 }}>
        <div className="mu-box" style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: 10, background: "var(--ink)" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} style={{ height: 6, borderRadius: 3, background: i === 3 ? "var(--rose)" : "rgba(244,236,223,.25)" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr 1fr", gap: 12, minHeight: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
            {[
              ["Clientes", "30.000"],
              ["Variables", "24"],
              ["Periodo", "2005"],
            ].map(([k, v]) => (
              <div key={k} className="mu-box" style={{ padding: "10px 12px" }}>
                <div className="mu-lbl">{k}</div>
                <div className="mu-big" style={{ fontSize: 20 }}>{v}</div>
              </div>
            ))}
          </div>
          <div className="mu-box" style={{ padding: 12, display: "flex", flexDirection: "column" }}>
            <div className="mu-lbl">Incumplimiento por estado de pago</div>
            <div style={{ flex: 1, display: "flex", gap: 6, alignItems: "flex-end", marginTop: 10 }}>
              {[14, 18, 22, 34, 52, 66, 72, 78].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: i > 3 ? "var(--ink)" : "var(--rose)", borderRadius: 3, transformOrigin: "bottom", animation: `mu-grow 1.2s ${(i * 0.06).toFixed(2)}s var(--ease) both` }} />
              ))}
            </div>
          </div>
          <div className="mu-box" style={{ padding: 12, display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,14px)", gap: 2 }}>
              {heat.flat().map((v, i) => (
                <span key={i} style={{ width: 14, height: 14, borderRadius: 2, background: `rgba(75,29,63,${(0.08 + v * 0.85).toFixed(2)})` }} />
              ))}
            </div>
            <div>
              <div className="mu-lbl">Spearman · χ² · VIF</div>
              {[80, 60, 70].map((w, i) => (
                <div key={i} className="mu-sk" style={{ marginTop: 8, width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/** 02 · MLOps pipeline: data → model → API → container → cluster, plus a drift monitor. */
function Pipeline() {
  const steps = ["datos", "modelo", "FastAPI", "Docker", "K8s"];
  const pts = [30, 32, 29, 31, 30, 33, 38, 44, 52, 58];
  const d = pts.map((y, i) => `${i === 0 ? "M" : "L"}${(i / (pts.length - 1)) * 100} ${70 - y}`).join(" ");
  return (
    <>
      <Bar title="heart-disease-mlops / ci-cd" />
      <div className="mu-pad" style={{ display: "grid", gridTemplateRows: "auto auto 1fr", gap: 12 }}>
        <div className="mu-box" style={{ padding: "16px 14px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
            <span style={{ position: "absolute", left: 10, right: 10, top: "50%", height: 1.5, background: "var(--line)" }} />
            <svg viewBox="0 0 100 2" preserveAspectRatio="none" style={{ position: "absolute", left: 10, right: 10, top: "calc(50% - 1px)", width: "calc(100% - 20px)", height: 2 }}>
              <path d="M0 1H100" stroke="var(--ink)" strokeWidth="2" className="mu-flow" vectorEffect="non-scaling-stroke" />
            </svg>
            {steps.map((t, i) => (
              <span key={t} style={{ position: "relative", display: "grid", justifyItems: "center", gap: 6 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: i === steps.length - 1 ? "var(--ink)" : "var(--card)", boxShadow: "inset 0 0 0 1.5px var(--ink)", animation: `mu-pulse 2.4s ${(i * 0.3).toFixed(1)}s infinite` }} />
              </span>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            {steps.map((t) => (
              <span key={t} className="mu-lbl" style={{ color: "var(--ink)" }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div className="mu-box" style={{ padding: "10px 12px", fontFamily: "var(--font-mono)", fontSize: 10.5, lineHeight: 1.6 }}>
            <div className="mu-lbl">POST /predict</div>
            <div style={{ marginTop: 6, color: "var(--mute)" }}>{"{ age: 54, chol: 239 }"}</div>
            <div style={{ color: "var(--ink)" }}>
              {"→ { riesgo: 0.71 }"}
              <span style={{ animation: "mu-blink 1s steps(1) infinite" }}>▍</span>
            </div>
          </div>
          <div className="mu-box" style={{ padding: "10px 12px" }}>
            <div className="mu-lbl">GitHub Actions</div>
            {["test", "build", "deploy"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 7, fontSize: 11.5 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--rose)", display: "grid", placeItems: "center", fontSize: 8, color: "var(--ink)" }}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="mu-box" style={{ padding: 12, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="mu-lbl">Monitoreo de deriva</span>
            <span className="mu-lbl" style={{ color: "var(--accent)" }}>● alerta</span>
          </div>
          <svg viewBox="0 0 100 70" preserveAspectRatio="none" style={{ flex: 1, width: "100%", marginTop: 8 }} aria-hidden="true">
            <path d="M0 30H100" stroke="var(--faint)" strokeDasharray="3 3" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
            <path d={`${d} L100 70 L0 70 Z`} fill="rgba(216,167,177,.3)" />
            <path d={d} fill="none" stroke="var(--ink)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
    </>
  );
}

/** 03 · Give Me Some Credit: SHAP importance bars + Python / R tabs. */
function Shap() {
  const feats: [string, number][] = [
    ["RevolvingUtilization", 92],
    ["Atrasos 30–59 días", 74],
    ["Edad", 58],
    ["Atrasos 90+ días", 52],
    ["DebtRatio", 36],
    ["Ingreso mensual", 28],
  ];
  return (
    <>
      <Bar title="give-me-some-credit / shap" />
      <div className="mu-pad" style={{ display: "grid", gridTemplateRows: "auto 1fr auto", gap: 12 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["Python · Jupyter Book", "R · bookdown"].map((t, i) => (
            <span key={t} className="mu-lbl" style={{ padding: "8px 10px", borderRadius: 999, background: i === 1 ? "var(--ink)" : "var(--card)", color: i === 1 ? "var(--paper)" : "var(--ink)", boxShadow: "var(--hair)" }}>
              {t}
            </span>
          ))}
        </div>
        <div className="mu-box" style={{ padding: 14, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <div className="mu-lbl">Importancia media |SHAP| · Random Forest</div>
          {feats.map(([k, v], i) => (
            <div key={k} style={{ display: "grid", gridTemplateColumns: "42% 1fr", alignItems: "center", gap: 10, fontSize: 11 }}>
              <span style={{ color: "var(--ink-2)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{k}</span>
              <span style={{ height: 12, borderRadius: 3, background: "var(--soft)" }}>
                <span style={{ display: "block", width: `${v}%`, height: "100%", borderRadius: 3, background: i < 2 ? "var(--ink)" : "var(--rose)", transformOrigin: "left", animation: `mu-growx 1.3s ${(i * 0.08).toFixed(2)}s var(--ease) both` }} />
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {["Hipótesis", "VIF", "Morosidad 2 años"].map((t) => (
            <div key={t} className="mu-box" style={{ padding: "10px 12px" }}>
              <div className="mu-lbl">{t}</div>
              <div className="mu-sk" style={{ marginTop: 8, width: "70%" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/** 04 · bookdown statistics book: sidebar + chapter with an equation. */
function Book() {
  return (
    <>
      <Bar title="métodos-estadísticos / gitbook" />
      <div className="mu-pad" style={{ display: "grid", gridTemplateColumns: "34% 1fr", gap: 12 }}>
        <div className="mu-box" style={{ padding: 12 }}>
          <div className="mu-lbl">Capítulos</div>
          {["Prefacio", "1 Introducción", "2 Probabilidad", "3 Inferencia", "4 Regresión", "Referencias"].map((t, i) => (
            <div key={t} style={{ marginTop: 9, fontSize: 11, padding: "4px 6px", borderRadius: 6, background: i === 3 ? "var(--soft)" : "transparent", color: i === 3 ? "var(--ink)" : "var(--mute)" }}>
              {t}
            </div>
          ))}
        </div>
        <div className="mu-box" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-.03em" }}>3 Inferencia</div>
          {[92, 84, 88, 60].map((w, i) => (
            <div key={i} className="mu-sk" style={{ width: `${w}%` }} />
          ))}
          <div style={{ margin: "6px auto", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)" }}>
            x̄ ± z<sub style={{ fontSize: 12 }}>α/2</sub> · σ/√n
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 56 }}>
            {[8, 18, 34, 58, 80, 92, 80, 58, 34, 18, 8].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? "var(--ink)" : "var(--rose)", borderRadius: 2, transformOrigin: "bottom", animation: `mu-grow 1.2s ${(i * 0.05).toFixed(2)}s var(--ease) both` }} />
            ))}
          </div>
          <div className="mu-lbl" style={{ marginTop: "auto" }}>Figura 3.1 · Ecuación (3.2) · [@ref]</div>
        </div>
      </div>
    </>
  );
}

/** 05 · Jupyter notebook: code cells and a pandas table. */
function Notebook() {
  return (
    <>
      <Bar title="modulo_1.ipynb" />
      <div className="mu-pad" style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-mono)", fontSize: 11 }}>
        {[
          ["[1]", "import numpy as np"],
          ["[2]", "np.random.seed(42)"],
          ["[3]", "df = pd.DataFrame(datos)"],
        ].map(([n, c]) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "34px 1fr", gap: 8, alignItems: "center" }}>
            <span style={{ color: "var(--mute)" }}>{n}</span>
            <span className="mu-box" style={{ padding: "9px 12px", color: "var(--ink)" }}>{c}</span>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "34px 1fr", gap: 8, flex: 1, minHeight: 0 }}>
          <span />
          <div className="mu-box" style={{ padding: 10, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "24px repeat(3,1fr)", gap: "6px 8px" }}>
              {["", "nombre", "edad", "nota"].map((h) => (
                <span key={h} style={{ fontWeight: 600, color: "var(--ink)" }}>{h}</span>
              ))}
              {Array.from({ length: 5 }, (_, r) => (
                <Fragment key={r}>
                  <span style={{ color: "var(--mute)" }}>{r}</span>
                  {[0, 1, 2].map((c) => (
                    <span key={`${r}-${c}`} className="mu-sk" style={{ alignSelf: "center", width: `${50 + ((r * 3 + c * 7) % 5) * 10}%`, background: c === 2 && r === 2 ? "var(--rose)" : "var(--soft)" }} />
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const MAP: Record<string, () => React.JSX.Element> = {
  "credit-dash": CreditDash,
  "heart-mlops": Pipeline,
  "give-me-credit": Shap,
  "stats-book": Book,
  "python-basics": Notebook,
};

export default function MiniUI({ id }: { id: string }) {
  const C = MAP[id] ?? CreditDash;
  return (
    <div className="mu">
      <style href="mini-ui" precedence="default">
        {css}
      </style>
      <C />
    </div>
  );
}
