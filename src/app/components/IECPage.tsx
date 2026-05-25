import { CheckCircle, Phone, MessageCircle, Globe, TrendingUp, ShieldCheck } from "lucide-react";

const pricingPlans = [
  {
    title: "Individual / Proprietor",
    price: "₹2,000",
    badge: "Sole Proprietor",
    badgeColor: "#0A4DA2",
    accentColor: "linear-gradient(135deg, #0A4DA2, #06336b)",
    features: [
      "IEC Code Registration",
      "Application filing with DGFT",
      "Receipt of IEC Certificate",
      "Valid for lifetime — no renewal required",
    ],
  },
  {
    title: "Partnership Firm / Pvt Ltd / Any Entity",
    price: "₹3,000",
    badge: "Business Entity",
    badgeColor: "#e08e00",
    accentColor: "linear-gradient(135deg, #F5A000, #e08e00)",
    features: [
      "IEC Code Registration for firms & companies",
      "Application filing with DGFT",
      "Receipt of IEC Certificate",
      "Valid for lifetime — no renewal required",
    ],
  },
  {
    title: "IEC Amendment / Update",
    price: "₹1,500",
    badge: "Modification",
    badgeColor: "#0A4DA2",
    accentColor: "linear-gradient(135deg, #0A4DA2, #06336b)",
    features: [
      "Update existing IEC details",
      "Change in address / bank / directors",
      "Filing amendment with DGFT",
      "Applicable to all entity types",
    ],
  },
];

const documents = [
  "PAN Card of the entity / proprietor",
  "Aadhaar Card / Voter ID / Passport",
  "Bank certificate or cancelled cheque",
  "Address proof of business (electricity bill / rent agreement)",
  "Partnership Deed (for partnership firms)",
  "Certificate of Incorporation / MOA / AOA (for companies)",
  "Digital Signature Certificate (DSC) — optional but recommended",
  "Passport-size photograph of applicant",
];

const benefits = [
  { icon: Globe, title: "Import & Export Business", desc: "Mandatory for any business looking to import or export goods and services from India." },
  { icon: TrendingUp, title: "Access Global Markets", desc: "Opens doors to international trade opportunities and global supply chains." },
  { icon: ShieldCheck, title: "Lifetime Validity", desc: "Once obtained, IEC is valid for lifetime — no annual renewal required." },
];

export function IECPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ background: "#F4F4F4", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="relative pt-28 pb-20 px-4"
        style={{ background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 60%, #041f42 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #F5A000 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F5A000 0%, transparent 40%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(245,160,0,0.2)",
              color: "#F5A000",
              border: "1px solid rgba(245,160,0,0.4)",
            }}
          >
            SARVOST — IEC Services
          </span>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            IEC Registration
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
            Import Export Code (IEC) — the 10-digit code mandatory for every business involved in import and export in India. Get yours fast with SARVOST.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need help with IEC Registration.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <a
              href="tel:+919923333005"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Phone size={16} />
              +91 99233 33005
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* Benefits */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Why Do You Need IEC?
            </h2>
            <p className="text-gray-500 text-sm">Essential for every importer and exporter in India</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "white", boxShadow: "0 4px 20px rgba(10,77,162,0.08)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(10,77,162,0.08)" }}
                  >
                    <Icon size={22} style={{ color: "#0A4DA2" }} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pricing Cards */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              IEC Registration Fees
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — no hidden charges</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", boxShadow: "0 8px 40px rgba(10,77,162,0.1)" }}
              >
                <div className="px-6 pt-7 pb-5">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: `${plan.badgeColor}18`, color: plan.badgeColor }}
                  >
                    {plan.badge}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {plan.title}
                  </h3>
                  <div
                    className="text-4xl font-bold mt-3 mb-1"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      background: plan.accentColor,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {plan.price}/-
                  </div>
                  <p className="text-xs text-gray-400 mb-5">Professional fee</p>
                  <div className="h-px w-full mb-5" style={{ background: "rgba(10,77,162,0.08)" }} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Includes</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#0A4DA2" }} />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/919923333005?text=${encodeURIComponent(`I need IEC ${plan.title} service. Please help.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                    style={{ background: plan.accentColor }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Documents Required
            </h2>
            <p className="text-gray-500 text-sm">Keep these ready for quick processing</p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(10,77,162,0.08)" }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {documents.map((doc) => (
                <div key={doc} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 100%)",
            boxShadow: "0 10px 40px rgba(10,77,162,0.25)",
          }}
        >
          <h2 className="text-2xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
            Start Your Import/Export Journey
          </h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
            Get your IEC code in 2–3 working days. Payment only after work is done.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need IEC Registration services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919923333005"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "rgba(245,160,0,1)", color: "white" }}
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
