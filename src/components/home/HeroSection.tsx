import HeroText from "./HeroText";
import CodeCard from "./CodeCard";

export default function HeroSection() {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <HeroText />
        <div className="flex justify-center lg:justify-end">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}
