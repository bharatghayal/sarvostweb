import { CheckCircle, Phone, MessageCircle, Shield, Award, FileCheck } from "lucide-react";

const licenceTypes = [
  {
    title: "Central Licence",
    price: "₹9,500",
    govtCharges: "₹7,500",
    badge: "For Sales Above ₹20 CR",
    badgeColor: "#0A4DA2",
    accentColor: "linear-gradient(135deg, #0A4DA2, #06336b)",
    features: [
      "Applicable for businesses with turnover above ₹20 Crore",
      "Import/Export of food products",
      "Food business in multiple states",
      "Central Government managed facilities",
      "Manufacturing units supplying to other states",
    ],
  },
  {
    title: "State Licence",
    price: "₹3,000",
    govtCharges: "₹2,000",
    badge: "For Sales Below ₹20 CR",
    badgeColor: "#e08e00",
    accentColor: "linear-gradient(135deg, #F5A000, #e08e00)",
    features: [
      "Applicable for businesses with turnover below ₹20 Crore",
      "Local food manufacturers and retailers",
      "State-level food distribution businesses",
      "Hotels, restaurants, caterers within the state",
      "Small to mid-size food processing units",
    ],
  },
];

const documents = [
  "PAN Card of the proprietor / partners / directors",
  "Aadhaar Card / Voter ID / Passport of applicant",
  "Proof of business address (electricity bill / rent agreement)",
  "Partnership Deed / MOA / AOA (as applicable)",
  "List of food products to be manufactured / sold",
  "Food safety management system plan",
  "Certificate of incorporation (for companies)",
  "Bank account details with cancelled cheque",
  "Passport-size photograph of applicant",
];

const whyNeed = [
  { icon: Shield, title: "Legal Compliance", desc: "Mandatory under Food Safety and Standards Act, 2006 for all food businesses." },
  { icon: Award, title: "Consumer Trust", desc: "FSSAI mark builds consumer confidence in the quality and safety of your products." },
  { icon: FileCheck, title: "Business Growth", desc: "Required for listing on e-commerce platforms and expanding your food business." },
];

export function FSSAIPage({ onBack }: { onBack: () => void }) {
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
            SARVOST — FSSAI Services
          </span>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            FSSAI Food License
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
            Get your Food Safety and Standards Authority of India (FSSAI) licence quickly and hassle-free. Mandatory for all food businesses in India.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need help with FSSAI Registration.")}`}
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

        {/* Why You Need FSSAI */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Why is FSSAI Licence Required?
            </h2>
            <p className="text-gray-500 text-sm">Protect your business, build consumer trust, and stay legally compliant</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {whyNeed.map((item) => {
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
              FSSAI Licence Packages
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — inclusive of government charges</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {licenceTypes.map((licence) => (
              <div
                key={licence.title}
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", boxShadow: "0 8px 40px rgba(10,77,162,0.1)" }}
              >
                <div className="px-6 pt-7 pb-5">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: `${licence.badgeColor}18`, color: licence.badgeColor }}
                  >
                    {licence.badge}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {licence.title}
                  </h3>
                  <div
                    className="text-4xl font-bold mt-3 mb-1"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      background: licence.accentColor,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {licence.price}/-
                  </div>
                  <p className="text-xs text-gray-400 mb-5">
                    Including ₹{licence.govtCharges.replace("₹", "")} Government Charges
                  </p>
                  <div className="h-px w-full mb-5" style={{ background: "rgba(10,77,162,0.08)" }} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Applicable For</p>
                  <ul className="space-y-3">
                    {licence.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#0A4DA2" }} />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/919923333005?text=${encodeURIComponent(`I need FSSAI ${licence.title}. Please help.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                    style={{ background: licence.accentColor }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Required */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Documents Required
            </h2>
            <p className="text-gray-500 text-sm">Keep these documents ready for a smooth registration process</p>
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
            Get Your FSSAI Licence Today
          </h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
            Our experts handle the entire process end-to-end. Payment only after work is done.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need FSSAI Registration services.")}`}
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
