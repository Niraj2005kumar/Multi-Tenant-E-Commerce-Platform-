import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function AuthLayout({ title, subtitle, children, footer }: { title: string; subtitle: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative p-12 h-full flex flex-col text-primary-foreground">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
             MultiShop
          </Link>
          <div className="mt-auto">
            <h2 className="text-4xl font-display font-bold leading-tight">A marketplace built for makers and the customers who love them.</h2>
            <p className="mt-3 opacity-80">Join thousands of vendors and shoppers worldwide.</p>
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="lg:hidden flex items-center gap-2 font-display font-bold mb-8"><span className="size-8 rounded-xl bg-gradient-primary grid place-items-center"><Sparkles className="size-4 text-primary-foreground" /></span> Marqo</Link>
          <h1 className="text-3xl font-display font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2 text-sm">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer && <p className="text-sm text-muted-foreground mt-6 text-center">{footer}</p>}
        </div>
      </motion.div>
    </div>
  );
}
