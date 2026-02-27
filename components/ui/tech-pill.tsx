interface ITechPillProps {
  label: string;
}

export default function TechPill({ label }: ITechPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
      {label}
    </span>
  );
}
