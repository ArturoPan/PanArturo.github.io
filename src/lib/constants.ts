export const SITE = {
  name: "AP",
  fullName: "Arturo Pan",
  title: "Software Engineer",
  description:
    "Engineering backend systems that power real-world products at scale.",
  email: "artpanloo@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/PanArturo", icon: "Github" as const },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/apanloo/",
    icon: "Linkedin" as const,
  },
  { label: "Email", href: "mailto:artpanloo@gmail.com", icon: "Mail" as const },
];

export const CODE_CARD = {
  filename: "developer.js",
  lines: [
    { type: "comment", content: "// Software Engineer" },
    { type: "declaration", content: "const ", keyword: "developer", rest: " = {" },
    { type: "property", key: "name", value: "'Arturo Pan'" },
    { type: "property", key: "skills", value: "['Java', 'Python', 'TypeScript']" },
    { type: "property", key: "focuses", value: "['Backend', 'Distributed Systems']" },
    { type: "property", key: "style", value: "'Backend-first, full-stack capable'" },
    { type: "property", key: "learning", value: "'Always'" },
    { type: "closing", content: "};" },
  ],
};
