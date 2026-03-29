"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Palette,
  Send,
  Sparkles,
  Terminal,
  Wallet,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Tinkering", href: "#tinkering" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "JS/TS", "Go", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend / Mobile",
    icon: Sparkles,
    items: ["React", "Next.js", "React Native (Expo)", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "AI & Infrastructure",
    icon: Terminal,
    items: ["OpenClaw", "Ollama (Local LLM)", "Linux (Ubuntu)", "WSL", "CLI"],
  },
  {
    title: "Multimedia",
    icon: Palette,
    items: ["Figma", "DaVinci Resolve", "VMix", "OBS Studio", "NDI"],
  },
];

const projects = [
  {
    title: "MikroLink",
    subtitle: "Smart Transportation System",
    description:
      "Smart Transportation System app developed with Expo to make route visibility, mobility coordination, and commuter experience in Manado more intuitive.",
    tags: ["Expo", "React Native", "Award: 2nd Place National M-BPC UNJ"],
    className: "lg:col-span-2",
    icon: Building2,
  },
  {
    title: "U-Commerce",
    subtitle: "Campus E-commerce",
    description: "Platform e-commerce kampus menggunakan React dan MySQL untuk transaksi yang lebih terstruktur dan mudah diakses.",
    tags: ["React", "MySQL", "Campus Platform"],
    className: "",
    icon: GraduationCap,
  },
  {
    title: "LogMan",
    subtitle: "Compiler Illustrator",
    description: "Compiler illustrator untuk dialek Manado menggunakan Python dan Oracle dengan pendekatan visual yang lebih mudah dipahami.",
    tags: ["Python", "Oracle", "Dialect System"],
    className: "",
    icon: Code2,
  },
  {
    title: "AITISM",
    subtitle: "AI Integration Project",
    description:
      "Proyek integrasi AI yang mengeksplorasi orkestrasi model, alur kerja cerdas, dan penerapan automasi berbasis konteks.",
    tags: ["AI Integration", "Automation", "Award: 1st Runner Up INDONERIS"],
    className: "lg:col-span-2",
    icon: Cpu,
  },
];

const tinkeringAreas = [
  {
    title: "AI Orchestration",
    detail:
      "Configuring OpenClaw as an AI gateway and integrating Ollama for local LLM workflows through practical CLI-based orchestration.",
    bullets: [
      "OpenClaw setup for routing AI tasks through a cleaner gateway layer",
      "Ollama integration for local LLM experimentation and fast iteration",
      "CLI-driven workflows for prompts, testing, and model invocation",
    ],
    icon: Cpu,
  },
  {
    title: "System Setup",
    detail:
      "Debugging Linux environments across Ubuntu and WSL, with a strong focus on service control, terminal tooling, and dependable setup routines.",
    bullets: [
      "Linux Ubuntu and WSL troubleshooting for development environments",
      "Service management and process checks via CLI",
      "Reliable setup flows for local tools, dependencies, and shell workflows",
    ],
    icon: Terminal,
  },
];

