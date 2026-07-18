export const profile = {
  name: "Sam Daniel",
  role: "AI/ML Engineer & Full-Stack Developer",
  email: "samdaniel2202@gmail.com",
  phone: "+91 9025494409",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/samdaniel2004",
  linkedin: "https://www.linkedin.com/in/sam-daniel-957527362/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    index: "01",
    id: "languages",
    title: "Programming Languages",
    note: "Core syntax fluency",
    items: ["Python", "SQL", "TypeScript"],
  },
  {
    index: "02",
    id: "ml-dl",
    title: "Machine Learning & Deep Learning",
    note: "Model design & training",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "OpenCV",
      "MediaPipe",
      "YOLOv8",
      "CNN",
      "RNN",
      "LSTM",
      "Transformers",
      "Transfer Learning",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Model Quantization & Optimization",
    ],
  },
  {
    index: "03",
    id: "genai",
    title: "Generative AI",
    note: "RAG & agentic systems",
    items: [
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Hugging Face Transformers",
      "OpenAI API",
      "Prompt Engineering",
      "Multi-Step Agentic Workflows",
      "ChromaDB",
      "Pinecone",
      "Embeddings",
    ],
  },
  {
    index: "04",
    id: "nlp-cv",
    title: "NLP & Computer Vision",
    note: "Perception & language",
    items: [
      "Named Entity Recognition",
      "Tokenization",
      "spaCy",
      "Transformer Embeddings",
      "Object Detection",
      "Pose Detection",
      "Image Annotation",
      "Image Processing",
    ],
  },
  {
    index: "05",
    id: "data",
    title: "Data Science & Analytics",
    note: "Signal from noise",
    items: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Statistical Analysis",
    ],
  },
  {
    index: "06",
    id: "mlops",
    title: "MLOps & Deployment",
    note: "Shipping to production",
    items: [
      "FastAPI",
      "Docker",
      "MLflow",
      "Weights & Biases",
      "REST APIs",
      "Streamlit",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
    ],
  },
  {
    index: "07",
    id: "frontend",
    title: "Frontend & Web",
    note: "Interfaces for intelligence",
    items: ["Next.js", "React.js", "Tailwind CSS", "JSON", "AI API Integration"],
  },
  {
    index: "08",
    id: "swe",
    title: "Software Engineering",
    note: "Foundations that scale",
    items: [
      "OOP",
      "Version Control",
      "Modular Architecture",
      "Structured Logging",
      "Debugging",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  demoUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "AI-Powered Medical Equipment Platform",
    summary:
      "An intelligent healthcare equipment marketplace combining modern web technologies with AI-powered product recommendations.",
    highlights: [
      "Built responsive platform using Next.js, React.js, TypeScript and Tailwind CSS.",
      "Developed reusable architecture and backend APIs.",
      "Integrated AI recommendation engine using natural language queries.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "JSON",
      "AI API",
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    index: "02",
    title: "Bookify — RAG-Based AI Book Recommendation System",
    summary:
      "A retrieval-augmented recommendation engine that reasons over a large book corpus to surface precise, context-aware picks.",
    highlights: [
      "End-to-end LangChain RAG pipeline.",
      "Semantic search across 10,000+ books.",
      "Improved recommendation precision by 30%.",
      "Dockerized FastAPI deployment with sub-200ms response.",
    ],
    stack: [
      "Python",
      "LangChain",
      "Hugging Face",
      "ChromaDB",
      "OpenAI API",
      "Docker",
      "FastAPI",
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    index: "03",
    title: "AI Gym Trainer",
    summary:
      "A real-time computer vision coach that tracks form and reps across multiple exercises directly from a webcam feed.",
    highlights: [
      "MediaPipe BlazePose pipeline.",
      "Five exercise tracking modes.",
      "Sub-100ms CPU inference.",
      "CNN posture classification.",
      "Streamlit deployment.",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "PyTorch", "YOLOv8", "FastAPI"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    index: "04",
    title: "House Price Prediction",
    summary:
      "A regression system that turns raw housing records into a tuned, trackable pricing model.",
    highlights: [
      "Feature engineering on 15,000+ records.",
      "MLflow experiment tracking.",
      "XGBoost achieved R² = 0.91.",
      "Streamlit deployment.",
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "MLflow", "Pandas"],
    demoUrl: null,
    githubUrl: null,
  },
];

export const experience = [
  {
    role: "Python & Data Development Intern",
    org: "TICEL Bio Park, Coimbatore",
    period: "June 2024 – July 2024",
    points: [
      "Engineered Python ETL pipelines using Pandas and NumPy to automate processing of 10,000+ records.",
      "Reduced manual data preparation time by 40%.",
      "Developed modular Python applications.",
      "Optimized SQL queries using joins, CTEs, and aggregations.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    org: "SNS College of Technology",
    period: "Graduated: 2026",
    note: "CGPA: 7.2",
  },
];

export const certifications = [
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    year: "2024",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia via Forage",
    year: "2024",
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
  },
  {
    title: "Database Management Systems (Part 1 & 2)",
    issuer: "Infosys Springboard",
    year: "2023",
  },
];
