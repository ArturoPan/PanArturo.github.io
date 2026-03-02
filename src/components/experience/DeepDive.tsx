"use client";

import { useState } from "react";
import { Lock, LayoutPanelLeft } from "lucide-react";
import { type Experience } from "@/lib/constants";
import { useUnlock } from "./UnlockContext";
import PinModal from "./PinModal";
import SlideshowModal from "./SlideshowModal";

export default function DeepDive({ exp }: { exp: Experience }) {
  const [pinOpen, setPinOpen] = useState(false);
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const { unlocked } = useUnlock();

  function handleClick() {
    if (!unlocked) {
      setPinOpen(true);
    } else {
      setSlideshowOpen(true);
    }
  }

  return (
    <div className="mt-4">
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent/80"
      >
        {unlocked ? <LayoutPanelLeft size={13} /> : <Lock size={13} />}
        Deep dive
      </button>

      <PinModal
        open={pinOpen}
        onClose={() => setPinOpen(false)}
      />

      <SlideshowModal
        exp={exp}
        open={slideshowOpen}
        onClose={() => setSlideshowOpen(false)}
      />
    </div>
  );
}
