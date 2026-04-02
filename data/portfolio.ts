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
  resume: "/Pradyumna_Data_Scientist_5YoE.pdf",
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

const blogSource = [
  { slug: "salesforce-uses-aws-textract-for-intelligent-document-automation", title: "Salesforce Uses AWS Textract For Intelligent Document Automation", url: "https://analyticsdrift.com/salesforce-uses-aws-textract-for-intelligent-document-automation/" },
  { slug: "extracting-vocals-and-instrumentals-from-music-the-deep-learning-way", title: "Extracting Vocals And Instrumentals From Music The Deep Learning Way", url: "https://analyticsdrift.com/extracting-vocals-and-instrumentals-from-music-the-deep-learning-way/" },
  { slug: "microsoft-speller100-a-spell-checker-for-over-100-languages", title: "Microsoft Speller100: A Spell-Checker For Over 100 Languages", url: "https://analyticsdrift.com/microsoft-speller100-a-spell-checker-for-over-100-languages/" },
  { slug: "a-deep-dive-into-ibm-quantum-roadmap", title: "A Deep Dive Into IBM Quantum Roadmap", url: "https://analyticsdrift.com/a-deep-dive-into-ibm-quantum-roadmap/" },
  { slug: "iit-kanpur-offers-free-8-weeks-computational-science-course-enrollments-ends-15th-feb", title: "IIT Kanpur Offers Free 8-Weeks Computational Science Course, Enrollments Ends 15th Feb", url: "https://analyticsdrift.com/iit-kanpur-offers-free-8-weeks-computational-science-course-enrollments-ends-15th-feb/" },
  { slug: "dealing-with-racially-biased-hate-speech-detection-models", title: "Dealing With Racially-Biased Hate-Speech Detection Models", url: "https://analyticsdrift.com/dealing-with-racially-biased-hate-speech-detection-models/" },
  { slug: "automl-made-easy-with-symbolic-programming-using-pyglove", title: "AutoML Made Easy With Symbolic Programming using Pyglove", url: "https://analyticsdrift.com/automl-made-easy-with-symbolic-programming-using-pyglove/" },
  { slug: "microsoft-introduces-viva-to-help-people-work-from-home", title: "Microsoft Introduces VIVA To Help People Work From Home", url: "https://analyticsdrift.com/microsoft-introduces-viva-to-help-people-work-from-home/" },
  { slug: "linguistic-analysis-of-machine-translations", title: "Measuring Weirdness In AI-Based Language-Translations", url: "https://analyticsdrift.com/linguistic-analysis-of-machine-translations/" },
  { slug: "google-interpretable-ranking-gams", title: "Google Introduces Interpretable Ranking Via Generative Additive Models", url: "https://analyticsdrift.com/google-interpretable-ranking-gams/" },
  { slug: "microsofts-gooseberry-treat-for-quantum-computing", title: "Microsoft's Gooseberry Treat For Quantum Computing", url: "https://analyticsdrift.com/microsofts-gooseberry-treat-for-quantum-computing/" },
  { slug: "the-facebook-muppet-show", title: "The Facebook MUPPET Show", url: "https://analyticsdrift.com/the-facebook-muppet-show/" },
  { slug: "data-labeling-and-the-hidden-costs-in-machine-learning", title: "Data Labeling And The Hidden Costs In Machine Learning", url: "https://analyticsdrift.com/data-labeling-and-the-hidden-costs-in-machine-learning/" },
  { slug: "what-is-liquid-machine-learning", title: "What Is Liquid Machine Learning?", url: "https://analyticsdrift.com/what-is-liquid-machine-learning/" },
  { slug: "facebooks-single-model-xlsr-for-speech-recognition-in-53-languages", title: "Facebook's Single Model XLSR For Speech Recognition In 53 Languages.", url: "https://analyticsdrift.com/facebooks-single-model-xlsr-for-speech-recognition-in-53-languages/" },
  { slug: "the-statistics-ministry-adopts-ai-for-faster-economic-insights", title: "The Statistics Ministry Adopts AI For Faster Economic Insights", url: "https://analyticsdrift.com/the-statistics-ministry-adopts-ai-for-faster-economic-insights/" },
  { slug: "ibm-and-daimler-simulates-materials-with-fewer-qubits", title: "IBM And Daimler Simulates Materials With Fewer Qubits", url: "https://analyticsdrift.com/ibm-and-daimler-simulates-materials-with-fewer-qubits/" },
  { slug: "brain-storage-scheme-can-solve-artificial-networks-memory-woes", title: "Brain Storage Scheme Can Solve Artificial Networks' Memory Woes", url: "https://analyticsdrift.com/brain-storage-scheme-can-solve-artificial-networks-memory-woes/" },
  { slug: "microsofts-felicia-a-new-mechanism-to-deal-with-private-medical-data", title: "Microsoft's FELICIA - A New Mechanism To Deal With Private Medical Data", url: "https://analyticsdrift.com/microsofts-felicia-a-new-mechanism-to-deal-with-private-medical-data/" },
  { slug: "bert-based-language-models-are-deep-n-gram-models", title: "BERT-Based Language Models Are Deep N-Gram Models", url: "https://analyticsdrift.com/bert-based-language-models-are-deep-n-gram-models/" },
  { slug: "infosys-cobalt-announces-applied-ai-cloud-built-on-nvidia-dgx-a100s", title: "Infosys Cobalt Announces Applied AI Cloud Built On NVIDIA DGX A100s", url: "https://analyticsdrift.com/infosys-cobalt-announces-applied-ai-cloud-built-on-nvidia-dgx-a100s/" },
  { slug: "meity-and-aws-sets-up-quantum-computing-application-lab", title: "MeITY And AWS Sets Up Quantum Computing Application Lab", url: "https://analyticsdrift.com/meity-and-aws-sets-up-quantum-computing-application-lab/" },
  { slug: "automated-vehicles-safety-standards-relaxed-by-the-us-government", title: "Automated Vehicles' Safety Standards Relaxed By The US Government", url: "https://analyticsdrift.com/automated-vehicles-safety-standards-relaxed-by-the-us-government/" },
  { slug: "nasa-uses-ai-to-detect-martian-craters", title: "NASA Uses AI to Detect Martian Craters", url: "https://analyticsdrift.com/nasa-uses-ai-to-detect-martian-craters/" },
  { slug: "cure-fit-goes-global-acquires-us-based-onyx", title: "Cure.Fit Goes Global, Acquires US-Based Onyx", url: "https://analyticsdrift.com/cure-fit-goes-global-acquires-us-based-onyx/" },
  { slug: "fractal-acquires-zerogons-for-its-drag-drop-enterprise-ai-platform", title: "Fractal Acquires Zerogons For Its Drag Drop Enterprise AI Platform.", url: "https://analyticsdrift.com/fractal-acquires-zerogons-for-its-drag-drop-enterprise-ai-platform/" },
  { slug: "concept-whitening-for-interpreting-neural-networks-at-ease", title: "Concept-Whitening For Interpreting Neural Networks At Ease", url: "https://analyticsdrift.com/concept-whitening-for-interpreting-neural-networks-at-ease/" },
  { slug: "googles-trillion-parameters-nlp-model", title: "Google's Trillion-Parameters NLP Model", url: "https://analyticsdrift.com/googles-trillion-parameters-nlp-model/" },
  { slug: "vonenets-computer-vision-meets-primate-vision", title: "VOneNets - Computer Vision meets Primate Vision", url: "https://analyticsdrift.com/vonenets-computer-vision-meets-primate-vision/" },
  { slug: "av-map-from-short-video-to-the-entire-floor-plan-using-ml", title: "AV-MAP: From Short Video To The Entire Floor Plan Using ML", url: "https://analyticsdrift.com/av-map-from-short-video-to-the-entire-floor-plan-using-ml/" },
  { slug: "amazon-web-services-aws-is-hosting-a-free-ai-conclave", title: "Amazon Web Services (AWS) Is Hosting A Free AI Conclave", url: "https://analyticsdrift.com/amazon-web-services-aws-is-hosting-a-free-ai-conclave/" },
  { slug: "microsoft-is-hosting-free-virtual-workshop-on-reinforcement-learning-day-providing-job-opportunity-at-its-research-labs", title: "Microsoft Is Hosting Free Virtual Workshop On Reinforcement Learning Day, Providing Job Opportunity At Its Research Labs", url: "https://analyticsdrift.com/microsoft-is-hosting-free-virtual-workshop-on-reinforcement-learning-day-providing-job-opportunity-at-its-research-labs/" },
  { slug: "optical-chips-paves-the-way-for-faster-machine-learning", title: "Optical Chips Paves The Way For Faster Machine Learning", url: "https://analyticsdrift.com/optical-chips-paves-the-way-for-faster-machine-learning/" },
  { slug: "microsofts-deberta-surpasses-humans-on-natural-language-understanding", title: "Microsoft's DeBERTa Surpasses Humans On Natural Language Understanding", url: "https://analyticsdrift.com/microsofts-deberta-surpasses-humans-on-natural-language-understanding/" },
  { slug: "uber-ai-says-you-can-increase-task-completion-if-you-are-polite-with-virtual-agents", title: "Uber AI Says You Can Increase Task Completion If You Are Polite With Virtual Agents", url: "https://analyticsdrift.com/uber-ai-says-you-can-increase-task-completion-if-you-are-polite-with-virtual-agents/" },
  { slug: "iisc-invites-for-its-new-deep-learning-specialisation", title: "IIsc Invites For Its New Deep Learning Specialisation", url: "https://analyticsdrift.com/iisc-invites-for-its-new-deep-learning-specialisation/" },
  { slug: "facebook-releases-code-of-its-state-of-the-art-voice-separation-model", title: "Facebook Releases Code Of Its State-Of-The-Art Voice Separation Model", url: "https://analyticsdrift.com/facebook-releases-code-of-its-state-of-the-art-voice-separation-model/" },
  { slug: "intels-realsense-id-now-offers-facial-recognition-with-higher-accuracy", title: "Intel's RealSense ID Now Offers Facial Recognition With Higher Accuracy", url: "https://analyticsdrift.com/intels-realsense-id-now-offers-facial-recognition-with-higher-accuracy/" },
  { slug: "openais-dall%c2%b7e-can-create-images-from-text", title: "OpenAI's DALL-E Can Create Images From Text", url: "https://analyticsdrift.com/openais-dall%c2%b7e-can-create-images-from-text/" },
  { slug: "clip-from-openai-recognizes-images-from-their-captions", title: "CLIP From OpenAI Recognizes Images From Their Captions", url: "https://analyticsdrift.com/clip-from-openai-recognizes-images-from-their-captions/" },
  { slug: "computer-vision-has-a-new-deit-by-facebook", title: "Computer Vision Has A New DeIT By Facebook", url: "https://analyticsdrift.com/computer-vision-has-a-new-deit-by-facebook/" },
  { slug: "openmined-in-collaboration-with-pytorch-introduces-a-free-course-of-its-the-privacy-ai-series", title: "OpenMined, In Collaboration With PyTorch, Introduces A Free Course Of The Privacy AI Series", url: "https://analyticsdrift.com/openmined-in-collaboration-with-pytorch-introduces-a-free-course-of-its-the-privacy-ai-series/" },
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
  sub_title: "Read the full article on Analytics Drift.",
  external_url: post.url,
  top_image: "top_image.jpeg",
  emoji: blogEmojis[i % blogEmojis.length],
  color: blogGradients[i % blogGradients.length],
}));
