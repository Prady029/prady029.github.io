export const personalInfo = {
  name: "Pradyumna Kumar Sahoo",
  username: "Prady029",
  roles: [
    "Senior Data Scientist",
    "GenAI Engineer",
    "GraphRAG Architect",
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
  resume:
    "https://drive.google.com/file/d/1qBkxtyQTbS38w21APuZeWyjm03VUOro0/view",
  summary:
    "Impact-driven Data Scientist with 5 years of experience building production-grade AI/ML systems across Medical AI, NLP, Computer Vision, and Generative AI. Proven track record in architecting GraphRAG pipelines, fine-tuning large medical language models, developing voice agents for clinical applications, and leading cross-functional teams.",
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "2", label: "IIT Collaborations" },
  { value: "3", label: "Companies" },
];

export const skills = [
  {
    category: "GenAI & LLMs",
    icon: "🧠",
    color: "cyan",
    items: [
      "Medgemma-27b",
      "Gemma-3n (ASR)",
      "LLaMA",
      "GPT-4",
      "PEFT / LoRA",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "HuggingFace Transformers",
      "RAG Pipelines",
      "Agentic Systems",
    ],
  },
  {
    category: "Knowledge Graphs & RAG",
    icon: "🕸️",
    color: "violet",
    items: [
      "GraphRAG",
      "AWS Neptune",
      "Neo4j",
      "RxNorm API",
      "PubMed API",
      "Vector Databases",
      "Knowledge Graph Construction",
      "Agentic KG",
      "Drug Interaction Systems",
    ],
  },
  {
    category: "Computer Vision & NLP",
    icon: "👁️",
    color: "blue",
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
    ],
  },
  {
    category: "MLOps & Infrastructure",
    icon: "⚙️",
    color: "amber",
    items: [
      "AWS (Neptune, S3, Lambda, Bedrock)",
      "Docker",
      "FastAPI",
      "Apache Spark",
      "Airflow",
      "ETL Pipelines",
      "Process Mining",
      "Real-time Analytics",
    ],
  },
  {
    category: "Core Data Science",
    icon: "📊",
    color: "green",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PostgreSQL",
      "Machine Learning",
      "Statistical Modeling",
      "Big Data Analytics",
      "Python",
      "MATLAB",
    ],
  },
];

export const experience = [
  {
    title: "Senior Data Scientist",
    company: "Mondee Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "August 2025 – Present",
    type: "current",
    highlights: [
      "Architected a medical-grade GraphRAG chatbot for clinical decision support by constructing structured knowledge graphs from medical textbooks — enabling traceable, hallucination-resistant drug query responses.",
      "Engineered a drug–drug interaction checker and dosage scheduler integrating real-time RxNorm and PubMed APIs for conflict alerts and patient-specific recommendations.",
      "Led end-to-end fine-tuning of Medgemma-27b-text-it for clinical NLP, coordinating data curation, training, and evaluation with teams from IIT Madras and IIT Hyderabad.",
      "Directed large-scale ASR data preparation for gemma-3n-e2b-it to build a medical voice agent capable of real-time clinical transcription and query resolution.",
    ],
    tags: ["GraphRAG", "Medical AI", "LLM Fine-tuning", "ASR", "Knowledge Graphs"],
  },
  {
    title: "Data Scientist",
    company: "ADP India Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "December 2023 – July 2025",
    type: "past",
    highlights: [
      "Designed a Knowledge-Graph RAG pipeline on AWS Neptune & Bedrock, reducing AI hallucinations in financial data — recognised as runner-up in the ADP Global Hackathon.",
      "Built a Process Mining solution analysing millions of client records to optimise payment workflows across 73 payroll cycles per client on average.",
      "Engineered an agentic assistant that drafts emails and schedules meetings in real-time, saving 24 hours per user per month — now rolled out across all ADP employees.",
    ],
    tags: ["AWS Neptune", "LangGraph", "Process Mining", "Agentic AI", "GraphRAG"],
  },
  {
    title: "Junior Data Scientist",
    company: "Claim Genius Pvt. Ltd.",
    location: "Remote, India",
    period: "June 2021 – December 2023",
    type: "past",
    highlights: [
      "Built a high-performance Instance Segmentation pipeline with Detectron2 + FastAPI, improving mAP by 12% and accelerating vehicle damage assessment by 26%.",
      "Enhanced model interpretability for regulatory compliance by integrating GradCAM++ visualisations.",
      "Trained GAN models for synthetic image generation to resolve class imbalance in insurance damage detection datasets.",
    ],
    tags: ["Detectron2", "FastAPI", "GradCAM++", "GAN", "Computer Vision"],
  },
];

