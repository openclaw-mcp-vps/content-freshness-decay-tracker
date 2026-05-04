export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Content Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track When Your Content<br />
          <span className="text-[#58a6ff]">Becomes Outdated</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically monitor your site for broken links, stale information, and declining search rankings. Get AI-powered refresh suggestions before your traffic drops.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring – $11/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["Broken Links", "Auto-detected"],
            ["Content Health Score", "Per page"],
            ["AI Refresh Tips", "Actionable"]
          ].map(([label, sub]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-sm">{label}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep content fresh</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Crawl up to 500 pages/month",
              "Broken link detection",
              "Google Search Console integration",
              "AI-powered refresh suggestions",
              "Content health score dashboard",
              "Weekly decay alert emails"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does content decay detection work?",
              "We crawl your site on a schedule, check for broken links, monitor your Google Search Console data for traffic drops, and use AI to flag pages with outdated statistics, dead references, or stale information."
            ],
            [
              "Do I need to install anything on my site?",
              "No. Just provide your site URL and connect your Google Search Console account. We handle all the crawling and analysis in the background."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel anytime from your billing portal with no questions asked. Your monitoring stops at the end of the billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pb-8">
        &copy; {new Date().getFullYear()} Content Freshness Decay Tracker. All rights reserved.
      </footer>
    </main>
  );
}
