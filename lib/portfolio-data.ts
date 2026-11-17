export const profile = {
  name: 'Nakul N',
  role: 'Software Engineer — AI/ML & Full-Stack',
  location: 'Mysuru, Karnataka, India',
  email: 'nakuljb24@gmail.com',
  phone: '+91 9480266834',
  // Replace with your exact profile URLs
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  about:
    'Aspiring Computer Science engineer (JSSSTU) building AI-driven applications across AI/ML and Full-Stack Development. Experienced in turning ideas into working products, from model integration to containerized deployment, and eager to contribute to innovative projects.',
}

export type Project = {
  title: string
  subtitle: string
  date: string
  points: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'Dhanavantari',
    subtitle: 'Ayurvedic Plant Detection',
    date: 'Dec 2025',
    points: [
      'Built an AI system for medicinal plant identification using deep learning.',
      'Applied CNN with ResNet transfer learning and data augmentation to boost model generalization.',
      'Achieved strong classification performance on medicinal plant datasets.',
    ],
    stack: ['Python', 'CNN', 'ResNet', 'Transfer Learning', 'NumPy'],
  },
  {
    title: 'Corporate Climber',
    subtitle: 'AI Project Success Predictor',
    date: 'Sept 2025',
    points: [
      'Built an AI-powered prediction system using Spring Boot, Google Gemini AI, and Cloud NLP.',
      'Performed 10,000+ Monte Carlo simulations and analyzed 1,000+ user interactions.',
      'Deployed a Dockerized PostgreSQL system with sub-200ms response time.',
    ],
    stack: ['Spring Boot', 'Gemini API', 'Cloud NLP', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Restaurant Review Website',
    subtitle: 'Full-Stack Review Platform',
    date: 'Oct 2024',
    points: [
      'Built a full-stack platform using Java and an Oracle database.',
      'Designed the frontend using HTML, CSS, and JavaScript.',
      'Optimized SQL queries and implemented secure CRUD operations.',
    ],
    stack: ['Java', 'Oracle', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'E-Minds',
    subtitle: 'Smart Traffic Management — Hackathon',
    date: 'Mysuru',
    points: ['Engineered traffic optimization solutions as part of a team during a hackathon.'],
    stack: ['Teamwork', 'Optimization', 'Prototyping'],
  },
]

export const experience = {
  title: 'AI Trainer — Science & Technology Expert',
  org: 'Handshake AI Fellowship',
  location: 'Remote',
  date: 'Aug 2026',
  points: [
    'Designed and evaluated domain-specific prompts to benchmark large language model (LLM) performance.',
    'Reviewed LLM outputs for accuracy, clarity, and depth across specialised Science & Technology topics, flagging gaps for correction.',
    'Strengthened model response quality by delivering structured expert feedback grounded in independent research.',
  ],
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'Python', 'C', 'SQL'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  {
    group: 'Backend',
    items: ['Spring Boot', 'Spring Data / Hibernate', 'REST APIs', 'Node.js', 'Express.js'],
  },
  {
    group: 'AI / ML',
    items: [
      'Deep Learning (CNN, ResNet)',
      'NLP',
      'Speech Recognition',
      'LLM Prompt Engineering & Evaluation',
      'Google Gemini API',
      'NumPy',
    ],
  },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle'] },
  { group: 'Tools', items: ['Docker', 'Kubernetes', 'Git', 'GitHub'] },
]

export const education = [
  {
    school: 'Sri Jayachamarajendra College of Engineering (JSSSTU)',
    detail: 'B.E. in Computer Science · CGPA 6.5',
    location: 'Mysuru, Karnataka',
    date: '2022 – 2026',
  },
  {
    school: 'MASVS Gurukula PU College',
    detail: '12th Standard · 86%',
    location: 'Mysuru, Karnataka',
    date: '2021 – 2022',
  },
  {
    school: 'Sri Chaitanya Techno School',
    detail: '10th Standard · 74%',
    location: 'Mandya, Karnataka',
    date: '2019 – 2020',
  },
]

export const certifications = [
  { name: 'Spring Boot 4, Spring 7 and Hibernate', issuer: 'Udemy' },
  { name: 'Introduction to Amazon EC2 and Amazon S3', issuer: 'AWS Educate' },
  { name: 'Java Programming', issuer: 'Computer Paradise, Mysuru' },
]
