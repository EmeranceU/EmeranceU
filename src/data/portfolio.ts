export const personalInfo = {
  name: 'Emerance Umurerwa',
  title: 'Software Engineering Student',
  subtitle: 'Backend & Full-Stack Developer',
  bio: 'Passionate Software Engineering student focused on building scalable web applications and solving real-world challenges through technology.',
  email: 'umurerwaemerance@gmail.com',
  github: 'https://github.com/EmeranceU',
  linkedin: 'https://linkedin.com/in/emerance-umurerwa-b6a331340/',
  location: 'African Leadership University',
  resumeUrl: 'src/assets/Updated Resume_Emerance Umurerwa.pdf',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Major Projects' },
  { value: 2, suffix: '+', label: 'Years Coding Experience' },
  { value: 200, suffix: '+', label: 'Community Members Impacted' },
]

export const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 88 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Java', level: 78 },
      { name: 'Spring Boot', level: 70 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    name: 'Database & Cloud',
    skills: [
      { name: 'Firebase', level: 85 },
      { name: 'Firestore', level: 83 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgresSql', level: 80 },
      { name: 'MongoDB', level: 90 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'AI', level: 90 }
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'PlotSure Connect',
    description:
      'Land listing platform designed to improve transparency and reduce land fraud in real estate transactions.',
    tech: ['Firebase', 'JavaScript', 'HTML', 'CSS'],
    features: ['Authentication', 'Verified Listings', 'Property Management'],
    github: 'https://github.com/EMe-U/plotsure',
    color: '#C96A3D',
  },
  {
    id: 2,
    title: 'JoinIn',
    description:
      'Event management platform for registration, volunteer management, QR attendance tracking, and feedback collection.',
    tech: ['Node.js', 'Express.js', 'JavaScript'],
    features: ['Event Registration', 'QR Attendance', 'Volunteer Management', 'Feedback System'],
    github: 'https://github.com/EMe-U',
    color: '#D4A017',
  },
  {
    id: 3,
    title: 'Book Hub',
    description:
      'Book discovery platform that helps readers find, explore and track books using external APIs.',
    tech: ['React', 'TypeScript', 'Vite'],
    features: ['Book Search', 'API Integration', 'Reading Lists'],
    github: 'https://github.com/ALU-BSE/summative-a-react-discovery-app-EMe-U',
    demo: 'https://gregarious-pudding-b05930.netlify.app/',
    color: '#E76F51',
  },
  {
    id: 4,
    title: 'Personal Library Management System',
    description:
      'Full-featured library management system with book tracking, member management, and borrowing workflows.',
    tech: ['Java', 'MySQL'],
    features: ['Book Tracking', 'Member Management', 'Borrowing System'],
    github: 'https://github.com/EmeranceU/Library-Management-System',
    demo: '',
    color: '#7A9E7E',
  },
]

export const experiences = [
  {
    id: 1,
    role: 'Co-Founder & Financial Manager',
    company: 'BESTIM',
    period: '2023 – Present',
    type: 'Leadership',
    achievements: [
      'Managed all financial operations and budgeting for the organization',
      'Supported and impacted over 200 beneficiaries through community programs',
      'Led strategic community initiatives and outreach programs',
      'Coordinated team efforts to deliver social impact projects',
    ],
  },
  {
    id: 2,
    role: 'Member',
    company: 'Baobab Community',
    period: '2024 – Present',
    type: 'Community',
    achievements: [
      'Engaged in professional development workshops and networking events',
      'Collaborated with peers on cross-disciplinary projects',
      'Participated in mentorship and knowledge-sharing sessions',
    ],
  },
   {
  id: 2,
  role: 'Weather & Climate Services Extern',
  company: 'Hello Tractor',
  period: 'May 2025 – June 2025',
  type: 'Internship',
  achievements: [
    'Analyzed weather and climate data to support agricultural decision-making for farmers',
    'Conducted research on weather station coverage and satellite-based climate services',
    'Prepared professional reports and data-driven recommendations for improving climate information accessibility',
    'Collaborated with international teams and stakeholders to support agricultural technology initiatives',
  ],
},
]

export const certifications = [
  {
    id: 1,
    title: 'DATA ANALYTICS WITH PYTHON',
    issuer: 'Only Quality Data',
    date: '2025',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Software Engineering(Full-Stack Web Development)',
    issuer: 'ALU',
    date: '2024',
    status: 'currently',
  },
  {
    id: 3,
    title: 'Web Fundamentals',
    issuer: 'IgireRwanda Organization(SheCanCode Bootcamp)',
    date: 'Coming Soon',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Advanced Java Backend',
    issuer: 'IgireRwanda Organization(SheCanCode Bootcamp)',
    date: '2026',
    status: 'in progress',
  },
]
