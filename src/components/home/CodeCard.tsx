"use client";

import { motion } from "framer-motion";
import { CODE_CARD } from "@/lib/constants";
import GlowEffect from "@/components/ui/GlowEffect";

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full max-w-lg"
    >
      {/* Glow effect */}
      <GlowEffect rounded="xl" />

      {/* Card */}
      <div className="relative rounded-xl border border-surface-light bg-surface/90 shadow-2xl backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-surface-light px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted">{CODE_CARD.filename}</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-7">
          {CODE_CARD.lines.map((line, i) => (
            <div key={i}>
              {line.type === "comment" && (
                <span className="text-syntax-comment">{line.content}</span>
              )}
              {line.type === "declaration" && (
                <>
                  <span className="text-syntax-keyword">const </span>
                  <span className="text-syntax-property">{line.keyword}</span>
                  <span className="text-syntax-punctuation"> = {"{"}</span>
                </>
              )}
              {line.type === "property" && (
                <span className="pl-6">
                  <span className="text-syntax-property">{line.key}</span>
                  <span className="text-syntax-punctuation">: </span>
                  <span className="text-syntax-string">{line.value}</span>
                  <span className="text-syntax-punctuation">,</span>
                </span>
              )}
              {line.type === "closing" && (
                <span className="text-syntax-punctuation">{"}"};  </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
