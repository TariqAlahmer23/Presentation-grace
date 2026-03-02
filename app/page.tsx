"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Brain,
  Lock,
  Mail,
  Phone,
  Shield,
  Sparkles,
  Users
} from "lucide-react";
import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { OurAppSection } from "@/components/OurAppSection";
import { COPY, type Locale } from "@/components/presentation-content";
import { Section } from "@/components/Section";
import { SlideDots } from "@/components/SlideDots";
import {
  DualFeatureCards,
  GlassCard,
  HighlightGrid,
  InsightStrip,
  TeamCards
} from "@/components/MockCards";

type ThemeMode = "dark" | "light";

const SECTIONS = [
  { id: "intro", titles: { en: "Intro", ar: "المقدمة", de: "Intro" } },
  {
    id: "services",
    titles: { en: "Our Services", ar: "خدماتنا", de: "Unsere Leistungen" }
  },
  { id: "app", titles: { en: "Our App", ar: "تطبيقنا", de: "Unsere App" } },
  {
    id: "team",
    titles: { en: "Meet Our Team", ar: "فريقنا", de: "Unser Team" }
  },
  {
    id: "security",
    titles: { en: "Security", ar: "الأمان", de: "Sicherheit" }
  },
  { id: "ai", titles: { en: "AI", ar: "الذكاء الاصطناعي", de: "KI" } },
  {
    id: "difference",
    titles: {
      en: "Why Grace is Different",
      ar: "لماذا Grace مختلفة",
      de: "Warum Grace anders ist"
    }
  },
  { id: "contact", titles: { en: "Contact Us", ar: "تواصل معنا", de: "Kontakt" } }
] as const;

