export const personalInfo = {
  name: "Pradyumna Kumar Sahoo",
  username: "Prady029",
  roles: [
    "Data Scientist",
    "AI Engineer",
    "ML Architect",
    "Medical AI Specialist",
    "LLM Fine-tuner",
  ],
  email: "pradyumna.sahoo@outlook.in",
  emailAlt: "pradyumnasahoo029@gmail.com",
  phone: "+91-7540885886",
  location: "Hyderabad, India",
  avatar: "https://avatars.githubusercontent.com/u/40775401?v=4",
  github: "https://github.com/Prady029",
  linkedin: "https://www.linkedin.com/in/prady029",
  twitter: "https://www.twitter.com/prady029",
  medium: "https://www.medium.com/@prady029",
  telegram: "https://t.me/prady029",
  resume: "/Pradyumna_Data_Scientist_AI_ML_5YoE.pdf",
  summary:
    "Impact-driven Data Scientist with close to 5 years of experience building production-grade AI/ML systems across Medical and Finance domain for Computer Vision, Audio and Generative AI use-cases. Proven track record in architecting real-time audio chatbot systems, Knowledge-graph based GraphRAG pipelines, fine-tuning large language models, developing multimodal agents and leading cross-functional teams. Seeking a Senior Data Scientist role to drive AI innovation at scale.",
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "16+", label: "Projects Built" },
  { value: "2", label: "IIT Collaborations" },
];

export const skills = [
  {
    category: "LLM Training & Inference",
    icon: "🧠",
    color: "cyan",
    items: [
      "Full Fine-tuning",
      "PEFT / LoRA / QLoRA",
      "Instruction Tuning",
      "RLHF / DPO",
      "Mixed-precision (bf16/fp16)",
      "Gradient Checkpointing",
      "vLLM",
      "Quantisation (GPTQ / AWQ / bitsandbytes)",
      "HuggingFace Transformers",
      "DSPy",
      "Unsloth",
    ],
  },
  {
    category: "Agentic & RAG Systems",
    icon: "🤖",
    color: "violet",
    items: [
      "LangChain",
      "LangGraph",
      "LiveKit",
      "Tool-use / Function Calling",
      "Multi-agent Orchestration",
      "Multimodal RAG",
      "Model Context Protocol (MCP)",
      "Google Agent Development Kit",
      "Prompt Engineering",
    ],
  },
  {
    category: "Knowledge Graphs & Vector Search",
    icon: "🕸️",
    color: "blue",
    items: [
      "Neo4j",
      "AWS Neptune",
      "Qdrant",
      "LanceDB",
      "Knowledge Graph Construction",
      "Agentic KG",
      "RxNorm API",
      "PubMed API",
      "Drug Interaction Systems",
    ],
  },
  {
    category: "Computer Vision & NLP",
    icon: "👁️",
    color: "amber",
    items: [
      "PyTorch",
      "Detectron2",
      "YOLO",
      "OpenCV",
      "GradCAM++",
      "GAN / Synthetic Data",
      "Instance Segmentation",
      "SpaCy",
      "NLTK",
      "ASR Fine-tuning",
      "SWIN2SR",
      "NAFNet",
    ],
  },
  {
    category: "MLOps & Infrastructure",
    icon: "⚙️",
    color: "green",
    items: [
      "Weights & Biases",
      "MLflow",
      "Docker",
      "FastAPI",
      "Apache Airflow",
      "Apache Spark (Databricks)",
      "ETL Pipeline Design",
      "Process Mining",
      "CI/CD for ML",
      "Git",
    ],
  },
  {
    category: "Cloud & Databases",
    icon: "☁️",
    color: "sky",
    items: [
      "AWS Bedrock",
      "AWS Neptune",
      "AWS S3 / Lambda / EC2",
      "AWS OpenSearch",
      "GCP Vertex AI",
      "Azure ML",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Python",
      "SQL",
      "Bash",
    ],
  },
];

