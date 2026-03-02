"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-3"
    >
      <p className="text-sm font-medium text-accent">Hello! I&apos;m</p>

      <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
        {SITE.fullName.split(" ")[0]}{" "}
        <span className="text-accent">{SITE.fullName.split(" ").slice(1).join(" ")}</span>
      </h1>

      <p className="text-xl text-muted">{SITE.title}</p>

      <p className="max-w-md text-muted">{SITE.description}</p>
    </motion.div>
  );
}
