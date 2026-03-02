import { SITE } from "@/lib/constants";
import SocialIcons from "@/components/home/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-surface-light/50 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6">
        <SocialIcons size={22} />
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.fullName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