export const experience = [
  {
    title: "Data Scientist",
    company: "Mondee Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "August 2025 – Present",
    type: "current",
    highlights: [
      "Architected a medical-grade GraphRAG audio chatbot for our flagship clinical decision support system CDSS deployed across Surekha Hospital Chain and BhaktiVedant Hospital, by constructing structured knowledge graphs from medical textbooks using NER and Neo4J, enabling doctors to query alternative possible diagnosis and treatment protocols with traceable, hallucination-resistant responses via a LangChain-powered retrieval layer.",
      "Engineered a drug–drug interaction checker and dosage scheduler agent served through a Model Context Protocol (MCP) interface, integrating real-time data from RxNorm and PubMed APIs to surface conflict alerts and patient-specific dosage recommendations within the chat session.",
      "Led end-to-end fine-tuning and serving of Medgemma-27b-text-it for domain-specific clinical NLP tasks using Unsloth and vLLM, coordinating data curation, training, and evaluation pipelines with research scholars from IIT Madras and IIT Hyderabad.",
      "Directed large-scale Speech-to-Text (STT/ASR) data preparation and multimodal fine-tuning of gemma-3n-e2b-it via LoRA and TGI-based serving, overseeing live clinical audio collection, Subject Matter Expert annotation, and quality control to build a medical voice agent capable of real-time clinical transcription and Doctor's Note generation.",
    ],
    tags: ["Medical GraphRAG", "Clinical NLP", "LLM Fine-tuning", "Voice AI", "Medgemma-27b", "MCP"],
  },
  {
    title: "Senior Member Technical (AI/ML)",
    company: "ADP India Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "December 2023 – July 2025",
    type: "past",
    highlights: [
      "Designed and deployed a Knowledge-Graph based RAG pipeline on AWS Neptune & Bedrock orchestrated via LangGraph, enhancing financial data processing accuracy and minimising AI hallucinations — recognised as runner-up in the ADP Global Hackathon (2024).",
      "Developed an intelligent Process Mining Chatbot for Global Payroll Services using Microsoft Power Automate and Databricks to analyse transaction patterns across millions of client records, optimising payment workflows across 73 payroll cycles per client on average.",
      "Engineered an agentic assistant built on Google Agent Development Kit and AWS OpenSearch that drafts context-aware emails and schedules meetings in real-time by checking live calendars, saving equivalent to 24 hours per user per month — currently rolled out across all ADP employees.",
      "Built a scalable QR code detection, decoding, and masking pipeline with a fine-tuned YOLOv8 for multi-orientation detection and OpenCV for automated region masking, sanitising financial documents prior to downstream processing at scale across millions of payroll documents.",
      "Developed an Indic PII detection and redaction system for financial regulatory compliance using fine-tuned NER models via HuggingFace Transformers and SpaCy with IndicNLP, identifying sensitive entities — Aadhaar, PAN, account numbers, names across 10+ Indic scripts — from payroll and HR documents.",
    ],
    tags: ["AWS Neptune", "LangGraph", "Process Mining", "Agentic AI", "Finance AI", "YOLOv8", "Indic NLP"],
  },
  {
    title: "Junior Data Scientist",
    company: "Claim Genius Pvt. Ltd.",
    location: "Remote, India",
    period: "June 2021 – December 2023",
    type: "past",
    highlights: [
      "Built a high-performance Instance Segmentation pipeline using Detectron2 served via FastAPI for vehicle parts identification, improving segmentation accuracy to 95% mAP and accelerating assessment throughput by 26%; integrated GradCAM++ visualisations for regulatory model interpretability.",
      "Engineered an automated ML pipeline failure tracing system using MLflow to monitor inference-time distributions and surface root-cause analysis on mispredictions, reducing manual diagnosis time by 30%.",
      "Deployed an image super-resolution and denoising ensemble combining SWIN2SR Transformer and NAFNet pre-trained models to upscale and denoise compressed input images, reducing model failures by 16% and improving downstream prediction accuracy by 12%.",
      "Built an automatic labelling error-detection service using Scikit-learn confidence scoring that flagged curation errors — saving 6 man-hours per head per sprint — and trained PyTorch GAN models for synthetic image generation to resolve class imbalance in rare damage categories.",
      "Designed a geometric flat-tyre detection approach via OpenCV polygon analysis enabling reliable detection with zero curated data, and boosted vehicle damage severity classification by 3% per class through a fusion ensemble combining PyTorch CNN features with XGBoost structured metadata.",
    ],
    tags: ["Detectron2", "FastAPI", "GradCAM++", "GAN", "Instance Segmentation", "MLflow", "XGBoost"],
  },
];

