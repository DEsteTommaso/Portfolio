interface ITechPillProps {
  label: string;
}

export default function TechPill({ label }: ITechPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-base font-medium text-white/90 backdrop-blur-sm">
      {label}
    </span>
  );
}
