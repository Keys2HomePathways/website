import { LucideIcon } from "lucide-react";

interface ValuePropCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValuePropCard({ icon: Icon, title, description }: ValuePropCardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300">
      <div className="h-14 w-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