export const certifications = [
  {
    title: "Agentic Knowledge Graph Construction",
    issuer: "DeepLearning.AI × Neo4j",
    date: "Aug 2025",
    url: "https://learn.deeplearning.ai/accomplishments/47fc6775-2474-459c-823f-d9835dff4c92",
    emoji: "🕸️",
  },
  {
    title: "Building AI Voice Agents for Production",
    issuer: "DeepLearning.AI × LiveKit",
    date: "Jul 2025",
    url: "https://learn.deeplearning.ai/accomplishments/576a1433-07cf-43ed-b823-11a6833bcf7c",
    emoji: "🎙️",
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jul 2025",
    url: "https://graphacademy.neo4j.com/c/cd58c648-ed44-4417-9432-45593d54d65f/",
    emoji: "🗃️",
  },
  {
    title: "Pretraining LLMs",
    issuer: "DeepLearning.AI × Upstage",
    date: "Feb 2025",
    url: "https://learn.deeplearning.ai/accomplishments/4e81d8a9-58e3-4e21-bf4c-eb6591b7057c",
    emoji: "🧠",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Coursera",
    date: "2023",
    url: "https://coursera.org/share/416c0c85f67457b5b242f15f63cd6814",
    emoji: "🔧",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2022",
    url: "https://www.coursera.org/account/accomplishments/specialization/R3ZCXXTTVHS8",
    emoji: "🧠",
  },
  {
    title: "An Introduction To Practical Deep Learning",
    issuer: "Intel - Coursera",
    date: "2022",
    url: "https://coursera.org/share/9fc0954c13722812bc98b54f03647fef",
    emoji: "✨",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google - Coursera",
    date: "2021",
    url: "https://www.coursera.org/account/accomplishments/verify/QT54W4QRL6HB",
    emoji: "💬",
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science (Big Data Analytics)",
    institution: "Central University of Rajasthan",
    location: "Kishangarh, India",
    period: "July 2018 – July 2020",
    emoji: "🎓",
  },
  {
    degree: "Integrated B.Sc. B.Ed. (Physical Sciences and Education)",
    institution: "Regional Institute of Education (NCERT), Bhubaneswar",
    location: "Bhubaneswar, India",
    period: "July 2014 – May 2018",
    emoji: "⚛️",
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
  emoji: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Music Visualiser",
    description:
      "1st-place house-party vibe-coding winner — real-time in-browser speaker & tab audio visualizer with 14 Canvas 2D modes, cymatics physics, and 29 perceptual OKLab themes.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/Prady029/Music_Visualiser",
    liveUrl: "https://prady029.github.io/Music_Visualiser/",
    badge: "Live App · 1st Place",
    tags: ["Web Audio", "Canvas 2D", "OKLab", "Live App"],
    emoji: "🎵",
  },
  {
    name: "LLSF: Learning Label-Specific Features",
    description:
      "Research paper implementation from scratch for improving multi-label classification on imbalanced datasets using the Label-Specific Feature learning (LLSF) algorithm.",
    language: "Python",
    stars: 12,
    url: "https://github.com/Prady029/LLSF-Learning-Label-Specific-Features-for-Multi-Label-Classifcation",
    tags: ["Multi-label", "Feature Learning", "Class Imbalance", "Research"],
    emoji: "🔬",
  },
  {
    name: "LLSF-DL MLSMOTE Hybrid for Tail Labels",
    description:
      "Masters' thesis — hybrid deep learning approach combining Label-Specific Feature learning with MLSMOTE to address the tail-labels problem in multi-label classification.",
    language: "Python",
    stars: 9,
    url: "https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid-for-handling-tail-labels",
    tags: ["Multi-label", "Deep Learning", "SMOTE", "Thesis"],
    emoji: "🧬",
  },
  {
    name: "LIFT: Multi-Label Learning with Label-Specific Features",
    description:
      "Research paper implementation of the LIFT algorithm — learns label-specific feature transformations to improve multi-label classification performance.",
    language: "Python",
    stars: 6,
    url: "https://github.com/Prady029/LIFT-MultiLabel-Learning-with-Label-Specific-Features",
    tags: ["Multi-label", "Feature Learning", "Classification"],
    emoji: "🏋️",
  },
  {
    name: "NCERT AI Teacher Assistant",
    description:
      "AI-powered assistant for teachers that automatically creates lesson plans, drafts question sets, and supports classroom preparation workflows.",
    language: "Python",
    stars: 4,
    url: "https://github.com/Prady029/NCERT-AI-Teacher-Assistant",
    tags: ["GenAI", "Education AI", "LLM", "Agentic"],
    emoji: "📚",
  },
  {
    name: "Multi-label Datasets",
    description:
      "Curated collection of multi-label classification benchmarks used across research experiments on label imbalance, feature learning, and SMOTE-based augmentation.",
    language: "Python",
    stars: 1,
    url: "https://github.com/Prady029/Multillabel-Datasets",
    tags: ["Dataset", "Multi-label", "Research"],
    emoji: "📊",
  },
  {
    name: "Fuzzy Computing Programs",
    description:
      "Implementations of fuzzy sets, fuzzy logic inference systems, and fuzzy control applications from the Fuzzy Computing course at CURAJ.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/Prady029/Fuzzy_programs",
    tags: ["Fuzzy Logic", "Control Systems", "Academic"],
    emoji: "🔀",
  },
  {
    name: "Early Days of Machine Learning",
    description:
      "A collection of ML algorithm implementations from 2018 — supervised learning, unsupervised learning, and regression techniques built from first principles.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/Prady029/My-early-days-of-machine-learning",
    tags: ["Machine Learning", "Scikit-learn", "Foundations"],
    emoji: "🌱",
  },
  {
    name: "DSA 101",
    description:
      "Ongoing journey through Data Structures and Algorithms — curated problem sets, solutions, and notes in Python.",
    language: "Python",
    stars: 0,
    url: "https://github.com/Prady029/DSA_101",
    tags: ["DSA", "Python", "Problem Solving"],
    emoji: "🧩",
  },
];

