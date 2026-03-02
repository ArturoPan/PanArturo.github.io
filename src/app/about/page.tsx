import ProfilePhoto from "@/components/about/ProfilePhoto";
import CurrentStatus from "@/components/about/CurrentStatus";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">

        {/* Left: photo + status */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <ProfilePhoto src="/photo.jpg" />
          <CurrentStatus />
        </div>

        {/* Right: bio */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium text-accent">Get to know me</p>
            <h1 className="mt-1 text-3xl font-bold">About Me</h1>
          </div>

          <div className="flex flex-col gap-4 text-muted">
            <p>
              Hi, I&apos;m Arturo — a software engineer based in Southern
              California. I spent 3 years at Capital One building backend
              systems, APIs, and data infrastructure for applications
              at scale.
            </p>
            <p>
              I&apos;m currently exploring agentic AI and building projects with
              LLMs and autonomous agents. I&apos;m drawn to how AI can tackle
              complex, multi-step problems, and I&apos;m learning by shipping —
              building tools, experimenting with frameworks, and seeing
              what&apos;s possible.
            </p>
            <p>
              Outside of coding, I enjoy playing basketball, photography, and
              spending time with family. I also occasionally help out with the
              family business.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
