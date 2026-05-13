import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PublicLayout } from "@/components/common/PublicLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/order-success")({ head: () => ({ meta: [{ title: "Order confirmed — Marqo" }] }), component: Success });

function Success() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
          <div className="size-20 mx-auto rounded-full bg-gradient-primary grid place-items-center shadow-elegant"><CheckCircle2 className="size-10 text-primary-foreground" /></div>
        </motion.div>
        <h1 className="mt-6 text-3xl font-display font-bold">Thank you!</h1>
        <p className="mt-3 text-muted-foreground">Your order #ORD-10248 has been confirmed. We've sent the receipt to your email.</p>
        <div className="mt-8 flex gap-3 justify-center">
          <Link to="/orders"><Button variant="outline">View orders</Button></Link>
          <Link to="/shop"><Button className="bg-gradient-primary shadow-elegant">Continue shopping</Button></Link>
        </div>
      </div>
    </PublicLayout>
  );
}
