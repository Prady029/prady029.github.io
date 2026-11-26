export const personalInfo = {
  name: "Pradyumna Kumar Sahoo",
  shortName: "Pradyumna K. Sahoo",
  username: "Prady029",
  role: "Applied Data Scientist",
  headline:
    "Building production GraphRAG systems, fine-tuned clinical LLMs, multimodal voice agents, and computer vision pipelines.",
  email: "pradyumna.sahoo@outlook.in",
  location: "Hyderabad, India",
  avatar: "https://avatars.githubusercontent.com/u/40775401?v=4",
  github: "https://github.com/Prady029",
  linkedin: "https://www.linkedin.com/in/prady029",
  twitter: "https://www.twitter.com/prady029",
  medium: "https://www.medium.com/@prady029",
  telegram: "https://t.me/prady029",
  resume: "/Pradyumna_Data_Scientist_AI_ML_5YoE.pdf",
  summary:
    "Applied Data Scientist with 5+ years of experience shipping production AI/ML across Healthcare and Enterprise Finance. Focused on clinical GraphRAG, LLM fine-tuning & serving, agentic tool ecosystems, and computer vision — including research collaborations with IIT Madras and IIT Hyderabad.",
};

export const highlights = [
  { value: "5+ yrs", label: "Production AI/ML across Healthcare & Finance" },
  { value: "95% mAP", label: "Detectron2 segmentation pipeline (+26% throughput)" },
  { value: "24 hr/mo", label: "Saved per employee via org-wide agentic assistant" },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "LLM Training & Serving",
    items: [
      "Full Fine-tuning",
      "PEFT / LoRA / QLoRA",
      "Instruction Tuning",
      "RLHF / DPO",
      "bf16 / fp16",
      "vLLM",
      "Unsloth",
      "GPTQ / AWQ / bitsandbytes",
      "HuggingFace Transformers",
      "DSPy",
    ],
  },
  {
    category: "Agentic & RAG Systems",
    items: [
      "LangGraph",
      "LangChain",
      "Model Context Protocol (MCP)",
      "Google ADK",
      "LiveKit",
      "Multimodal RAG",
      "Tool-Use & Function Calling",
      "Multi-Agent Orchestration",
    ],
  },
  {
    category: "Knowledge Graphs & Search",
    items: [
      "Neo4j",
      "AWS Neptune",
      "AWS OpenSearch",
      "Qdrant",
      "LanceDB",
      "Agentic KG Construction",
      "RxNorm API",
      "PubMed API",
    ],
  },
  {
    category: "Vision, Audio & Classical ML",
    items: [
      "PyTorch",
      "Detectron2",
      "YOLOv8",
      "OpenCV",
      "GradCAM++",
      "GANs",
      "SWIN2SR",
      "NAFNet",
      "Clinical ASR",
      "Scikit-learn",
      "XGBoost",
      "SpaCy / IndicNLP",
    ],
  },
  {
    category: "MLOps & Cloud",
    items: [
      "AWS (Bedrock, Neptune, Lambda, S3, EC2)",
      "GCP Vertex AI",
      "Azure ML",
      "FastAPI",
      "Docker",
      "MLflow",
      "Weights & Biases",
      "Apache Airflow",
      "Spark / Databricks",
      "CI/CD for ML",
    ],
  },
  {
    category: "Languages & Data",
    items: [
      "Python",
      "SQL",
      "Bash",
      "MATLAB",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Process Mining",
    ],
  },
];

export interface ExperienceHighlight {
  label: string;
  text: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: ExperienceHighlight[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Data Scientist",
    company: "Mondee Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Aug 2025 – Present",
    current: true,
    highlights: [
      {
        label: "Clinical Decision Support (GraphRAG)",
        text: "Architected a GraphRAG audio chatbot enabling clinicians across Surekha Hospital Chain and BhaktiVedant Hospital to query alternative diagnoses and treatment paths; extracted structured medical entities (NER) into Neo4j and integrated retrieval via LangChain to eliminate unsupported answers through traceable source attribution.",
      },
      {
        label: "Medication Safety Agent (MCP)",
        text: "Developed an autonomous medication-safety agent integrated into the clinical chat interface; queried live RxNorm and PubMed data to detect drug–drug interactions, formulated patient-specific dosage regimens, and deployed the tool as an MCP service accessible to internal agent fleets.",
      },
      {
        label: "Clinical LLM Fine-Tuning & Serving",
        text: "Coordinated with researchers from IIT Madras and IIT Hyderabad on dataset curation, training, and evaluation to fine-tune MedGemma-27b-text-it using Unsloth; served the model via vLLM for high-throughput clinical NLP inference.",
      },
      {
        label: "Clinical Voice Agent Pipeline",
        text: "Spearheaded an end-to-end medical voice workflow by establishing live clinical audio collection, expert annotation, and quality control; fine-tuned gemma3n-e2b-it using LoRA and served it on TGI to transcribe consultations in real time and generate Doctor’s Notes.",
      },
    ],
    tags: ["GraphRAG", "Neo4j", "MCP", "MedGemma-27b-text-it", "Unsloth", "vLLM", "Clinical Voice AI"],
  },
  {
    title: "Senior Member Technical (AI/ML)",
    company: "ADP India Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Dec 2023 – Jul 2025",
    highlights: [
      {
        label: "Workplace Automation Assistant",
        text: "Built an autonomous workplace assistant using Google ADK and AWS OpenSearch that generates context-aware emails and schedules meetings against live calendars directly within chat; saved approximately 24 hours per user monthly across company-wide rollout to all ADP employees.",
      },
      {
        label: "Knowledge Graph-Grounded Financial RAG",
        text: "Coupled RAG pipelines with an AWS Neptune knowledge graph and Amazon Bedrock using LangGraph to resolve ambiguous queries, increasing financial response accuracy, reducing hallucinations, and earning Runner-up at the 2024 ADP Global Hackathon.",
      },
      {
        label: "Payroll Process Mining Chatbot",
        text: "Implemented a process-mining conversational agent using Databricks and Power Automate over millions of client records, automatically identifying payment bottlenecks and resolving issues across an average of 73 payroll cycles per client.",
      },
      {
        label: "Multilingual PII Redaction Pipeline",
        text: "Fine-tuned Transformer and spaCy NER models across 10+ Indic scripts to identify and redact sensitive personal and financial identifiers (including tax IDs, national IDs, account numbers, and names) in payroll and HR documents to ensure regulatory compliance.",
      },
    ],
    tags: ["Google ADK", "AWS OpenSearch", "AWS Neptune", "Amazon Bedrock", "LangGraph", "Databricks", "Indic NER"],
  },
  {
    title: "Junior Data Scientist",
    company: "Claim Genius Pvt. Ltd.",
    location: "Remote, India",
    period: "Jun 2021 – Dec 2023",
    highlights: [
      {
        label: "Automated Vehicle Damage Segmentation",
        text: "Engineered a vehicle-part segmentation pipeline using Detectron2 served via FastAPI, achieving 95% mAP and reducing damage assessment turnaround by 26%; integrated GradCAM++ heatmaps to provide transparent model interpretability for claims reviewers.",
      },
      {
        label: "Inference Monitoring & Root-Cause Tracing",
        text: "Built an MLflow-based inference monitoring system tracking test-time feature distributions, reducing model diagnosis and root-cause analysis time by 30%.",
      },
      {
        label: "Super-Resolution Image Preprocessing",
        text: "Mitigated production errors from compressed and low-quality photos by integrating a SWIN2SR and NAFNet super-resolution and denoising ensemble, reducing model failures by 16% and improving downstream task accuracy by 12%.",
      },
    ],
    tags: ["Detectron2", "FastAPI", "GradCAM++", "MLflow", "SWIN2SR", "NAFNet"],
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Agentic Knowledge Graph Construction",
    issuer: "DeepLearning.AI × Neo4j",
    date: "Aug 2025",
    url: "https://learn.deeplearning.ai/accomplishments/47fc6775-2474-459c-823f-d9835dff4c92",
  },
  {
    title: "Building AI Voice Agents for Production",
    issuer: "DeepLearning.AI × LiveKit",
    date: "Jul 2025",
    url: "https://learn.deeplearning.ai/accomplishments/576a1433-07cf-43ed-b823-11a6833bcf7c",
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jul 2025",
    url: "https://graphacademy.neo4j.com/c/cd58c648-ed44-4417-9432-45593d54d65f/",
  },
  {
    title: "Pretraining LLMs",
    issuer: "DeepLearning.AI × Upstage",
    date: "Feb 2025",
    url: "https://learn.deeplearning.ai/accomplishments/4e81d8a9-58e3-4e21-bf4c-eb6591b7057c",
  },
  {
    title: "An Introduction to Practical Deep Learning",
    issuer: "Intel · Coursera",
    date: "2022",
    url: "https://coursera.org/share/9fc0954c13722812bc98b54f03647fef",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google · Coursera",
    date: "2021",
    url: "https://www.coursera.org/account/accomplishments/verify/QT54W4QRL6HB",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Coursera",
    date: "Aug 2020",
    url: "https://coursera.org/share/416c0c85f67457b5b242f15f63cd6814",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI · Coursera",
    date: "Apr 2020",
    url: "https://www.coursera.org/account/accomplishments/specialization/R3ZCXXTTVHS8",
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science (Big Data Analytics)",
    institution: "Central University of Rajasthan",
    location: "Kishangarh, India",
    period: "2018 – 2020",
  },
  {
    degree: "Integrated B.Sc. B.Ed. (Physical Sciences & Education)",
    institution: "Regional Institute of Education (NCERT)",
    location: "Bhubaneswar, India",
    period: "2014 – 2018",
  },
];

