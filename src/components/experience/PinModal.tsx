"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import { useUnlock } from "./UnlockContext";

export default function PinModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const { unlock } = useUnlock();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setPin("");
      setError(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = unlock(pin);
    if (success) {
      onClose();
    } else {
      setError(true);
      setPin("");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-surface-light bg-surface p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-accent" />
                <h3 className="font-semibold text-foreground">Enter PIN</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-muted transition-colors hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                ref={inputRef}
                type="password"
                value={pin}
                onChange={(e) => { setPin(e.target.value); setError(false); }}
                placeholder="••••••"
                className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent ${
                  error ? "border-red-500" : "border-surface-light"
                }`}
              />
              {error && (
                <p className="text-xs text-red-400">Incorrect PIN. Try again.</p>
              )}
              <button
                type="submit"
                className="rounded-lg bg-accent py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Unlock
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
