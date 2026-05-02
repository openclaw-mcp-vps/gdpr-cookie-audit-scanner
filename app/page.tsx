export default function Home() {
  const faqs = [
    {
      q: "What does the scanner check?",
      a: "It crawls your site to detect undeclared cookies, missing or non-compliant consent banners, absent privacy policies, and third-party trackers that violate GDPR requirements."
    },
    {
      q: "Do I need technical knowledge to use it?",
      a: "No. Just enter your website URL and receive a plain-English compliance report with step-by-step fix recommendations you can hand to any developer."
    },
    {
      q: "Is one scan per month enough?",
      a: "For most small businesses, yes. You can trigger a fresh scan any time you update your site, and we alert you if new violations are detected between scans."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Your Website for{" "}
          <span className="text-[#58a6ff]">GDPR Cookie Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly detect undeclared cookies, missing consent banners, and hidden trackers.
          Get a detailed compliance report with actionable fixes — before regulators do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Scanning — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: "500+", label: "Sites Scanned" },
            { stat: "98%", label: "Violation Detection Rate" },
            { stat: "<2 min", label: "Scan Time" }
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited website scans",
              "Full cookie & tracker audit",
              "Consent banner detection",
              "Privacy policy checker",
              "Actionable fix recommendations",
              "Monthly compliance reports",
              "Email violation alerts"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GDPR Cookie Audit Scanner. All rights reserved.
      </footer>
    </main>
  );
}
