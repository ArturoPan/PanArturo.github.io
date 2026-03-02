import SkillsGrid from "@/components/skills/SkillsGrid";

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Skills</h1>

      <p className="mt-3 text-2xl font-bold text-accent">
        The tools I reach for and why.
      </p>

      <p className="mt-4 mb-10 text-muted">
        Click any skill to see where and how I picked it up.
      </p>

      <SkillsGrid />
    </div>
  );
}
