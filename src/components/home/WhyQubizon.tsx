import styles from "./WhyQubizon.module.css";

export function WhyQubizon() {
  return (
    <section className={styles.whySection} id="why-us" aria-labelledby="why-heading">
      <div className={styles.container}>
        <div className={styles.whyIntro}>
          <h2 id="why-heading" className={styles.headingLarge}>
            Why Choose <span className="calligraphy">Qubizon?</span>
          </h2>
          <p className={styles.lead}>
            We don&apos;t just write code or run ad campaigns; we engineer unified digital ecosystems that resonate.
            Our approach is rooted in an uncompromising understanding of design principles, search entity architecture,
            and sub-second technical excellence.
          </p>
        </div>

        {/* 3-Column Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>
              <span className="accent-wrapper">
                <span className="italic-serif">Pixel-Perfect Precision</span>
                <svg className="scribble scribble-spark" viewBox="0 0 40 40" aria-hidden="true">
                  <path
                    d="M20,5 L20,15 M35,20 L25,20 M20,35 L20,25 M5,20 L15,20"
                    fill="none"
                    stroke="#00488E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h3>
            <p className={styles.featureDesc}>
              Every detail matters. We obsess over typography hierarchies, fluid micro-interactions, responsive touch targets,
              and strict WCAG 2.1 AA accessibility so your brand conveys effortless authority.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>
              <span className="accent-wrapper">
                <span className="italic-serif">Blazing Fast Performance</span>
                <svg className="scribble scribble-spark" viewBox="0 0 40 40" aria-hidden="true">
                  <path
                    d="M20,5 L20,15 M35,20 L25,20 M20,35 L20,25 M5,20 L15,20"
                    fill="none"
                    stroke="#FF3B30"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h3>
            <p className={styles.featureDesc}>
              Optimized Next.js code, edge-rendered routes, and modern image pipelines ensure your site loads under one second
              on any mobile or desktop device, keeping bounce rates exceptionally low.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>
              <span className="italic-serif">Future-Proof Technology</span>
            </h3>
            <p className={styles.featureDesc}>
              We build with modern App Router frameworks, modular React components, and schema entity modeling that scale
              effortlessly as your regional presence grows across Kerala and global markets.
            </p>
          </div>
        </div>

        {/* 4-Column Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>
              <span className="accent-wrapper">
                99%
                <svg
                  className="scribble scribble-circle"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5,50 Q5,5 50,5 T95,50 T50,95 T5,50"
                    fill="none"
                    stroke="#FF3B30"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Dedicated Support</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statNumber}>5x</div>
            <div className={styles.statLabel}>Faster Load Times</div>
          </div>
        </div>
      </div>
    </section>
  );
}
