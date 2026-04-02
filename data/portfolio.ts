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
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Coursera",
    date: "2023",
    url: "https://coursera.org/share/93c991f5a903e8735a8d973b1aae4b96",
    emoji: "🔧",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2022",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/R3ZCXXTTVHS8",
    emoji: "🧠",
  },
  {
    title: "An Introduction To Practical Deep Learning",
    issuer: "Intel - Coursera",
    date: "2022",
    url: "https://www.coursera.org/account/accomplishments/certificate/QB93WVQLDNL3",
    emoji: "✨",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google - Coursera",
    date: "2021",
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

export consAlgorithm Development: Multi-label Classification Enhancement",
    description:
      "Improving multi-label classification by generating synthetic data for rare labels using MLSMOTE technique at TCS Big Data Lab, Rajasthan. Addressed the tail-labels problem where classifiers struggle with underrepresented labels.",
    language: "Python",
    stars: 8,
    tags: ["Multi-label", "Data Augmentation", "TCS Big Data Lab", "Deep Learning"],
    emoji: "🏷️",
  },
  {
    name: "LLSF_DL-MLSMOTE-Hybrid",
    description:
      "Hybrid deep learning approach combining Label-Specific Feature learning with MLSMOTE for multi-label classification. Implements the LLSF-DL algorithm for improved classification performance on imbalanced datasets.",
    language: "MATLAB",
    stars: 6,
    url: "https://github.com/Prady029/LLSF_DL-MLSMOTE-Hybrid",
    tags: ["Multi-label", "Deep Learning", "SMOTE"],
    emoji: "🧬",
  },
  {
    name: "LLSF-Learning-Label-Specific-Features",
    description:
      "Implementation of the Learning Label-Specific Features (LLSF) algorithm for multi-label classification. Enables feature selection by ranking features according to their relevance to each label.",
    language: "Jupyter Notebook",
    stars: 4,
    url: "https://github.com/Prady029/LLSF-Learning-Label-Specific-Features",
    tags: ["Multi-label", "Feature Learning", "Classification"],
    emoji: "🔬",
  },
  {
    name: "Session-based Recommendation with Graph Neural Networks",
    description:
      "Graph Neural Network-based recommendation system for session-based learning. Captures essential features from graph structures to recommend items during ongoing sessions.",
    language: "Python",
    stars: 5,
    tags: ["GNN", "Recommender System", "Graph Learning"],
    emoji: "🕸️",
  },
  {
    name: "Electricity Price Prediction using ELM-PSO-ARIMA",
    description:
      "Hybrid model combining Extreme Learning Machine, Particle Swarm Optimization, and ARIMA to capture frequent changes in electricity prices with improved accuracy.",
    language: "Python",
    stars: 4,
    tags: ["Time Series", "Optimization", "ELM", "Energy"],
    emoji: "⚡",
  },
  {
    name: "SVM-kNN-PSO Ensemble for Intrusion Detection",
    description:
      "Novel ensemble method combining Support Vector Machines, k-Nearest Neighbors, and Particle Swarm Optimization for robust intrusion detection system.",
    language: "Python",
    stars: 5,
    tags: ["Security", "Ensemble Learning", "PSO", "IDS"],
    emoji: "🛡️",
  },
  {
    name: "Brain-Tumor-Segmentation",
    description:
      "Deep learning brain tumor segmentation from MRI scans using U-Net architecture with attention mechanisms for improved medical imaging analysis.",
    language: "Python",
    stars: 3,
    url: "https://github.com/Prady029/Brain-tumor-Segmentation",
    tags: ["Medical AI", "Segmentation", "U-Net"],
    emoji: "🏥",
  },
  {
    name: "MLSMOTE",
    description:
      "Multi-Label Synthetic Minority Over-sampling Technique for handling class imbalance in multi-label datasets. Generates synthetic samples for minority labels.",
    language: "Python",
    stars: 3,
    url: "https://github.com/Prady029/MLSMOTE",
    tags: ["Data Augmentation", "Class Imbalance"],
    emoji: "⚖️",
  },
  {
    name: "Rule-based-Recommender-system",
    description:
      "Rule-based recommendation engine using association rules and collaborative filtering techniques with NLP for personalized recommendations.",
    language: "Python",
    stars: 2,
    url: "https://github.com/Prady029/Rule-based-Recommender-system",
    tags: ["Recommender System", "NLP", "Association Rules"],
    emoji: "🎯",
  },
  {
    name: "My-first-quantum-code",
    description:
      "Quantum computing experiments using Qiskit — exploring quantum circuit simulations and entanglement phenomena
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
  { slug: "salesforce-uses-aws-textract-for-intelligent-document-automation", title: "Salesforce Uses AWS Textract For Intelligent Document Automation", url: "https://analyticsdrift.com/salesforce-uses-aws-textract-for-intelligent-document-automation/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Salesforce-AWS-Textract-300x157.jpg", sub_title: "The healthcare domain has received all-time higher attention because of the current pandemic..." },
  { slug: "extracting-vocals-and-instrumentals-from-music-the-deep-learning-way", title: "Extracting Vocals And Instrumentals From Music The Deep Learning Way", url: "https://analyticsdrift.com/extracting-vocals-and-instrumentals-from-music-the-deep-learning-way/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Deep-learning-Vocals-Instrumentals-300x169.jpg", sub_title: "Whenever people get exposed to good music, the tune gets stuck in their heads for hours. And at some point, they google up the lyrics, vocals, and instrumental..." },
  { slug: "microsoft-speller100-a-spell-checker-for-over-100-languages", title: "Microsoft Speller100: A Spell-Checker For Over 100 Languages", url: "https://analyticsdrift.com/microsoft-speller100-a-spell-checker-for-over-100-languages/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Microsoft-Speller100-spell-checker-300x169.jpg", sub_title: "People do not care enough to use their queries\u2019 correct spelling while searching for anything online..." },
  { slug: "a-deep-dive-into-ibm-quantum-roadmap", title: "A Deep Dive Into IBM Quantum Roadmap", url: "https://analyticsdrift.com/a-deep-dive-into-ibm-quantum-roadmap/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/IBM-Quantum-Roadmap-300x169.jpg", sub_title: "\u201cIt took us 60 years from the first logic gates to modern cloud services. But IBM has set itself on a mission to fast forward the same journey for Quantum Computation (QC) to 3 years,\u201d Jay G.." },
  { slug: "iit-kanpur-offers-free-8-weeks-computational-science-course-enrollments-ends-15th-feb", title: "IIT Kanpur Offers Free 8-Weeks Computational Science Course, Enrollments Ends 15th Feb", url: "https://analyticsdrift.com/iit-kanpur-offers-free-8-weeks-computational-science-course-enrollments-ends-15th-feb/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/IIT-computational-science-course-300x169.jpg", sub_title: "IIT Kanpur has opened up the enrollment for an eight-week online course on computational science on the SWAYAM platform. An AvHumboldt Fellow with over 50 publications in his name, Dr..." },
  { slug: "dealing-with-racially-biased-hate-speech-detection-models", title: "Dealing With Racially-Biased Hate-Speech Detection Models", url: "https://analyticsdrift.com/dealing-with-racially-biased-hate-speech-detection-models/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/biased-hate-speech-models--300x169.jpg", sub_title: "Hate-speech detection models are the most glaring example of biased models, as shown by researchers from Allen Institute for Artificial Intelligence in their linguistic study..." },
  { slug: "automl-made-easy-with-symbolic-programming-using-pyglove", title: "AutoML Made Easy With Symbolic Programming using Pyglove", url: "https://analyticsdrift.com/automl-made-easy-with-symbolic-programming-using-pyglove/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Symbolic-programing-AutoML-Pyglove-300x169.jpg", sub_title: "Google AI researchers have released a PyGlove library, a symbolic implementation of Automated Machine Learning (AutoML) that allows developers to experiment with search spaces, search algori.." },
  { slug: "microsoft-introduces-viva-to-help-people-work-from-home", title: "Microsoft Introduces VIVA To Help People Work From Home", url: "https://analyticsdrift.com/microsoft-introduces-viva-to-help-people-work-from-home/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Microsoft-VIVA-employee-platform-300x169.jpg", sub_title: "Microsoft has recently unveiled a new employee experience platform-VIVA-that will act as an integrated platform to manage employee well-being, learning, engagement, and knowledge discovery i.." },
  { slug: "linguistic-analysis-of-machine-translations", title: "Measuring Weirdness In AI-Based Language-Translations", url: "https://analyticsdrift.com/linguistic-analysis-of-machine-translations/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/machine-translation-linguistic-analysis-300x169.jpg", sub_title: "AI-based language translations were the object of ridicule when they coughed up something funny..." },
  { slug: "google-interpretable-ranking-gams", title: "Google Introduces Interpretable Ranking Via Generative Additive Models", url: "https://analyticsdrift.com/google-interpretable-ranking-gams/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/google-interpretable-ranking-GAMs-300x169.jpg", sub_title: "We are building more and more complex AI models day by day to get our predictions right..." },
  { slug: "microsofts-gooseberry-treat-for-quantum-computing", title: "Microsoft\u2019s Gooseberry Treat For Quantum Computing", url: "https://analyticsdrift.com/microsofts-gooseberry-treat-for-quantum-computing/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Microsoft-Gooseberry-Quantum-Chip--300x169.jpg", sub_title: "In collaboration with the University of Sydney, Microsoft has built a cryogenic quantum controller chip - Gooseberry for controlling thousands of qubits..." },
  { slug: "the-facebook-muppet-show", title: "The Facebook MUPPET  Show", url: "https://analyticsdrift.com/the-facebook-muppet-show/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/Facebook-Muppet-pre-fine-tuning-300x169.jpg", sub_title: "Facebook researchers have scaled up a relevantly new technique, Pre-finetuning (PFT), in their paper MUPPET to multi-task learning of over 50 tasks on a vast scale, i.e., 4.8 million instanc.." },
  { slug: "data-labeling-and-the-hidden-costs-in-machine-learning", title: "Data Labeling And The Hidden Costs In Machine Learning", url: "https://analyticsdrift.com/data-labeling-and-the-hidden-costs-in-machine-learning/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/data-labeling-hidden-cost-300x169.jpg", sub_title: "The most challenging part of machine learning is data cleaning because, on average, it takes 70% of the allotted time for a project..." },
  { slug: "what-is-liquid-machine-learning", title: "What Is Liquid Machine Learning?", url: "https://analyticsdrift.com/what-is-liquid-machine-learning/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/02/liquid-machine-learning-300x169.jpg", sub_title: "Let us imagine for a minute the most beautiful moments of our lives? How do you mentally visualize those memories? Let us look at our surroundings..." },
  { slug: "facebooks-single-model-xlsr-for-speech-recognition-in-53-languages", title: "Facebook\u2019s Single Model XLSR For Speech Recognition In 53 Languages.", url: "https://analyticsdrift.com/facebooks-single-model-xlsr-for-speech-recognition-in-53-languages/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/XLSR-53-300x169.jpg", sub_title: "Facebook AI researchers recently open-sourced their unsupervised cross-lingual speech recognition model, XLSR, that can handle 53 languages at a time..." },
  { slug: "the-statistics-ministry-adopts-ai-for-faster-economic-insights", title: "The Statistics Ministry Adopts AI For Faster Economic Insights", url: "https://analyticsdrift.com/the-statistics-ministry-adopts-ai-for-faster-economic-insights/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Statistics-Ministry-AI-economics-300x169.jpg", sub_title: "India's statistics ministry is turning the tide from manual labor to intelligent machines to speed-up economic data gathering and draw insights..." },
  { slug: "ibm-and-daimler-simulates-materials-with-fewer-qubits", title: "IBM And Daimler Simulates Materials With Fewer Qubits", url: "https://analyticsdrift.com/ibm-and-daimler-simulates-materials-with-fewer-qubits/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Quantum-300x169.jpg", sub_title: "IBM, Daimler AG, and Virginia Tech researchers simulate materials with fewer qubits..." },
  { slug: "brain-storage-scheme-can-solve-artificial-networks-memory-woes", title: "Brain Storage Scheme Can Solve Artificial Networks\u2019 Memory Woes", url: "https://analyticsdrift.com/brain-storage-scheme-can-solve-artificial-networks-memory-woes/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Brain-Storage-Networks-Memory-300x169.jpg", sub_title: "Neuroscientists recently showed that the brain\u2019s storage scheme is more capable of storing information than the neural networks..." },
  { slug: "microsofts-felicia-a-new-mechanism-to-deal-with-private-medical-data", title: "Microsoft\u2019s FELICIA \u2013 A New Mechanism To Deal With Private Medical Data", url: "https://analyticsdrift.com/microsofts-felicia-a-new-mechanism-to-deal-with-private-medical-data/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Microsoft-FELICIA-300x169.jpg", sub_title: "FEderated LearnIng with a CentralIzed Adversary (FELICIA) -- a federated generative mechanism enabling collaborative learning -- has been recently proposed by researchers from Microsoft and.." },
  { slug: "bert-based-language-models-are-deep-n-gram-models", title: "BERT-Based Language Models Are Deep N-Gram Models", url: "https://analyticsdrift.com/bert-based-language-models-are-deep-n-gram-models/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Langugae-models-are-deep-n-gram-300x169.jpg", sub_title: "The researchers from Adobe and Auburn University pointed out that current BERT-based language models are simply deep n-gram models because they blatantly reject taking word order into accoun.." },
  { slug: "infosys-cobalt-announces-applied-ai-cloud-built-on-nvidia-dgx-a100s", title: "Infosys Cobalt Announces Applied AI Cloud Built On NVIDIA DGX A100s", url: "https://analyticsdrift.com/infosys-cobalt-announces-applied-ai-cloud-built-on-nvidia-dgx-a100s/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Infosys-NVIDIA-DGX-A100-300x169.jpg", sub_title: "Infosys has made a spectacular entrance into the global cloud-as-a-service arena by offering the Cobalt Applied AI Cloud, built on the latest NVIDIA DGX A100s..." },
  { slug: "meity-and-aws-sets-up-quantum-computing-application-lab", title: "MeITY And AWS Sets Up Quantum Computing Application Lab", url: "https://analyticsdrift.com/meity-and-aws-sets-up-quantum-computing-application-lab/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/MeITY-AWS-Quantum-Lab-300x169.jpg", sub_title: "India\u2019s Ministry of Electronics and Information Technology (MeitY) has recently announced that it will set-up a quantum computing application lab with AWS..." },
  { slug: "automated-vehicles-safety-standards-relaxed-by-the-us-government", title: "Automated Vehicles\u2019 Safety Standards Relaxed By The US Government", url: "https://analyticsdrift.com/automated-vehicles-safety-standards-relaxed-by-the-us-government/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Automated-Vehicles-Safety-Standards-300x169.jpg", sub_title: "The U.S. government recently exempted automated vehicles (AVs) from some crash standards. The main reason is to cut production costs, promote faster deployment, and amplify mass-adoption..." },
  { slug: "nasa-uses-ai-to-detect-martian-craters", title: "NASA Uses AI to Detect Martian Craters", url: "https://analyticsdrift.com/nasa-uses-ai-to-detect-martian-craters/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/NASA-AI-crater-300x169.jpg", sub_title: "The space scientists at NASA\u2019s Jet Propulsion Lab (JPL) have trained an AI that detects new craters from the image data archives of Mars Reconnaissance Orbiter..." },
  { slug: "cure-fit-goes-global-acquires-us-based-onyx", title: "Cure.Fit Goes Global, Acquires US-Based Onyx", url: "https://analyticsdrift.com/cure-fit-goes-global-acquires-us-based-onyx/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Cure.fit-acquires-Onyx-1-300x169.jpg", sub_title: "The Bangalore-based cure.fit, a health and fitness company, quietly acquired a US-based fitness startup, Onyx, for an undisclosed amount..." },
  { slug: "fractal-acquires-zerogons-for-its-drag-drop-enterprise-ai-platform", title: "Fractal Acquires Zerogons For Its Drag Drop Enterprise AI Platform.", url: "https://analyticsdrift.com/fractal-acquires-zerogons-for-its-drag-drop-enterprise-ai-platform/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Fractal_buys_Zerogon-300x169.jpg", sub_title: "Fractal continues absorbing new players in the market to build its conglomerate. The recent acquisition, Zerogons, for an undisclosed amount seems to be Fractal\u2019s entry into the highly covet.." },
  { slug: "concept-whitening-for-interpreting-neural-networks-at-ease", title: "Concept-Whitening For Interpreting Neural Networks At Ease", url: "https://analyticsdrift.com/concept-whitening-for-interpreting-neural-networks-at-ease/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Concept-Whitening_asks_why-300x169.jpg", sub_title: "Researchers at Duke University have recently introduced Concept-Whitening, a new type of layer in neural networks that provides the necessary means of interpreting the neural models without.." },
  { slug: "googles-trillion-parameters-nlp-model", title: "Google\u2019s Trillion-Parameters NLP Model", url: "https://analyticsdrift.com/googles-trillion-parameters-nlp-model/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Google-Trillion-Parameter-Model-300x169.jpg", sub_title: "Google loves to scale up things. And no wonder, the trillion parameter threshold for pre-trained language models has been breached by Google AI research..." },
  { slug: "vonenets-computer-vision-meets-primate-vision", title: "VOneNets \u2013 Computer Vision meets Primate Vision", url: "https://analyticsdrift.com/vonenets-computer-vision-meets-primate-vision/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/VOneNet_CNN_meets_Primate_vision-300x169.jpg", sub_title: "The neuroscientists\u2019 group at MIT-IBM Watson AI lab released VOneNets, a biologically inspired neural network fortified against adversarial attacks..." },
  { slug: "av-map-from-short-video-to-the-entire-floor-plan-using-ml", title: "AV-MAP: From Short Video To The Entire Floor Plan Using ML", url: "https://analyticsdrift.com/av-map-from-short-video-to-the-entire-floor-plan-using-ml/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/AV-MAP_predicts_floorplan-300x169.jpg", sub_title: "Researchers from Facebook AI and other universities have developed a framework, AV-MAP, that can infer rooms\u2019 general layout from a house\u2019s short-clip..." },
  { slug: "amazon-web-services-aws-is-hosting-a-free-ai-conclave", title: "Amazon Web Services (AWS) Is Hosting A Free AI Conclave", url: "https://analyticsdrift.com/amazon-web-services-aws-is-hosting-a-free-ai-conclave/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/AWS-AI-Conclave-300x169.jpg", sub_title: "AWS will host a two-day free AI online conclave on 28 and 29 January. The conclave is power-packed with 20+ breakout sessions by Amazon and industry experts..." },
  { slug: "microsoft-is-hosting-free-virtual-workshop-on-reinforcement-learning-day-providing-job-opportunity-at-its-research-labs", title: "Microsoft Is Hosting Free Virtual Workshop On Reinforcement Learning Day, Providing Job Opportunity At Its Research Labs", url: "https://analyticsdrift.com/microsoft-is-hosting-free-virtual-workshop-on-reinforcement-learning-day-providing-job-opportunity-at-its-research-labs/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Reinforcement-Learning-Day-2021-Microsoft-Virtual-Workshop-300x169.jpg", sub_title: "Microsoft Research will be observing Reinforcement learning day on 14th January 2021..." },
  { slug: "optical-chips-paves-the-way-for-faster-machine-learning", title: "Optical Chips Paves The Way For Faster Machine Learning", url: "https://analyticsdrift.com/optical-chips-paves-the-way-for-faster-machine-learning/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Optical-Chips-300x169.jpg", sub_title: "Silicon transistors, the basic unit of the silicon processors, can not be shrunk further without&nbsp;avoiding quantum-mechanical effects..." },
  { slug: "microsofts-deberta-surpasses-humans-on-natural-language-understanding", title: "Microsoft\u2019s DeBERTa Surpasses Humans On Natural Language Understanding", url: "https://analyticsdrift.com/microsofts-deberta-surpasses-humans-on-natural-language-understanding/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Microsoft-DeBERTa-300x169.jpg", sub_title: "Microsoft\u2019s DeBERTa (Decoding-enhanced BERT with disentangled attention) has surpassed the natural language understanding baseline set at par with human performance in the SuperGlue benchmar.." },
  { slug: "uber-ai-says-you-can-increase-task-completion-if-you-are-polite-with-virtual-agents", title: "Uber AI Says You Can Increase Task Completion If You Are Polite With Virtual Agents", url: "https://analyticsdrift.com/uber-ai-says-you-can-increase-task-completion-if-you-are-polite-with-virtual-agents/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Uber-AI-300x169.jpg", sub_title: "The Uber AI researchers&nbsp;published&nbsp;an overview of a deep learning framework addressing customer engagement with \u2018polite and positive\u2019 assistants..." },
  { slug: "iisc-invites-for-its-new-deep-learning-specialisation", title: "IIsc Invites For Its New Deep Learning Specialisation", url: "https://analyticsdrift.com/iisc-invites-for-its-new-deep-learning-specialisation/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Deep-Learning-Specialisation-IISC-300x169.jpg", sub_title: "Indian Institute of Science (IISc), currently the best university in India, has&nbsp;announced&nbsp;a masters\u2019 level deep learning specialization in tie-up with TalentSprint..." },
  { slug: "facebook-releases-code-of-its-state-of-the-art-voice-separation-model", title: "Facebook Releases Code Of Its State-Of-The-Art Voice Separation Model", url: "https://analyticsdrift.com/facebook-releases-code-of-its-state-of-the-art-voice-separation-model/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Facebook-Voice-Seperation-Model-300x169.jpg", sub_title: "Facebook researchers&nbsp;open-sourced code&nbsp;of their&nbsp;work, \u201cVoice Separation with an Unknown Number of Multiple Speakers.\u201d Suppose, there is only one mic and there are multiple spe.." },
  { slug: "intels-realsense-id-now-offers-facial-recognition-with-higher-accuracy", title: "Intel\u2019s RealSense ID Now Offers Facial Recognition With Higher Accuracy", url: "https://analyticsdrift.com/intels-realsense-id-now-offers-facial-recognition-with-higher-accuracy/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Intel-RealSense-300x188.jpg", sub_title: "Intel is now&nbsp;offering&nbsp;RealSense technology to customers for facial recognition under the purview of RealSense ID..." },
  { slug: "openais-dall%c2%b7e-can-create-images-from-text", title: "OpenAI\u2019s DALL\u00b7E Can Create Images From Text", url: "https://analyticsdrift.com/openais-dall%c2%b7e-can-create-images-from-text/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/OpenAI-Dalle-300x169.jpg", sub_title: "OpenAI created a multimodal generative neural model -- DALL\u00b7E -- that can create images from text prompts given as input.&nbsp; This neural network uses the 12-billion GPT-3 parameter versio.." },
  { slug: "clip-from-openai-recognizes-images-from-their-captions", title: "CLIP From OpenAI Recognizes Images From Their Captions", url: "https://analyticsdrift.com/clip-from-openai-recognizes-images-from-their-captions/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/OpenAI-Clip-300x214.jpg", sub_title: "OpenAI\u2019s Contrastive Language\u2013Image Pre-training (CLIP) learns image representation from associated natural language..." },
  { slug: "computer-vision-has-a-new-deit-by-facebook", title: "Computer Vision Has A New DeIT By Facebook", url: "https://analyticsdrift.com/computer-vision-has-a-new-deit-by-facebook/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/Facebook-DiET-300x169.jpg", sub_title: "Facebook AI&nbsp;introduces DeIT&nbsp;(Data-efficient Image Transformer), a Transformer-based approach to train computer vision models..." },
  { slug: "openmined-in-collaboration-with-pytorch-introduces-a-free-course-of-its-the-privacy-ai-series", title: "OpenMined, In Collaboration With PyTorch, Introduces A Free Course Of \u201cThe Privacy AI Series\u201d", url: "https://analyticsdrift.com/openmined-in-collaboration-with-pytorch-introduces-a-free-course-of-its-the-privacy-ai-series/", image_url: "https://analyticsdrift.com/wp-content/uploads/2021/01/OpenMined-300x169.jpg", sub_title: "OpenMined has released a course to train next-generation machine learning enthusiasts and practitioners to process sensitive data without breaching privacy..." },
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
