"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Users } from "lucide-react";
import { BackgroundFX } from "@/components/BackgroundFX";
import { GlassCard, TaskBoard } from "@/components/MockCards";
import { IphoneMockup } from "@/components/IphoneMockup";
import { SoftBackgroundGlow } from "@/components/SoftBackgroundGlow";

type OurAppSectionProps = {
  id: string;
  index: number;
  badge: string;
  title: string;
  description: string;
  sectionRef?: (node: HTMLElement | null) => void;
  content: {
    labels: {
      tasks: string;
      tasksBadge: string;
    };
    taskItems: ReadonlyArray<readonly [string, string]>;
    therapistTitle: string;
    therapistSubtitle: string;
    therapistPoints: readonly string[];
    techTitle: string;
    techSubtitle: string;
  };
};

const patientImages = [
  "/assets/mobile-app-photos/01.png",
  "/assets/mobile-app-photos/02.png",
  "/assets/mobile-app-photos/03.png"
] as const;

const therapistImages = [
  "/assets/mobile-app-photos/04.png",
  "/assets/mobile-app-photos/05.png",
  "/assets/mobile-app-photos/06.png"
] as const;

const architectureItems = [
  "Secure Auth",
  "Encryption",
  "RBAC",
  "Audit Logs",
  "Notifications"
] as const;

function PhoneRail({
  title,
  images,
  altPrefix
}: {
  title: string;
  images: readonly string[];
  altPrefix: string;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-base font-semibold text-text">{title}</h4>
      </div>

      <div className="space-y-4 md:hidden">
        {images.map((src, index) => (
          <IphoneMockup
            key={src}
            src={src}
            alt={`${altPrefix} ${index + 1}`}
            index={index}
            priority={index === 0}
            animateOnce
          />
        ))}
      </div>

      <div className="hidden md:block">
        <div className="overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-4 px-3 py-2 lg:gap-6">
            {images.map((src, index) => (
              <IphoneMockup
                key={src}
                src={src}
                alt={`${altPrefix} ${index + 1}`}
                index={index}
                priority={index === 1}
                featured={index === 1}
                animateOnce
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurAppSection({
  id,
  index,
  badge,
  title,
  description,
  sectionRef,
  content
}: OurAppSectionProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative flex min-h-[100svh] snap-start items-center overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-10"
    >
      <BackgroundFX index={index} />
      <SoftBackgroundGlow index={index} />
      <motion.div
        className="relative mx-auto w-full max-w-7xl space-y-4"
        initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="max-w-2xl">
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-5 inline-flex items-center rounded-full border border-border/70 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary"
            >
              {badge}
            </motion.div>
            <motion.h2
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="text-balance text-4xl font-semibold tracking-[-0.04em] text-[color:var(--heading)] sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.14 }}
              className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted-body)] sm:text-lg"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <TaskBoard
              title={content.labels.tasks}
              badge={content.labels.tasksBadge}
              animateOnce
              items={content.taskItems.map(([taskTitle, subtitle]) => ({
                title: taskTitle,
                subtitle
              }))}
            />
            <div className="space-y-4">
              <GlassCard>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-white/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {content.therapistTitle}
                    </h3>
                    <p className="text-sm text-[color:var(--muted-body)]">
                      {content.therapistSubtitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {content.therapistPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-border/70 bg-white/5 px-4 py-3 text-sm leading-7 text-[color:var(--body-text)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </GlassCard>
              <GlassCard>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-white/10 text-primary2">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {content.techTitle}
                    </h3>
                    <p className="text-sm text-[color:var(--muted-body)]">
                      {content.techSubtitle}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {architectureItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/70 bg-white/5 px-3 py-3 text-sm font-medium text-[color:var(--heading)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.22 }}
        >
          <GlassCard className="overflow-hidden">
            <div className="space-y-8">
              <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    Experience Grace on Mobile
                  </p>
                <div className="max-w-3xl space-y-2">
                  <h3 className="text-2xl font-semibold text-text">
                    Experience Grace on Mobile
                  </h3>
                  <p className="text-sm leading-7 text-[color:var(--body-text)]">
                    A guided sequence that adapts to the user — not the other
                    way around.
                  </p>
                </div>
              </div>

              <PhoneRail
                title="Patient Experience"
                images={patientImages}
                altPrefix="Grace patient interface"
              />

              <PhoneRail
                title="Therapist Experience"
                images={therapistImages}
                altPrefix="Grace therapist interface"
              />
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
