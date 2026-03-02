import ProfilePhoto from "@/components/about/ProfilePhoto";
import CurrentStatus from "@/components/about/CurrentStatus";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">

        {/* Left: photo + status */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <ProfilePhoto />
          {/* Uncomment and add your photo: <ProfilePhoto src="/photo.jpg" /> */}
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
              Hi, I&apos;m Arturo — a software engineer based in the Washington,
              D.C. area. I currently work at Capital One building backend systems
              for credit card transaction processing, where I focus on writing
              reliable, scalable services that handle real-world financial data.
            </p>
            <p>
              [Add your personal paragraph here — your background, what drives
              you, what you care about outside of work, anything that makes you
              you.]
            </p>
            <p>
              Outside of work, I&apos;m always looking to grow — whether that&apos;s
              exploring new technologies, contributing to side projects, or
              sharpening skills that keep me well-rounded as an engineer.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
