type GlowEffectProps = {
  rounded?: "xl" | "2xl";
};

export default function GlowEffect({ rounded = "xl" }: GlowEffectProps) {
  const r = `rounded-${rounded}`;
  return (
    <>
      <div className={`absolute -inset-px ${r} bg-gradient-to-br from-accent/30 via-transparent to-purple-500/20 blur-sm`} />
      <div className={`absolute -inset-px ${r} bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10`} />
    </>
  );
}
