import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-white/10 bg-slate-950/90 py-8 text-sm text-slate-400"
      {...({} as any)}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p>© 2026 SaaS Market. Crafted for modern multi-vendor commerce.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