export const certifications = [
  {
    title: "Agentic Knowledge Graph Construction",
    issuer: "DeepLearning.AI × Neo4j",
    date: "Aug 2025",
    emoji: "🕸️",
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jul 2025",
    emoji: "🗃️",
  },
  {
    title: "Pretraining LLMs",
    issuer: "DeepLearning.AI × Upstage",
    date: "Feb 2025",
    emoji: "🧠",
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science (Big Data Analytics)",
    institution: "Central University of Rajasthan",
    location: "Kishangarh, India",
    emoji: "🎓",
  },
  {
    degree: "Integrated B.Sc. B.Ed. (Physics)",
    institution: "Regional Institute of Education (NCERT), Bhubaneswar",
    location: "Bhubaneswar, India",
    emoji: "⚛️",
  },
];

export const projects = [
  {
    name: "LLSF_DL-MLSMOTE-Hybrid",
    description:
      "Hybrid deep learning approach combining Label-Specific Feature learning with MLSMOTE for multi-label classification tasks.",
    language: "MATLAB",
    stars: 6,
    url: "https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid",
    tags: ["Multi-label", "Deep Learning", "SMOTE"],
    emoji: "🏷️",
  },
  {
    name: "LLSF-Learning-Label-Specific-Features",
    description:
      "Implementation of the Label-Specific Feature learning algorithm for robust multi-label classification systems.",
    language: "Jupyter Notebook",
    stars: 4,
    url: "https://github.com/Prady029/LLSF-Learning-Label-Specific-Features",
    tags: ["Multi-label", "Feature Learning"],
    emoji: "🔬",
  },
  {
    name: "Brain-Tumor-Segmentation",
    description:
      "Deep learning brain tumor segmentation from MRI scans using U-Net architecture with attention mechanisms.",
    language: "Python",
    stars: 3,
    url: "https://github.com/Prady029/Brain-tumor-Segmentation",
    tags: ["Medical AI", "Segmentation", "U-Net"],
    emoji: "🏥",
  },
  {
    name: "MLSMOTE",
    description:
      "Multi-Label Synthetic Minority Over-sampling Technique for handling class imbalance in multi-label datasets.",
    language: "Python",
    stars: 3,
    url: "https://github.com/Prady029/MLSMOTE",
    tags: ["Data Augmentation", "Class Imbalance"],
    emoji: "⚖️",
  },
  {
    name: "Rule-based-Recommender-system",
    description:
      "Rule-based recommendation engine using association rules and collaborative filtering techniques.",
    language: "Python",
    stars: 2,
    url: "https://github.com/Prady029/Rule-based-Recommender-system",
    tags: ["Recommender System", "NLP"],
    emoji: "🎯",
  },
  {
    name: "My-first-quantum-code",
    description:
      "Quantum computing experiments using Qiskit — exploring quantum circuit simulations and entanglement.",
    language: "Python",
    stars: 1,
    url: "https://github.com/Prady029/My-first-quantum-code",
    tags: ["Quantum Computing", "Qiskit"],
    emoji: "⚛️",
  },
];

export const blogs = [
  {
    url_title: "Kraoke-my-way",
    title: "Karaoke My Way..",
    sub_title:
      "Extracting Vocals And Instrumentals From Music The Deep Learning Way",
    top_image: "top_image.jpeg",
    emoji: "🎵",
    color: "from-violet-500/20 to-cyan-500/20",
  },
  {
    url_title: "Dont-gift-me-dictionaries-now",
    title: "Don't Gift Me Dictionaries Now..",
    sub_title:
      "Microsoft Speller100: A Spell-Checker For Over 100 Languages",
    top_image: "top_image.jpeg",
    emoji: "📖",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];
