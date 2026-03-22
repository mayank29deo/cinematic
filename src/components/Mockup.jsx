import './Mockup.css'

/* ─── Browser frame wrapper ─────────────────────────────────────── */
function BrowserFrame({ url, children, className = '' }) {
  return (
    <div className={`mock-browser ${className}`}>
      <div className="mock-browser-bar">
        <span className="mock-dot mock-dot--r" />
        <span className="mock-dot mock-dot--y" />
        <span className="mock-dot mock-dot--g" />
        <span className="mock-url">{url}</span>
      </div>
      <div className="mock-browser-body">{children}</div>
    </div>
  )
}

/* ─── Phone frame wrapper ──────────────────────────────────────── */
function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`mock-phone ${className}`}>
      <div className="mock-phone-notch" />
      <div className="mock-phone-body">{children}</div>
    </div>
  )
}

/* ─── Terminal frame wrapper ───────────────────────────────────── */
function TerminalFrame({ children }) {
  return (
    <div className="mock-terminal">
      <div className="mock-terminal-bar">
        <span className="mock-dot mock-dot--r" />
        <span className="mock-dot mock-dot--y" />
        <span className="mock-dot mock-dot--g" />
        <span className="mock-terminal-title">zsh</span>
      </div>
      <div className="mock-terminal-body">{children}</div>
    </div>
  )
}

