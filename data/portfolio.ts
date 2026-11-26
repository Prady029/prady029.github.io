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
      "My Master’s thesis explained from first principles — how combining neighborhood synthetic oversampling (MLSMOTE) with joint feature-and-label learning (LLSF-DL) rescues rare labels in multi-label classification.",
    kind: "Paper Deep Dive",
    publishedAt: "2026-11-26",
    publishedLabel: "Nov 26, 2026",
    readingTime: "6 min read",
    tags: ["multi-label", "tail-labels", "mlsmote", "llsf-dl", "thesis"],
    repoUrl: "https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels",
    contentHtml: `<p>If you want to know whether you truly understand a machine learning paper, try explaining it without hiding behind matrix Greek letters. Here is the central idea behind my 2020 Master’s thesis—implemented in both MATLAB and Python—using the Feynman technique.</p>

<h3>1. The Everyday Puzzle: Why Rare Labels Get Ignored</h3>
<p>In single-label classification, every example gets exactly one answer: <em>cat</em> or <em>dog</em>. In <strong>multi-label classification</strong>, one item can wear many badges at once. A news story might be tagged <code>economy</code>, <code>asia</code>, and <code>maritime-trade</code>; a medical record might carry <code>hypertension</code> alongside a rare genetic condition.</p>
<p>Almost every real multi-label dataset is lopsided. A handful of popular <strong>head labels</strong> appear thousands of times, while dozens of <strong>tail labels</strong> show up only a few times. If a classifier simply guesses “no” on every rare tail label, its overall accuracy still looks fantastic—yet it fails completely on the unusual cases that matter most.</p>

<h3>2. Why Neither Half Alone Fixes the Problem</h3>
<p>Suppose you try two popular ideas separately:</p>
<ul>
  <li><strong>Idea A — Just copy or oversample rare examples:</strong> Standard oversampling (like basic SMOTE) was built for single-label problems. In a multi-label dataset, an example carrying a rare label <em>also</em> carries common labels. Copy or interpolate blindly and you break the natural co-occurrence pattern between labels.</li>
  <li><strong>Idea B — Use a smart multi-label classifier (LLSF-DL):</strong> <em>Label-Specific Learning with Specific Features and Class-Dependent Labels</em> (Huang et al., IEEE TKDE 2016) is clever because it learns both which input clues matter for each label (<code>W_x</code>) and how labels lean on each other (<code>W_y</code>). Still, if a tail label only has three positive examples in training, even a smart joint optimizer is flying blind.</li>
</ul>

<blockquote><strong>The central thesis idea:</strong> First detect which labels are starving, synthesize realistic multi-label neighbors <em>only around those tail labels</em> using MLSMOTE, and then retrain LLSF-DL on the repaired dataset so both label-specific features and label dependencies can learn cleanly.</blockquote>

<h3>3. How the Hybrid Pipeline Works Step by Step</h3>
<p>In <a href="https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels/blob/master/python_src/hybrid_approach.py" target="_blank" rel="noopener noreferrer"><code>hybrid_approach.py</code></a> (and the original MATLAB driver <code>evaluate_llsf_mlsmote.m</code>), the pipeline runs in three clean stages:</p>

<h4>Step 1: Spot the starving labels</h4>
<p>We measure the <strong>imbalance ratio</strong> of every label column in <code>Y</code> (<code>compute_imbalance_ratio</code>). Any label whose ratio exceeds <code>tail_threshold</code> is flagged into <code>self.tail_labels</code>. Popular head labels are left untouched so we do not bloat or distort the majority distribution.</p>

<h4>Step 2: Grow realistic neighbors with MLSMOTE</h4>
<p>For each flagged tail label, <a href="https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels/blob/master/python_src/algorithms/mlsmote.py" target="_blank" rel="noopener noreferrer"><code>MLSMOTE</code></a> gathers all positive instances into a minority bag and builds a new synthetic point in two moves:</p>
<ol>
  <li><strong>New features:</strong> Pick a minority point and one of its <code>k</code> nearest neighbors, then place a new point somewhere on the straight line between them: <code>current + rand() * (neighbor - current)</code>.</li>
  <li><strong>New label set (the crucial trick):</strong> Instead of setting only the target tail label to <code>1</code>, look at all labels across the point and its <code>k</code> neighbors and assign every label by <strong>majority vote</strong> (<code>label_counts &gt; (len(neighbors) + 1) / 2</code>). That preserves real label combinations.</li>
</ol>

<h4>Step 3: Jointly learn features and label links with LLSF-DL</h4>
<p>Now we stack the original data and synthetic tail-label samples (<code>X_augmented</code>, <code>Y_augmented</code>) and fit <a href="https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels/blob/master/python_src/algorithms/llsf_dl.py" target="_blank" rel="noopener noreferrer"><code>LLSF_DL</code></a>. During gradient descent, soft-thresholding shrinks tiny weights in both <code>W_x</code> (label-specific features) and <code>W_y</code> (class-dependent label correlations) to zero, leaving a sparse, interpretable model that finally has enough evidence to recognize rare tail labels.</p>

<pre>fit(X, Y):
  1. tail_labels = identify_tail_labels(Y, threshold)
  2. for label in tail_labels:
       X_syn, Y_syn = MLSMOTE(k=5).fit_resample(X, Y, label)
  3. X_aug, Y_aug = vstack(X, X_syn), vstack(Y, Y_syn)
  4. LLSF_DL.fit(X_aug, Y_aug)  # learns sparse W_x and W_y</pre>

<h3>4. Takeaways &amp; Trade-offs</h3>
<ul>
  <li><strong>Why it works:</strong> Oversampling repairs the data geometry for rare classes; LLSF-DL turns that repaired geometry into compact per-label features and label dependencies.</li>
  <li><strong>What to watch out for:</strong> If a tail label has only a single positive example, nearest-neighbor interpolation cannot invent variety (the implementation falls back safely to copying that instance). Tuning <code>tail_threshold</code> and <code>k</code> matters on very high-dimensional text datasets like <code>rcv1</code>.</li>
</ul>`,
  },
  {
    slug: "llsf-learning-label-specific-features-feynman-guide",
    title: "LLSF Explained Simply: Letting Labels Share Hints While Picking Their Own Clues",
    subTitle:
      "A first-principles walkthrough of Huang et al. (TKDE 2016) and my from-scratch Python implementation — how L1 sparsity, cosine label correlation, and accelerated proximal gradient work together.",
    kind: "Paper Deep Dive",
    publishedAt: "2026-11-26",
    publishedLabel: "Nov 26, 2026",
    readingTime: "5 min read",
    tags: ["multi-label", "llsf", "optimization", "feature-selection"],
    repoUrl: "https://github.com/Prady029/LLSF-Learning-Label-Specific-Features-for-Multi-Label-Classifcation",
    contentHtml: `<p>Traditional multi-label classifiers hand every label the exact same feature vector and train separate predictors side by side. The 2016 TKDE paper <em>Learning Label-Specific Features for Multi-Label Classification</em> (LLSF) asks a sharper question: <strong>what if each label picks its own small subset of clues, while listening to related labels?</strong></p>

<h3>1. The Intuition: A Detective Team</h3>
<p>Imagine you are sorting photos into tags like <code>beach</code>, <code>sunset</code>, <code>mountain</code>, and <code>snow</code> across 500 image features (colors, edges, textures):</p>
<ul>
  <li>To spot <code>beach</code>, maybe only 12 features (sand hue, horizon smoothness, blue water) actually matter—the other 488 are distractions.</li>
  <li>To spot <code>sunset</code>, orange sky gradients matter—and notice that <code>beach</code> and <code>sunset</code> show up together often, whereas <code>beach</code> and <code>snow</code> rarely do.</li>
</ul>
<p>Instead of building 4 completely blind detectors, LLSF learns one weight matrix <code>W</code> (shape: <code>features × labels</code>) where column <code>j</code> is the personalized checklist of clues for label <code>j</code>.</p>

<h3>2. Three Simple Rules in One Objective</h3>
<p>Every piece of the LLSF objective corresponds to one common-sense requirement:</p>
<pre>min  ||XW - Y||²_F  +  α · tr(W^T W R)  +  β · ||W||₁</pre>
<ol>
  <li><strong>Rule 1 — Be accurate (<code>||XW - Y||²_F</code>):</strong> Multiplying inputs <code>X</code> by weights <code>W</code> should match the true label matrix <code>Y</code>.</li>
  <li><strong>Rule 2 — Share clues between friends (<code>α · tr(W^T W R)</code>):</strong> <code>R</code> measures how strongly two labels correlate (via cosine similarity between columns of <code>Y</code>). If two labels correlate strongly, this penalty encourages their columns in <code>W</code> to rely on overlapping features.</li>
  <li><strong>Rule 3 — Ignore noise (<code>β · ||W||₁</code>):</strong> The L1 penalty forces unneeded weights to <em>exact zero</em>. Each label ends up using only its own sparse set of label-specific features.</li>
</ol>

<blockquote><strong>Why this combination is clever:</strong> L1 sparsity makes each label picky; label correlation stops a rare label from dropping a clue that its close sibling label already knows is useful.</blockquote>

<h3>3. How the Code Solves It Without Slow Loops</h3>
<p>Because <code>||W||₁</code> has sharp corners at zero, ordinary gradient descent zig-zags. In <a href="https://github.com/Prady029/LLSF-Learning-Label-Specific-Features-for-Multi-Label-Classifcation/blob/master/llsf/llsf.py" target="_blank" rel="noopener noreferrer"><code>LLSFClassifier</code></a>, the solver uses three clean steps:</p>
<ol>
  <li><strong>Ridge warm-start:</strong> Compute an analytical starting point <code>W = inv(X^T X + γI) X^T Y</code> instead of starting from random noise.</li>
  <li><strong>Accelerated momentum step:</strong> Use FISTA-style Nesterov momentum (<code>beta_k = (1 + sqrt(1 + 4 * beta_k²)) / 2</code>) and step along the smooth gradient <code>X^T X W - X^T Y + α W R</code> divided by the Lipschitz constant.</li>
  <li><strong>The sculptor’s chisel (<code>_soft_threshold</code>):</strong> Apply <code>sign(w) * max(|w| - β/L, 0)</code>. Any tiny weight smaller than the threshold gets snapped cleanly to <code>0</code>—creating true label-specific sparsity.</li>
</ol>

<pre>def _soft_threshold(W, threshold):
    return np.maximum(W - threshold, 0) - np.maximum(-W - threshold, 0)</pre>

<h3>4. What You Gain (and When to Upgrade)</h3>
<p>LLSF gives you interpretable, per-label feature selection in a clean scikit-learn API (<code>fit</code>, <code>predict</code>, <code>predict_proba</code>). Its main limit is that it assumes a linear relationship from <code>X</code> to <code>Y</code>—which is why pairing label-specific features with oversampling (like MLSMOTE) or non-linear clustering (like LIFT) becomes so effective on harder datasets.</p>`,
  },
  {
    slug: "lift-label-specific-features-feynman-guide",
    title: "LIFT Explained Simply: Measuring Distance to Positive and Negative Neighborhoods",
    subTitle:
      "How the LIFT algorithm turns any raw feature space into custom distance-based features for every label — walked through via my scikit-learn compatible implementation.",
    kind: "Paper Deep Dive",
    publishedAt: "2026-11-26",
    publishedLabel: "Nov 26, 2026",
    readingTime: "4 min read",
    tags: ["multi-label", "lift", "clustering", "scikit-learn"],
    repoUrl: "https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features",
    contentHtml: `<p>Before deep embeddings were everywhere, <strong>LIFT</strong> (<em>Multi-Label Learning with Label-Specific Features</em>) introduced an extraordinarily simple geometric trick: if two labels care about different patterns, don’t feed classifiers the same raw coordinates—<strong>re-describe every data point by its distance to each label’s positive and negative prototypes</strong>.</p>

<h3>1. The Everyday Analogy: Asking Where You Stand</h3>
<p>Suppose you want to know whether a house is <em>“family-friendly”</em> and whether it is <em>“nightlife-friendly”</em>. Raw latitude and longitude numbers are awkward for a simple classifier because “family-friendly” pockets exist in three different suburbs, and “nightlife” pockets exist in two downtown districts.</p>
<p>Instead of giving a classifier raw GPS coordinates, imagine placing <code>k</code> pins in the middle of the top “family-friendly” neighborhoods and <code>k</code> pins in the middle of the non-family neighborhoods. Now ask just one simple question for any house: <strong>“How far is this house from each pin?”</strong> Suddenly, even a simple linear classifier can draw the boundary effortlessly.</p>

<blockquote><strong>The central idea of LIFT:</strong> For each label separately, cluster its positive examples into <code>k</code> prototypes and its negative examples into <code>k</code> prototypes, then replace the original features with distances to those prototypes.</blockquote>

<h3>2. Walking Through the Implementation</h3>
<p>In <a href="https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features/blob/master/src/lift_ml/transformer.py" target="_blank" rel="noopener noreferrer"><code>LIFTTransformer</code></a>, this happens cleanly in two scikit-learn methods:</p>
<ol>
  <li><strong><code>fit(X, y)</code> — Find prototypes per label:</strong> For each column <code>label_idx</code>, split rows into <code>pos_data = X[y[:, label_idx] == 1]</code> and <code>neg_data = X[y[:, label_idx] == 0]</code>. Run <code>KMeans</code> separately on each set (capping <code>k</code> safely with <code>min(self.k, len(pos_data))</code> so tiny classes never crash) and store the cluster centroids.</li>
  <li><strong><code>transform(X)</code> — Build the distance rulers:</strong> Compute Euclidean distances from every sample to each label’s positive centroids and negative centroids:
    <pre>pos_distances = np.linalg.norm(X[:, None, :] - pos_centers[None, :, :], axis=2)
neg_distances = np.linalg.norm(X[:, None, :] - neg_centers[None, :, :], axis=2)</pre>
  </li>
</ol>
<p>Each label gets <code>2k</code> custom distance features tailored specifically to its own geometry, and <a href="https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features/blob/master/src/lift_ml/classifier.py" target="_blank" rel="noopener noreferrer"><code>LIFTClassifier</code></a> can pair that representation with any scikit-learn estimator (plus optional Bayesian search over <code>k</code>).</p>

<h3>3. Why It Works &amp; Its Blind Spot</h3>
<ul>
  <li><strong>Strength:</strong> Even when positive examples form disconnected islands in feature space, distances to K-Means prototypes capture non-linear boundaries using simple, fast base learners.</li>
  <li><strong>Limitation:</strong> Standard K-Means uses unweighted Euclidean distance, so irrelevant noisy dimensions can distort distances—and unlike LLSF, LIFT treats labels independently when building clusters rather than sharing label correlations.</li>
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