export interface ProjectItem {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  liveUrl?: string;
  badge?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    name: "Music Visualiser",
    description:
      "1st-place house-party vibe-coding winner — live browser speaker & tab Web Audio visualiser with 14 HiDPI Canvas 2D modes, cymatics physics, 29 perceptual OKLab themes, and a macOS terminal CLI.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/Prady029/Music_Visualiser",
    liveUrl: "https://prady029.github.io/Music_Visualiser/",
    badge: "Live App · 1st Place",
    tags: ["Web Audio", "Canvas 2D", "OKLab"],
    featured: true,
  },
  {
    name: "LLSF-DL MLSMOTE Hybrid for Tail Labels",
    description:
      "Master's thesis — hybrid deep learning and MLSMOTE synthetic oversampling architecture targeting severe tail-label imbalance in multi-label classification.",
    language: "Python",
    stars: 9,
    url: "https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels",
    badge: "Master's Thesis",
    tags: ["Multi-Label", "Deep Learning", "MLSMOTE"],
    featured: true,
  },
  {
    name: "LLSF: Learning Label-Specific Features",
    description:
      "From-scratch implementation of the Label-Specific Feature learning (LLSF) algorithm for imbalanced multi-label classification research.",
    language: "Python",
    stars: 12,
    url: "https://github.com/Prady029/LLSF-Learning-Label-Specific-Features-for-Multi-Label-Classifcation",
    tags: ["Multi-Label", "Feature Learning", "Research"],
    featured: true,
  },
  {
    name: "LIFT: Multi-Label Learning with Label-Specific Features",
    description:
      "Clean reference implementation of the LIFT algorithm learning label-specific feature transformations via clustering and kernel representations.",
    language: "Python",
    stars: 6,
    url: "https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features",
    tags: ["Multi-Label", "Feature Learning"],
    featured: true,
  },
  {
    name: "NCERT AI Teacher Assistant",
    description:
      "Agentic LLM assistant designed for educators to generate curriculum-aligned lesson plans, question sets, and classroom preparation workflows.",
    language: "Python",
    stars: 4,
    url: "https://github.com/Prady029/NCERT-AI-Teacher-Assistant",
    tags: ["GenAI", "Agentic", "Education"],
    featured: true,
  },
  {
    name: "Multi-label Datasets",
    description:
      "Curated benchmark repository for multi-label classification imbalance experiments, feature-learning baselines, and oversampling evaluation.",
    language: "Python",
    stars: 1,
    url: "https://github.com/Prady029/Multillabel-Datasets",
    tags: ["Datasets", "Benchmarks"],
    featured: true,
  },
  {
    name: "Fuzzy Computing Programs",
    description:
      "Implementations of fuzzy sets, fuzzy logic inference engines, and control applications from the Fuzzy Computing coursework at CURAJ.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/Prady029/Fuzzy_programs",
    tags: ["Fuzzy Logic", "Academic"],
    featured: false,
  },
  {
    name: "Early Days of Machine Learning",
    description:
      "Foundational ML algorithms implemented from first principles in 2018 — supervised, unsupervised, and regression methods.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/Prady029/My-early-days-of-machine-learning",
    tags: ["Foundations", "Scikit-learn"],
    featured: false,
  },
  {
    name: "DSA 101",
    description:
      "Ongoing collection of Data Structures and Algorithms problem sets, patterns, and solutions in Python.",
    language: "Python",
    stars: 0,
    url: "https://github.com/Prady029/DSA_101",
    tags: ["Algorithms", "Python"],
    featured: false,
  },
];

export interface BlogItem {
  slug: string;
  title: string;
  subTitle: string;
  kind: "Paper Deep Dive" | "Essay";
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  tags: string[];
  mediumUrl?: string;
  repoUrl?: string;
  contentHtml: string;
}

