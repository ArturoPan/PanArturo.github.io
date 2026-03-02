import Image from "next/image";
import { User } from "lucide-react";

type ProfilePhotoProps = {
  src?: string;
};

export default function ProfilePhoto({ src }: ProfilePhotoProps) {
  return (
    <div className="relative mx-auto w-fit">
      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-purple-500/20 blur-sm" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10" />

      {/* Photo frame */}
      <div className="relative h-72 w-64 overflow-hidden rounded-2xl border border-surface-light bg-surface">
        {src ? (
          <Image
            src={src}
            alt="Arturo Pan"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-surface-light">
            <User size={80} strokeWidth={1} />
          </div>
        )}
      </div>
    </div>
  );
}
