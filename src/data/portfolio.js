export const personalInfo = {
  name: "Hemant Pande",
  title: "Computer Engineering Student",
  subtitle: "AI/ML Enthusiast | Researcher",
  email: "hp926591@gmail.com",
  phone: "+91 8780508139",
  location: "Gandhinagar, India",
  github: "https://github.com/HEMANT-PANDE",
  linkedin: "https://linkedin.com/in/hemant-pande926591/",
  summary: "Computer Engineering undergraduate at LDRP Institute of Technology & Research, KSV with a solid foundation in AI/ML, deep learning, and full-stack systems. Published researcher with work featured on IEEE Xplore and national conferences, with hands-on experience in building data-driven and scalable solutions. Achieved finalist positions in national hackathons and winner of competitive hackathons, demonstrating strong analytical and problem-solving skills. Experienced in leading cross-functional teams, executing technical projects, and driving innovation through impactful research and development initiatives.",
};

export const education = [
  {
    institution: "LDRP Institute of Technology & Research, KSV",
    period: "2023 - 2027",
    degree: "Bachelor of Engineering in Computer Engineering",
    scoreType: "CPI",
    score: "8.01 (Till 5th Sem.)",
    location: "Gandhinagar, Gujarat"
  },
  {
    institution: "St. Xavier's High School, Gandhinagar",
    period: "2021 - 2023",
    degree: "Higher Secondary Education (HSC - GHSEB)",
    scoreType: "Percentage",
    score: "65%",
    location: "Gandhinagar, Gujarat"
  },
  {
    institution: "Sai Vidhya Mandir, Adalaj",
    period: "2020 - 2021",
    degree: "Secondary Education (SSC - GSEB)",
    scoreType: "Percentage",
    score: "82%",
    location: "Adalaj, Gujarat"
  }
];

export const experience = [
  {
    role: "AI/ML Research Intern",
    project: "NeuroPredict (Seizure Prediction)",
    organization: "IEEE EMBS Student Internship 2025",
    type: "Virtual",
    period: "Jun. 2025 - Jul. 2025",
    bullets: [
      "Developed an AI-based model for epileptic seizure prediction using EEG signals and 1D CNN architecture.",
      "Implemented model interpretability with SHAP (SHapley Additive exPlanations) to enhance transparency, model trust, and clinical viability."
    ],
    technologies: ["Python", "TensorFlow", "1D CNN", "EEG Processing", "SHAP", "Signal Processing"]
  },
  {
    role: "AI/ML Intern",
    project: "HealthMate (Personalized Advisor)",
    organization: "SPS Internship",
    type: "Virtual",
    period: "Jun. 2025 - Jul. 2025",
    bullets: [
      "Built a multimodal system combining Electronic Health Records (EHR) + wearable biometric data to generate personalized health advice using Large Language Models (LLMs).",
      "Designed the full end-to-end pipeline: data preprocessing, contextual enrichment, and LLM-based advisory generation."
    ],
    technologies: ["Python", "LLMs", "Retrieval-Augmented Generation (RAG)", "Biometric Processing", "Data Preprocessing"]
  }
];

