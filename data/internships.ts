export interface Internship {
  id: string
  title: string
  company: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  duration: string
  location: string
  stipend?: string
  description: string
  requirements: string[]
  responsibilities: string[]
  skills: string[]
  imageUrl: string
}

export const internships: Internship[] = [
  {
    id: 'int-001',
    title: 'Frontend Developer Intern',
    company: 'TechCorp Solutions',
    type: 'Full-time',
    duration: '3 months',
    location: 'Remote',
    stipend: '$2000/month',
    description:
      'Join our frontend team and build responsive web applications. Work with React, TypeScript, and modern web technologies.',
    requirements: [
      'Knowledge of React or Vue.js',
      'Understanding of HTML/CSS/JavaScript',
      'Familiarity with Git',
      'Strong communication skills',
    ],
    responsibilities: [
      'Develop responsive UI components',
      'Implement features based on design specs',
      'Collaborate with design and backend teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
    ],
    skills: ['React', 'JavaScript', 'CSS', 'Git', 'Problem Solving'],
    imageUrl: '/images/company-1.jpg',
  },
  {
    id: 'int-002',
    title: 'Data Analytics Intern',
    company: 'DataViz Inc',
    type: 'Full-time',
    duration: '4 months',
    location: 'Hybrid',
    stipend: '$2500/month',
    description:
      'Analyze large datasets and create visualizations. Build dashboards that help stakeholders make data-driven decisions.',
    requirements: [
      'Proficiency in Python or R',
      'Understanding of SQL',
      'Familiarity with data visualization tools',
      'Analytical mindset',
    ],
    responsibilities: [
      'Clean and preprocess data',
      'Create analytical visualizations',
      'Build interactive dashboards',
      'Generate reports and insights',
      'Collaborate with business teams',
    ],
    skills: ['Python', 'SQL', 'Tableau/PowerBI', 'Data Analysis', 'Statistics'],
    imageUrl: '/images/company-2.jpg',
  },
  {
    id: 'int-003',
    title: 'UX Design Intern',
    company: 'DesignStudio Pro',
    type: 'Full-time',
    duration: '3 months',
    location: 'On-site',
    stipend: '$1800/month',
    description:
      'Design user interfaces and conduct user research. Collaborate with product and development teams to create amazing products.',
    requirements: [
      'Proficiency in Figma',
      'Understanding of design principles',
      'Attention to detail',
      'Ability to take feedback',
    ],
    responsibilities: [
      'Create wireframes and prototypes',
      'Conduct user research interviews',
      'Iterate designs based on feedback',
      'Document design systems',
      'Assist in user testing sessions',
    ],
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Research', 'Communication'],
    imageUrl: '/images/company-3.jpg',
  },
  {
    id: 'int-004',
    title: 'Backend Developer Intern',
    company: 'CloudLogix',
    type: 'Full-time',
    duration: '4 months',
    location: 'Remote',
    stipend: '$2300/month',
    description:
      'Build scalable backend systems. Work with databases, APIs, and cloud infrastructure.',
    requirements: [
      'Strong knowledge of Python, Node.js, or Java',
      'Understanding of database design',
      'Familiarity with REST APIs',
      'Problem-solving skills',
    ],
    responsibilities: [
      'Design and implement APIs',
      'Optimize database queries',
      'Write unit and integration tests',
      'Deploy applications',
      'Document code and systems',
    ],
    skills: ['Node.js', 'Database Design', 'API Development', 'Testing', 'Docker'],
    imageUrl: '/images/company-4.jpg',
  },
  {
    id: 'int-005',
    title: 'Product Manager Intern',
    company: 'InnovateTech',
    type: 'Full-time',
    duration: '3 months',
    location: 'Hybrid',
    stipend: '$2100/month',
    description:
      'Learn product management fundamentals. Collaborate with engineers and designers to ship features.',
    requirements: [
      'Strong analytical skills',
      'Communication skills',
      'Understanding of product development',
      'Interest in user psychology',
    ],
    responsibilities: [
      'Conduct market research',
      'Define product requirements',
      'Create user stories and specs',
      'Track product metrics',
      'Participate in planning meetings',
    ],
    skills: ['Product Strategy', 'Analytics', 'Communication', 'Research', 'Prioritization'],
    imageUrl: '/images/company-5.jpg',
  },
  {
    id: 'int-006',
    title: 'DevOps Engineer Intern',
    company: 'CloudScale',
    type: 'Full-time',
    duration: '4 months',
    location: 'Remote',
    stipend: '$2400/month',
    description:
      'Learn infrastructure automation and deployment. Work with AWS, Docker, and Kubernetes.',
    requirements: [
      'Basic knowledge of Linux',
      'Understanding of networking',
      'Familiarity with Git',
      'Problem-solving skills',
    ],
    responsibilities: [
      'Set up CI/CD pipelines',
      'Containerize applications',
      'Manage cloud infrastructure',
      'Monitor system performance',
      'Write infrastructure code',
    ],
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
    imageUrl: '/images/company-6.jpg',
  },
]