const blogSource: Array<{
  slug: string;
  title: string;
  url: string;
  image_url?: string;
  sub_title: string;
}> = [
  {
    slug: "my-deathbed-system-config",
    title: "My Deathbed System Config",
    url: "https://medium.com/@prady029/my-deathbed-system-config-ef10ada54a22",
    sub_title: "A personal blueprint of Linux setups, shell tooling, and reproducible workstation configurations refined after years of distro-hopping.",
  },
  {
    slug: "breaking-googles-hegemony-in-smartphones",
    title: "Breaking Google’s Hegemony in SmartPhones…",
    url: "https://medium.com/@prady029/breaking-googles-hegemony-in-smartphones-d74a8e1b4589",
    image_url: "https://cdn-images-1.medium.com/max/1024/1*_rxeMraOZmliHpqKysX2Xg.png",
    sub_title: "Exploring open-source alternatives to mobile ecosystem lock-in and privacy-first Android configurations.",
  },
  {
    slug: "fall-out-of-an-isi-interview",
    title: "Fall-out of an ISI Interview..",
    url: "https://medium.com/@prady029/fall-out-of-an-isi-interview-40effc7886bc",
    image_url: "https://cdn-images-1.medium.com/max/1024/0*vMOR6wl-sLY-7_ja.jpg",
    sub_title: "Personal reflections and lessons learned from an Indian Statistical Institute interview experience.",
  },
];
const blogEmojis = ["🧠", "📊", "⚙️", "🎵", "🔬", "🗞️", "⚛️", "💡"];
const blogGradients = [
  "from-violet-500/20 to-cyan-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-blue-500/20 to-emerald-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-teal-500/20 to-sky-500/20",
  "from-sky-500/20 to-violet-500/20",
];

export const blogs = blogSource.map((post, i) => ({
  url_title: post.slug,
  title: post.title,
  sub_title: post.sub_title,
  image_url: post.image_url,
  external_url: post.url,
  emoji: blogEmojis[i % blogEmojis.length],
  color: blogGradients[i % blogGradients.length],
}));
