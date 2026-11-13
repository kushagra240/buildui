import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import buildSmartLogo from "./assets/buildsmart-logo.png";
import buildSmartMark from "./assets/buildsmart-mark.png";

export type PageName = "landing" | "auth" | "dashboard" | "wizard" | "results";

type GlyphName =
  | "arrow"
  | "plus"
  | "folder"
  | "home"
  | "chart"
  | "settings"
  | "logout"
  | "calendar"
  | "area"
  | "clock"
  | "check"
  | "download"
  | "menu";

function Glyph({ name, size = 18 }: { name: GlyphName; size?: number }) {
  const paths: Record<GlyphName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    folder: (
      <>
        <path d="M3 7h7l2 2h9v10H3Z" />
        <path d="M3 11h18" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.5h-4L10.4 6A8 8 0 0 0 8 7.1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1A8 8 0 0 0 10.4 18l.3 2.5h4L15 18a8 8 0 0 0 1.6-1.1l2.4 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z" />
      </>
    ),
    logout: <path d="M10 5H5v14h5M14 8l4 4-4 4M8 12h10" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </>
    ),
    area: (
      <>
        <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
        <path d="M8 8h8v8H8z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    download: (
      <>
        <path d="M12 3v12m-4-4 4 4 4-4" />
        <path d="M5 20h14" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ProductHeader({
  navigate,
  active,
}: {
  navigate: (page: PageName) => void;
  active?: string;
}) {
  return (
    <header className="product-header">
      <button
        className="product-logo"
        onClick={() => navigate("landing")}
        aria-label="BuildSmart home"
      >
        <img src={buildSmartLogo} alt="BuildSmart AI" />
      </button>
      <nav aria-label="Application navigation">
        <button
          className={active === "projects" ? "active" : ""}
          onClick={() => navigate("dashboard")}
        >
          Projects
        </button>
        <button
          className={active === "estimate" ? "active" : ""}
          onClick={() => navigate("wizard")}
        >
          New estimate
        </button>
        <button>Cost guide</button>
        <button>Methodology</button>
      </nav>
      <div className="product-user">
        <span>AN</span>
        <div>
          <strong>Aniket N.</strong>
          <small>Project owner</small>
        </div>
      </div>
    </header>
  );
}

function AuthScreen({ navigate }: { navigate: (page: PageName) => void }) {
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate("dashboard");
  };

  return (
    <main className="auth-page">
      <section className="auth-story">
        <button className="auth-logo" onClick={() => navigate("landing")}>
          <img src={buildSmartLogo} alt="BuildSmart AI" />
        </button>
        <div className="auth-blueprint" aria-hidden="true">
          <svg viewBox="0 0 600 440">
            <path d="M60 380h490M110 380V170l145-95 145 95v210M255 75l145 95 100-65v275M155 380V245h72v135M306 380V260h58v120M430 380V210h55v170" />
            <path d="M75 405h390M75 420h270M108 150h405" />
          </svg>
        </div>
        <div className="auth-message">
          <p>Residential construction planning</p>
          <h1>Build with clarity from the very first number.</h1>
          <span>
            Location-aware costs, transparent assumptions, and material choices designed for how
            homes are built in Pune.
          </span>
        </div>
        <div className="auth-proof">
          <div>
            <strong>9</strong>
            <span>cost categories</span>
          </div>
          <div>
            <strong>3</strong>
            <span>quality scenarios</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>clear assumptions</span>
          </div>
        </div>
      </section>

      <section className="auth-form-side">
        <button className="auth-back" onClick={() => navigate("landing")}>
          ← Back to website
        </button>
        <form className="auth-form" onSubmit={submit}>
          <p className="app-eyebrow">{register ? "Create your workspace" : "Welcome back"}</p>
          <h2>{register ? "Start planning your home." : "Log in to BuildSmart."}</h2>
          <p className="auth-intro">
            {register
              ? "Create an account to save, compare, and refine construction estimates."
              : "Continue to your projects and saved construction estimates."}
          </p>
          {register && (
            <label>
              Full name
              <input type="text" placeholder="Aniket N." required />
            </label>
          )}
          <label>
            Email address
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <span className="password-field">
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button type="button" onClick={() => setVisible(!visible)}>
                {visible ? "Hide" : "Show"}
              </button>
            </span>
          </label>
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            {!register && <button type="button">Forgot password?</button>}
          </div>
          <button className="auth-submit" type="submit">
            {register ? "Create account" : "Log in"} <Glyph name="arrow" size={16} />
          </button>
          <p className="auth-switch">
            {register ? "Already have an account?" : "New to BuildSmart?"}
            <button type="button" onClick={() => setRegister(!register)}>
              {register ? "Log in" : "Create account"}
            </button>
          </p>
        </form>
        <p className="auth-legal">Indicative planning estimates · Pune region</p>
      </section>
    </main>
  );
}

