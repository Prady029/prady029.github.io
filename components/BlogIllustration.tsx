interface BlogIllustrationProps {
  slug: string;
}

function LiftDiagram() {
  return (
    <figure className="my-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
      <svg
        viewBox="0 0 720 270"
        className="w-full h-auto"
        role="img"
        aria-labelledby="lift-diagram-title lift-diagram-desc"
      >
        <title id="lift-diagram-title">
          LIFT Feature Transformation: Raw Feature Space vs. Distance to Cluster Centroids
        </title>
        <desc id="lift-diagram-desc">
          Two-panel diagram showing non-linear positive islands in raw space on the left with K-Means centroids, mapped to linearly separable cluster distance features on the right.
        </desc>

        <defs>
          <marker
            id="lift-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Left Panel: Raw Space */}
        <rect
          x="16"
          y="16"
          width="300"
          height="220"
          rx="10"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text
          x="32"
          y="40"
          fill="var(--text)"
          fontSize="12"
          fontWeight="600"
          fontFamily="var(--font-sans)"
        >
          1. Raw Feature Space (Non-linear)
        </text>
        <text
          x="32"
          y="56"
          fill="var(--text-muted)"
          fontSize="10"
          fontFamily="var(--font-mono)"
        >
          Label l: two separate positive (+) islands
        </text>

        {/* Positive Cluster 1 */}
        <circle
          cx="92"
          cy="115"
          r="34"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeDasharray="4 3"
        />
        <circle cx="78" cy="106" r="4" fill="var(--accent)" />
        <circle cx="96" cy="100" r="4" fill="var(--accent)" />
        <circle cx="105" cy="122" r="4" fill="var(--accent)" />
        <circle cx="82" cy="128" r="4" fill="var(--accent)" />
        {/* Centroid +1 */}
        <rect
          x="87"
          y="110"
          width="10"
          height="10"
          rx="2"
          fill="var(--text)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text x="58" y="162" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)">
          c⁺₁
        </text>

        {/* Positive Cluster 2 */}
        <circle
          cx="248"
          cy="176"
          r="32"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeDasharray="4 3"
        />
        <circle cx="238" cy="166" r="4" fill="var(--accent)" />
        <circle cx="258" cy="168" r="4" fill="var(--accent)" />
        <circle cx="254" cy="188" r="4" fill="var(--accent)" />
        <circle cx="236" cy="186" r="4" fill="var(--accent)" />
        {/* Centroid +2 */}
        <rect
          x="243"
          y="171"
          width="10"
          height="10"
          rx="2"
          fill="var(--text)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text x="262" y="166" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)">
          c⁺₂
        </text>

        {/* Negative Clusters */}
        <circle
          cx="188"
          cy="98"
          r="26"
          fill="none"
          stroke="var(--border-strong)"
          strokeDasharray="3 3"
        />
        <circle cx="176" cy="92" r="3.5" fill="var(--text-muted)" />
        <circle cx="196" cy="88" r="3.5" fill="var(--text-muted)" />
        <circle cx="194" cy="108" r="3.5" fill="var(--text-muted)" />
        <circle cx="188" cy="98" r="5" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
        <text x="218" y="96" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">
          c⁻₁
        </text>

        <circle
          cx="132"
          cy="192"
          r="24"
          fill="none"
          stroke="var(--border-strong)"
          strokeDasharray="3 3"
        />
        <circle cx="122" cy="188" r="3.5" fill="var(--text-muted)" />
        <circle cx="142" cy="186" r="3.5" fill="var(--text-muted)" />
        <circle cx="132" cy="202" r="3.5" fill="var(--text-muted)" />
        <circle cx="132" cy="192" r="5" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
        <text x="160" y="198" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">
          c⁻₂
        </text>

        {/* Middle Arrow */}
        <line
          x1="326"
          y1="126"
          x2="392"
          y2="126"
          stroke="var(--accent)"
          strokeWidth="1.8"
          markerEnd="url(#lift-arrow)"
        />
        <text
          x="360"
          y="112"
          textAnchor="middle"
          fill="var(--accent)"
          fontSize="10"
          fontFamily="var(--font-mono)"
        >
          LIFT
        </text>
        <text
          x="360"
          y="144"
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize="9"
          fontFamily="var(--font-mono)"
        >
          d(x, c)
        </text>

        {/* Right Panel: Distance Feature Space */}
        <rect
          x="404"
          y="16"
          width="300"
          height="220"
          rx="10"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text
          x="420"
          y="40"
          fill="var(--text)"
          fontSize="12"
          fontWeight="600"
          fontFamily="var(--font-sans)"
        >
          2. Distance Space (Linearly Separable)
        </text>
        <text
          x="420"
          y="56"
          fill="var(--text-muted)"
          fontSize="10"
          fontFamily="var(--font-mono)"
        >
          x → [d(x,c⁺₁), d(x,c⁺₂), d(x,c⁻₁), d(x,c⁻₂)]
        </text>

        {/* Axes */}
        <line x1="440" y1="205" x2="674" y2="205" stroke="var(--border-strong)" strokeWidth="1.2" />
        <line x1="440" y1="205" x2="440" y2="76" stroke="var(--border-strong)" strokeWidth="1.2" />
        <text x="556" y="222" textAnchor="middle" fill="var(--text-muted)" fontSize="9.5" fontFamily="var(--font-mono)">
          min dist to c⁺
        </text>
        <text
          x="426"
          y="142"
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize="9.5"
          fontFamily="var(--font-mono)"
          transform="rotate(-90 426 142)"
        >
          min dist to c⁻
        </text>

        {/* Linear separator */}
        <line
          x1="446"
          y1="198"
          x2="660"
          y2="82"
          stroke="var(--text)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />

        {/* Positive points (small dist to c+, large dist to c-) */}
        <circle cx="468" cy="112" r="4.5" fill="var(--accent)" />
        <circle cx="484" cy="96" r="4.5" fill="var(--accent)" />
        <circle cx="496" cy="124" r="4.5" fill="var(--accent)" />
        <circle cx="462" cy="134" r="4.5" fill="var(--accent)" />
        <circle cx="512" cy="108" r="4.5" fill="var(--accent)" />

        {/* Negative points (large dist to c+, small dist to c-) */}
        <circle cx="584" cy="172" r="4" fill="var(--text-muted)" />
        <circle cx="612" cy="184" r="4" fill="var(--text-muted)" />
        <circle cx="628" cy="162" r="4" fill="var(--text-muted)" />
        <circle cx="598" cy="154" r="4" fill="var(--text-muted)" />
        <circle cx="646" cy="178" r="4" fill="var(--text-muted)" />
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[11px] text-[var(--text-muted)]">
        LIFT clusters positive and negative instances separately per label, turning complex shapes into distance features.
      </figcaption>
    </figure>
  );
}

