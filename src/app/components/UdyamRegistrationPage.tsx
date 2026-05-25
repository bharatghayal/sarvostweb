import { CheckCircle, Phone, MessageCircle, Zap, BarChart2, BadgeCheck } from "lucide-react";

const pricingPlans = [
  {
    title: "Individual / Proprietor",
    price: "₹500",
    badge: "Sole Proprietor",
    badgeColor: "#0A4DA2",
    accentColor: "linear-gradient(135deg, #0A4DA2, #06336b)",
    features: [
      "Udyam Registration Certificate",
      "Filing on official Udyam portal",
      "MSME classification as Micro/Small/Medium",
      "Lifetime validity — no renewal required",
    ],
  },
  {
    title: "Partnership Firm / Pvt Ltd / Any Entity",
    price: "₹1,500",
    badge: "Business Entity",
    badgeColor: "#e08e00",
    accentColor: "linear-gradient(135deg, #F5A000, #e08e00)",
    features: [
      "Udyam Registration Certificate for firms & companies",
      "Filing on official Udyam portal",
      "MSME classification as Micro/Small/Medium",
      "Lifetime validity — no renewal required",
    ],
  },
];

const msmeCategories = [
  { type: "Micro Enterprise", investment: "Up to ₹1 Crore", turnover: "Up to ₹5 Crore" },
  { type: "Small Enterprise", investment: "Up to ₹10 Crore", turnover: "Up to ₹50 Crore" },
  { type: "Medium Enterprise", investment: "Up to ₹50 Crore", turnover: "Up to ₹250 Crore" },
];

const benefits = [
  "Priority sector lending at lower interest rates from banks",
  "Collateral-free loans under Credit Guarantee Fund Scheme",
  "Subsidies on patent registration and industrial promotion",
  "Preference in government tenders and procurement",
  "Protection against delayed payments from buyers",
  "Eligibility for various state and central government schemes",
  "ISO certification charges reimbursement",
  "Reduced electricity bills and stamp duty exemptions",
];

const documents = [
  "Aadhaar Card of proprietor / partners / directors",
  "PAN Card of the business entity",
  "GSTIN (if applicable)",
  "Bank account details",
  "Business address proof",
  "NIC (National Industry Classification) code",
];

const highlights = [
  { icon: Zap, title: "Instant Registration", desc: "Udyam registration is 100% online and paperless. Certificate is issued immediately after submission." },
  { icon: BarChart2, title: "MSME Benefits", desc: "Unlock a wide range of government schemes, subsidies, and preferential treatment for MSME registered businesses." },
  { icon: BadgeCheck, title: "Official Recognition", desc: "Government-recognized MSME status under the Ministry of Micro, Small and Medium Enterprises." },
];

export function UdyamRegistrationPage({ onBack }: { onBack: () => void }) {
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
            SARVOST — MSME Services
          </span>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Udyam Registration
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
            Register your business as an MSME under the Udyam portal and unlock exclusive government benefits, subsidies, and schemes for micro, small & medium enterprises.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need help with Udyam Registration.")}`}
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

        {/* Highlights */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Why Register Under Udyam?
            </h2>
            <p className="text-gray-500 text-sm">Government-backed MSME recognition with lifetime benefits</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item) => {
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

        {/* Pricing */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Our Fees for Udyam Registration
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — no hidden charges</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
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
                  <p className="text-xs text-gray-400 mb-5">Professional fee (Govt. registration is free)</p>
                  <div className="h-px w-full mb-5" style={{ background: "rgba(10,77,162,0.08)" }} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Includes</p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#0A4DA2" }} />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/919923333005?text=${encodeURIComponent(`I need Udyam Registration for ${plan.badge}. Please help.`)}`}
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

        {/* MSME Categories */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              MSME Classification Criteria
            </h2>
            <p className="text-gray-500 text-sm">Your enterprise classification is based on investment and turnover</p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(10,77,162,0.08)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(10,77,162,0.06)" }}>
                    <th className="px-6 py-4 text-left font-semibold" style={{ color: "#0A4DA2", fontFamily: "Poppins, sans-serif" }}>
                      Enterprise Type
                    </th>
                    <th className="px-6 py-4 text-center font-semibold" style={{ color: "#0A4DA2", fontFamily: "Poppins, sans-serif" }}>
                      Investment Limit
                    </th>
                    <th className="px-6 py-4 text-right font-semibold" style={{ color: "#0A4DA2", fontFamily: "Poppins, sans-serif" }}>
                      Annual Turnover
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {msmeCategories.map((cat, i) => (
                    <tr key={i} className="border-t" style={{ borderColor: "rgba(10,77,162,0.06)" }}>
                      <td className="px-6 py-4 font-semibold" style={{ color: "#0A4DA2" }}>{cat.type}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{cat.investment}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{cat.turnover}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Benefits of Udyam Registration
            </h2>
            <p className="text-gray-500 text-sm">Registered MSMEs enjoy exclusive advantages from the Government of India</p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(10,77,162,0.08)" }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Documents Required
            </h2>
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
            Register Your Business as MSME Today
          </h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
            Get your Udyam certificate in 1 working day. Payment only after work is done.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need Udyam Registration services.")}`}
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
