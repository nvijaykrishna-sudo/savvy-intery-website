export interface Course {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  image: string
  duration: string
  level: string
  price?: string
  rating: number
  reviews: number
  outcomes: string[]
  curriculum: {
    week: number
    title: string
    topics: string[]
  }[]
  benefits: string[]
  certificates: boolean
  mentor: {
    name: string
    role: string
    image: string
  }
}

export const courses: Course[] = [
  {
    id: 'web-dev-001',
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    description:
      'Master modern web development with React, Node.js, and databases. Build production-ready applications from scratch.',
    shortDescription: 'Build full-stack web applications with React & Node.js',
    image: '/images/course-webdev.jpg',
    duration: '12 weeks',
    level: 'Intermediate',
    price: '$499',
    rating: 4.8,
    reviews: 342,
    outcomes: [
      'Build responsive web applications',
      'Master React.js and Node.js',
      'Implement database solutions',
      'Deploy applications to production',
      'Collaborate in agile teams',
    ],
    curriculum: [
      {
        week: 1,
        title: 'Web Development Fundamentals',
        topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
      },
      {
        week: 2,
        title: 'React.js Essentials',
        topics: ['Components', 'Hooks', 'State Management', 'Routing'],
      },
      {
        week: 3,
        title: 'Backend Development',
        topics: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
      },
      {
        week: 4,
        title: 'Database Design',
        topics: ['SQL', 'NoSQL', 'Database Optimization', 'Migrations'],
      },
    ],
    benefits: [
      'Learn from industry experts',
      'Work on real projects',
      'Get certified upon completion',
      'Job placement assistance',
    ],
    certificates: true,
    mentor: {
      name: 'John Doe',
      role: 'Senior Software Engineer',
      image: '/images/mentor-1.jpg',
    },
  },
  {
    id: 'data-sci-001',
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    description:
      'Learn data analysis, visualization, and machine learning. Turn data into actionable insights.',
    shortDescription: 'Master data analysis and machine learning',
    image: '/images/course-data.jpg',
    duration: '10 weeks',
    level: 'Beginner',
    price: '$449',
    rating: 4.7,
    reviews: 218,
    outcomes: [
      'Analyze complex datasets',
      'Create compelling visualizations',
      'Build predictive models',
      'Extract business insights',
      'Present data-driven solutions',
    ],
    curriculum: [
      {
        week: 1,
        title: 'Python for Data Science',
        topics: ['Python Basics', 'NumPy', 'Pandas', 'Data Cleaning'],
      },
      {
        week: 2,
        title: 'Data Visualization',
        topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard Design'],
      },
      {
        week: 3,
        title: 'Statistical Analysis',
        topics: ['Descriptive Statistics', 'Hypothesis Testing', 'Regression'],
      },
      {
        week: 4,
        title: 'Machine Learning',
        topics: ['Classification', 'Regression', 'Clustering', 'Model Evaluation'],
      },
    ],
    benefits: [
      'Hands-on projects',
      'Industry mentorship',
      'Career counseling',
      'Lifetime resource access',
    ],
    certificates: true,
    mentor: {
      name: 'Sarah Chen',
      role: 'Data Science Lead',
      image: '/images/mentor-2.jpg',
    },
  },
  {
    id: 'ui-design-001',
    slug: 'ui-ux-design',
    title: 'UI/UX Design Fundamentals',
    description:
      'Learn to design beautiful and intuitive user interfaces. Master design thinking and prototyping.',
    shortDescription: 'Design stunning user experiences',
    image: '/images/course-design.jpg',
    duration: '8 weeks',
    level: 'Beginner',
    price: '$399',
    rating: 4.9,
    reviews: 156,
    outcomes: [
      'Create user-centered designs',
      'Master design tools (Figma)',
      'Develop prototypes and wireframes',
      'Conduct user research',
      'Build design portfolios',
    ],
    curriculum: [
      {
        week: 1,
        title: 'Design Fundamentals',
        topics: ['Design Principles', 'Color Theory', 'Typography', 'Grid Systems'],
      },
      {
        week: 2,
        title: 'User Research & Analysis',
        topics: ['User Personas', 'User Journey', 'Competitive Analysis', 'Wireframing'],
      },
      {
        week: 3,
        title: 'Figma Mastery',
        topics: ['Components', 'Prototyping', 'Interactions', 'Design Systems'],
      },
      {
        week: 4,
        title: 'Portfolio & Real Projects',
        topics: ['Case Studies', 'Portfolio Building', 'Client Work', 'Feedback'],
      },
    ],
    benefits: [
      'Design tools training',
      'Portfolio development',
      'Freelance opportunities',
      'Design community access',
    ],
    certificates: true,
    mentor: {
      name: 'Emma Wilson',
      role: 'Design Director',
      image: '/images/mentor-3.jpg',
    },
  },
  {
    id: 'mobile-app-001',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Build iOS and Android apps with React Native. Create apps that users love.',
    shortDescription: 'Develop cross-platform mobile applications',
    image: '/images/course-mobile.jpg',
    duration: '14 weeks',
    level: 'Advanced',
    price: '$549',
    rating: 4.6,
    reviews: 189,
    outcomes: [
      'Build iOS and Android apps',
      'Master React Native',
      'Implement mobile best practices',
      'Handle app deployment',
      'Optimize app performance',
    ],
    curriculum: [
      {
        week: 1,
        title: 'React Native Basics',
        topics: ['Setup', 'Components', 'Navigation', 'State Management'],
      },
      {
        week: 2,
        title: 'Mobile UI/UX',
        topics: ['Responsive Design', 'Platform Conventions', 'Gestures', 'Animations'],
      },
      {
        week: 3,
        title: 'APIs & Backend Integration',
        topics: ['REST APIs', 'Authentication', 'Data Storage', 'Background Tasks'],
      },
      {
        week: 4,
        title: 'Testing & Deployment',
        topics: ['Testing Strategies', 'CI/CD', 'App Store', 'Play Store'],
      },
    ],
    benefits: [
      'Real app projects',
      'App store deployment',
      'Performance optimization',
      'Freelance ready',
    ],
    certificates: true,
    mentor: {
      name: 'Michael Zhang',
      role: 'Mobile Engineering Manager',
      image: '/images/mentor-4.jpg',
    },
  },
]
