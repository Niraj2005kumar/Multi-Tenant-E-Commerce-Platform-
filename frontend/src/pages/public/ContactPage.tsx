import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

function ContactPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
      <div className="rounded-[40px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/30">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Let's build a modern marketplace together.</h1>
        <p className="mt-4 max-w-2xl text-slate-400">Our team is ready to help you launch premium multi-vendor experiences, or support your existing commerce workflows with quality design and thoughtful UI.</p>
      </div>
      <div className="rounded-[40px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/30">
        <form className="space-y-5">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Company" />
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
            <textarea className="w-full rounded-3xl border border-white/10 bg-slate-900/90 p-4 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" rows={6} placeholder="Tell us what you're building..."></textarea>
          </div>
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
