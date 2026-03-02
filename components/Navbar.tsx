"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { GraceLogo } from "@/components/GraceLogo";

type Locale = "en" | "ar" | "de";

type SectionConfig = {
  id: string;
  titles: Readonly<Record<Locale, string>>;
};

type NavbarProps = {
  sections: readonly SectionConfig[];
  currentLocale: Locale;
  currentTheme: "dark" | "light";
  onNavigate: (index: number) => void;
  onLocaleChange: (locale: Locale) => void;
  onThemeToggle: () => void;
};

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
  de: "DE"
};

export function Navbar({
  sections,
  currentLocale,
  currentTheme,
  onNavigate,
  onLocaleChange,
  onThemeToggle
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentLocale]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6 sm:py-4 lg:px-10">
      <div className="pointer-events-auto mx-auto max-w-7xl rounded-3xl border border-border/80 bg-panel/75 px-3 py-3 shadow-panel backdrop-blur-2xl sm:px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="sm:hidden">
            <GraceLogo compact theme={currentTheme} />
          </div>
          <div className="hidden sm:block">
            <GraceLogo theme={currentTheme} />
          </div>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1 rounded-2xl border border-border/80 bg-white/5 p-1">
              {(["en", "ar", "de"] as const).map((locale) => {
                const isActive = locale === currentLocale;

                return (
                  <Button
                    key={locale}
                    variant="secondary"
                    aria-label={`Switch to ${localeLabels[locale]}`}
                    onClick={() => onLocaleChange(locale)}
                    className={`px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] sm:px-2.5 sm:text-xs sm:tracking-[0.18em] ${
                      isActive
                        ? "bg-white/12 text-text"
                        : "text-muted"
                    }`}
                  >
                    {localeLabels[locale]}
                  </Button>
                );
              })}
            </div>
            <div className="hidden h-8 w-px bg-border/80 sm:block" />
            <Button
              variant="icon"
              onClick={onThemeToggle}
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="icon"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close sections menu" : "Open sections menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="menu-surface mt-4 p-2">
            <nav className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    onNavigate(index);
                    setMenuOpen(false);
                  }}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-[color:var(--body-text)] transition hover:bg-white/8 hover:text-[color:var(--heading)]"
                >
                  {section.titles[currentLocale]}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
