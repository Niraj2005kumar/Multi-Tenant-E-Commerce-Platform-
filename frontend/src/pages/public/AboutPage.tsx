function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[40px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/30">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">About Us</p>
          <h1 className="text-4xl font-semibold text-white">A premium SaaS frontend for next-generation eCommerce brands.</h1>
          <p className="text-base leading-8 text-slate-400">
            We craft sleek, modern marketplace experiences with multi-role dashboards, analytics, and merchant-first workflows. Everything you need for a polished B2B2C storefront is built with performance and usability in mind.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Vision</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Modern eCommerce operations for any team.</h2>
          <p className="mt-4 text-slate-400">Whether you run a marketplace, vendor storefront, or enterprise SaaS commerce hub, every screen is optimized for clarity and conversion.</p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Product</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Dashboards that empower decisions.</h2>
          <p className="mt-4 text-slate-400">Built-in analytics charts, vendor workflows, and customer lists make it simple to manage your business from any device.</p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Support</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Responsive design with polished interactions.</h2>
          <p className="mt-4 text-slate-400">From mobile nav to hover states and subtle motion, every interaction feels premium and professional.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
