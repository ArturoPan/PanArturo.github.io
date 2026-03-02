import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const iconMap = {
  Github,
  Linkedin,
  Mail,
} as const;

export default function SocialIcons({ size = 20 }: { size?: number }) {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-muted transition-colors hover:text-accent"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