const MAIN_WEBSITE_URL = "https://gracee.app";
const APK_DOWNLOAD_URL = "https://api.gracee.app/download/";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem("grace-theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [hasDesktopCover, setHasDesktopCover] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);

  const content = COPY[locale];
  const isRtl = locale === "ar";

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("grace-theme", theme);
  }, [isRtl, locale, theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncDesktopCover = (event?: MediaQueryListEvent) => {
      setHasDesktopCover(event?.matches ?? mediaQuery.matches);
    };

    syncDesktopCover();
    mediaQuery.addEventListener("change", syncDesktopCover);

    return () => mediaQuery.removeEventListener("change", syncDesktopCover);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const nextIndex = Number(visible.target.getAttribute("data-index"));
        if (!Number.isNaN(nextIndex)) {
          setActiveSlideIndex(nextIndex);
        }
      },
      {
        threshold: [0.35, 0.6, 0.85]
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => observer.disconnect();
  }, [hasDesktopCover]);

  const coverOffset = hasDesktopCover ? 1 : 0;

  const setSlideRef = (index: number) => (node: HTMLElement | null) => {
    slideRefs.current[index] = node;
    if (node) {
      node.dataset.index = String(index);
    }
  };

  const scrollToSlide = (index: number) => {
    const bounded = Math.min(
      Math.max(index, 0),
      SECTIONS.length - 1 + coverOffset
    );

    slideRefs.current[bounded]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToIndex = (index: number) => {
    const bounded = Math.min(Math.max(index, 0), SECTIONS.length - 1);
    scrollToSlide(bounded + coverOffset);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        scrollToSlide(activeSlideIndex + 1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        scrollToSlide(activeSlideIndex - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlideIndex, coverOffset]);

  const navActiveIndex = Math.max(activeSlideIndex - coverOffset, 0);
  const showPresentationChrome = !hasDesktopCover || activeSlideIndex > 0;

  const progress = useMemo(() => {
    if (SECTIONS.length <= 1) {
      return 0;
    }

    return (navActiveIndex / (SECTIONS.length - 1)) * 100;
  }, [navActiveIndex]);

  return (
    <div className="h-[100svh] overflow-hidden bg-bg text-text transition-colors duration-500">
      <div
        className={`fixed inset-x-0 top-0 z-[60] h-px bg-border/60 transition-opacity duration-500 ${showPresentationChrome ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className="h-full bg-gradient-to-r from-primary via-primary2 to-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <Navbar
        sections={SECTIONS}
        currentLocale={locale}
        currentTheme={theme}
        onNavigate={scrollToIndex}
        onLocaleChange={setLocale}
        onThemeToggle={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />

      <div
        className={`transition-opacity duration-500 ${showPresentationChrome ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <SlideDots
          count={SECTIONS.length}
          activeIndex={navActiveIndex}
          labels={SECTIONS.map((section) => section.titles[locale])}
          onSelect={scrollToIndex}
        />
      </div>

      <main
        className="h-[100svh] snap-none overflow-y-auto lg:snap-y lg:snap-mandatory"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {hasDesktopCover ? (
          <section
            ref={setSlideRef(0)}
            className="relative min-h-[100svh] snap-start"
            aria-label="Grace cover"
          >
            <Image
              src="/background.png"
              alt="Grace cover"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-8 z-10 px-4 sm:bottom-10 sm:px-6">
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  onClick={() => openExternalLink(MAIN_WEBSITE_URL)}
                  className="w-full justify-center sm:w-auto"
                >
                  {content.labels.website}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => openExternalLink(APK_DOWNLOAD_URL)}
                  className="w-full justify-center sm:w-auto"
                >
                  {content.labels.download}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        ) : null}

        <Section
          id={SECTIONS[0].id}
          index={0}
          sectionRef={setSlideRef(coverOffset)}
          badge={content.sections[0].badge}
          title={content.sections[0].title}
          description={content.sections[0].description}
        >
          <div className="space-y-4">
            <GlassCard>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    GRACE
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--body-text)]">
                    {content.navSummary}
                  </p>
                </div>
                <Button onClick={() => scrollToIndex(1)} className="w-fit">
                  {content.labels.explore}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
            <HighlightGrid
              items={content.introHighlights.map(([title, detail]) => ({
                title,
                detail
              }))}
            />
          </div>
        </Section>

        <Section
          id={SECTIONS[1].id}
          index={1}
          sectionRef={setSlideRef(coverOffset + 1)}
          badge={content.sections[1].badge}
          title={content.sections[1].title}
          description={content.sections[1].description}
        >
          <div className="space-y-4">
            <HighlightGrid
              items={content.serviceHighlights.map(([title, detail]) => ({
                title,
                detail
              }))}
            />
            <DualFeatureCards
              therapistTitle={content.therapistTitle}
              therapistPoints={[...content.therapistPoints]}
              techTitle={content.techTitle}
              techPoints={[...content.techPoints]}
            />
          </div>
        </Section>

        <OurAppSection
          id={SECTIONS[2].id}
          index={2}
          sectionRef={setSlideRef(coverOffset + 2)}
          badge={content.sections[2].badge}
          title={content.sections[2].title}
          description={content.sections[2].description}
          content={content}
        />

        <Section
          id={SECTIONS[3].id}
          index={3}
          sectionRef={setSlideRef(coverOffset + 3)}
          badge={content.sections[3].badge}
          title={content.sections[3].title}
          description={content.sections[3].description}
        >
          <TeamCards
            members={content.team.map(([name, role, detail]) => ({
              name,
              role,
              detail
            }))}
          />
        </Section>

        <Section
          id={SECTIONS[4].id}
          index={4}
          sectionRef={setSlideRef(coverOffset + 4)}
          badge={content.sections[5].badge}
          title={content.sections[5].title}
          description={content.sections[5].description}
        >
          <div className="space-y-4">
            <DualFeatureCards
              therapistTitle={content.securityPrimaryTitle}
              therapistPoints={[...content.securityPrimaryPoints]}
              techTitle={content.securitySecondaryTitle}
              techPoints={[...content.securitySecondaryPoints]}
            />
            <GlassCard>
              <div className="grid gap-4 md:grid-cols-3">
                {content.securityHighlights.map(([title, detail], index) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-border/70 bg-white/5 p-4"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                      {index === 0 ? (
                        <Lock className="h-5 w-5" />
                      ) : index === 1 ? (
                        <Shield className="h-5 w-5" />
                      ) : (
                        <Sparkles className="h-5 w-5" />
                      )}
                    </div>
                    <p className="text-base font-semibold text-text">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--body-text)]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Section
          id={SECTIONS[5].id}
          index={5}
          sectionRef={setSlideRef(coverOffset + 5)}
          badge={content.sections[6].badge}
          title={content.sections[6].title}
          description={content.sections[6].description}
        >
          <div className="space-y-4">
            <GlassCard>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                    <Bot className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-text">{content.aiTitle}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--body-text)]">
                    {content.aiSummary}
                  </p>
                </div>
                <div className="space-y-3">
                  {content.aiBullets.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/70 bg-white/5 px-4 py-4 text-sm leading-7 text-[color:var(--body-text)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
            <InsightStrip
              items={content.metrics.map(([label, value, icon]) => ({
                label,
                value,
                icon: icon as "brain" | "clock" | "shield"
              }))}
            />
          </div>
        </Section>

        <Section
          id={SECTIONS[6].id}
          index={6}
          sectionRef={setSlideRef(coverOffset + 6)}
          badge={content.sections[7].badge}
          title={content.sections[7].title}
          description={content.sections[7].description}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <GlassCard>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">
                {content.differenceA[0]}
              </h3>
              <div className="mt-4 space-y-3">
                {content.differenceA.slice(1).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/70 bg-white/5 px-4 py-3 text-sm text-[color:var(--body-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary2">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">
                {content.differenceB[0]}
              </h3>
              <div className="mt-4 space-y-3">
                {content.differenceB.slice(1).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/70 bg-white/5 px-4 py-3 text-sm text-[color:var(--body-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Section
          id={SECTIONS[7].id}
          index={7}
          sectionRef={setSlideRef(coverOffset + 7)}
          badge={content.sections[8].badge}
          title={content.sections[8].title}
          description={content.sections[8].description}
        >
          <div className="space-y-4">
            <GlassCard>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
                <div>
                  <p className="text-sm leading-7 text-[color:var(--body-text)]">
                    {content.contactLine}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-text">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-white/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>{content.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-white/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>{content.secondaryEmail}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-white/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span>{content.phone}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      onClick={() => openExternalLink(MAIN_WEBSITE_URL)}
                      className="w-full justify-center sm:w-fit"
                    >
                      {content.labels.website}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => openExternalLink(APK_DOWNLOAD_URL)}
                      className="w-full justify-center sm:w-fit"
                    >
                      {content.labels.download}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="rounded-3xl border border-border/70 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    {content.labels.progress}
                  </p>
                  <div className="mt-4 space-y-4">
                    {SECTIONS.map((section, index) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToIndex(index)}
                        className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-white/5 px-4 py-3 text-left"
                      >
                        <span className="text-sm font-medium text-text">
                          {content.labels.slide} {index + 1}
                        </span>
                        <span className="text-sm text-muted">
                          {section.titles[locale]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Section>
      </main>
    </div>
  );
}
