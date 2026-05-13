import { Search } from "lucide-react";

export function SearchBar({ value, onChange, placeholder = "Search products..." }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-transparent focus:border-primary focus:bg-background outline-none transition-all text-sm"
      />
    </div>
  );
}
