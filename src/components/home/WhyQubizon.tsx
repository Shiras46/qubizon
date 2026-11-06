import styles from "./WhyQubizon.module.css";

export function WhyQubizon() {
  return (
    <section className={styles.whySection} id="why-us" aria-labelledby="why-heading">
      <div className={styles.container}>
        <div className={styles.whyIntro}>
          <p className={styles.sectionBadge}>• PERFORMANCE BENCHMARKS &amp; RECOGNITIONS /</p>
          <h2 id="why-heading" className={styles.headingLarge}>
            Good is easier to claim, <span className="calligraphy">performance</span> is harder to fake.
          </h2>
          <p className={styles.lead}>
            We don&apos;t rely on vanity percentages or fabricated client case studies. We engineer verifiable digital systems with sub-second speeds, clean Core Web Vitals, and measurable organic search authority.
          </p>
        </div>

        {/* 4-Column Metric Stats Grid (Inspired by Image 2 Reference) */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <span>99.4</span>
              <span className={styles.statUnit}>%</span>
            </div>
            <div className={styles.statTitle}>Lighthouse Performance Target</div>
            <p className={styles.statDesc}>
              Sub-second mobile LCP, 100% SEO audit compliance, and instantaneous asset loading on edge hosting.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <span>0.00</span>
            </div>
            <div className={styles.statTitle}>Cumulative Layout Shift</div>
            <p className={styles.statDesc}>
              Engineered with modern CSS grid and next/font zero-layout-shift pipelines for visual stability.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <span>5</span>
              <span className={styles.statUnit}>x</span>
            </div>
            <div className={styles.statTitle}>Integrated Disciplines</div>
            <p className={styles.statDesc}>
              Web, SEO, Social, Paid Advertising, and Content strategy unified under one accountable agency team.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <span>100</span>
              <span className={styles.statUnit}>%</span>
            </div>
            <div className={styles.statTitle}>Client Code &amp; Asset Ownership</div>
            <p className={styles.statDesc}>
              Direct Git commits, complete data rights, and zero vendor lock-in from day one of engagement.
            </p>
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featurePill}>01 // CRAFTSMANSHIP</div>
            <h3 className={styles.featureTitle}>
              Pixel-Perfect Precision
            </h3>
            <p className={styles.featureDesc}>
              Every detail matters. We obsess over typography hierarchies, fluid micro-interactions, responsive touch targets,
              and strict WCAG 2.1 AA accessibility so your brand conveys effortless authority.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featurePill}>02 // SPEED</div>
            <h3 className={styles.featureTitle}>
              Blazing Fast Performance
            </h3>
            <p className={styles.featureDesc}>
              Optimized Next.js code, edge-rendered routes, and modern image pipelines ensure your site loads under one second
              on any mobile or desktop device, keeping bounce rates exceptionally low.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featurePill}>03 // LONGEVITY</div>
            <h3 className={styles.featureTitle}>
              Future-Proof Technology
            </h3>
            <p className={styles.featureDesc}>
              We build with modern App Router frameworks, modular React components, and schema entity modeling that scale
              effortlessly as your regional presence grows across Kerala and global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