const experiences = [
  {
    title: "Vice Treasurer @ BEM FILKOM",
    period: "Semester 4",
    detail:
      "Focused on financial stability, budget flow, and clean journal tracking using Google Sheets for more dependable reporting.",
    icon: Wallet,
  },
  {
    title: "Multimedia Committee @ PROXOCORIS (2025 & 2026) and CampusDay",
    period: "Committee Role",
    detail:
      "Handled live multimedia operations using VMix, OBS, NDI, and AlightMotion to support event visuals and production flow.",
    icon: Palette,
  },
  {
    title: "Web Developer & Vice Treasurer @ UVICS",
    period: "Semester 1-3",
    detail:
      "Built the official website, prepared Figma mockups, and supported treasury operations with a balanced technical and organizational role.",
    icon: Code2,
  },
  {
    title: "Event Division @ FILKOMDAY 2025",
    period: "Semester 3",
    detail:
      "Supported event execution planning, coordination, and on-the-ground delivery for student activities and programming.",
    icon: BriefcaseBusiness,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-smoke">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        </div>
        {description ? <p className="max-w-xl text-sm leading-7 text-smoke">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

export function PortfolioPage() {
  const scrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  return (
    <main className="relative overflow-x-hidden bg-white text-ink selection:bg-indigoelectric selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-stone-100 via-white to-white" />
        <div className="absolute inset-0 bg-grid bg-[size:36px_36px] opacity-35" />
      </div>

      <header className="sticky top-0 z-50 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.nav
            aria-label="Primary navigation"
            className={`mt-4 flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
              scrolled ? "glass-pill mx-auto max-w-4xl" : "border-transparent bg-transparent"
            }`}
            layout
          >
            <Link href="#hero" className="text-sm font-semibold uppercase tracking-[0.28em] text-ink">
              Timothy Jordy Weley
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-smoke transition hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-ink md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              <Menu className="h-4 w-4" />
            </button>

            <Link
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 md:inline-flex"
            >
              Let&apos;s Talk
            </Link>
          </motion.nav>

          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 rounded-[1.5rem] border border-stone-200 bg-white/90 p-4 shadow-soft backdrop-blur md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm text-smoke transition hover:bg-stone-50 hover:text-ink"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </div>
      </header>

      <motion.section
        id="hero"
        className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] overflow-hidden rounded-[3rem]">
          <div className="mesh-orb left-[10%] top-16 h-56 w-56 bg-indigoelectric" />
          <div className="mesh-orb right-[18%] top-10 h-64 w-64 bg-cyansignal [animation-delay:-6s]" />
          <div className="mesh-orb bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 bg-indigo-200 [animation-delay:-11s]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-stone-50 to-white/70" />
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm text-smoke shadow-soft backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyansignal" />
              Universitas Klabat (UNKLAB) | Computer Science
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-smoke">Professional Profile</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Timothy Jordy Weley
                <span className="mt-3 block text-2xl font-medium text-gradient sm:text-3xl lg:text-4xl">
                  Computer Science Student | Web &amp; Mobile Developer | AI Tinkerer
                </span>
              </h1>
              <p className="max-w-3xl text-base leading-8 text-smoke sm:text-lg">
                Focused on building clear digital systems with minimalist interfaces and thoughtful AI orchestration,
                from web and mobile apps to practical local-LLM workflows.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-float"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white/80 px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-cyansignal"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-soft backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-smoke">Headline</p>
              <p className="mt-4 text-2xl font-semibold text-ink">
                Minimal interfaces, multimedia thinking, and practical AI-backed development.
              </p>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-smoke">Campus</p>
                <p className="mt-3 text-3xl font-semibold">UNKLAB</p>
                <p className="mt-2 text-sm leading-6 text-smoke">Computer Science student with an applied product-building mindset.</p>
              </article>
              <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-smoke">Approach</p>
                <p className="mt-3 text-3xl font-semibold">Adaptive</p>
                <p className="mt-2 text-sm leading-6 text-smoke">Combining frontend, mobile, AI tooling, and visual communication.</p>
              </article>
            </div>
          </div>
        </div>
      </motion.section>

      <Section
        id="about"
        eyebrow="About Me"
        title="Technical builder with a creative communication mindset."
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-soft">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-smoke">
              <BadgeCheck className="h-4 w-4 text-indigoelectric" />
              Current Direction
            </div>
            <p className="mt-5 text-lg leading-8 text-ink">
              Building systems that feel visually calm, technically useful, and increasingly enhanced by AI-driven workflows.
            </p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-soft backdrop-blur sm:p-10">
            <p className="text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
              I&apos;m a Computer Science student at Universitas Klabat (UNKLAB) who combines technical development across
              frontend, mobile, and AI experimentation with creative visual communication through multimedia. I enjoy shaping
              products that are not only functional, but also easier to understand, present, and trust.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills / Tech Stack"
        title="Functional capabilities across code, systems, and multimedia."
        description="Grouped by practical use so the stack reads more like an operating profile than a flat tool list."
      >
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                variants={staggerItem}
                className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-indigoelectric" />
                  <p className="text-sm uppercase tracking-[0.3em] text-smoke">{group.title}</p>
                </div>
                <motion.div className="mt-5 flex flex-wrap gap-3" variants={staggerContainer}>
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={staggerItem}
                      className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm shadow-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </Section>

      <Section
        id="projects"
        eyebrow="Featured Projects"
        title="Selected work with product, mobile, compiler, and AI angles."
        description="The portfolio now reflects both shipped concepts and award-linked academic projects."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-5 shadow-soft ${project.className}`}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28, ease: "easeOut", delay: index * 0.05 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[2rem] border border-indigo-400/40 shadow-glow" />
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigoelectric/10 blur-3xl" />
                  <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-cyansignal/10 blur-3xl" />
                </div>
                <div className="relative flex h-52 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-stone-100 via-white to-stone-50 text-center">
                  <div className="flex flex-col items-center gap-3 px-6">
                    <Icon className="h-10 w-10 text-indigoelectric" />
                    <p className="text-sm uppercase tracking-[0.35em] text-smoke">{project.subtitle}</p>
                  </div>
                </div>
                <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-smoke">{project.description}</p>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink transition group-hover:text-indigoelectric"
                  >
                    Discuss Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <motion.div
                  className="relative mt-5 flex flex-wrap gap-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={staggerItem}
                      className="rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-xs text-smoke"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <Section
        id="tinkering"
        eyebrow="Technical Tinkering"
        title="Hands-on with AI orchestration and system debugging."
        description="A focused area for the setup and CLI-heavy experimentation that supports my application work."
      >
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tinkeringAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                variants={staggerItem}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyansignal" />
                  <p className="text-sm uppercase tracking-[0.3em] text-smoke">{area.title}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-smoke">{area.detail}</p>
                <motion.ul className="mt-5 space-y-3 text-sm text-ink" variants={staggerContainer}>
                  {area.bullets.map((bullet) => (
                    <motion.li key={bullet} variants={staggerItem} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyansignal" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            );
          })}
        </motion.div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Leadership, multimedia operations, and execution roles."
        description="These roles reflect a blend of finance, technical delivery, event support, and visual production."
      >
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <motion.article
                key={experience.title}
                variants={staggerItem}
                className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-stone-50 p-3">
                    <Icon className="h-5 w-5 text-indigoelectric" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-sm text-smoke">{experience.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-smoke">{experience.detail}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let&apos;s build something useful together."
        description="The form keeps the same motion feedback while the contact details now reflect the latest profile information."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-soft">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.35em] text-smoke">
              <Mail className="h-4 w-4 text-cyansignal" />
              Contact
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start a conversation.</h3>
            <p className="mt-4 text-sm leading-7 text-smoke">
              Share a project idea, a collaboration opportunity, or an AI-focused concept and I&apos;ll respond thoughtfully.
            </p>
            <div className="mt-8 space-y-3 text-sm text-smoke">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigoelectric" />
                tmthyjw@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyansignal" />
                Manado, Indonesia
              </p>
              <p className="flex items-center gap-3">
                <Send className="h-4 w-4 text-indigoelectric" />
                Response time: typically within 24-48 hours
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft sm:p-10">
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                setFormState("loading");
                window.setTimeout(() => setFormState("success"), 1400);
                window.setTimeout(() => setFormState("idle"), 3400);
              }}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-indigoelectric focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-indigoelectric focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your project or opportunity."
                  className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-indigoelectric focus:bg-white"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.button
                  type="submit"
                  className="inline-flex min-w-40 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-soft"
                  whileTap={{ scale: 0.98 }}
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <motion.span
                        className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, ease: "linear" }}
                      />
                      Sending...
                    </span>
                  ) : formState === "success" ? (
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                <motion.p
                  className={`text-sm ${formState === "success" ? "text-emerald-600" : "text-smoke"}`}
                  key={formState}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formState === "loading"
                    ? "Preparing your message..."
                    : formState === "success"
                      ? "Thanks, your message has been sent successfully."
                      : "All fields are required."}
                </motion.p>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <footer className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="space-y-1 text-sm text-smoke">
            <p>© 2026 Timothy Jordy Weley. All rights reserved.</p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyansignal" />
              Manado, Indonesia
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-indigoelectric" />
              tmthyjw@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm text-smoke">
            <Link href="https://www.linkedin.com/in/timothy-jordy-weley-115260349/" className="transition hover:text-indigoelectric">
              LinkedIn
            </Link>
            <Link href="https://github.com/tmthyjw23" className="transition hover:text-indigoelectric">
              GitHub
            </Link>
            <Link href="https://www.instagram.com/tmthyjw_/" className="transition hover:text-indigoelectric">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
