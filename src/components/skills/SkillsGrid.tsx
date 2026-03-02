"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SKILLS, type Skill, type SkillCategory } from "@/lib/constants";

const CATEGORY_COLORS: Record<SkillCategory, string> = {
  Language: "text-purple-400 bg-purple-400/10",
  Backend: "text-blue-400 bg-blue-400/10",
  Frontend: "text-green-400 bg-green-400/10",
  Tools: "text-orange-400 bg-orange-400/10",
};

const CATEGORIES: SkillCategory[] = ["Language", "Backend", "Frontend", "Tools"];

export default function SkillsGrid() {
  const [selected, setSelected] = useState<Skill | null>(null);
  const [activeFilter, setActiveFilter] = useState<SkillCategory | "All">("All");

  const filtered =
    activeFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {(["All", ...CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === cat
                ? "bg-accent text-white"
                : "border border-surface-light text-muted hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div layout className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.button
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(skill)}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-surface-light bg-surface/60 p-4 text-center transition-all hover:border-accent/50 hover:bg-surface hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[skill.category]}`}
              >
                {skill.category}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-surface-light bg-surface p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selected.name}</h3>
                  <span
                    className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[selected.category]}`}
                  >
                    {selected.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-lg p-1 text-muted transition-colors hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Experience entries */}
              <div className="flex flex-col gap-4">
                {selected.experience.map((entry, i) => (
                  <div key={i} className="rounded-lg border border-surface-light bg-background/50 p-4">
                    <p className="mb-1.5 text-sm font-semibold text-accent">{entry.where}</p>
                    <p className="text-sm text-muted">{entry.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
