"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";
import { UnlockProvider } from "./UnlockContext";
import DeepDive from "./DeepDive";

export default function Timeline() {
  return (
    <UnlockProvider>
      <div className="relative flex flex-col gap-0">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex gap-6"
          >
            {/* Left: icon + vertical line */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Briefcase size={18} />
              </div>
              {i < EXPERIENCES.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-surface-light" />
              )}
            </div>

            {/* Right: content */}
            <div className="pb-10 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-semibold text-foreground">
                  {exp.role} ·{" "}
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      {exp.company}
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                {exp.latest && (
                  <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                    Latest
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-muted">{exp.period} · {exp.location}</p>
              <p className="mt-2 text-sm text-muted">{exp.description}</p>
              {exp.deepDive && <DeepDive exp={exp} />}
            </div>
          </motion.div>
        ))}
      </div>
    </UnlockProvider>
  );
}
