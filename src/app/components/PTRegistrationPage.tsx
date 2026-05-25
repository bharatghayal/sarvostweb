import { CheckCircle, Phone, MessageCircle, UserCheck, Building, Info } from "lucide-react";

const packageIncludes = [
  "20 Minutes Call on the Complete Basics of PT and Its Applicability",
  "Registration on Maha GST Portal",
  "Receipt of Application Form",
  "Receipt of PT Registration Certificate",
];

const ptApplicability = [
  "Employees earning a salary above ₹7,500/month in Maharashtra",
  "All businesses employing one or more employees",
  "Self-employed individuals, professionals, and traders",
  "Companies, firms, and all other entities engaged in business",
  "Freelancers and consultants earning above threshold",
];

const ptSlabs = [
  { salary: "Up to ₹7,500/month", tax: "Nil" },
  { salary: "₹7,501 – ₹10,000/month", tax: "₹175/month" },
  { salary: "Above ₹10,000/month", tax: "₹200/month (₹300 in Feb)" },
];

const documents = [
  "PAN Card of the business / proprietor",
  "Aadhaar Card of the proprietor / authorized signatory",
  "Address proof of business premises",
  "Partnership Deed / MOA / AOA (as applicable)",
  "Certificate of Incorporation (for companies)",
  "List of employees with salary details",
  "Bank account details with cancelled cheque",
  "Photograph of authorized signatory",
];

const highlights = [
  { icon: UserCheck, title: "State Tax Compliance", desc: "PT is a state-level tax under the Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975." },
  { icon: Building, title: "Employer Obligation", desc: "Every employer is responsible to deduct PT from employee salaries and deposit it to the government." },
  { icon: Info, title: "Avoid Penalties", desc: "Non-registration or non-payment attracts penalties and interest under the PT Act." },
];

export function PTRegistrationPage({ onBack }: { onBack: () => void }) {
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
            SARVOST — PT Services
          </span>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            PT Registration Certificate
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
            Professional Tax (PT) Registration under Maharashtra State Act — mandatory for all employers and self-employed professionals. Quick, expert-assisted registration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need help with PT Registration Certificate.")}`}
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

        {/* Key Highlights */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              About Professional Tax
            </h2>
            <p className="text-gray-500 text-sm">Know why PT registration is important for your business</p>
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

        {/* Package Card */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              What's Included in Our Package?
            </h2>
            <p className="text-gray-500 text-sm">Everything you need for seamless PT registration</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "white", boxShadow: "0 8px 40px rgba(10,77,162,0.12)" }}
            >
              <div
                className="px-7 py-5"
                style={{ background: "linear-gradient(135deg, #0A4DA2, #06336b)" }}
              >
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">PT Registration Package</p>
                <h3 className="text-white text-xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Professional Tax Registration Certificate
                </h3>
                <p className="text-blue-200 text-sm mt-1">Maharashtra State — Maha GST Portal</p>
              </div>
              <div className="px-7 py-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Services Offered Under This Package</p>
                <ul className="space-y-4">
                  {packageIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(10,77,162,0.08)" }}
                      >
                        <span className="text-xs font-bold" style={{ color: "#0A4DA2" }}>{i + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-7 pb-7">
                <a
                  href={`https://wa.me/919923333005?text=${encodeURIComponent("I need PT Registration Certificate. Please help.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #0A4DA2, #06336b)" }}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PT Slabs */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Professional Tax Slabs (Maharashtra)
            </h2>
            <p className="text-gray-500 text-sm">Current PT rates applicable in Maharashtra</p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(10,77,162,0.08)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(10,77,162,0.06)" }}>
                    <th
                      className="px-6 py-4 text-left font-semibold"
                      style={{ color: "#0A4DA2", fontFamily: "Poppins, sans-serif" }}
                    >
                      Monthly Salary
                    </th>
                    <th
                      className="px-6 py-4 text-right font-semibold"
                      style={{ color: "#0A4DA2", fontFamily: "Poppins, sans-serif" }}
                    >
                      PT Payable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ptSlabs.map((slab, i) => (
                    <tr
                      key={i}
                      className="border-t"
                      style={{ borderColor: "rgba(10,77,162,0.06)" }}
                    >
                      <td className="px-6 py-4 text-gray-700">{slab.salary}</td>
                      <td className="px-6 py-4 text-right font-semibold" style={{ color: slab.tax === "Nil" ? "#22c55e" : "#0A4DA2" }}>
                        {slab.tax}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Applicability */}
        <section>
          <div
            className="rounded-2xl p-7"
            style={{ background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 100%)", boxShadow: "0 8px 30px rgba(10,77,162,0.2)" }}
          >
            <h3 className="text-white font-semibold mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
              Who Needs PT Registration?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {ptApplicability.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
                  <span className="text-sm text-blue-100">{item}</span>
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
            Get Your PT Registration Done Today
          </h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
            Stay compliant with Maharashtra PT Act. Our experts handle everything end-to-end.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need PT Registration Certificate services.")}`}
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