export const projects = [
  {
    title: "Flood Detection using Satellite Imagery",
    event: "AISEHack (ANRF, IIT Delhi, IIITH, IBM)",
    period: "2026",
    role: "Deep Learning Developer",
    githubUrl: "https://github.com/HEMANT-PANDE/Final-Submission-AISEHack.git",
    liveUrl: null,
    description: "A deep learning pipeline selected as a National Finalist in AISEHack 2026, leveraging satellite multispectral images to accurately map flood levels at a pixel scale.",
    highlights: [
      "Developed an end-to-end deep learning pipeline using UNet++ with EfficientNet-B4 backbone on multispectral satellite imagery.",
      "Implemented pixel-level segmentation mapping for precise flood boundaries.",
      "Optimized model inference for large-scale geographic raster datasets."
    ],
    technologies: ["UNet++", "EfficientNet-B4", "PyTorch", "Rasterio", "Multispectral Imagery", "Satellite Data"]
  },
  {
    title: "FleetFlow - Centralized Fleet Management",
    event: "Odoo X GVP Hackathon 2026",
    period: "2026",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/HEMANT-PANDE/fleetflow-hemant.git",
    liveUrl: null,
    description: "A comprehensive fleet operations control center equipped with advanced logistics tracing, financial spreadsheets, and access controls built for Odoo's developer challenge.",
    highlights: [
      "Developed a centralized fleet management system with robust Role-Based Access Control (RBAC).",
      "Implemented real-time vehicle tracking, route mapping, and trip lifecycle management.",
      "Integrated operational dashboards with financial analytics to track asset utilization and fuel efficiency."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "Mapbox API", "Data Analytics"]
  },
  {
    title: "Entropy DAU - Real-time Fraud Detection",
    event: "InnovAItion Hackathon 2026",
    period: "Dec. 2025 - Jan. 2026",
    role: "Machine Learning Engineer",
    githubUrl: "https://github.com/slantie/entropy-dau.git",
    liveUrl: null,
    description: "A streaming transaction guard utilizing combined sequential and boosted machine learning models, securing runner-up spot out of 185 competitive teams.",
    highlights: [
      "Developed a real-time transaction fraud detection pipeline combining sequential LSTM networks and XGBoost.",
      "Achieved Runner-up position among 185 competitive teams nationally.",
      "Processed high-throughput simulated transaction streams with minimal latency."
    ],
    technologies: ["Python", "XGBoost", "LSTM", "Scikit-Learn", "Real-Time Pipelines", "Streaming Data"]
  },
  {
    title: "Wellness Vivek - Smart Hospital System",
    event: "Smart India Hackathon 2024",
    period: "Aug. 2024 - Dec. 2024",
    role: "MERN Stack Developer",
    githubUrl: "https://github.com/HEMANT-PANDE",
    liveUrl: "https://wellness-vivek.vercel.app/",
    description: "A clinic optimization portal managing patient queues, bed status, and labs, securing the 5th place in the internal SIH round.",
    highlights: [
      "Developed a MERN-based hospital management system to optimize patient flow and live bed availability.",
      "Designed and implemented complete hospital workflow architectures (Admin, Doctor, Patient, Pharmacist).",
      "Created sub-modules for pharmacy inventory, pathology lab reporting, and operations oversight."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit"]
  },
  {
    title: "EduTrack - Smart Attendance System",
    event: "Smart India Hackathon 2025",
    period: "2025",
    role: "Full-Stack & ML Developer",
    githubUrl: "https://sankalp-frontend-cb.vercel.app/",
    liveUrl: "https://sankalp-frontend-cb.vercel.app/",
    description: "A facial recognition attendance logger with cloud embeddings and role dashboards, optimized for low-connectivity rural classrooms.",
    highlights: [
      "Built a face-recognition based attendance recording system using PyTorch deep learning models.",
      "Created a scalable full-stack web dashboard (React, Node.js, MongoDB) with secure role-based controls.",
      "Optimized storage using facial embedding vectors for instant retrieval and matching."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Deep Learning", "Face Recognition", "PyTorch"]
  },
  {
    title: "Nail Disease Detection System",
    event: "IEEE Sampark'25 Datathon",
    period: "Feb. 2025",
    role: "ML Developer",
    githubUrl: "https://github.com/HEMANT-PANDE",
    liveUrl: null,
    description: "An AI-powered dermatological screening tool matching nail imagery with disease classifications at high confidence levels.",
    highlights: [
      "Developed a medical classification model using CNN with EfficientNetB0, achieving a 92% classification accuracy.",
      "Engineered custom image preprocessing pipelines to handle diverse lighting and skin tones.",
      "Applied advanced data augmentation, class balancing, and hyperparameter tuning to reduce bias."
    ],
    technologies: ["Python", "TensorFlow", "CNN", "EfficientNet-B0", "OpenCV", "FastAPI"]
  }
];

export const research = [
  {
    title: "Exploring AI's Influence on Human Thinking: Productivity, Learning & Cognitive Skills in the Age of XAI",
    conference: "AISTS 2025 - IEEE International Conference, Marwadi University",
    period: "2025",
    status: "Published on IEEE Xplore",
    url: "https://ieeexplore.ieee.org/abstract/document/11232740",
    bullets: [
      "Investigated the cognitive effects of Explainable AI (XAI) on human problem-solving and educational learning.",
      "Published in IEEE Xplore after oral presentation at the AISTS International Conference.",
      "Secured 2nd Prize in the Poster Session (Track 2) at IEEE SPS Forum - IGNITE 2.0."
    ],
    publisher: "IEEE Xplore"
  },
  {
    title: "Enhancing Data Mining Techniques for Identifying Health Risk Patterns in Underserved Populations",
    conference: "NASCENT MR 2025 - National Scientific Conference on Emerging Trends in Multidisciplinary Research",
    period: "2025",
    status: "Published Conference Proceeding",
    url: "https://drive.google.com/file/d/1mt1ZA1hYJpLCNmESQ2U5h7xN9GXRoVAD/view",
    bullets: [
      "Formulated advanced data mining frameworks to identify healthcare disparities and predict disease hotspots in underserved sectors.",
      "Published in the peer-reviewed National Scientific Conference proceedings."
    ],
    publisher: "VMRF University"
  },
  {
    title: "Book Chapter: Introduction to Internet of Things (IoT)",
    conference: "Springer Edited Volume - Quantum Computing, Sensing, and Communication for IoT",
    period: "2025",
    status: "Accepted / In Press",
    url: null,
    bullets: [
      "Author of a book chapter exploring interdisciplinary applications of quantum sensing, quantum computing, and secure communication inside future IoT structures.",
      "Accepted for upcoming publication by Springer Nature."
    ],
    publisher: "Springer Edited Volume"
  }
];

export const leadership = [
  {
    role: "Student Hackathon Coordinator",
    organization: "M. M. Patel Students Research Project Cell (MMPSRPC), KSV",
    period: "Jul. 2025 - Present",
    bullets: [
      "Coordinating institutional hackathon events, managing participant engagement platforms, and facilitating project evaluation cycles.",
      "Liaising between student innovators, faculty advisors, and industry sponsors to promote research and entrepreneurial activities."
    ]
  },
  {
    role: "Secretary",
    organization: "IEEE KSV Student Branch",
    period: "Jan. 2025 - Dec. 2025",
    bullets: [
      "Managed and coordinated branch administrative records, technical schedules, and inter-chapter collaborations, improving student engagement.",
      "Led weekly committee meetings, authored annual reports, and coordinated logistics with IEEE Gujarat Section officials."
    ]
  },
  {
    role: "Vice-Chair",
    organization: "IEEE KSV Signal Processing Society (SPS) Student Chapter",
    period: "Jun. 2025 - Dec. 2025",
    bullets: [
      "Directed chapter academic events, technical competitions, and expert webinars centered on signal processing and AI applications.",
      "Managed the planning committee and spearheaded public relations campaigns for guest speakers."
    ]
  },
  {
    role: "Documentation & Report Committee Member",
    organization: "IEEE LDRP-ITR Student Branch",
    period: "Mar. 2024 - Dec. 2024",
    bullets: [
      "Drafted formal event reports, press statements, and post-event documents for submission to IEEE India council logs."
    ]
  }
];

export const achievements = [
  {
    title: "Winner of ImpactThon 2025-26",
    organization: "M. M. Patel Students Research Project Cell (MMPSRPC), KSV",
    description: "Secured first place and received a ₹50,000 project grant for developing innovative social impact technical solutions. Sponsored by GUJCOST and DST, Govt. of India.",
    link: null
  },
  {
    title: "2nd Prize - IEEE SPS Forum IGNITE 2.0 Poster Session",
    organization: "IEEE Signal Processing Society Gujarat Section",
    description: "Secured second prize in the national poster session (Track 2) for the research work investigating AI's influence on human cognition and machine learning learning curves.",
    link: null
  },
  {
    title: "Winner (1st Place) - IEEE Ethics Contest (Region 10)",
    organization: "IEEE Region 10 (Asia-Pacific)",
    description: "Secured 1st place in the initial round of the contest by formulating ethical solutions and policies for emerging technical problems.",
    link: "https://www.credly.com/go/93iOS8U0"
  },
  {
    title: "National Presenter - GTU National Poster Competition",
    organization: "Gujarat Technological University (GTU)",
    description: "Presented research paper titled 'Bridging the Disconnect: Holistic Student Dropout Analysis through Data-Driven ML' at the National Competition on AI Powered Research and Innovation.",
    link: null
  },
  {
    title: "IEEE KSV Student Branch Acknowledgment Letter",
    organization: "IEEE KSV Student Branch Executive Committee",
    description: "Received official acknowledgment letter and praise for developing the official website of the IEEE KSV Student Branch, enhancing organization reach.",
    link: null
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "Validation ID: 661a1b6f1ded4e89acc43ecebdc8e609",
    link: "https://aws.amazon.com/verification"
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    credentialId: "GitHub Foundations Certified",
    link: "https://www.credly.com/go/93iOS8U0"
  },
  {
    name: "Database Management System",
    issuer: "NPTEL (IIT Madras)",
    credentialId: "Elite (Score: 63%)",
    link: "https://www.credly.com/go/93iOS8U0"
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL (IIT Madras)",
    credentialId: "Elite (Score: 64%)",
    link: "https://www.credly.com/go/93iOS8U0"
  },
  {
    name: "Introduction to Algorithms and Analysis",
    issuer: "NPTEL (IIT Kharagpur)",
    credentialId: "Elite (Score: 64%)",
    link: null
  },
  {
    name: "Advanced Course on Green Skills and Artificial Intelligence",
    issuer: "Shell & Edutrack Foundation (Skills 4Future Program)",
    credentialId: "Certified, 2025",
    link: null
  }
];

export const volunteering = [
  {
    role: "Event Coordinator",
    event: "ERTE 2025: Emerging Research Trends in Engineering",
    details: "Organized the national-level program focusing on AI applications in Smart Cities and Industry 5.0 concepts.",
    period: "2025"
  },
  {
    role: "Student Coordinator",
    event: "STTP: Mathematics-Driven ML Concepts, Techniques & Applications",
    details: "Led scheduling, event planning, and end-to-end management of a 5-day Short Term Training Program at LDRP-ITR.",
    period: "Dec. 9-13, 2025"
  },
  {
    role: "Volunteer",
    event: "MMPSRPC-KSV Research Orientation Workshop",
    details: "Assisted in coordinating event tracks and facilitated Q&A panels with distinguished guest researchers.",
    period: "Dec. 6, 2024"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: "Expert" },
    { name: "C++", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "C", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" }
  ],
  frontend: [
    { name: "React.js", level: "Expert" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "HTML5/CSS3", level: "Expert" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "SQL / PostgreSql", level: "Advanced" }
  ],
  aiml: [
    { name: "TensorFlow / Keras", level: "Advanced" },
    { name: "PyTorch", level: "Intermediate" },
    { name: "NumPy / Pandas", level: "Expert" },
    { name: "Scikit-Learn", level: "Advanced" },
    { name: "CNN / CNN architectures", level: "Advanced" },
    { name: "SHAP (Interpretability)", level: "Advanced" }
  ],
  tools: [
    { name: "Git / GitHub", level: "Expert" },
    { name: "Postman API client", level: "Expert" },
    { name: "AWS S3 / EC2", level: "Intermediate" },
    { name: "FastAPI", level: "Advanced" },
    { name: "Docker", level: "Intermediate" }
  ],
  soft: [
    "Technical Research & Writing",
    "Cross-Functional Leadership",
    "Public Presentation",
    "Project & Event Management",
    "Teamwork & Mentorship"
  ]
};
