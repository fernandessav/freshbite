import './App.css'

const bundles = [
  {
    id: 1,
    name: 'Student Power Pack',
    price: 149,
    desc: 'Perfect for a quick, filling meal between classes. Balanced nutrition to keep you going.',
    tag: 'Most Popular',
    icon: '🎓',
  },
  {
    id: 2,
    name: 'Workweek Wellness Box',
    price: 699,
    desc: '5-day meal prep bundle. Healthy lunches planned for your entire work week.',
    tag: 'Best Value',
    icon: '💼',
  },
  {
    id: 3,
    name: 'High-Protein Meal',
    price: 199,
    desc: 'Packed with lean protein for muscle recovery and sustained energy.',
    tag: null,
    icon: '💪',
  },
  {
    id: 4,
    name: 'Budget Combo',
    price: 99,
    desc: 'Light on the pocket, heavy on taste. A wholesome meal at an unbeatable price.',
    tag: null,
    icon: '💰',
  },
]

const steps = [
  { icon: '📱', title: 'Message Us', desc: 'Reach out on WhatsApp' },
  { icon: '📋', title: 'Pick a Bundle', desc: 'Choose what works for you' },
  { icon: '🚚', title: 'We Deliver', desc: 'Fresh & hot, right to you' },
  { icon: '🍽️', title: 'Enjoy!', desc: 'Tasty, nutritious meals' },
]

const WA_NUMBER = '7506210198'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20FreshBite!%20I%20want%20to%20place%20an%20order.`

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <span className="logo">FreshBite</span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-btn-sm">
          <WhatsAppIcon /> Order Now
        </a>
      </div>
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">Fresh, Affordable Meals</div>
        <h1 className="hero-title">
          Good food<span className="highlight">,</span>
          <br />
          no delivery fee
        </h1>
        <p className="hero-desc">
          FreshBite brings healthy, delicious meals directly to students and
          working professionals. No apps, no extra fees — just message us on
          WhatsApp and enjoy.
        </p>
        <div className="hero-actions">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <WhatsAppIcon /> Order on WhatsApp
          </a>
          <a href="#bundles" className="btn btn-outline">View Bundles</a>
        </div>
        <div className="hero-offer">
          <span className="offer-badge">20% OFF</span>
          <span>on your first order. Limited time!</span>
        </div>
      </div>
    </section>
  )
}

function BundleCard({ bundle }) {
  return (
    <div className={`bundle-card ${bundle.tag ? 'featured' : ''}`}>
      {bundle.tag && <span className="bundle-tag">{bundle.tag}</span>}
      <span className="bundle-icon">{bundle.icon}</span>
      <h3 className="bundle-name">{bundle.name}</h3>
      <p className="bundle-desc">{bundle.desc}</p>
      <div className="bundle-footer">
        <span className="bundle-price">
          ₹{bundle.price}
          {bundle.id === 2 && <span className="bundle-sub">/week</span>}
        </span>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%20FreshBite!%20I%20want%20to%20order%20the%20${encodeURIComponent(bundle.name)}.%20(₹${bundle.price})`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm"
        >
          Order Now
        </a>
      </div>
    </div>
  )
}

function Bundles() {
  return (
    <section id="bundles" className="bundles">
      <div className="container">
        <h2 className="section-title">Our Bundles</h2>
        <p className="section-desc">
          Designed for your lifestyle — balanced nutrition, great taste, incredible value.
        </p>
        <div className="bundles-grid">
          {bundles.map((b) => (
            <BundleCard key={b.id} bundle={b} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-desc">Getting your FreshBite meal is this easy.</p>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <span className="step-icon">{s.icon}</span>
              <div className="step-num">0{i + 1}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Join the FreshBite Family Today</h2>
          <p className="cta-desc">
            Why choose between healthy and tasty? Get both with FreshBite.
            First order — <strong>20% off</strong>.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <WhatsAppIcon /> Order Now
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo">FreshBite</span>
          <p>Healthy, affordable meals made fresh daily.</p>
        </div>
        <div className="footer-links">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:hello@freshbite.in">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FreshBite. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bundles />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
