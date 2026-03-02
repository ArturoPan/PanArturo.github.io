import Timeline from "@/components/experience/Timeline";

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Experience</h1>

      <p className="mt-3 text-2xl font-bold text-accent">
        From 100B+ daily records to 17M+ daily requests.
      </p>

      <p className="mt-4 text-muted">
        Over the past few years I&apos;ve worked across data infrastructure and
        transaction systems at Capital One, built full-stack internship projects,
        and contributed to real products used by real people. Click{" "}
        <span className="text-accent">Deep dive</span> on any role to see the
        architecture and what I actually built.
      </p>

      <div className="mt-12">
        <Timeline />
      </div>
    </div>
  );
}
