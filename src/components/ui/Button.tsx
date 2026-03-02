import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "filled" | "outlined";
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "filled",
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const variants = {
    filled: "bg-accent text-white hover:bg-accent-hover",
    outlined:
      "border border-surface-light text-foreground hover:bg-surface-light",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
