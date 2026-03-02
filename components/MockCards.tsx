"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  Clock3,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound
} from "lucide-react";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

type ListItem = {
  title: string;
  detail: string;
};

type TaskItem = {
  title: string;
  subtitle: string;
  done?: boolean;
};

function cardMotion(index: number, reduceMotion: boolean, once = false) {
  return {
    initial: reduceMotion ? undefined : { opacity: 0, y: 22 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once, amount: once ? 0.3 : 0.4 },
    transition: { duration: 0.6, delay: index * 0.08 }
  };
}

export function GlassCard({ children, className = "" }: CardProps) {
  return (
    <div className={`glass-card p-5 ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function HighlightGrid({ items }: { items: ListItem[] }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <motion.div key={item.title} {...cardMotion(index, reduceMotion)}>
          <GlassCard className="h-full">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-[color:var(--heading)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[color:var(--body-text)]">
              {item.detail}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

export function TaskBoard({
  eyebrow = "App Flow",
  title,
  badge,
  items,
  animateOnce = false
}: {
  eyebrow?: string;
  title: string;
  badge: string;
  items: TaskItem[];
  animateOnce?: boolean;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div {...cardMotion(0, reduceMotion, animateOnce)}>
      <GlassCard className="overflow-hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[color:var(--heading)]">
              {title}
            </h3>
          </div>
          <span className="rounded-full border border-border/70 bg-white/8 px-3 py-1.5 text-xs font-semibold text-text">
            {badge}
          </span>
        </div>
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white/5 px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-white/8">
                {item.done ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <CircleDashed className="h-5 w-5 text-muted" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[color:var(--heading)]">
                  {item.title}
                </p>
                <p className="truncate text-xs text-[color:var(--muted-body)]">
                  {item.subtitle}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted" />
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function DualFeatureCards({
  therapistTitle,
  therapistPoints,
  techTitle,
  techPoints
}: {
  therapistTitle: string;
  therapistPoints: string[];
  techTitle: string;
  techPoints: string[];
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <motion.div {...cardMotion(0, reduceMotion)}>
        <GlassCard className="h-full">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
            <Stethoscope className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-[color:var(--heading)]">
            {therapistTitle}
          </h3>
          <div className="mt-4 space-y-3">
            {therapistPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-[color:var(--body-text)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
      <motion.div {...cardMotion(1, reduceMotion)}>
        <GlassCard className="h-full">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary2">
            <LockKeyhole className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-[color:var(--heading)]">
            {techTitle}
          </h3>
          <div className="mt-4 space-y-3">
            {techPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary2" />
                <p className="text-sm leading-7 text-[color:var(--body-text)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

export function TeamCards({
  members
}: {
  members: Array<{ name: string; role: string; detail: string }>;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
      <div className="grid gap-4 md:grid-cols-2">
      {members.map((member, index) => (
        <motion.div key={member.name} {...cardMotion(index, reduceMotion)}>
          <GlassCard className="h-full">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/8 text-primary">
                <UserRound className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-[color:var(--heading)]">
                  {member.name}
                </h3>
                {member.role ? <p className="text-sm text-primary">{member.role}</p> : null}
              </div>
              {member.name === "Tariq Alahmer" ? (
                <a
                  href="https://tariqalahmer.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Tariq Alahmer profile"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-primary transition hover:shadow-[0_0_14px_rgba(108,124,255,0.18)]"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
            {member.detail ? (
              <p className="mt-4 text-sm leading-7 text-[color:var(--body-text)]">
                {member.detail}
              </p>
            ) : null}
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

export function PricingCards({
  plans
}: {
  plans: Array<{
    name: string;
    price: string;
    detail: string;
    features: string[];
  }>;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <motion.div key={plan.name} {...cardMotion(index, reduceMotion)}>
          <GlassCard
            className={`h-full ${index === 1 ? "border-primary/30 shadow-glow" : ""}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {plan.name}
            </p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-semibold tracking-[-0.04em] text-[color:var(--heading)]">
                {plan.price}
              </span>
              <span className="pb-1 text-sm text-muted">/mo</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[color:var(--body-text)]">
              {plan.detail}
            </p>
            <div className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm text-[color:var(--body-text)]">{feature}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

export function InsightStrip({
  items
}: {
  items: Array<{ label: string; value: string; icon: "brain" | "clock" | "shield" }>;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item, index) => {
        const Icon =
          item.icon === "brain"
            ? BrainCircuit
            : item.icon === "clock"
              ? Clock3
              : ShieldCheck;

        return (
          <motion.div key={item.label} {...cardMotion(index, reduceMotion)}>
            <GlassCard>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--heading)]">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-[color:var(--muted-body)]">
                {item.label}
              </p>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
