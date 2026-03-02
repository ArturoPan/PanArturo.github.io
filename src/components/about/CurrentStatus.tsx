import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const STATUS = [
  { icon: Briefcase, label: "Software Engineer" },
  { icon: MapPin, label: "San Francisco, CA" },
  { icon: GraduationCap, label: "B.S. Computer Science" },
];

export default function CurrentStatus() {
  return (
    <div className="flex flex-col gap-2.5">
      {STATUS.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3 text-sm text-muted">
          <Icon size={15} className="shrink-0 text-accent" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