export const blogs: BlogItem[] = [
  {
    slug: "llsf-dl-mlsmote-hybrid-feynman-guide",
    title: "Solving Tail Labels with LLSF-DL + MLSMOTE: A Feynman Guide",
    subTitle:
      "A technical deep dive into my Master’s thesis — combining imbalance-aware MLSMOTE synthetic neighborhood generation with joint feature-and-label optimization (LLSF-DL) to recover rare tail labels.",
    kind: "Paper Deep Dive",
    publishedAt: "2026-11-26",
    publishedLabel: "Nov 26, 2026",
    readingTime: "10 min read",
    tags: ["multi-label", "tail-labels", "mlsmote", "llsf-dl", "thesis"],
    repoUrl: "https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels",
    contentHtml: `<p>Richard Feynman’s rule for understanding anything technical was simple: if you cannot trace an equation back to the physical difficulty it was invented to solve, you only memorized the notation. My 2020 Master’s thesis—implemented in both MATLAB and Python—tackles one of the stubbornest failure modes in supervised learning: <strong>tail-label collapse in multi-label classification</strong>. Here is both the intuition and the exact mathematics behind how the hybrid pipeline works.</p>

<h3>1. Formal Problem: Why Multi-Label Imbalance Is Not Single-Label Imbalance</h3>
<p>In standard multi-label learning, each training example <code>x<sub>i</sub> ∈ ℝ<sup>d</sup></code> is paired with a binary vector <code>y<sub>i</sub> ∈ {0, 1}<sup>L</sup></code> across <code>L</code> possible labels, forming feature matrix <code>X ∈ ℝ<sup>n × d</sup></code> and label matrix <code>Y ∈ {0, 1}<sup>n × L</sup></code>.</p>
<p>Unlike single-label problems where each example belongs to exactly one bucket, labels in real corpora (such as <code>rcv1</code> news categories or <code>genbase</code> protein families) follow a steep power-law distribution:</p>
<ul>
  <li><strong>Head labels</strong> appear in thousands of samples and dominate gradient updates.</li>
  <li><strong>Tail labels</strong> appear in only a tiny fraction of samples—yet carry high semantic specificity.</li>
</ul>
<p>If a model predicts <code>0</code> everywhere on a rare tail label, overall <strong>Hamming Loss</strong> (fraction of wrong <code>(sample, label)</code> entries) and <strong>Micro-F1</strong> barely flinch. That is why evaluating tail-label behavior requires label-sensitive and ranking-sensitive metrics such as <strong>Macro-F1</strong>, <strong>Ranking Loss</strong>, <strong>One-Error</strong>, <strong>Coverage</strong>, and <strong>Average Precision</strong> (all 15 metrics implemented in <code>MultiLabelEvaluator</code>).</p>

<h4>Quantifying "Tailness" with Imbalance Ratios</h4>
<p>Before fixing imbalance, we have to measure it per label. Across the thesis codebase, two complementary definitions are used:</p>
<ul>
  <li>In the MATLAB thesis scripts (<code>src/Imbalance_ratio.m</code>), following Charte et al. (2015), <strong>IRLbl</strong> compares the frequency of the most common label against label <code>j</code>: <code>IRLbl(j) = max<sub>k</sub>(∑<sub>i</sub> Y<sub>ik</sub>) / (ε + ∑<sub>i</sub> Y<sub>ij</sub>)</code>, with <code>MeanIR = (1/L) ∑<sub>j</sub> IRLbl(j)</code> flagging tail labels whose ratio exceeds the dataset mean.</li>
  <li>In the modular Python implementation (<code>compute_imbalance_ratio</code> in <code>utils/evaluation.py</code>), per-label imbalance is computed directly as <code>IR(j) = negative_count(j) / positive_count(j)</code>, and <code>identify_tail_labels(Y, threshold)</code> selects every label with <code>IR(j) ≥ tail_threshold</code>.</li>
</ul>

<blockquote><strong>The core dilemma:</strong> Oversampling alone without structured feature/label learning injects noisy synthetic points; structured classifiers like LLSF-DL alone still starve when a tail label has only a handful of positive observations.</blockquote>

<h3>2. Stage One: In-Situ Data Repair via MLSMOTE (Charte et al., 2015)</h3>
<p>Why can’t you just run ordinary SMOTE on each rare label independently? Because in multi-label data, an instance carrying a rare label <code>l</code> <em>also</em> carries several other labels simultaneously. If you synthesize a new feature vector <code>x<sub>syn</sub></code> and blindly set only <code>y<sub>syn,l</sub> = 1</code> (or copy <code>y<sub>i</sub></code> verbatim), you corrupt the joint distribution <code>P(Y | X)</code>.</p>
<p>In <a href="https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels/blob/master/python_src/algorithms/mlsmote.py" target="_blank" rel="noopener noreferrer"><code>algorithms/mlsmote.py</code></a>, <code>MLSMOTE.fit_resample(X, Y, label_idx, n_samples)</code> solves this in four concrete steps:</p>
<ol>
  <li><strong>Build the minority bag:</strong> Concatenate features and labels into <code>D = [X, Y]</code> and extract all rows where <code>Y[:, label_idx] == 1</code> into <code>min_bag</code>.</li>
  <li><strong>Measure joint proximity:</strong> For each seed instance <code>x<sub>i</sub></code> in <code>min_bag</code>, compute pairwise Euclidean distances via <code>cdist</code> to every other sample in <code>min_bag</code> and take its <code>k</code> nearest neighbors (default <code>k = 5</code>).</li>
  <li><strong>Interpolate features linearly:</strong> Randomly select one neighbor <code>x<sub>nbr</sub></code> from those <code>k</code> neighbors and generate a synthetic feature vector along the segment between them:
    <pre>x<sub>syn</sub> = x<sub>i</sub> + u · (x<sub>nbr</sub> − x<sub>i</sub>),    u ~ Uniform(0, 1)</pre>
  </li>
  <li><strong>Synthesize the full label vector by majority vote:</strong> Sum the binary label vectors of the seed instance and all <code>k</code> neighbors (<code>label_counts = y_i + ∑<sub>r=1..k</sub> y<sub>nbr,r</sub></code>), then assign every label <code>j ∈ {1..L}</code> using strict majority voting:
    <pre>y<sub>syn,j</sub> = 1  if  label_counts[j] &gt; (k + 1) / 2  else  0</pre>
  </li>
</ol>
<p>Notice what that majority vote achieves: co-occurring labels that genuinely characterize the neighborhood survive onto <code>y<sub>syn</sub></code>, while accidental one-off labels on a single neighbor get filtered out. In <a href="https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels/blob/master/python_src/hybrid_approach.py" target="_blank" rel="noopener noreferrer"><code>hybrid_approach.py</code></a> (<code>method="minority"</code>), MLSMOTE is invoked <em>only</em> for labels in <code>self.tail_labels</code>, generating <code>a = 5</code> synthetic samples per minority instance and stacking <code>[X, X<sub>syn</sub>]</code> and <code>[Y, Y<sub>syn</sub>]</code>.</p>

<h3>3. Stage Two: Joint Feature &amp; Label Learning with LLSF-DL (Huang et al., TKDE 2016)</h3>
<p>Once <code>[X<sub>aug</sub>, Y<sub>aug</sub>]</code> has repaired coverage on tail labels, we train <code>LLSF_DL</code> (<a href="https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels/blob/master/python_src/algorithms/llsf_dl.py" target="_blank" rel="noopener noreferrer"><code>algorithms/llsf_dl.py</code></a>). Why <strong>LLSF-DL</strong> instead of plain LLSF? Standard LLSF assumes each label only depends on its own sparse subset of input features <code>W<sub>x</sub></code>. LLSF-DL goes a step further: it models <strong>class-dependent labels</strong> via a second matrix <code>W<sub>y</sub> ∈ ℝ<sup>L × L</sup></code> capturing direct label-to-label dependencies.</p>

<h4>The Objective Function</h4>
<p>In <code>LLSF_DL._compute_loss</code>, the optimizer minimizes the sum of seven intuitive terms:</p>
<pre>min<sub>W<sub>x</sub>, W<sub>y</sub></sub>  (θ<sub>x</sub>²/2) ||X W<sub>x</sub> − Y||²<sub>F</sub>
          + (θ<sub>y</sub>²/2) ||Y<sub>pred</sub> W<sub>y</sub> − Y||²<sub>F</sub>
          + (α/2) tr(R W<sub>x</sub><sup>T</sup> W<sub>x</sub>)
          + β ||W<sub>x</sub>||₁ + γ ||W<sub>y</sub>||₁
          + (ρ/2) (||W<sub>x</sub>||²<sub>F</sub> + ||W<sub>y</sub>||²<sub>F</sub>)</pre>
<ul>
  <li><strong>Feature reconstruction (<code>θ<sub>x</sub></code>):</strong> Maps inputs <code>X</code> through label-specific weights <code>W<sub>x</sub> ∈ ℝ<sup>d × L</sup></code> toward <code>Y</code>.</li>
  <li><strong>Class-dependent label mapping (<code>θ<sub>y</sub></code>):</strong> Maps initial label predictions <code>Y<sub>pred</sub></code> through label-dependency matrix <code>W<sub>y</sub> ∈ ℝ<sup>L × L</sup></code> so strong predictions on common labels help refine predictions on rare correlated labels.</li>
  <li><strong>Label correlation coupling (<code>α · tr(R W<sub>x</sub><sup>T</sup> W<sub>x</sub>)</code>):</strong> Uses pairwise cosine distance matrix <code>R = cdist(Y<sup>T</sup> + ε, Y<sup>T</sup> + ε, "cosine")</code> so strongly correlated labels share relevant feature structure.</li>
  <li><strong>Dual L1 sparsity (<code>β, γ</code>) + Ridge stability (<code>ρ</code>):</strong> <code>β ||W<sub>x</sub>||₁</code> prunes irrelevant features per label, <code>γ ||W<sub>y</sub>||₁</code> prunes spurious label links, and <code>ρ</code> keeps matrix inversions well-conditioned.</li>
</ul>

<h4>Optimization Mechanics in Code</h4>
<p>Rather than initializing randomly, <code>_initialize_parameters</code> computes closed-form Ridge Regression warm starts:</p>
<pre>W<sub>x</sub><sup>(0)</sup> = (X<sup>T</sup> X + ρ I)<sup>-1</sup> X<sup>T</sup> Y
W<sub>y</sub><sup>(0)</sup> = (Y<sub>pred</sub><sup>T</sup> Y<sub>pred</sub> + ρ I)<sup>-1</sup> Y<sub>pred</sub><sup>T</sup> Y</pre>
<p>At each iteration, it computes a global Lipschitz upper bound <code>L<sub>lip</sub></code> across the four smooth curvature terms (<code>3(θ<sub>x</sub>²‖X<sup>T</sup>X‖)² + 3(α‖R‖)² + 3(θ<sub>x</sub>θ<sub>y</sub>‖X<sup>T</sup>Y‖)² + 2(θ<sub>y</sub>²‖Y<sup>T</sup>Y‖)²</code>), takes a gradient step <code>η = 1 / L<sub>lip</sub></code> on both <code>W<sub>x</sub></code> and <code>W<sub>y</sub></code> (including cross-coupling terms <code>θ<sub>x</sub>θ<sub>y</sub></code>), and applies element-wise soft thresholding:</p>
<pre>W<sub>x</sub> ← sign(W<sub>x</sub> − η ∇<sub>W<sub>x</sub></sub>) · max(|W<sub>x</sub> − η ∇<sub>W<sub>x</sub></sub>| − η β, 0)
W<sub>y</sub> ← sign(W<sub>y</sub> − η ∇<sub>W<sub>y</sub></sub>) · max(|W<sub>y</sub> − η ∇<sub>W<sub>y</sub></sub>| − η γ, 0)</pre>
<p>At inference time, <code>predict(X)</code> outputs calibrated probabilities via a numerically stable sigmoid <code>σ(X W<sub>x</sub>)</code>.</p>

<h3>4. Experimental Setup &amp; Hyperparameter Regimes</h3>
<p>In <code>python_src/config.py</code> and <code>src/config.m</code>, the hybrid framework is evaluated via 5-fold cross-validation across four multi-label benchmarks spanning biological, audio, web, and text domains:</p>
<table>
  <thead>
    <tr><th>Dataset</th><th>Domain</th><th>Features (d)</th><th>Labels (L)</th><th>α / β / γ / ρ</th></tr>
  </thead>
  <tbody>
    <tr><td>genbase</td><td>Protein classification</td><td>27</td><td>32</td><td>4⁻³ / 4⁻² / 4⁻¹ / 0.1</td></tr>
    <tr><td>emotions</td><td>Music emotions</td><td>72</td><td>6</td><td>4⁵ / 4³ / 4³ / 0.1</td></tr>
    <tr><td>recreation</td><td>Web categorization</td><td>606</td><td>20</td><td>4⁶ / 4⁴ / 4⁵ / 1.0</td></tr>
    <tr><td>rcv1-sample1</td><td>Reuters text</td><td>47,236</td><td>101</td><td>4⁵ / 4³ / 4³ / 1.0</td></tr>
  </tbody>
</table>
<p>Notice the engineering insight in that table: high-dimensional sparse text (<code>rcv1-sample1</code>, 47k features) requires heavier ridge damping (<code>ρ = 1.0</code>) and stronger L1/correlation regularization so tail-label synthetic neighbors do not overfit spurious rare tokens. Meanwhile, if a label has literally one positive instance in a fold, <code>MLSMOTE</code> gracefully falls back to copying that seed rather than dividing by zero.</p>`,
  },
  {
    slug: "llsf-learning-label-specific-features-feynman-guide",
    title: "LLSF Explained Simply: Letting Labels Share Hints While Picking Their Own Clues",
    subTitle:
      "A technical Feynman-style breakdown of Huang et al. (ICDM 2015 / IEEE TKDE 2016) — deriving the L1 + label-correlation objective, Lipschitz bound, and FISTA proximal solver from scratch.",
    kind: "Paper Deep Dive",
    publishedAt: "2026-11-26",
    publishedLabel: "Nov 26, 2026",
    readingTime: "8 min read",
    tags: ["multi-label", "llsf", "fista", "proximal-gradient", "optimization"],
    repoUrl: "https://github.com/Prady029/LLSF-Learning-Label-Specific-Features-for-Multi-Label-Classifcation",
    contentHtml: `<p>Most introductory multi-label baselines fall into two extremes: <strong>Binary Relevance</strong> trains <code>L</code> independent classifiers using the exact same dense feature set for every label (ignoring label correlations and drowning small classes in irrelevant features), while <strong>Classifier Chains</strong> feed earlier predictions into later labels (fixing correlation, but introducing brittle chain-order sensitivity and error cascading).</p>
<p>Huang, Li, Huang, and Wu (<em>IEEE TKDE, 2016</em>) proposed <strong>LLSF (Learning Label-Specific Features)</strong> to solve both issues inside a single convex optimization problem—without chaining labels sequentially. Here is how every piece of the math works, paired with my from-scratch scikit-learn implementation in <a href="https://github.com/Prady029/LLSF-Learning-Label-Specific-Features-for-Multi-Label-Classifcation/blob/master/llsf/llsf.py" target="_blank" rel="noopener noreferrer"><code>llsf/llsf.py</code></a>.</p>

<h3>1. The Core Idea: A Shared-Yet-Sparse Weight Matrix</h3>
<p>Instead of constructing new features by hand, let <code>W ∈ ℝ<sup>d × L</sup></code> be a linear weight matrix where column <code>w<sub>·,j</sub></code> scores label <code>j</code>. If most entries of column <code>w<sub>·,j</sub></code> are <strong>exact zeros</strong>, then label <code>j</code> effectively only sees the subset of features where <code>w<sub>i,j</sub> ≠ 0</code>—its own <em>label-specific features</em>.</p>
<p>Now suppose labels <code>beach</code> and <code>sunset</code> co-occur frequently. If <code>w<sub>·,beach</sub></code> uses feature 14 (warm horizon gradient) and feature 27 (water reflection), we want <code>w<sub>·,sunset</sub></code> to feel a gentle pull toward sharing similar features—especially if <code>sunset</code> has fewer training examples—while unrelated labels like <code>snow</code> remain free to select completely different features.</p>

<h3>2. Deriving the Three-Term Objective</h3>
<p>LLSF translates that intuition directly into a composite convex objective:</p>
<pre>min<sub>W ∈ ℝ<sup>d × L</sup></sub>   ½ ||X W − Y||²<sub>F</sub>  +  (α / 2) tr(R W<sup>T</sup> W)  +  β ||W||₁</pre>
<p>Each term plays one crisp geometric role:</p>
<ol>
  <li><strong>Data fidelity <code>½ ||X W − Y||²<sub>F</sub></code>:</strong> Standard least-squares loss encouraging <code>X W ≈ Y</code> across all <code>n</code> samples and <code>L</code> labels.</li>
  <li><strong>Label-correlation regularization <code>(α / 2) tr(R W<sup>T</sup> W)</code>:</strong> Expanding the trace reveals why this couples columns of <code>W</code>:
    <pre>tr(R W<sup>T</sup> W) = ∑<sub>i=1..L</sub> ∑<sub>j=1..L</sub> R<sub>ij</sub> · ⟨w<sub>·,i</sub>, w<sub>·,j</sub>⟩</pre>
    In <code>llsf/llsf.py</code>, <code>R</code> is computed from the label columns via <code>cosine_similarity(Y<sup>T</sup> + ε)</code> (while the TKDE 2016 / <code>LLSF_DL</code> variant sets <code>R<sub>ij</sub> = 1 − cos(y<sub>i</sub>, y<sub>j</sub>)</code>, i.e., cosine distance, so high similarity imposes a small penalty on shared inner products and high dissimilarity penalizes overlap!).</li>
  <li><strong>Label-specific sparsity <code>β ||W||₁ = β ∑<sub>i,j</sub> |W<sub>ij</sub>|</code>:</strong> The L1 norm has sharp corners along every coordinate axis, forcing weakly useful weights to <em>exact zero</em> rather than merely small decimals (unlike L2 Ridge regression).</li>
</ol>

<h3>3. Why Naive Gradient Descent Fails — And How FISTA Solves It</h3>
<p>If you try ordinary gradient descent on this objective, you immediately hit a wall: <code>||W||₁</code> is <strong>not differentiable</strong> at <code>W<sub>ij</sub> = 0</code>. Subgradient methods oscillate near zero and almost never produce true zeros.</p>
<p>The clean mathematical escape is <strong>Proximal Gradient Descent</strong>—specifically <strong>FISTA (Fast Iterative Shrinkage-Thresholding Algorithm)</strong>, which achieves an optimal <code>O(1/k²)</code> convergence rate for smooth + L1 problems. Split the objective into <code>f(W) + g(W)</code>, where:</p>
<ul>
  <li><code>f(W) = ½ ||X W − Y||²<sub>F</sub> + (α / 2) tr(R W<sup>T</sup> W)</code> is smooth and convex, with gradient:
    <pre>∇f(W) = X<sup>T</sup> X W − X<sup>T</sup> Y + α W R</pre>
  </li>
  <li><code>g(W) = β ||W||₁</code> is non-smooth but has a closed-form proximal operator!</li>
</ul>

<h4>Step-by-Step Through <code>LLSFClassifier._fit_weight_matrix</code></h4>
<ol>
  <li><strong>Precompute Gram matrices once:</strong> Compute <code>XTX = X<sup>T</sup> X</code> (<code>d × d</code>) and <code>XTY = X<sup>T</sup> Y</code> (<code>d × L</code>) outside the loop. Once precomputed, every optimization iteration costs <code>O(d²L + dL²)</code>—completely independent of sample count <code>n</code>!</li>
  <li><strong>Ridge Regression warm start:</strong> Initialize <code>W<sub>0</sub> = (X<sup>T</sup> X + γ I)<sup>-1</sup> X<sup>T</sup> Y</code> (falling back to Moore-Penrose <code>pinv</code> if singular).</li>
  <li><strong>Exact Lipschitz bound for guaranteed step stability:</strong> Compute the Lipschitz constant of <code>∇f</code>:
    <pre>L<sub>lip</sub> = sqrt( 2 ||X<sup>T</sup> X||²<sub>F</sub> + ||α R||²<sub>F</sub> )</pre>
    Taking step size <code>1 / L<sub>lip</sub></code> guarantees monotonic descent without tuning a learning rate.</li>
  <li><strong>Nesterov momentum extrapolation:</strong> Maintain <code>β<sub>k</sub> = (1 + sqrt(1 + 4 β<sub>k-1</sub>²)) / 2</code> and extrapolate:
    <pre>W<sub>mom</sub> = W<sub>k</sub> + ((β<sub>k-1</sub> − 1) / β<sub>k</sub>) (W<sub>k</sub> − W<sub>k-1</sub>)
W<sub>grad</sub> = W<sub>mom</sub> − (1 / L<sub>lip</sub>) (X<sup>T</sup> X W<sub>mom</sub> − X<sup>T</sup> Y + α W<sub>mom</sub> R)</pre>
  </li>
  <li><strong>Soft thresholding (the proximal operator of L1):</strong> Shrink every entry toward zero by <code>τ = β / L<sub>lip</sub></code> via <code>_soft_threshold</code>:
    <pre>S<sub>τ</sub>(z) = max(z − τ, 0) − max(−z − τ, 0)</pre>
    Any weight inside <code>[−τ, +τ]</code> collapses to exact <code>0.0</code>, carving out label-specific features automatically.</li>
</ol>

<h3>4. Hyperparameter Sensitivity &amp; Engineering Notes</h3>
<ul>
  <li><strong><code>alpha</code> (default <code>2⁻⁵</code>):</strong> Controls how aggressively correlated labels pull on each other’s feature weights. Too large and distinct labels blur together; zero reduces LLSF to independent L1-regularized multi-output regressors.</li>
  <li><strong><code>beta</code> (default <code>2⁻³</code>):</strong> Controls feature sparsity. Higher <code>beta</code> yields sparser per-label feature sets at the risk of underfitting subtle signals.</li>
  <li><strong>Limitations:</strong> Because <code>X W</code> is linear in <code>X</code>, LLSF struggles if a label’s positive class forms disconnected, non-linear islands in feature space—which motivates either mapping features geometrically first (<strong>LIFT</strong>) or pairing LLSF-DL with synthetic tail-label augmentation (<strong>MLSMOTE</strong>).</li>
</ul>`,
  },
  {
    slug: "lift-label-specific-features-feynman-guide",
    title: "LIFT Explained Simply: Measuring Distance to Positive and Negative Neighborhoods",
    subTitle:
      "A technical Feynman-style walkthrough of Zhang & Wu (IEEE TPAMI 2014) and my scikit-learn implementation — how class-conditional K-Means prototypes turn non-linear multi-label boundaries into linear ones.",
    kind: "Paper Deep Dive",
    publishedAt: "2026-11-26",
    publishedLabel: "Nov 26, 2026",
    readingTime: "7 min read",
    tags: ["multi-label", "lift", "clustering", "prototypes", "scikit-learn"],
    repoUrl: "https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features",
    contentHtml: `<p>Consider a classic limitation of linear multi-label classifiers: even if every label gets its own weight vector <code>w<sub>l</sub></code>, a single hyperplane <code>w<sub>l</sub><sup>T</sup> x + b = 0</code> can only slice <code>ℝ<sup>d</sup></code> in half once. What if positive examples of a label live in <strong>multiple separated regions</strong>—say, two distinct genres of “electronic” music or three different visual contexts for “water”?</p>
<p>You could train <code>L</code> non-linear kernel SVMs, which scales poorly (<code>O(n² d)</code> to <code>O(n³)</code>) and still uses identical feature representations across every label. Instead, Zhang &amp; Wu (<em>IEEE TPAMI, 2014</em>) introduced <strong>LIFT (Multi-Label Learning with Label-Specific Features)</strong>: an elegant two-stage geometric transformation implemented cleanly in <a href="https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features/blob/master/src/lift_ml/transformer.py" target="_blank" rel="noopener noreferrer"><code>LIFTTransformer</code></a> and <a href="https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features/blob/master/src/lift_ml/classifier.py" target="_blank" rel="noopener noreferrer"><code>LIFTClassifier</code></a>.</p>

<h3>1. The Feynman Intuition: Coordinates vs. Landmarks</h3>
<p>Imagine trying to describe whether a house is “coastal” using raw latitude and longitude along a jagged coastline with bays and peninsulas. A single straight line on a map fails badly. Now instead, plant <code>k</code> flags on the beaches (positive prototypes) and <code>k</code> flags inland (negative prototypes), and replace GPS coordinates with the <strong>list of distances from each house to every flag</strong>.</p>
<p>Suddenly, “being near at least one beach flag and far from inland flags” is trivial for even a simple linear classifier to express.</p>

<blockquote><strong>The central insight of LIFT:</strong> Cluster each label’s positive and negative training sets separately to discover underlying modes, then re-represent every sample by its Euclidean distances to those label-specific centroids.</blockquote>

<h3>2. Mathematical Formulation &amp; Code Walkthrough</h3>
<p>Given training data <code>X ∈ ℝ<sup>n × d</sup></code> and binary labels <code>Y ∈ {0, 1}<sup>n × L</sup></code>, LIFT constructs a dedicated feature mapping <code>φ<sub>l</sub> : ℝ<sup>d</sup> → ℝ<sup>2k</sup></code> for each label <code>l ∈ {1, …, L}</code>:</p>

<h4>Stage 1: Class-Conditional Prototype Discovery (<code>LIFTTransformer.fit</code>)</h4>
<ol>
  <li><strong>Partition per label:</strong> Split <code>X</code> into positive instances <code>𝒫<sub>l</sub> = {x<sub>i</sub> : Y<sub>il</sub> = 1}</code> and negative instances <code>𝒩<sub>l</sub> = {x<sub>i</sub> : Y<sub>il</sub> = 0}</code>.</li>
  <li><strong>Cluster both sets independently:</strong> Run K-Means on <code>𝒫<sub>l</sub></code> to obtain <code>k<sub>l</sub><sup>+</sup></code> positive centroids <code>{p<sub>l,1</sub>, …, p<sub>l,k⁺</sub>}</code>, and on <code>𝒩<sub>l</sub></code> to obtain <code>k<sub>l</sub><sup>−</sup></code> negative centroids <code>{n<sub>l,1</sub>, …, n<sub>l,k⁻</sub>}</code>.
    <br/><em>Implementation detail:</em> In Zhang &amp; Wu (2014), cluster counts scale with a ratio parameter <code>r · min(|𝒫<sub>l</sub>|, |𝒩<sub>l</sub>|)</code> so positive and negative prototype sets stay balanced even under class skew. In <code>LIFTTransformer</code>, <code>k</code> is safely clamped via <code>min(self.k, len(pos_data))</code> (and falls back to zero vectors if a training split lacks positives or negatives) so small folds never fail.</li>
</ol>
<p><strong>Why cluster negatives too?</strong> Negative instances are rarely uniform noise—they contain specific “hard negative” look-alikes. Placing centroids inside negative sub-clusters lets the downstream classifier explicitly contrast proximity to true positives against proximity to confounder modes.</p>

<h4>Stage 2: Distance-Space Mapping (<code>LIFTTransformer.transform</code>)</h4>
<p>For any sample <code>x ∈ ℝ<sup>d</sup></code>, compute the vector of Euclidean distances to all positive and negative centroids for label <code>l</code>:</p>
<pre>φ<sub>l</sub>(x) = [ ||x − p<sub>l,1</sub>||₂, …, ||x − p<sub>l,k⁺</sub>||₂, ||x − n<sub>l,1</sub>||₂, …, ||x − n<sub>l,k⁻</sub>||₂ ]</pre>
<p>In vectorized NumPy inside <code>LIFTTransformer.transform</code>:</p>
<pre>pos_distances = np.linalg.norm(X[:, None, :] − pos_centers[None, :, :], axis=2)
neg_distances = np.linalg.norm(X[:, None, :] − neg_centers[None, :, :], axis=2)</pre>
<p>Notice the subtle geometric effect: each coordinate <code>||x − c||₂</code> behaves like a radial basis feature centered on a data-driven mode. A linear model <code>w<sup>T</sup> φ<sub>l</sub>(x)</code> trained on these <code>2k</code> distances effectively builds a smooth non-linear decision surface in the original <code>ℝ<sup>d</sup></code> space.</p>

<h4>Stage 3: Downstream Multi-Output Training &amp; Bayesian Tuning (<code>LIFTClassifier</code>)</h4>
<p>In <code>LIFTClassifier</code>, the pipeline chains <code>LIFTTransformer</code> into <code>MultiOutputClassifier(LogisticRegression(max_iter=1000))</code> (or any scikit-learn estimator). Enabling <code>auto_tune=True</code> wraps the pipeline in <code>BayesSearchCV</code> over <code>lift__k ∈ [1, 10]</code> optimizing <code>f1_macro</code> across CV folds—finding the sweet spot between too few clusters (underfitting multi-modal shapes) and too many clusters (overfitting noisy outliers).</p>

<h3>3. Benchmarks &amp; Complexity Analysis</h3>
<p>From the repository benchmarks comparing LIFT against standard multi-label baselines:</p>
<table>
  <thead>
    <tr><th>Dataset</th><th>LIFT</th><th>Binary Relevance</th><th>Classifier Chains</th></tr>
  </thead>
  <tbody>
    <tr><td>emotions</td><td><strong>0.658</strong></td><td>0.634</td><td>0.641</td></tr>
    <tr><td>scene</td><td><strong>0.721</strong></td><td>0.692</td><td>0.708</td></tr>
    <tr><td>yeast</td><td><strong>0.598</strong></td><td>0.573</td><td>0.581</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>Computational cost:</strong> Fitting K-Means per label costs roughly <code>O(L · T · n · k · d)</code> (much faster than <code>O(n²–n³)</code> kernel matrices on large <code>n</code>), and inference reduces to simple matrix distance broadcasting plus linear classification in <code>2k</code> dimensions.</li>
  <li><strong>Where LIFT bends vs. LLSF:</strong> Because <code>||x − c||₂</code> weights all <code>d</code> raw input dimensions equally inside K-Means, high-dimensional datasets dominated by irrelevant noisy features can degrade cluster quality unless regularized or paired with feature selection—which is precisely the motivation behind sparse feature-learning methods like <strong>LLSF</strong>.</li>
</ul>`,
  },
  {
    slug: "my-deathbed-system-config",
    title: "My Deathbed System Config",
    subTitle:
      "A personal blueprint of Linux setups, shell tooling, and reproducible workstation configurations refined after years of distro-hopping.",
    kind: "Essay",
    publishedAt: "2023-11-04",
    publishedLabel: "Nov 4, 2023",
    readingTime: "2 min read",
    tags: ["linux", "fedora", "cuda"],
    mediumUrl: "https://medium.com/@prady029/my-deathbed-system-config-ef10ada54a22",
    contentHtml: `<blockquote>I am writing this blog in case I come home after soul-searching for a long time of distro-hopping.</blockquote><p>Those who know me personally, would always find me experimenting with a lot of new distros and systems. As you could imagine, I do break things a lot and have gone mad a lot of times installing things that doesn’t fit into my schemes..For example, my hadoop system runs on windows 11 with java 16 instead of the same old lame how-to based java 8. I know this sounds like tomfoolery on my part but who learns without breaking systems apart??</p><h3>What happens when things go wrong?</h3><p>Well, that what I call my deathbed situation and for that, I do have a plan which I shall share with the world and as a memo to my future self too.</p><ol><li>Install fedora (Solus DE is my go-to desktop env). [Fuck you ubuntu for the snap bullshit.]</li><li>Now, install zsh and oh-my-zsh:</li></ol><pre>sudo dnf install zsh <br>chsh -s $(which zsh)<br>sh -c &quot;$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</pre><p>3. Configure the zsh theme to ‘agnoster’ and plugins — (git docker)</p><p>4. Do what the masters taught you — <a href="https://itsfoss.com/things-to-do-after-installing-fedora/" target="_blank" rel="noopener noreferrer">https://itsfoss.com/things-to-do-after-installing-fedora/</a> and <a href="https://medium.com/@KarolDanisz/things-to-do-after-installing-fedora-39-workstation-cc8eb4090dd1" target="_blank" rel="noopener noreferrer">https://medium.com/@KarolDanisz/things-to-do-after-installing-fedora-39-workstation-cc8eb4090dd1</a></p><p>5. Install Cuda and shit:</p><pre><a href="https://youtu.be/uyqRe3y7SHc" target="_blank" rel="noopener noreferrer">https://youtu.be/uyqRe3y7SHc</a></pre><p>You are good to go.</p>`,
  },
  {
    slug: "breaking-googles-hegemony-in-smartphones",
    title: "Breaking Google’s Hegemony in SmartPhones…",
    subTitle:
      "An ever-growing to-do list from an open-source enthusiast for de-Googling Android and adopting privacy-first open-source alternatives.",
    kind: "Essay",
    publishedAt: "2020-10-09",
    publishedLabel: "Oct 9, 2020",
    readingTime: "4 min read",
    tags: ["privacy", "open-source", "android"],
    mediumUrl: "https://medium.com/@prady029/breaking-googles-hegemony-in-smartphones-d74a8e1b4589",
    contentHtml: `<p>An ever-growing to-do list from an open-source enthusiast.</p><figure><img alt="Privacy-first open-source mobile setup" src="https://cdn-images-1.medium.com/max/1024/1*_rxeMraOZmliHpqKysX2Xg.png" /><figcaption>@Pradyumna029</figcaption></figure><p>I have been using Google since 6th class. Remember the good old days of Orkut? That was when I was introduced to Google to create my email. That was my first step into the Pandora’s box - Internet. Since then, google has been a part of life, not only for me but every human who have ever googled anything.</p><p>Fast-forward to 2020, I have graduated with a majors in Computer Science and a specialization in Big data analytics. Going through this CS graduation, had bestowed me enough understanding about the importance of data and the impact it can have. And Google, from its inception has been the master of using data to get better and better. Google’s main business is based on ads and ads needs to be personalized. To do so, Google needs data and hence, the abundant provision of free services on its platform. This understanding had pushed me to adopt open-source alternatives. And that&#39;s how this list was created.</p><p><strong>Disclaimer:</strong><em> I have only included those steps that I have personally followed and in no way, I enforce this on anyone. You are solely responsible for your actions.</em></p><h4>1. Remove pre-loaded Google bloatwares from phones.</h4><p>Android is a familiar name in each house by now. If you have noticed, every smartphone comes pre-loaded with apps, some from Google and some from the manufacturer. These are called <em>Bloatware</em>. I suggest the following things once you get a new phone or you have backed-up every data on it &amp; ready to do the rest.</p><ul><li>Do the usual settings and reach your homepage. Then, activate “Developers’ Mode” by clicking more than 6 times(this varies with different manufactures) on the build version inside your “About Phone” section. Or simply search online.</li><li>Enable “USB Debugging”.</li><li>Now, get a computer and set-up ADB on it. I suggest the <a href="https://www.xda-developers.com/install-adb-windows-macos-linux/" target="_blank" rel="noopener noreferrer">xda-developer</a> article.</li><li>Now plug your phone into the PC and click on the notification that asks you to allow the PC access to the debug module.</li><li>Now, open your cmd or terminal and type</li></ul><pre>adb device</pre><p>If everything is set up correctly, this would show you your mobile’s serial number. Now jump into the adb shell by following command.</p><pre>adb shell</pre><p>Now it would show something like this on the terminal;</p><pre>E:/ $</pre><p>We need to get the list of all google apps(actually the package name of the app) to remove them. Hence, the following command will print a list. Essentially, you can also replace google with the manufacturer’s name to even remove the company’s bloatware too.</p><pre>pm list packages | grep google</pre><p>In order to remove the apps, enter the following command and replace the quoted text with item in printed package list <em>one by one</em> without quotes and press <strong>enter</strong>.</p><pre>pm uninstall -k --user 0 &#39;package name&#39;</pre><p>The output each time would be</p><pre>E:/ $ Success</pre><p>Once, all listed packages are removed, you can now check your phone’s app gallery. It will be devoid of any bloatwares.</p><h4>2. Get the open-source alternatives.</h4><p>The tricky part here is to get the right alternatives to those removed apps. Hence, I suggest the following open-source and/or Not-for-Profit projects against their Google counterpart which give you even more control on resources and something new also:</p><ul><li>Google PlayStore : <a href="https://auroraoss.com/downloads.php" target="_blank" rel="noopener noreferrer">Aurora Store</a>, <a href="https://f-droid.org/en/" target="_blank" rel="noopener noreferrer">F-Droid</a></li><li>Google Chrome : <a href="https://f-droid.org/en/packages/org.mozilla.klar/" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>, <a href="https://f-droid.org/packages/acr.browser.lightning/" target="_blank" rel="noopener noreferrer">Lightning</a>, <a href="https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/" target="_blank" rel="noopener noreferrer">Fennec</a>, <a href="https://www.torproject.org/download/#android" target="_blank" rel="noopener noreferrer">Tor Browser</a></li><li>Gmail : <a href="https://f-droid.org/packages/com.fsck.k9//" target="_blank" rel="noopener noreferrer">K-9 Mail</a>, <a href="https://github.com/M66B/FairEmail/blob/master/README.md#downloads" target="_blank" rel="noopener noreferrer">FairEmail</a>, <a href="https://f-droid.org/en/packages/de.tutao.tutanota/" target="_blank" rel="noopener noreferrer">Tutanota</a></li><li>Google Duo : Signal, Telegram</li><li>Youtube : <a href="https://newpipe.schabi.org/" target="_blank" rel="noopener noreferrer">Newpipe</a>, <a href="https://f-droid.org/en/packages/cz.martykan.webtube/" target="_blank" rel="noopener noreferrer">WebTube</a>, <a href="https://skytube-app.com/" target="_blank" rel="noopener noreferrer">SkyTube</a></li><li>Youtube Music : <a href="https://f-droid.org/en/packages/deep.ryd.rydplayer/" target="_blank" rel="noopener noreferrer">MusicPiped</a></li><li>Snapseed : <a href="https://f-droid.org/en/packages/com.simplemobiletools.gallery.pro/" target="_blank" rel="noopener noreferrer">Simple Gallery Pro</a></li><li>Google Photos : <a href="https://www.f-droid.org/en/packages/de.k3b.android.androFotoFinder/" target="_blank" rel="noopener noreferrer">A Photo Manager</a>, <a href="https://f-droid.org/en/packages/com.simplemobiletools.gallery.pro/" target="_blank" rel="noopener noreferrer">Simple Gallery Pro</a>, PhotoChiotte</li><li>GBoard : <a href="https://f-droid.org/en/packages/org.dslul.openboard.inputmethod.latin/" target="_blank" rel="noopener noreferrer">OpenBoard</a></li><li>Google Contacts : Simple Contacts Pro, <a href="https://f-droid.org/en/packages/de.hskl.contacts/" target="_blank" rel="noopener noreferrer">Contact Book</a></li><li>Google Maps : <a href="https://f-droid.org/en/packages/com.github.axet.maps/" target="_blank" rel="noopener noreferrer">Maps</a></li><li>…</li></ul><p>Some must-have apps are Signal, Telegram, Element, IVPN, Kore, Briar, ProtonVPN, ProtonMail, VLC, KeePassDX, <a href="https://en.wikipedia.org/wiki/FBReader" target="_blank" rel="noopener noreferrer">FBReader</a>, mupdf, Haven.</p><blockquote>I am keeping the list open for all to add their favored open-source alternatives.So, do let me know what did I miss..</blockquote><p>I will keep adding things to this list… Meanwhile, those who want to try the extremes, here is an <a href="https://www.techspot.com/news/80729-complete-list-alternatives-all-google-products.html" target="_blank" rel="noopener noreferrer">article</a> for you.</p><h3>In the end, “There’s no such thing as Free Lunch.”</h3>`,
  },
  {
    slug: "fall-out-of-an-isi-interview",
    title: "Fall-out of an ISI Interview..",
    subTitle:
      "Personal reflections and lessons learned from an Indian Statistical Institute interview experience.",
    kind: "Essay",
    publishedAt: "2020-09-16",
    publishedLabel: "Sep 16, 2020",
    readingTime: "2 min read",
    tags: ["interview-preparation", "machine-learning", "research"],
    mediumUrl: "https://medium.com/@prady029/fall-out-of-an-isi-interview-40effc7886bc",
    contentHtml: `<h4>Not to be confused with ISI, Pakistan.</h4><blockquote>What was there to reflect upon? A personal introspection..</blockquote><figure><img alt="Indian Statistical Institute, Kolkata, India" src="https://cdn-images-1.medium.com/max/1024/0*vMOR6wl-sLY-7_ja.jpg" /><figcaption><strong>Indian Statistical Institute, Kolkata, India</strong></figcaption></figure><p>I had faced an interview for a research position in ISI, Kolkata recently. This is how I had prepared for that :</p><blockquote>I think its a good way to prepare for any such positions.</blockquote><ul><li>Went through the project head’s profile and went through his publications relevant to the project.</li><li>Brushed up my content that I had prepared, based on the projects that I had worked in the past.</li><li>Opened up my Deep Learning notes and had a good read.</li><li>Browsed through the machine learning and data mining slides, provided by my teachers from university.</li><li>Also looked into Bio-informatics and Soft-computing lecture scripts, that I had prepared through-out the semesters.(Well, ISI has a stronghold over this two research areas.)</li><li>Finally, some statistics and DBMS, just in case they try to test the waters.</li></ul><p>But the problem was, I did all these in <strong>last 24 hours</strong>. <em>I am lazy, I know.</em> Okay, now lets’ dive in to the interview part.</p><p>I will go question-wise in order of their appearance in my case.</p><ol><li><strong>Introduce yourself.</strong></li><li><strong>Find the output. And state your logic.</strong></li></ol><pre>int a = 2;<br>if (a &gt;&gt; 1):<br>   printf(&quot;Value of a is %d&quot;,a);</pre><p>3. <strong>What is supervised learning? How does loss function fit into it?</strong></p><p>4. <strong>How do we minimize loss?</strong></p><p>5. <strong>Does gradient descent provide convergence in general?[Yes/No]</strong></p><p>6. <strong>How do a predictive model assign labels to an unseen example?</strong></p><p>I tried to answer most of them. They recursively dug into my answers to check my depth. I believe this what they look for, at least for research positions.</p><blockquote><strong>You may get stuck at some points and its ok. I sent an answer via email just when I recalled the most appropriate answer. This was after the interview was over.</strong></blockquote><p>As an aspirant, it is you who needs to set the table straight. So, I put some questions to clarify their aims for the research problem. Being respectful is the key here.</p><blockquote>Looks simple, right! But, the key takeaway is that no matter what you prepare for, basics are the gold. And for the first question, the most honest way of preparing is to seek the answer yourself.</blockquote>`,
  },
];
