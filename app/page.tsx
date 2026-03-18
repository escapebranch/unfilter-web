'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const heroStats = [
  '50+ local framework signatures',
  'Offline-first scanning',
  'Tiny ~9MB binary',
  'MIT open source',
];

const featureCards = [
  {
    title: 'Stack Detection',
    description:
      'Unfilter fingerprints installed apps to surface Flutter, React Native, native Android, Unity, Kotlin Multiplatform, and more.',
  },
  {
    title: 'System Insights',
    description:
      'Track active processes, memory behavior, storage pressure, and usage patterns without leaving the same interface.',
  },
  {
    title: 'Privacy by Design',
    description:
      'Scans run locally on-device with no analytics SDKs, no tracking, and no upload pipeline watching your app inventory.',
  },
  {
    title: 'Developer-Readable',
    description:
      'The product is built around real technical signal, not vague labels, so developers can understand what is actually under the hood.',
  },
];

const specCards = [
  'Package metadata plus native library fingerprinting',
  'Task manager, memory visibility, and storage analytics',
  'Feature-first Flutter codebase with data/domain/presentation splits',
  'Dark and light interface system with clean premium motion',
];

const galleryPairs = [
  {
    title: 'Home',
    caption: 'Overview screen with instant scan context and fast entry into every system surface.',
    dark: '/images/home-black.jpg',
    light: '/images/home-white.jpg',
  },
  {
    title: 'Menu',
    caption: 'A focused navigation layer that keeps deep tools one gesture away.',
    dark: '/images/menu-black.jpg',
    light: '/images/menu-white.jpg',
  },
  {
    title: 'Search',
    caption: 'Fast lookup for installed apps when you already know what you want to inspect.',
    dark: '/images/search-black.jpg',
    light: '/images/search-white.jpg',
  },
  {
    title: 'Stack Filters',
    caption: 'Slice the app list by framework to isolate Flutter, React Native, native, and more.',
    dark: '/images/filter-stack-bottomsheet-black.jpg',
    light: '/images/filter-stack-bottomsheet-white.jpg',
  },
  {
    title: 'Task Manager',
    caption: 'Live process surfaces with runtime visibility and memory-oriented signal.',
    dark: '/images/task-manager-black.jpg',
    light: '/images/task-manager-white.jpg',
  },
  {
    title: 'Updates',
    caption: 'A clean update flow that stays aligned with the app’s sharp system-tool aesthetic.',
    dark: '/images/update-black.jpg',
    light: '/images/update-white.jpg',
  },
  {
    title: 'Storage Insights',
    caption: 'Break down app size, cache weight, and storage costs without guesswork.',
    dark: '/images/storage-insights-black.jpg',
    light: '/images/storage-insights-white.jpg',
  },
  {
    title: 'Usage Statistics',
    caption: 'See where your time goes through readable app activity and daily usage visuals.',
    dark: '/images/usage-statistics-black.jpg',
    light: '/images/usage-statistics-white.jpg',
  },
  {
    title: 'App Details',
    caption: 'Inspect a single app deeply, from package metadata to the clues hiding in native libraries.',
    dark: '/images/app-details-black.jpg',
    light: '/images/app-details-white.jpg',
  },
];

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease, delay },
    },
  };
}

