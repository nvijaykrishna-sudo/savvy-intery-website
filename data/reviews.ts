export interface Review {
  id: string
  name: string
  title: string
  company: string
  text: string
  rating: number
  image: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 'review-001',
    name: 'Priya Sharma',
    title: 'Frontend Developer',
    company: 'Google',
    text: 'The internship program at SAVVY INTERN was transformative. I gained hands-on experience with modern tech stack and mentorship from industry experts. Got my dream job at Google!',
    rating: 5,
    image: '/images/review-1.jpg',
    date: '3 months ago',
  },
  {
    id: 'review-002',
    name: 'Rahul Kumar',
    title: 'Data Scientist',
    company: 'Microsoft',
    text: 'Excellent curriculum and supportive community. The projects were challenging and real-world focused. Highly recommend for anyone serious about their tech career.',
    rating: 5,
    image: '/images/review-2.jpg',
    date: '2 months ago',
  },
  {
    id: 'review-003',
    name: 'Aisha Patel',
    title: 'Product Designer',
    company: 'Adobe',
    text: 'SAVVY INTERN helped me transition into UX design. The mentors were incredibly helpful and the portfolio projects really impressed my interviewers.',
    rating: 5,
    image: '/images/review-3.jpg',
    date: '1 month ago',
  },
  {
    id: 'review-004',
    name: 'Vikram Singh',
    title: 'Full Stack Developer',
    company: 'Amazon',
    text: 'Outstanding learning experience. The internship prepared me not just technically but also for interviews and professional environment. Great community of learners.',
    rating: 4.5,
    image: '/images/review-4.jpg',
    date: '3 weeks ago',
  },
  {
    id: 'review-005',
    name: 'Neha Gupta',
    title: 'Software Engineer',
    company: 'Apple',
    text: 'Best decision I made for my career. The comprehensive curriculum, industry mentors, and placement support made all the difference.',
    rating: 5,
    image: '/images/review-5.jpg',
    date: '2 weeks ago',
  },
  {
    id: 'review-006',
    name: 'Arjun Desai',
    title: 'Machine Learning Engineer',
    company: 'Meta',
    text: 'The projects were exactly what I needed to build my portfolio. The mentorship and career guidance were invaluable.',
    rating: 5,
    image: '/images/review-6.jpg',
    date: '1 week ago',
  },
]
