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
  url: string;
  subTitle: string;
  platform: string;
}

export const blogs: BlogItem[] = [
  {
    slug: "my-deathbed-system-config",
    title: "My Deathbed System Config",
    url: "https://medium.com/@prady029/my-deathbed-system-config-ef10ada54a22",
    subTitle:
      "A personal blueprint of Linux setups, shell tooling, and reproducible workstation configurations refined over years of distro-hopping.",
    platform: "Medium",
  },
  {
    slug: "breaking-googles-hegemony-in-smartphones",
    title: "Breaking Google’s Hegemony in SmartPhones",
    url: "https://medium.com/@prady029/breaking-googles-hegemony-in-smartphones-d74a8e1b4589",
    subTitle:
      "Exploring open-source alternatives to mobile ecosystem lock-in and privacy-first Android configurations.",
    platform: "Medium",
  },
  {
    slug: "fall-out-of-an-isi-interview",
    title: "Fall-out of an ISI Interview",
    url: "https://medium.com/@prady029/fall-out-of-an-isi-interview-40effc7886bc",
    subTitle:
      "Personal reflections and lessons learned from an Indian Statistical Institute interview experience.",
    platform: "Medium",
  },
];
