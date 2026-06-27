export interface FAQ {
  id: string
  category: 'Programs' | 'Careers' | 'General' | 'Technical' | 'Support'
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  // Programs
  {
    id: 'faq-001',
    category: 'Programs',
    question: 'What are the prerequisites to join a course?',
    answer:
      'Most of our beginner courses require basic computer literacy. Intermediate and advanced courses require specific knowledge as mentioned in the course details. We have prerequisite materials available to help you catch up.',
  },
  {
    id: 'faq-002',
    category: 'Programs',
    question: 'How long does each course last?',
    answer:
      'Course durations range from 8 to 14 weeks depending on the program. Each course is structured with flexible learning options to accommodate different schedules.',
  },
  {
    id: 'faq-003',
    category: 'Programs',
    question: 'Do you provide certificates upon completion?',
    answer:
      'Yes, all our courses provide industry-recognized certificates upon successful completion. These certificates are highly valued by employers in the industry.',
  },
  {
    id: 'faq-004',
    category: 'Programs',
    question: 'What is the refund policy?',
    answer:
      'We offer a 7-day money-back guarantee if you are not satisfied with the course. After 7 days, no refunds are provided, but you can access the course material indefinitely.',
  },
  {
    id: 'faq-005',
    category: 'Programs',
    question: 'Are the courses self-paced or instructor-led?',
    answer:
      'Our courses combine both self-paced learning and live instructor sessions. You get recorded lectures for flexible learning plus live sessions for interactive learning and doubt clearing.',
  },
  // Careers
  {
    id: 'faq-006',
    category: 'Careers',
    question: 'What is the placement rate after internships?',
    answer:
      'We have a 85%+ placement rate within 3 months of completing an internship program. Many of our interns get converted to full-time positions or receive offers from other top companies.',
  },
  {
    id: 'faq-007',
    category: 'Careers',
    question: 'How do I apply for an internship?',
    answer:
      'You can browse available internships on our Careers page, select one that interests you, and apply directly through the platform. Our team reviews applications and gets back to you within 3-5 business days.',
  },
  {
    id: 'faq-008',
    category: 'Careers',
    question: 'Are internships paid or unpaid?',
    answer:
      'Most of our internships are paid, with stipends ranging from $1800 to $2500 per month. Some unpaid but high-impact opportunities are also available. Details are clearly mentioned in each internship posting.',
  },
  {
    id: 'faq-009',
    category: 'Careers',
    question: 'Can international students apply for internships?',
    answer:
      'We primarily offer remote internships which are available to international applicants. For on-site positions, visa sponsorship is not available at this time.',
  },
  // General
  {
    id: 'faq-010',
    category: 'General',
    question: 'Who are the mentors at SAVVY INTERN?',
    answer:
      'Our mentors are senior professionals with 5+ years of experience from top tech companies like Google, Amazon, Microsoft, and Meta. They bring real-world industry insights to the learning experience.',
  },
  {
    id: 'faq-011',
    category: 'General',
    question: 'What makes SAVVY INTERN different?',
    answer:
      'We focus on practical, job-ready skills with industry mentorship, real project experience, and strong placement support. Our curriculum is regularly updated based on industry demands.',
  },
  {
    id: 'faq-012',
    category: 'General',
    question: 'Do you offer corporate training?',
    answer:
      'Yes, we provide customized corporate training programs for teams and organizations. Please contact our business team for more information.',
  },
  // Technical
  {
    id: 'faq-013',
    category: 'Technical',
    question: 'What software/tools do I need for the courses?',
    answer:
      'All required tools are free and open-source. We provide setup guides and support for Windows, Mac, and Linux. A computer with 4GB RAM and stable internet connection is recommended.',
  },
  {
    id: 'faq-014',
    category: 'Technical',
    question: 'Can I access course materials offline?',
    answer:
      'Lecture videos and resources can be downloaded for offline viewing within your course dashboard. This helps learners with limited internet connectivity.',
  },
  {
    id: 'faq-015',
    category: 'Technical',
    question: 'What is the learning platform like?',
    answer:
      'Our platform is built on modern web technology with an intuitive interface. It supports video streaming, live sessions, code editor integration, and collaboration tools.',
  },
  // Support
  {
    id: 'faq-016',
    category: 'Support',
    question: 'How do I contact support?',
    answer:
      'You can reach our support team via email, WhatsApp, or phone. We typically respond within 24 hours. For urgent issues, use our WhatsApp support for faster assistance.',
  },
  {
    id: 'faq-017',
    category: 'Support',
    question: 'Do you provide career counseling?',
    answer:
      'Yes, all our students get access to career counseling sessions. We help with resume building, interview preparation, and job search strategies.',
  },
  {
    id: 'faq-018',
    category: 'Support',
    question: 'What if I need to pause my course?',
    answer:
      'You can pause your course for up to 3 months without losing access. Your progress is saved and you can resume learning anytime during your course validity period.',
  },
]