const savedProjects = [
  {
    name: "Deshmukh Residence",
    location: "Baner, Pune",
    cost: "₹43,20,000",
    area: "1,800 sq ft",
    date: "Updated today",
    status: "Estimate ready",
    image:
      "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600",
  },
  {
    name: "Kharadi Row House",
    location: "Kharadi, Pune",
    cost: "₹58,70,000",
    area: "2,150 sq ft",
    date: "Updated 12 Nov 2026",
    status: "In progress",
    image:
      "https://images.unsplash.com/photo-1691272477702-0a2edae135f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600",
  },
  {
    name: "Wakad Family Home",
    location: "Wakad, Pune",
    cost: "₹31,40,000",
    area: "1,420 sq ft",
    date: "Updated 08 Nov 2026",
    status: "Draft",
    image:
      "https://images.unsplash.com/photo-1608619769165-25647672335f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600",
  },
];

const qualityRates = {
  Economy: 2000,
  Standard: 2400,
  Premium: 3100,
};

function DashboardScreen({ navigate }: { navigate: (page: PageName) => void }) {
  const [showEmpty, setShowEmpty] = useState(false);

  return (
    <main className="product-page">
      <ProductHeader navigate={navigate} active="projects" />
      <section className="dashboard-content">
        <div className="dashboard-heading">
          <div>
            <p className="app-eyebrow">Project workspace</p>
            <h1>Your estimates</h1>
            <p>Review saved projects or begin a new construction plan.</p>
          </div>
          <button className="cobalt-button" onClick={() => navigate("wizard")}>
            <Glyph name="plus" size={17} /> New estimate
          </button>
        </div>

        <div className="dashboard-summary">
          <div>
            <span>Saved projects</span>
            <strong className="mono">03</strong>
          </div>
          <div>
            <span>Portfolio estimate</span>
            <strong className="mono">₹1.33 Cr</strong>
          </div>
          <div>
            <span>Average rate</span>
            <strong className="mono">₹2,445/sq ft</strong>
          </div>
          <button onClick={() => setShowEmpty(!showEmpty)}>
            {showEmpty ? "Show projects" : "Preview empty state"}
          </button>
        </div>

        {showEmpty ? (
          <section className="empty-estimates">
            <span className="empty-mark">
              <img src={buildSmartMark} alt="" />
            </span>
            <p className="app-eyebrow">Your workspace is ready</p>
            <h2>No estimates yet.</h2>
            <p>
              Start with the built-up area and construction quality. Your first planning estimate
              takes less than a minute.
            </p>
            <button onClick={() => navigate("wizard")}>
              Create your first estimate <Glyph name="arrow" />
            </button>
          </section>
        ) : (
          <>
            <div className="project-grid">
              {savedProjects.map((project, index) => (
                <button
                  className="saved-project-card"
                  key={project.name}
                  onClick={() => navigate(index === 0 ? "results" : "wizard")}
                >
                  <div className="project-image">
                    <img src={project.image} alt="" />
                    <span className={`project-status status-${index}`}>{project.status}</span>
                  </div>
                  <div className="project-card-body">
                    <span className="project-index">0{index + 1}</span>
                    <h2>{project.name}</h2>
                    <p>{project.location}</p>
                    <div className="project-cost">
                      <span>Planning estimate</span>
                      <strong className="mono">{project.cost}</strong>
                    </div>
                    <div className="project-card-foot">
                      <span>
                        <Glyph name="area" size={13} /> {project.area}
                      </span>
                      <span>
                        <Glyph name="calendar" size={13} /> {project.date}
                      </span>
                      <Glyph name="arrow" size={16} />
                    </div>
                  </div>
                </button>
              ))}
              <button className="new-project-card" onClick={() => navigate("wizard")}>
                <span>
                  <Glyph name="plus" size={23} />
                </span>
                <strong>Start a new estimate</strong>
                <small>Set up another residential project</small>
              </button>
            </div>
            <div className="dashboard-guidance">
              <span>
                <Glyph name="check" size={16} />
              </span>
              <div>
                <strong>Planning note</strong>
                <p>
                  Estimates include a 5% contingency. Final construction costs depend on drawings,
                  site conditions, and contractor quotations.
                </p>
              </div>
              <button>View methodology →</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function WizardScreen({ navigate }: { navigate: (page: PageName) => void }) {
  const [area, setArea] = useState(1800);
  const [quality, setQuality] = useState<keyof typeof qualityRates>("Standard");
  const estimate = area * qualityRates[quality];

  return (
    <main className="product-page wizard-page">
      <ProductHeader navigate={navigate} active="estimate" />
      <section className="wizard-content">
        <button className="wizard-back" onClick={() => navigate("dashboard")}>
          ← Back to projects
        </button>
        <div className="wizard-title">
          <p className="app-eyebrow">New residential estimate</p>
          <h1>Set up your project.</h1>
          <p>Start with the size and quality of the home you’re planning.</p>
        </div>
        <div className="progress-stepper">
          {[
            ["1", "Setup"],
            ["2", "Specifications"],
            ["3", "Results"],
          ].map(([number, label], index) => (
            <div className={index === 0 ? "current" : ""} key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
              {index < 2 && <i />}
            </div>
          ))}
        </div>

        <section className="wizard-card">
          <div className="wizard-card-heading">
            <span>
              <Glyph name="home" />
            </span>
            <div>
              <p className="app-eyebrow">Step 01</p>
              <h2>Home size and quality</h2>
              <p>Use approximate measurements for your first planning estimate.</p>
            </div>
          </div>

          <div className="wizard-control">
            <label>
              <span>Built-up area</span>
              <strong className="mono">{area.toLocaleString("en-IN")} sq ft</strong>
            </label>
            <input
              type="range"
              min="600"
              max="5000"
              step="100"
              value={area}
              onChange={(event) => setArea(Number(event.target.value))}
              style={{ "--wizard-range": `${((area - 600) / 4400) * 100}%` } as React.CSSProperties}
            />
            <div className="wizard-scale">
              <span>600 sq ft</span>
              <span>Typical Pune home: 1,200–2,400 sq ft</span>
              <span>5,000 sq ft</span>
            </div>
          </div>

          <fieldset className="wizard-quality">
            <legend>Construction quality</legend>
            <p>Choose the specification level that best reflects your material expectations.</p>
            <div>
              {(Object.keys(qualityRates) as (keyof typeof qualityRates)[]).map((item, index) => (
                <button
                  className={quality === item ? "selected" : ""}
                  key={item}
                  onClick={() => setQuality(item)}
                >
                  <span className="quality-check">
                    {quality === item && <Glyph name="check" size={13} />}
                  </span>
                  <small>0{index + 1}</small>
                  <strong>{item}</strong>
                  <span className="mono">₹{qualityRates[item].toLocaleString("en-IN")}/sq ft</span>
                  <p>
                    {item === "Economy"
                      ? "Practical essentials and durable base finishes."
                      : item === "Standard"
                        ? "Balanced quality for a comfortable family home."
                        : "Upgraded finishes, fixtures, and detailing."}
                  </p>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="wizard-footer">
            <div>
              <span>Indicative planning total</span>
              <strong className="mono">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                }).format(estimate)}
              </strong>
            </div>
            <button onClick={() => navigate("results")}>
              Calculate estimate <Glyph name="arrow" size={17} />
            </button>
          </div>
        </section>
        <p className="wizard-disclaimer">
          This is an indicative planning estimate, not a contractor quotation.
        </p>
      </section>
    </main>
  );
}

const breakdownRows = [
  ["Site preparation & foundation", "₹4,32,000", "10.0%"],
  ["RCC structure", "₹7,34,400", "17.0%"],
  ["Walling & plaster", "₹5,61,600", "13.0%"],
  ["Flooring & finishes", "₹5,18,400", "12.0%"],
  ["Doors & windows", "₹3,45,600", "8.0%"],
  ["Electrical systems", "₹3,02,400", "7.0%"],
  ["Plumbing & sanitary", "₹3,45,600", "8.0%"],
  ["Painting", "₹2,16,000", "5.0%"],
  ["Waterproofing & external works", "₹2,16,000", "5.0%"],
  ["Contingency & planning buffer", "₹6,48,000", "15.0%"],
];

function ResultsScreen({ navigate }: { navigate: (page: PageName) => void }) {
  const [activeNav, setActiveNav] = useState("Estimate");
  const total = useMemo(() => "₹43,20,000", []);

  return (
    <main className="results-page">
      <aside className="results-sidebar">
        <button className="results-logo" onClick={() => navigate("landing")}>
          <img src={buildSmartLogo} alt="BuildSmart AI" />
        </button>
        <nav>
          {[
            ["Projects", "folder"],
            ["Estimate", "chart"],
            ["Project details", "home"],
            ["Settings", "settings"],
          ].map(([label, icon]) => (
            <button
              className={activeNav === label ? "active" : ""}
              key={label}
              onClick={() => {
                setActiveNav(label);
                if (label === "Projects") navigate("dashboard");
                if (label === "Project details") navigate("wizard");
              }}
            >
              <Glyph name={icon as GlyphName} size={17} /> {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-project">
          <span>Active project</span>
          <strong>Deshmukh Residence</strong>
          <small>Baner, Pune</small>
        </div>
        <button className="sidebar-logout" onClick={() => navigate("auth")}>
          <Glyph name="logout" size={16} /> Log out
        </button>
      </aside>

      <section className="results-main">
        <header className="results-topbar">
          <button className="results-mobile-menu" aria-label="Open menu">
            <Glyph name="menu" />
          </button>
          <div>
            <span className="result-ready">
              <i /> Estimate ready
            </span>
            <span>Last updated today, 4:01 PM</span>
          </div>
          <button>
            <Glyph name="download" size={15} /> Export report
          </button>
        </header>

        <div className="results-content">
          <div className="results-heading">
            <div>
              <p className="app-eyebrow">Deshmukh Residence · Baner, Pune</p>
              <h1>Your detailed estimate</h1>
              <p>A category-by-category planning view for your standard-quality home.</p>
            </div>
            <button onClick={() => navigate("wizard")}>Edit project details</button>
          </div>

          <section className="result-hero">
            <div>
              <p>Total estimated construction cost</p>
              <strong className="mono">{total}</strong>
              <span>
                <i /> ₹2,400 per sq ft
              </span>
            </div>
            <div className="result-hero-chart" aria-hidden="true">
              {[34, 48, 42, 61, 56, 75, 68, 88, 80, 100].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="result-confidence">
              <span>Planning confidence</span>
              <strong>High</strong>
              <div>
                <i />
              </div>
              <small>Based on current Pune regional rates</small>
            </div>
          </section>

          <section className="result-kpis">
            {[
              ["Built-up area", "1,800 sq ft", "area"],
              ["Quality tier", "Standard", "check"],
              ["Planning rate", "₹2,400/sq ft", "chart"],
              ["Build duration", "12–14 months", "clock"],
            ].map(([label, value, icon]) => (
              <article key={label}>
                <span>
                  <Glyph name={icon as GlyphName} size={17} />
                </span>
                <div>
                  <p>{label}</p>
                  <strong className={label === "Quality tier" ? "" : "mono"}>{value}</strong>
                </div>
              </article>
            ))}
          </section>

          <div className="result-grid">
            <section className="result-panel breakdown-panel">
              <div className="result-panel-head">
                <div>
                  <p className="app-eyebrow">Cost composition</p>
                  <h2>Budget breakdown</h2>
                </div>
                <button>•••</button>
              </div>
              <div className="result-donut-layout">
                <div className="result-donut">
                  <span>
                    <small>Total</small>
                    <strong className="mono">₹43.2L</strong>
                  </span>
                </div>
                <div className="result-legend">
                  {[
                    ["Structure", "₹17.3L", "40%", "one"],
                    ["Finishes", "₹10.8L", "25%", "two"],
                    ["Services", "₹8.6L", "20%", "three"],
                    ["Buffer", "₹6.5L", "15%", "four"],
                  ].map(([label, cost, percent, color]) => (
                    <div key={label}>
                      <i className={color} />
                      <span>{label}</span>
                      <strong className="mono">{cost}</strong>
                      <small>{percent}</small>
                    </div>
                  ))}
                </div>
              </div>
              <p className="result-note">
                Includes materials, labour, and a 5% contingency allowance.
              </p>
            </section>

            <section className="result-panel insight-panel">
              <div className="result-panel-head">
                <div>
                  <p className="app-eyebrow">Planning insight</p>
                  <h2>Where the budget goes</h2>
                </div>
              </div>
              <div className="insight-bars">
                {[
                  ["Material", "₹25.9L", 76],
                  ["Labour", "₹10.8L", 42],
                  ["Professional & buffer", "₹6.5L", 25],
                ].map(([label, cost, width]) => (
                  <div key={label}>
                    <span>
                      {label} <strong className="mono">{cost}</strong>
                    </span>
                    <i>
                      <b style={{ width: `${width}%` }} />
                    </i>
                  </div>
                ))}
              </div>
              <div className="insight-callout">
                <span>
                  <Glyph name="check" />
                </span>
                <p>
                  <strong>Balanced specification</strong>
                  Your selected quality tier prioritizes structure and essential services while
                  keeping finish allowances practical.
                </p>
              </div>
            </section>
          </div>

          <section className="result-panel cost-table-panel">
            <div className="result-panel-head">
              <div>
                <p className="app-eyebrow">Detailed allocation</p>
                <h2>Category cost breakdown</h2>
              </div>
              <button className="table-download">
                <Glyph name="download" size={14} /> Download CSV
              </button>
            </div>
            <div className="cost-table">
              <div className="cost-table-head">
                <span>Category</span>
                <span>Specification</span>
                <span>Estimated cost</span>
                <span>Share</span>
              </div>
              {breakdownRows.map(([category, cost, share], index) => (
                <div className="cost-table-row" key={category}>
                  <span>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                    <strong>{category}</strong>
                  </span>
                  <span>{index < 9 ? "Standard specification" : "Planning allowance"}</span>
                  <strong className="mono">{cost}</strong>
                  <span className="mono">{share}</span>
                </div>
              ))}
              <div className="cost-table-total">
                <span>Total estimated construction cost</span>
                <strong className="mono">{total}</strong>
                <span>100%</span>
              </div>
            </div>
          </section>
          <p className="results-disclaimer">
            Indicative planning estimate for Pune region. Final costs require detailed drawings,
            structural assessment, site verification, and contractor quotations.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function ProductPages({
  page,
  navigate,
}: {
  page: PageName;
  navigate: (page: PageName) => void;
}) {
  if (page === "auth") return <AuthScreen navigate={navigate} />;
  if (page === "dashboard") return <DashboardScreen navigate={navigate} />;
  if (page === "wizard") return <WizardScreen navigate={navigate} />;
  return <ResultsScreen navigate={navigate} />;
}
