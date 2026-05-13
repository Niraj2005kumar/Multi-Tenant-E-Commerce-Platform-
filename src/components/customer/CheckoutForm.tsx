import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CheckoutForm() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        ["First name", "Ava"], ["Last name", "Chen"],
        ["Email", "ava@shop.dev"], ["Phone", "+1 555 0100"],
        ["Address", "221B Baker St"], ["City", "London"],
        ["State", "—"], ["ZIP", "NW1"],
      ].map(([label, ph]) => (
        <div key={label} className={label === "Address" ? "sm:col-span-2" : ""}>
          <Label className="mb-1.5">{label}</Label>
          <Input placeholder={ph} />
        </div>
      ))}
    </div>
  );
}
