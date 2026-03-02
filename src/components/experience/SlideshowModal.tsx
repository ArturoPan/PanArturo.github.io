"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageIcon, Maximize2, Minimize2 } from "lucide-react";
import Image from "next/image";
import { type Experience } from "@/lib/constants";

type Props = {
  exp: Experience;
  open: boolean;
  onClose: () => void;
};

export default function SlideshowModal({ exp, open, onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const slides = exp.slides ?? [];
  const total = slides.length;

  useEffect(() => {
    if (open) { setCurrent(0); setFullscreen(false); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setCurrent((c) => Math.min(c + 1, total - 1));
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(c - 1, 0));
      if (e.key === "Escape") { if (fullscreen) setFullscreen(false); else onClose(); }
      if (e.key === "f") setFullscreen((f) => !f);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, total, onClose, fullscreen]);

  const slide = slides[current];

  const modalClass = fullscreen
    ? "fixed inset-0 z-50 flex flex-col bg-surface"
    : "fixed left-1/2 top-1/2 z-50 flex h-[88vh] w-[90vw] max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-surface-light bg-surface shadow-2xl";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — hidden in fullscreen */}
          {!fullscreen && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />
          )}

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={modalClass}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-surface-light px-6 py-4">
              <div>
                <p className="text-xs font-medium text-accent">{exp.company} · {exp.period}</p>
                <h2 className="text-base font-semibold text-foreground">{exp.role}</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted mr-2">{current + 1} / {total}</span>
                <button
                  onClick={() => setFullscreen((f) => !f)}
                  aria-label="Toggle fullscreen"
                  className="rounded-lg p-1.5 text-muted transition-colors hover:text-foreground"
                >
                  {fullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-lg p-1.5 text-muted transition-colors hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Diagram area */}
              <div className="relative flex flex-1 items-center justify-center bg-background/50 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {slide?.diagramSrc ? (
                      <Image
                        src={slide.diagramSrc}
                        alt={slide.title}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-surface-light px-16 py-20 text-muted">
                        <ImageIcon size={40} strokeWidth={1.2} />
                        <p className="text-sm">Diagram coming soon</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right panel */}
              <div className="flex w-80 shrink-0 flex-col gap-5 overflow-y-auto border-l border-surface-light p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                        Slide {current + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-foreground">{slide?.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{slide?.description}</p>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">Tech</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-surface-light bg-background px-2.5 py-0.5 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer navigation */}
            <div className="flex items-center justify-between border-t border-surface-light px-6 py-3">
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all ${
                      i === current
                        ? "h-2 w-6 bg-accent"
                        : "h-2 w-2 bg-surface-light hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
                  disabled={current === 0}
                  className="rounded-lg border border-surface-light p-2 text-muted transition-colors hover:text-foreground disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCurrent((c) => Math.min(c + 1, total - 1))}
                  disabled={current === total - 1}
                  className="rounded-lg border border-surface-light p-2 text-muted transition-colors hover:text-foreground disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