function LlsfDiagram() {
  const rows = [
    { label: "Sand hue", beach: true, sunset: true, snow: false },
    { label: "Horizon line", beach: true, sunset: true, snow: false },
    { label: "Orange glow", beach: false, sunset: true, snow: false },
    { label: "White texture", beach: false, sunset: false, snow: true },
    { label: "Noise feat.", beach: false, sunset: false, snow: false },
  ];

  return (
    <figure className="my-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
      <svg
        viewBox="0 0 720 265"
        className="w-full h-auto"
        role="img"
        aria-labelledby="llsf-diagram-title llsf-diagram-desc"
      >
        <title id="llsf-diagram-title">
          LLSF Sparse Weight Matrix W with Label Correlation R
        </title>
        <desc id="llsf-diagram-desc">
          Diagram showing how LLSF learns a sparse feature-by-label matrix W where correlated labels share active clues while L1 soft thresholding zeros out noise.
        </desc>

        <defs>
          <marker
            id="llsf-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Left: Input X */}
        <rect
          x="16"
          y="46"
          width="96"
          height="170"
          rx="8"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text x="64" y="34" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">
          Input X
        </text>
        <text x="64" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontFamily="var(--font-mono)">
          n × d
        </text>
        <text x="64" y="148" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">
          all features
        </text>

        <text x="128" y="135" textAnchor="middle" fill="var(--text-muted)" fontSize="14" fontFamily="var(--font-mono)">
          ×
        </text>

        {/* Center: Sparse Matrix W */}
        <rect
          x="146"
          y="46"
          width="290"
          height="170"
          rx="8"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text x="291" y="34" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">
          Learned Sparse Matrix W (d × L)
        </text>

        {/* Column headers */}
        <text x="268" y="68" textAnchor="middle" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          Beach
        </text>
        <text x="334" y="68" textAnchor="middle" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          Sunset
        </text>
        <text x="400" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          Snow
        </text>

        {/* Correlation bracket between Beach and Sunset */}
        <path
          d="M 268 74 L 268 80 L 334 80 L 334 74"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
        />

        {/* Matrix grid */}
        {rows.map((r, i) => {
          const y = 90 + i * 24;
          const cols = [
            { active: r.beach, x: 244 },
            { active: r.sunset, x: 310 },
            { active: r.snow, x: 376 },
          ];
          return (
            <g key={r.label}>
              <text
                x="158"
                y={y + 14}
                fill="var(--text-muted)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {r.label}
              </text>
              {cols.map((c, j) => (
                <g key={j}>
                  <rect
                    x={c.x}
                    y={y}
                    width="48"
                    height="18"
                    rx="4"
                    fill={c.active ? "var(--accent-soft)" : "var(--surface)"}
                    stroke={c.active ? "var(--accent)" : "var(--border)"}
                  />
                  <text
                    x={c.x + 24}
                    y={y + 12.5}
                    textAnchor="middle"
                    fill={c.active ? "var(--accent)" : "var(--text-muted)"}
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                  >
                    {c.active ? "w ≠ 0" : "0"}
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        {/* Arrow to Y */}
        <line
          x1="444"
          y1="131"
          x2="474"
          y2="131"
          stroke="var(--accent)"
          strokeWidth="1.6"
          markerEnd="url(#llsf-arrow)"
        />

        {/* Right: Output Y + Two Forces */}
        <rect
          x="482"
          y="46"
          width="222"
          height="170"
          rx="8"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text x="593" y="34" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">
          Two Balancing Forces
        </text>

        <rect
          x="498"
          y="64"
          width="190"
          height="62"
          rx="6"
          fill="var(--surface)"
          stroke="var(--accent-border)"
        />
        <text x="510" y="83" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          1. Label Correlation (α·R)
        </text>
        <text x="510" y="100" fill="var(--text-secondary)" fontSize="10.5" fontFamily="var(--font-sans)">
          Correlated labels share hints
        </text>
        <text x="510" y="114" fill="var(--text-muted)" fontSize="9.5" fontFamily="var(--font-mono)">
          Beach ↔ Sunset overlap
        </text>

        <rect
          x="498"
          y="138"
          width="190"
          height="62"
          rx="6"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="510" y="157" fill="var(--text)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          2. L1 Soft-Threshold (β)
        </text>
        <text x="510" y="174" fill="var(--text-secondary)" fontSize="10.5" fontFamily="var(--font-sans)">
          Snaps weak clues to 0
        </text>
        <text x="510" y="188" fill="var(--text-muted)" fontSize="9.5" fontFamily="var(--font-mono)">
          Each label stays sparse
        </text>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[11px] text-[var(--text-muted)]">
        LLSF uses L1 sparsity to discard noisy features per label while cosine correlation R transfers clues between related labels.
      </figcaption>
    </figure>
  );
}

function HybridThesisDiagram() {
  return (
    <figure className="my-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
      <svg
        viewBox="0 0 720 275"
        className="w-full h-auto"
        role="img"
        aria-labelledby="hybrid-diagram-title hybrid-diagram-desc"
      >
        <title id="hybrid-diagram-title">
          LLSF-DL + MLSMOTE Hybrid Pipeline for Tail Labels
        </title>
        <desc id="hybrid-diagram-desc">
          Three-stage pipeline diagram: identifying rare tail labels via imbalance ratio, generating synthetic neighbors with majority-voted labels via MLSMOTE, and retraining LLSF-DL on the augmented dataset.
        </desc>

        <defs>
          <marker
            id="hybrid-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Stage 1: Tail Detection */}
        <rect
          x="14"
          y="20"
          width="206"
          height="225"
          rx="10"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text x="28" y="44" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          STAGE 01
        </text>
        <text x="28" y="62" fill="var(--text)" fontSize="12.5" fontWeight="600" fontFamily="var(--font-sans)">
          Detect Tail Labels
        </text>

        {/* Bar chart: head vs tail */}
        <line x1="34" y1="186" x2="202" y2="186" stroke="var(--border-strong)" />
        {/* Head bars */}
        <rect x="42" y="90" width="18" height="96" rx="2" fill="var(--text-muted)" opacity="0.55" />
        <rect x="66" y="106" width="18" height="80" rx="2" fill="var(--text-muted)" opacity="0.55" />
        <rect x="90" y="128" width="18" height="58" rx="2" fill="var(--text-muted)" opacity="0.55" />
        {/* Tail bars */}
        <rect x="122" y="166" width="18" height="20" rx="2" fill="var(--accent)" />
        <rect x="146" y="172" width="18" height="14" rx="2" fill="var(--accent)" />
        <rect x="170" y="175" width="18" height="11" rx="2" fill="var(--accent)" />
        {/* Threshold line */}
        <line
          x1="34"
          y1="158"
          x2="202"
          y2="158"
          stroke="var(--accent)"
          strokeDasharray="4 3"
        />
        <text x="155" y="150" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">
          tail_threshold
        </text>
        <text x="68" y="204" textAnchor="middle" fill="var(--text-muted)" fontSize="9.5" fontFamily="var(--font-mono)">
          Head
        </text>
        <text x="155" y="204" textAnchor="middle" fill="var(--accent)" fontSize="9.5" fontFamily="var(--font-mono)">
          Tail (rare)
        </text>
        <text x="28" y="228" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-sans)">
          Only starving labels oversampled
        </text>

        {/* Arrow 1 -> 2 */}
        <line
          x1="226"
          y1="132"
          x2="250"
          y2="132"
          stroke="var(--accent)"
          strokeWidth="1.6"
          markerEnd="url(#hybrid-arrow)"
        />

        {/* Stage 2: MLSMOTE */}
        <rect
          x="257"
          y="20"
          width="206"
          height="225"
          rx="10"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text x="271" y="44" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          STAGE 02
        </text>
        <text x="271" y="62" fill="var(--text)" fontSize="12.5" fontWeight="600" fontFamily="var(--font-sans)">
          MLSMOTE Synthesis
        </text>

        {/* Interpolation diagram */}
        <line
          x1="296"
          y1="128"
          x2="412"
          y2="98"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <circle cx="296" cy="128" r="6" fill="var(--text)" />
        <text x="284" y="146" fill="var(--text-muted)" fontSize="9.5" fontFamily="var(--font-mono)">
          x_i
        </text>

        <circle cx="412" cy="98" r="6" fill="var(--text-muted)" />
        <text x="394" y="86" fill="var(--text-muted)" fontSize="9.5" fontFamily="var(--font-mono)">
          neighbor
        </text>

        <circle cx="354" cy="113" r="7" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />
        <text x="336" y="100" fill="var(--accent)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-mono)">
          x_syn
        </text>

        {/* Majority vote card */}
        <rect
          x="273"
          y="158"
          width="174"
          height="68"
          rx="6"
          fill="var(--surface)"
          stroke="var(--accent-border)"
        />
        <text x="283" y="176" fill="var(--accent)" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">
          Label Majority Vote
        </text>
        <text x="283" y="194" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-sans)">
          Co-occurring labels voted across
        </text>
        <text x="283" y="209" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-sans)">
          k neighbors (&gt; 50% kept)
        </text>

        {/* Arrow 2 -> 3 */}
        <line
          x1="469"
          y1="132"
          x2="493"
          y2="132"
          stroke="var(--accent)"
          strokeWidth="1.6"
          markerEnd="url(#hybrid-arrow)"
        />

        {/* Stage 3: LLSF-DL */}
        <rect
          x="500"
          y="20"
          width="206"
          height="225"
          rx="10"
          fill="var(--surface-subtle)"
          stroke="var(--border)"
        />
        <text x="514" y="44" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          STAGE 03
        </text>
        <text x="514" y="62" fill="var(--text)" fontSize="12.5" fontWeight="600" fontFamily="var(--font-sans)">
          Retrain LLSF-DL
        </text>

        <rect
          x="516"
          y="80"
          width="174"
          height="36"
          rx="6"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="603" y="102" textAnchor="middle" fill="var(--text)" fontSize="10.5" fontFamily="var(--font-mono)">
          [X_aug, Y_aug]
        </text>

        <line
          x1="603"
          y1="118"
          x2="603"
          y2="138"
          stroke="var(--accent)"
          strokeWidth="1.5"
          markerEnd="url(#hybrid-arrow)"
        />

        <rect
          x="516"
          y="146"
          width="174"
          height="80"
          rx="6"
          fill="var(--surface)"
          stroke="var(--accent-border)"
        />
        <text x="528" y="166" fill="var(--accent)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-mono)">
          Joint Optimization
        </text>
        <text x="528" y="185" fill="var(--text-secondary)" fontSize="10.5" fontFamily="var(--font-sans)">
          • W_x: label-specific features
        </text>
        <text x="528" y="203" fill="var(--text-secondary)" fontSize="10.5" fontFamily="var(--font-sans)">
          • W_y: label dependencies
        </text>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[11px] text-[var(--text-muted)]">
        Hybrid LLSF-DL + MLSMOTE pipeline: repair rare tail-label coverage first, then jointly learn sparse feature and label matrices.
      </figcaption>
    </figure>
  );
}

function DeathbedDiagram() {
  const steps = [
    { step: "01", title: "Fedora Base", sub: "Clean workstation" },
    { step: "02", title: "Zsh + Oh-My-Zsh", sub: "agnoster · git · docker" },
    { step: "03", title: "Post-Install", sub: "RPM / codecs / tweaks" },
    { step: "04", title: "CUDA Setup", sub: "GPU ready to train" },
  ];

  return (
    <figure className="my-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
      <svg
        viewBox="0 0 720 120"
        className="w-full h-auto"
        role="img"
        aria-labelledby="deathbed-diagram-title"
      >
        <title id="deathbed-diagram-title">
          Four-step Fedora workstation recovery blueprint
        </title>

        <defs>
          <marker
            id="db-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
        </defs>

        {steps.map((s, idx) => {
          const x = 14 + idx * 178;
          return (
            <g key={s.step}>
              <rect
                x={x}
                y="18"
                width="156"
                height="82"
                rx="8"
                fill="var(--surface-subtle)"
                stroke="var(--border)"
              />
              <text x={x + 14} y="38" fill="var(--accent)" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">
                STEP {s.step}
              </text>
              <text x={x + 14} y="58" fill="var(--text)" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">
                {s.title}
              </text>
              <text x={x + 14} y="78" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">
                {s.sub}
              </text>
              {idx < steps.length - 1 && (
                <line
                  x1={x + 160}
                  y1="59"
                  x2={x + 174}
                  y2="59"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  markerEnd="url(#db-arrow)"
                />
              )}
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-center font-mono text-[11px] text-[var(--text-muted)]">
        Recovery checklist: clean OS base → shell ergonomics → essential tooling → CUDA runtime.
      </figcaption>
    </figure>
  );
}

export default function BlogIllustration({ slug }: BlogIllustrationProps) {
  if (slug === "lift-label-specific-features-feynman-guide") {
    return <LiftDiagram />;
  }
  if (slug === "llsf-learning-label-specific-features-feynman-guide") {
    return <LlsfDiagram />;
  }
  if (slug === "llsf-dl-mlsmote-hybrid-feynman-guide") {
    return <HybridThesisDiagram />;
  }
  if (slug === "my-deathbed-system-config") {
    return <DeathbedDiagram />;
  }
  return null;
}