function PhoneFrame({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`glass-panel noise relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 p-2 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-8 top-2 h-6 rounded-full bg-white/5 blur-md" />
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1600}
          className="h-auto w-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">{body}</p>
    </div>
  );
}

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 140]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -8]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -220]);

  return (
    <main className="relative isolate overflow-hidden bg-black text-white">
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-pulse-ring absolute left-[6%] top-24 h-44 w-44 rounded-full border border-white/10 bg-white/5 blur-2xl" />
        <div className="animate-float-wide absolute right-[8%] top-[24rem] h-72 w-72 rounded-full border border-white/10 bg-white/5 blur-3xl" />
        <div className="animate-float-slow absolute bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] blur-3xl" />
      </motion.div>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-8 md:pb-32 md:pt-10">
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          animate="show"
          className="glass-panel mx-auto flex max-w-max items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-400"
        >
          <span className="h-2 w-2 rounded-full bg-white" />
          Unfilter for Android
        </motion.div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={fadeUp(0.08)} initial="hidden" animate="show">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Reveal Vibe</p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-[6.2rem] lg:leading-[0.94]">
              Peel back the icon.
              <br />
              See the stack.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-zinc-400 md:text-xl">
              Unfilter is a system-intelligence app for Android that uncovers what your installed apps are built with, then layers in task-manager signal, memory context, storage insight, and privacy-first scanning.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                href="https://play.google.com/store/apps/details?id=com.escapebranch.unfilter"
                target="_blank"
                rel="noreferrer"
                className="glass-panel-strong rounded-2xl bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-black"
              >
                Download on Play Store
              </motion.a>
              <motion.a
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                href="https://github.com/r4khul/unfilter"
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white"
              >
                View source on GitHub
              </motion.a>
            </div>

            <motion.div
              variants={fadeUp(0.16)}
              initial="hidden"
              animate="show"
              className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat}
                  className="glass-panel rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.16em] text-zinc-300"
                >
                  {stat}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={prefersReducedMotion ? undefined : { y: heroY, rotate: heroRotate }}
            variants={fadeUp(0.14)}
            initial="hidden"
            animate="show"
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="glass-panel-strong noise relative overflow-hidden rounded-[2.5rem] p-3">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <Image
                src="/images/unfilter-banner.png"
                alt="Unfilter banner"
                width={1600}
                height={900}
                className="rounded-[2rem] border border-white/10 object-cover"
                priority
              />
            </div>

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-12 -left-4 w-40 md:w-48"
            >
              <PhoneFrame src="/images/home-black.jpg" alt="Unfilter home dark screen" />
            </motion.div>

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, 12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-4 top-20 w-36 rotate-6 md:w-44"
            >
              <PhoneFrame src="/images/search-white.jpg" alt="Unfilter search light screen" />
            </motion.div>

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 right-10 hidden w-32 -rotate-6 md:block"
            >
              <PhoneFrame
                src="/images/task-manager-black.jpg"
                alt="Unfilter task manager dark screen"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp()}
          className="mb-12"
        >
          <SectionHeader
            eyebrow="Why It Hits"
            title="Built like a premium product, but grounded in real device intelligence."
            body="The design language stays sharp and restrained while the product itself does serious work: stack detection, live system visibility, storage breakdowns, and open-source transparency."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease }}
              whileHover={prefersReducedMotion ? undefined : { y: -8 }}
              className="glass-panel noise rounded-[2rem] p-6"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase tracking-[0.24em] text-zinc-300">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp()}
          className="mb-12"
        >
          <SectionHeader
            eyebrow="Interface System"
            title="Dark mode and light mode, both treated like first-class experiences."
            body="Every important surface from search to storage to deep app details is presented in both themes. The site uses the original screenshots directly so the product tells its own story."
          />
        </motion.div>

        <div className="space-y-8">
          {galleryPairs.map((pair, index) => (
            <motion.article
              key={pair.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: index * 0.04, ease }}
              className="glass-panel noise rounded-[2.2rem] p-5 md:p-8"
            >
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                    {pair.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-7 text-zinc-400">{pair.caption}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div whileHover={prefersReducedMotion ? undefined : { y: -6, rotate: -1 }}>
                  <PhoneFrame src={pair.dark} alt={`${pair.title} dark mode`} />
                </motion.div>
                <motion.div whileHover={prefersReducedMotion ? undefined : { y: -6, rotate: 1 }}>
                  <PhoneFrame src={pair.light} alt={`${pair.title} light mode`} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp()}
          className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="glass-panel-strong noise overflow-hidden rounded-[2.4rem] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Technical Specs</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Clean architecture outside, deep static analysis underneath.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
              Unfilter reads package information and native libraries already present on the device, matches them against a local framework signature set, then presents the results through a clean feature-oriented Flutter codebase.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {specCards.map((spec, index) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease }}
                  className="rounded-[1.5rem] border border-white/10 bg-black/45 px-4 py-4 text-sm uppercase tracking-[0.14em] text-zinc-300"
                >
                  {spec}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/how-to-install.png"
                alt="How to install Unfilter"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              className="glass-panel noise rounded-[2.2rem] p-6"
            >
              <Image
                src="/images/black-unfilter-bg-white.png"
                alt="Unfilter mark"
                width={900}
                height={900}
                className="mx-auto h-auto w-32 rounded-[1.5rem] border border-white/10 md:w-40"
              />
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                Open source by default
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-400">
                The app’s source is public, the privacy model is explicit, and the product story is backed by implementation details rather than marketing fog.
              </p>
            </motion.div>

            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              className="glass-panel noise rounded-[2.2rem] p-6"
            >
              <Image
                src="/images/unfilter-banner.png"
                alt="Unfilter promotional banner"
                width={1600}
                height={900}
                className="rounded-[1.7rem] border border-white/10 object-cover"
              />
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                Offline-first privacy
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-400">
                No analytics. No ad SDKs. No crash reporting pipeline phoning home. The product works locally because that is the right way to handle app-inspection data.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp()}
          className="glass-panel-strong noise overflow-hidden rounded-[2.8rem] px-6 py-10 text-center md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-4xl">
            <p className="text-sm uppercase tracking-[0.34em] text-zinc-500">Final Call</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Make your phone feel transparent again.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Download Unfilter, reveal what your apps are really made of, and explore your device with a sharper lens.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                href="https://play.google.com/store/apps/details?id=com.escapebranch.unfilter"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black"
              >
                Get Unfilter
              </motion.a>
              <motion.a
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                href="https://github.com/r4khul/unfilter/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white"
              >
                Latest Release
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