/* ─── Notebook frame wrapper ───────────────────────────────────── */
function NotebookFrame({ title, children }) {
  return (
    <div className="mock-notebook">
      <div className="mock-notebook-bar">
        <span className="mock-notebook-title">{title}</span>
      </div>
      <div className="mock-notebook-body">{children}</div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   STOCKD MOCKUP
═══════════════════════════════════════════════════════════════════ */
function StockdMockup() {
  return (
    <BrowserFrame url="stockd.vercel.app">
      {/* Index bar */}
      <div className="stockd-indices">
        <div className="stockd-index">
          <span className="stockd-index-name">NIFTY 50</span>
          <span className="stockd-index-val">22,456</span>
          <span className="stockd-index-chg stockd-up">▲ +1.24%</span>
        </div>
        <div className="stockd-index">
          <span className="stockd-index-name">SENSEX</span>
          <span className="stockd-index-val">73,847</span>
          <span className="stockd-index-chg stockd-up">▲ +0.82%</span>
        </div>
        <div className="stockd-index">
          <span className="stockd-index-name">BANK NIFTY</span>
          <span className="stockd-index-val">48,210</span>
          <span className="stockd-index-chg stockd-down">▼ −0.31%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="stockd-chart-wrap">
        <svg
          className="stockd-chart"
          viewBox="0 0 340 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,168,76,0.35)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path
            d="M0,60 C20,58 40,50 60,45 C80,40 100,52 120,40 C140,28 160,30 180,22 C200,14 220,20 240,16 C260,12 280,8 300,10 C320,12 330,14 340,12 L340,80 L0,80 Z"
            fill="url(#chartGrad)"
            className="stockd-area"
          />
          {/* Line */}
          <path
            d="M0,60 C20,58 40,50 60,45 C80,40 100,52 120,40 C140,28 160,30 180,22 C200,14 220,20 240,16 C260,12 280,8 300,10 C320,12 330,14 340,12"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            className="stockd-line"
          />
          {/* Current dot */}
          <circle cx="340" cy="12" r="2.5" fill="var(--gold)" className="stockd-dot" />
        </svg>
      </div>

      {/* Ticker */}
      <div className="stockd-ticker-wrap">
        <div className="stockd-ticker-track">
          {[
            { name: 'RELIANCE', chg: '+1.2%', up: true },
            { name: 'TCS', chg: '−0.4%', up: false },
            { name: 'INFY', chg: '+2.1%', up: true },
            { name: 'HDFC', chg: '+0.7%', up: true },
            { name: 'WIPRO', chg: '−0.9%', up: false },
            { name: 'ITC', chg: '+1.5%', up: true },
            { name: 'RELIANCE', chg: '+1.2%', up: true },
            { name: 'TCS', chg: '−0.4%', up: false },
            { name: 'INFY', chg: '+2.1%', up: true },
          ].map((s, i) => (
            <span key={i} className="stockd-tick-item">
              <span className="stockd-tick-name">{s.name}</span>
              <span className={`stockd-tick-chg ${s.up ? 'stockd-up' : 'stockd-down'}`}>
                {s.chg}
              </span>
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   KISANSAATHI MOCKUP
═══════════════════════════════════════════════════════════════════ */
function KisanSathiMockup() {
  return (
    <PhoneFrame>
      <div className="kisan-app">
        {/* Header */}
        <div className="kisan-header">
          <span className="kisan-icon">🌾</span>
          <div>
            <div className="kisan-app-name">Kisan Saathi</div>
            <div className="kisan-app-sub">किसान साथी</div>
          </div>
        </div>

        {/* Scan area */}
        <div className="kisan-scan-area">
          <div className="kisan-leaf-img" />
          <div className="kisan-scan-line" />
          <div className="kisan-scan-corners">
            <span className="kisan-corner kisan-corner--tl" />
            <span className="kisan-corner kisan-corner--tr" />
            <span className="kisan-corner kisan-corner--bl" />
            <span className="kisan-corner kisan-corner--br" />
          </div>
          <div className="kisan-scan-label">Scanning leaf…</div>
        </div>

        {/* Result */}
        <div className="kisan-result">
          <div className="kisan-result-title">AI Analysis: Leaf Blight</div>
          <div className="kisan-progress-wrap">
            <div className="kisan-progress-bar" />
          </div>
          <div className="kisan-confidence">94.2% confidence</div>
        </div>

        {/* Bottom nav */}
        <div className="kisan-nav">
          <span className="kisan-nav-item kisan-nav-item--active">🌿 Scan</span>
          <span className="kisan-nav-item">📈 Mandi</span>
          <span className="kisan-nav-item">🛒 Sell</span>
          <span className="kisan-nav-item">📚 Guide</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   PACKD MOCKUP
═══════════════════════════════════════════════════════════════════ */
function PackdMockup() {
  return (
    <PhoneFrame>
      <div className="packd-app">
        {/* Header */}
        <div className="packd-header">
          <span className="packd-logo">PACKD</span>
          <span className="packd-logo-emoji">💪</span>
        </div>

        {/* Today */}
        <div className="packd-section-label">Today's Activity</div>
        <div className="packd-stats-row">
          <div className="packd-stat-box">
            <span className="packd-stat-val packd-count-1">5.2 km</span>
            <span className="packd-stat-lbl">Distance</span>
          </div>
          <div className="packd-stat-box">
            <span className="packd-stat-val packd-count-2">320 kcal</span>
            <span className="packd-stat-lbl">Burned</span>
          </div>
          <div className="packd-stat-box">
            <span className="packd-stat-val packd-count-3">32 min</span>
            <span className="packd-stat-lbl">Duration</span>
          </div>
        </div>

        {/* Feed */}
        <div className="packd-section-label">Community Feed</div>
        <div className="packd-feed">
          <div className="packd-feed-card packd-feed-card--1">
            <div className="packd-feed-avatar packd-av--1">AR</div>
            <div>
              <div className="packd-feed-name">Alex R.</div>
              <div className="packd-feed-text">🏃 10km personal record!</div>
            </div>
            <span className="packd-feed-like">❤️ 24</span>
          </div>
          <div className="packd-feed-card packd-feed-card--2">
            <div className="packd-feed-avatar packd-av--2">SK</div>
            <div>
              <div className="packd-feed-name">Sara K.</div>
              <div className="packd-feed-text">🧘 Yoga streak: 30 days</div>
            </div>
            <span className="packd-feed-like">❤️ 41</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   STOCK INTEL MOCKUP
═══════════════════════════════════════════════════════════════════ */
function StockIntelMockup() {
  return (
    <BrowserFrame url="stock-intel-ten.vercel.app">
      <div className="intel-wrap">
        <div className="intel-header-row">
          <div>
            <div className="intel-company">RELIANCE INDUSTRIES</div>
            <div className="intel-exchange">NSE · RELIANCE</div>
          </div>
          <div className="intel-price-col">
            <div className="intel-price">₹2,847.50</div>
            <div className="intel-chg">+42.30 (+1.51%) ▲</div>
          </div>
        </div>

        {/* SVG chart */}
        <div className="intel-chart-wrap">
          <svg
            className="intel-chart"
            viewBox="0 0 320 70"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="intelGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(34,197,94,0.3)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,50 C15,48 25,42 40,36 C55,30 65,38 80,32 C95,26 108,18 120,22 C132,26 140,16 155,12 C170,8 182,20 195,16 C208,12 218,6 232,10 C246,14 255,22 268,18 C281,14 295,8 310,10 L320,8 L320,70 L0,70 Z"
              fill="url(#intelGrad)"
            />
            <path
              d="M0,50 C15,48 25,42 40,36 C55,30 65,38 80,32 C95,26 108,18 120,22 C132,26 140,16 155,12 C170,8 182,20 195,16 C208,12 218,6 232,10 C246,14 255,22 268,18 C281,14 295,8 310,10 L320,8"
              fill="none"
              stroke="#22c55e"
              strokeWidth="1.5"
              className="intel-line"
            />
          </svg>
        </div>

        {/* Key stats */}
        <div className="intel-stats">
          <div className="intel-stat-item">
            <span className="intel-stat-k">P/E Ratio</span>
            <span className="intel-stat-v">24.3</span>
          </div>
          <div className="intel-stat-item">
            <span className="intel-stat-k">52W High</span>
            <span className="intel-stat-v">₹3,025</span>
          </div>
          <div className="intel-stat-item">
            <span className="intel-stat-k">Volume</span>
            <span className="intel-stat-v">2.4M</span>
          </div>
          <div className="intel-stat-item">
            <span className="intel-stat-k">Mkt Cap</span>
            <span className="intel-stat-v">19.3L Cr</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   RESUME → PORTFOLIO MOCKUP
═══════════════════════════════════════════════════════════════════ */
function ResumeMockup() {
  const lines = [
    { text: '$ resume-to-portfolio upload resume.pdf', cls: 'term-cmd', delay: 0.1 },
    { text: '> Parsing document structure... ✓', cls: 'term-ok', delay: 0.6 },
    { text: '> Extracting sections... ✓', cls: 'term-ok', delay: 1.1 },
    { text: '> Generating React components...', cls: 'term-info', delay: 1.6 },
    { text: '> [████████████░░░] 82%', cls: 'term-prog', delay: 2.1 },
    { text: '> Deploying to Vercel...', cls: 'term-info', delay: 2.7 },
    { text: '✓ Live: your-name.vercel.app', cls: 'term-success', delay: 3.3 },
  ]
  return (
    <TerminalFrame>
      {lines.map((l, i) => (
        <div
          key={i}
          className={`term-line ${l.cls}`}
          style={{ animationDelay: `${l.delay}s` }}
        >
          {l.text}
        </div>
      ))}
    </TerminalFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   DIWALI SALES ANALYSIS MOCKUP
═══════════════════════════════════════════════════════════════════ */
function DiwaliMockup() {
  const bars = [
    { label: 'Women', pct: 82, delay: '0.3s' },
    { label: 'Men', pct: 62, delay: '0.5s' },
    { label: '26-35', pct: 74, delay: '0.7s' },
    { label: 'North', pct: 88, delay: '0.9s' },
    { label: 'Clothing', pct: 55, delay: '1.1s' },
  ]
  return (
    <NotebookFrame title="📓 diwali_analysis.ipynb">
      {/* Code cell */}
      <div className="nb-cell nb-cell--code">
        <div className="nb-in-label">In [1]:</div>
        <div className="nb-code">
          <span className="nb-kw">import</span>{' '}
          <span className="nb-mod">pandas</span>{' '}
          <span className="nb-kw">as</span>{' '}
          <span className="nb-mod">pd</span>
          <br />
          <span className="nb-var">df</span>{' '}
          <span className="nb-op">=</span>{' '}
          <span className="nb-fn">pd.read_csv</span>
          <span className="nb-paren">(</span>
          <span className="nb-str">'diwali_sales.csv'</span>
          <span className="nb-paren">)</span>
          <br />
          <span className="nb-var">top_seg</span>{' '}
          <span className="nb-op">=</span>{' '}
          <span className="nb-var">df</span>
          <span className="nb-op">.</span>
          <span className="nb-fn">groupby</span>
          <span className="nb-paren">(</span>
          <span className="nb-str">'Gender'</span>
          <span className="nb-paren">)</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="nb-chart">
        {bars.map(b => (
          <div key={b.label} className="nb-bar-row">
            <span className="nb-bar-label">{b.label}</span>
            <div className="nb-bar-track">
              <div
                className="nb-bar-fill"
                style={{ '--pct': `${b.pct}%`, animationDelay: b.delay }}
              />
            </div>
            <span className="nb-bar-val">{b.pct}%</span>
          </div>
        ))}
      </div>
    </NotebookFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   VEDANTU MOCKUP — Product analytics / funnel dashboard
═══════════════════════════════════════════════════════════════════ */
function VedantuMockup() {
  const funnel = [
    { label: 'Visitors',    val: '1.2M', pct: 100, delay: '0.3s' },
    { label: 'Sign-ups',    val: '284K', pct: 72,  delay: '0.5s' },
    { label: 'Trial Start', val: '91K',  pct: 48,  delay: '0.7s' },
    { label: 'Subscribed',  val: '22K',  pct: 28,  delay: '0.9s' },
  ]
  return (
    <BrowserFrame url="vedantu.com · analytics">
      <div className="vedantu-wrap">
        {/* Header */}
        <div className="vedantu-header">
          <div className="vedantu-title">Growth Dashboard</div>
          <div className="vedantu-badge">LIVE</div>
        </div>

        {/* KPI row */}
        <div className="vedantu-kpi-row">
          <div className="vedantu-kpi">
            <span className="vedantu-kpi-val vedantu-kpi--1">+18.4%</span>
            <span className="vedantu-kpi-lbl">Retention D30</span>
          </div>
          <div className="vedantu-kpi">
            <span className="vedantu-kpi-val vedantu-kpi--2">3.2×</span>
            <span className="vedantu-kpi-lbl">ARPU Growth</span>
          </div>
          <div className="vedantu-kpi">
            <span className="vedantu-kpi-val vedantu-kpi--3">A/B</span>
            <span className="vedantu-kpi-lbl">Tests Running</span>
          </div>
        </div>

        {/* Funnel */}
        <div className="vedantu-funnel-label">User Acquisition Funnel</div>
        {funnel.map(f => (
          <div key={f.label} className="vedantu-funnel-row">
            <span className="vedantu-funnel-name">{f.label}</span>
            <div className="vedantu-funnel-track">
              <div
                className="vedantu-funnel-bar"
                style={{ '--vpct': `${f.pct}%`, animationDelay: f.delay }}
              />
            </div>
            <span className="vedantu-funnel-val">{f.val}</span>
          </div>
        ))}

        {/* SQL query strip */}
        <div className="vedantu-sql">
          <span className="vedantu-sql-kw">SELECT</span> cohort, retention_d30{' '}
          <span className="vedantu-sql-kw">FROM</span> user_metrics
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   RIVERLINE MOCKUP — B2B product roadmap / GTM dashboard
═══════════════════════════════════════════════════════════════════ */
function RiverlineMockup() {
  const roadmap = [
    { feature: 'Market Research',    status: 'DONE',    delay: '0.2s' },
    { feature: 'Customer Interviews', status: 'DONE',   delay: '0.4s' },
    { feature: 'MVP Demo',            status: 'DONE',   delay: '0.6s' },
    { feature: 'GTM Positioning',     status: 'LIVE',   delay: '0.8s' },
    { feature: 'Sales Enablement',    status: 'BUILD',  delay: '1.0s' },
  ]
  return (
    <BrowserFrame url="riverline.ai · roadmap">
      <div className="river-wrap">
        {/* Header */}
        <div className="river-header">
          <span className="river-title">Product Roadmap</span>
          <span className="river-phase">Phase 1 — GTM</span>
        </div>

        {/* Roadmap list */}
        <div className="river-items">
          {roadmap.map(r => (
            <div key={r.feature} className="river-item" style={{ animationDelay: r.delay }}>
              <span className={`river-status river-status--${r.status.toLowerCase()}`}>
                {r.status === 'DONE' ? '✓' : r.status === 'LIVE' ? '●' : '○'}
              </span>
              <span className="river-feature">{r.feature}</span>
              <span className={`river-tag river-tag--${r.status.toLowerCase()}`}>{r.status}</span>
            </div>
          ))}
        </div>

        {/* Market insight strip */}
        <div className="river-insight">
          <span className="river-insight-label">MARKET SIGNAL</span>
          <span className="river-insight-text">
            B2B segment TAM: ₹4,200 Cr · Competitive gap identified
          </span>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SAIL MOCKUP — Distribution monitoring dashboard (React + SQL)
═══════════════════════════════════════════════════════════════════ */
function SAILMockup() {
  return (
    <BrowserFrame url="bsl-monitor · distribution">
      <div className="sail-wrap">
        {/* Header */}
        <div className="sail-header">
          <span className="sail-title">BSL Distribution Monitor</span>
          <span className="sail-live">● REALTIME</span>
        </div>

        {/* Metric row */}
        <div className="sail-metrics">
          <div className="sail-metric">
            <span className="sail-metric-val sail-metric--1">94.7%</span>
            <span className="sail-metric-lbl">Dispatch Rate</span>
          </div>
          <div className="sail-metric">
            <span className="sail-metric-val sail-metric--2">+2.8%</span>
            <span className="sail-metric-lbl">Efficiency Gain</span>
          </div>
          <div className="sail-metric">
            <span className="sail-metric-val sail-metric--3">12</span>
            <span className="sail-metric-lbl">Zones Active</span>
          </div>
        </div>

        {/* SVG distribution chart */}
        <div className="sail-chart-wrap">
          <svg className="sail-chart" viewBox="0 0 300 55" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sailGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(201,168,76,0.3)" />
                <stop offset="100%" stopColor="rgba(201,168,76,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C20,38 35,32 50,30 C65,28 75,36 90,28 C105,20 115,24 130,18 C145,12 158,22 172,16 C186,10 198,14 212,10 C226,6 240,8 254,8 C268,8 280,10 300,8 L300,55 L0,55 Z"
              fill="url(#sailGrad)"
              className="sail-area"
            />
            <path
              d="M0,40 C20,38 35,32 50,30 C65,28 75,36 90,28 C105,20 115,24 130,18 C145,12 158,22 172,16 C186,10 198,14 212,10 C226,6 240,8 254,8 C268,8 280,10 300,8"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1.5"
              className="sail-line"
            />
          </svg>
        </div>

        {/* Data table */}
        <div className="sail-table">
          <div className="sail-table-head">
            <span>Zone</span><span>Volume</span><span>Status</span>
          </div>
          {[
            { zone: 'Jharkhand', vol: '4,820 MT', ok: true  },
            { zone: 'West Bengal', vol: '3,210 MT', ok: true  },
            { zone: 'Odisha',     vol: '2,140 MT', ok: false },
          ].map(r => (
            <div key={r.zone} className="sail-table-row">
              <span className="sail-zone">{r.zone}</span>
              <span className="sail-vol">{r.vol}</span>
              <span className={`sail-status ${r.ok ? 'sail-ok' : 'sail-warn'}`}>
                {r.ok ? '✓ ON TRACK' : '⚠ REVIEW'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   BIRYANI IN CAGE MOCKUP — Power BI revenue dashboard
═══════════════════════════════════════════════════════════════════ */
function BiryaniMockup() {
  const bars = [
    { label: 'FY23', val: '₹8L',  pct: 36, delay: '0.3s' },
    { label: 'FY24', val: '₹14L', pct: 64, delay: '0.55s' },
    { label: 'FY25', val: '₹22L', pct: 100, delay: '0.8s' },
  ]
  return (
    <BrowserFrame url="PowerBI · Biryani In Cage">
      <div className="bic-wrap">
        {/* Header */}
        <div className="bic-header">
          <span className="bic-title">Revenue Intelligence</span>
          <span className="bic-period">FY23 – FY25</span>
        </div>

        {/* Top KPIs */}
        <div className="bic-kpis">
          <div className="bic-kpi">
            <span className="bic-kpi-val bic-kpi--1">₹22L</span>
            <span className="bic-kpi-lbl">Peak Revenue</span>
          </div>
          <div className="bic-kpi">
            <span className="bic-kpi-val bic-kpi--2">60%</span>
            <span className="bic-kpi-lbl">YoY Growth</span>
          </div>
          <div className="bic-kpi">
            <span className="bic-kpi-val bic-kpi--3">2.7×</span>
            <span className="bic-kpi-lbl">Scale Factor</span>
          </div>
        </div>

        {/* Revenue bar chart */}
        <div className="bic-chart-label">Annual Revenue</div>
        <div className="bic-bars">
          {bars.map(b => (
            <div key={b.label} className="bic-bar-group">
              <div className="bic-bar-track">
                <div
                  className="bic-bar-fill"
                  style={{ '--bpct': `${b.pct}%`, animationDelay: b.delay }}
                />
              </div>
              <span className="bic-bar-label">{b.label}</span>
              <span className="bic-bar-val">{b.val}</span>
            </div>
          ))}
        </div>

        {/* Channel split */}
        <div className="bic-channels">
          <div className="bic-channel">
            <span className="bic-ch-dot bic-ch-dot--zomato" />
            <span className="bic-ch-name">Zomato</span>
            <span className="bic-ch-pct">62%</span>
          </div>
          <div className="bic-channel">
            <span className="bic-ch-dot bic-ch-dot--swiggy" />
            <span className="bic-ch-name">Swiggy</span>
            <span className="bic-ch-pct">38%</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
const MAP = {
  stockd: StockdMockup,
  kisansaathi: KisanSathiMockup,
  packd: PackdMockup,
  'stock-intel': StockIntelMockup,
  'resume-portfolio': ResumeMockup,
  'diwali-analysis': DiwaliMockup,
  vedantu: VedantuMockup,
  riverline: RiverlineMockup,
  sail: SAILMockup,
  biryani: BiryaniMockup,
}

export default function Mockup({ type }) {
  const Component = MAP[type]
  if (!Component) return null
  return (
    <div className="mockup-outer">
      <Component />
    </div>
  )
}
