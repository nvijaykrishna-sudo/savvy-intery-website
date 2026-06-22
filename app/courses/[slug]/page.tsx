"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    CheckCircle2, ChevronDown, ChevronUp, Clock, BookOpen, 
    MonitorPlay, ArrowLeft, Star, Users, PlayCircle, Trophy, Layers, GraduationCap, HelpCircle, UserCheck 
} from "lucide-react";

// --- THE COMPLETE MASTER COURSE DATABASE ---
const courseDatabase: Record<string, any> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Master AI Evolution, Machine Learning, NLP, and Deep Learning with Python.",
    duration: "10 Weeks", lessons: "85+ Lessons", level: "Intermediate", students: "1,200+",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to AI and Python", topics: ["AI Evolution & Classification", "Python Basics & Visualization", "Key Python Concepts"] },
      { title: "Mathematical Foundations", topics: ["Linear Algebra - Part 1 & 2", "Dot Product", "Statistics - Part 1 & 2"] },
      { title: "Data Visualization", topics: ["Data Visualization Basics", "Data Visualization Techniques"] },
      { title: "Introduction to Machine Learning", topics: ["Intro to Machine Learning & Life Cycle", "Linear & Logistic Regression", "Decision Tree & Random Forest Algorithm", "Unsupervised Learning: K-Means"] },
      { title: "Natural Language Processing (NLP)", topics: ["Natural Language Processing - Part 1", "Natural Language Processing - Part 2"] },
      { title: "Neural Networks and Deep Learning", topics: ["AI in Real World & Neural Networks", "Neural Networks - Part 1, 2 & 3"] },
      { title: "Advanced Neural Networks and AI Techniques", topics: ["CNN, RNN & Reinforcement Learning", "LSTM, Reinforcement Learning & Computer Vision"] }
    ]
  },
  "machine-learning-with-python": {
    title: "Machine Learning with Python",
    description: "Deep dive into OOP, Supervised/Unsupervised Learning, CNNs, and Deep Learning Frameworks.",
    duration: "10 Weeks", lessons: "90+ Lessons", level: "Advanced", students: "950+",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to ML and Python", topics: ["Intro to ML & Python Basics", "Python Operators & Control Structures", "OOP & Functional Programming", "Python Modules & Packages"] },
      { title: "Data Analysis and Supervised Learning", topics: ["Exploratory Data Analysis", "Supervised Learning: Regression", "Classification: Logistic & k-NN", "SVM", "Decision Tree & Random Forest"] },
      { title: "Unsupervised Learning and Implementation", topics: ["Unsupervised Learning", "ML Implementation in Python"] },
      { title: "Deep Learning Foundations", topics: ["Deep Learning & Backpropagation", "ANN & Python Implementation"] },
      { title: "Advanced Neural Networks", topics: ["Convolutional Neural Networks", "CNN Implementation in Python", "Recurrent Neural Networks & LSTM", "LSTM Implementation in Python"] },
      { title: "Specialized Topics in AI", topics: ["Natural Language Processing", "Time Series Analysis & Forecasting", "Deep Learning Frameworks", "Model Deployment"] }
    ]
  },
  "data-science": {
    title: "Data Analytics & Data Science",
    description: "Extract insights from raw data. Master Python, SQL, exploratory data analysis, and predictive modeling.",
    duration: "12 Weeks", lessons: "110+ Lessons", level: "Beginner to Advanced", students: "2,100+",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Data Analytics Foundations", topics: ["Introduction to Data Science & Analytics", "Excel for Data Analysis", "Advanced Excel Dashboards"] },
      { title: "Database Management", topics: ["SQL Basics & Syntax", "Advanced SQL Queries & Joins", "Database Design"] },
      { title: "Programming for Data", topics: ["Python Basics for Data Science", "Pandas & NumPy", "Data Cleaning & Preprocessing"] },
      { title: "Business Intelligence & Visualization", topics: ["Introduction to Power BI/Tableau", "Data Visualization Techniques", "Building Interactive Dashboards"] },
      { title: "Predictive Analytics", topics: ["Introduction to Machine Learning", "Regression & Classification", "Time Series Analysis"] }
    ]
  },
  "web-development": {
    title: "Web Development (HTML, CSS, JS, Bootstrap)",
    description: "Learn frontend and backend basics to build responsive, modern websites.",
    duration: "8 Weeks", lessons: "75+ Lessons", level: "Beginner", students: "3,400+",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    modules: [
      { title: "Web Development Basics", topics: ["Introduction to Web Development", "HTML Lists and Forms"] },
      { title: "CSS Fundamentals", topics: ["Introduction to CSS", "CSS Colors, Backgrounds, Borders", "Margins, Padding, and Box Model"] },
      { title: "Advanced CSS", topics: ["Box Model and Text Properties", "Text Styling in CSS", "Advanced Text Styling"] },
      { title: "CSS Layout and Positioning", topics: ["CSS Layout Techniques", "Z-Index, Overflow and Float", "Advanced Layout Techniques", "Display, Alignment and Pseudo-Classes"] },
      { title: "Responsive Design", topics: ["Responsive Design and Media Queries"] },
      { title: "JavaScript Basics", topics: ["JavaScript Introduction", "Variables and Operators", "Functions and Control Structures"] },
      { title: "Advanced JavaScript & DOM", topics: ["Functions and Arrays", "Control Structures and Loops", "Arrow Functions and Classes", "DOM Manipulation"] },
      { title: "jQuery, GitHub & Backend", topics: ["jQuery Selectors & DOM", "GitHub Basics", "Backend Development Basics"] }
    ]
  },
  "full-stack-development": {
    title: "Full Stack (React, Django, MySQL)",
    description: "Master full-stack development by combining React for frontend and Django for backend.",
    duration: "14 Weeks", lessons: "140+ Lessons", level: "Advanced", students: "1,800+",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Web Development Foundations", topics: ["Web Development Overview", "HTML Basics and Forms", "HTML Tables and Attributes"] },
      { title: "CSS and Responsive Design", topics: ["CSS Basics and Selectors", "Box Model and Media Queries"] },
      { title: "JavaScript Fundamentals", topics: ["JavaScript Basics", "Loops, Functions and DOM", "Async and Promises"] },
      { title: "React and Frontend Frameworks", topics: ["Project Setup and Structure", "React Hooks and Project Building", "React Router and Hooks", "Context API and Props"] },
      { title: "Databases and SQL", topics: ["Database Overview: NoSQL vs SQL", "SQL Queries and Database Design", "Database Queries and GUI"] },
      { title: "Python and OOP Concepts", topics: ["Python Introduction", "Python Data Types and Loops", "OOP Concepts", "OOP and Best Practices"] },
      { title: "Django and Backend Development", topics: ["Django Introduction", "Building Models and Views", "Advanced Views and Sessions", "Generics and Serializers"] },
      { title: "Deployment and Tools", topics: ["Axios and Connections", "GitHub and Deployment"] }
    ]
  },
  "react-js": {
    title: "React Mastery",
    description: "Master functional components, hooks, state management, and SSR with Next.js.",
    duration: "8 Weeks", lessons: "85+ Lessons", level: "Intermediate", students: "2,200+",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to React", topics: ["React Overview & Setup", "Functional vs Class Components & Lifecycle", "Styling: Inline, CSS Modules, Theming"] },
      { title: "Handling Forms and State", topics: ["Forms, Validation & Custom Hooks", "State Management: useState, useReducer, Redux"] },
      { title: "useEffect and API Calls", topics: ["useEffect & API Calls - Part 1", "useEffect & API Calls - Part 2"] },
      { title: "React Router and Testing", topics: ["React Router: Routes & Navigation", "Testing: Jest & React Testing Library", "Integration Testing Mastery"] },
      { title: "Performance Optimization", topics: ["Performance Optimization: useMemo, Lazy Loading", "Performance Debugging & Code Splitting"] },
      { title: "Server-Side Rendering & TypeScript", topics: ["SSR with Next.js & SEO", "Third-Party Libraries: UI & Charts", "TypeScript with React: Basics & Best Practices"] },
      { title: "Advanced Patterns & Deployment", topics: ["Building for Production: CI/CD & Monitoring", "Advanced Patterns: Compound, Render Props, HOC"] }
    ]
  },
  "java-programming": {
    title: "Java Programming",
    description: "Learn core Java, OOP concepts, Multithreading, and Database connectivity.",
    duration: "10 Weeks", lessons: "100+ Lessons", level: "Beginner to Advanced", students: "1,600+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Java Fundamentals", topics: ["Java Intro and Setup", "Java Basics and Installation", "Operators, Type Casting, and Enums", "Control Flow in Java"] },
      { title: "Object-Oriented Programming", topics: ["Classes, Objects and Methods", "Constructors and Encapsulation", "this, super, Abstract Classes, Interfaces", "Adapter Classes and Polymorphism"] },
      { title: "Advanced Object-Oriented Concepts", topics: ["Packages and Static Blocks", "Arrays and Multi-Dimensional Arrays", "Collections: List, Set, Map", "Generics and Generic Classes"] },
      { title: "Error Handling and File Management", topics: ["Error vs Exception Handling", "Custom Exceptions", "Final, Finally, Finalize", "File Handling and Serialization"] },
      { title: "GUI Development", topics: ["JavaFX and Swing Basics", "Event Handling in Java"] },
      { title: "Multithreading", topics: ["Multitasking and Threads", "Thread Life Cycle and Runnable", "Thread Priorities and Sync", "Synchronization and Thread Pools"] },
      { title: "Networking and Databases", topics: ["Java Networking Basics", "URLs and Networking Protocols", "JDBC and SQL Transactions"] }
    ]
  },
  "cloud-computing": {
    title: "Cloud Computing & AWS",
    description: "Learn cloud infrastructure, EC2, AWS Lambda, VPC, and DevOps CI/CD pipelines.",
    duration: "10 Weeks", lessons: "95+ Lessons", level: "Intermediate", students: "1,400+",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    modules: [
      { title: "Introduction to Cloud Computing", topics: ["Intro to Cloud Computing & Service Models", "Deployment Models & AWS Overview", "AWS Infrastructure & Account Setup"] },
      { title: "Compute Services", topics: ["Amazon EC2 & Compute Services", "Creating EC2 Instances & AMI", "AWS Lambda & Elastic Beanstalk"] },
      { title: "Scaling and Load Balancing", topics: ["Auto Scaling & Policies", "Load Balancers & Migration", "Roles, Policies & Load Balancer Types"] },
      { title: "Cloud Storage and Networking", topics: ["AWS S3 & Storage Services", "Block Storage & EFS", "Amazon Glacier & Storage Gateway", "Virtual Private Cloud & Networking"] },
      { title: "Domain and Database Services", topics: ["AWS Route 53 & Direct Connect", "Relational & Non-Relational Databases", "AWS Database Migration Service & IAM"] },
      { title: "Security and Monitoring", topics: ["AWS Shield & Cloud Security", "AWS CloudTrail & Compliance"] },
      { title: "DevOps and Cloud Analytics", topics: ["CI/CD Pipelines & AWS CodeDeploy", "Infrastructure as Code & Terraform", "Cloud Analytics & Containerization", "Amazon QuickSight & Cloud ML"] }
    ]
  },
  "ethical-hacking": {
    title: "Ethical Hacking & Cyber Security",
    description: "Master vulnerability assessment, cryptography, malware analysis, and network defense.",
    duration: "12 Weeks", lessons: "120+ Lessons", level: "Advanced", students: "2,500+",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to Ethical Hacking", topics: ["Ethical Hacking Overview", "Hacking Types", "Testing vs Assessment", "Hacking Tools and Nmap demo"] },
      { title: "Information Gathering and Social Engineering", topics: ["Information Gathering", "Social Engineering Basics", "Social Engineering Defense"] },
      { title: "Scripting and Web Exploits", topics: ["Bash Scripting", "XSS Exploitation"] },
      { title: "Cryptography and Secure Communication", topics: ["Cryptography Basics", "Secure Communication", "Applied Cryptography"] },
      { title: "Malware Analysis", topics: ["Malware Fundamentals", "Malware Analysis", "Advanced Malware"] },
      { title: "DDoS Attacks and Prevention", topics: ["DDoS and Anonymity", "DDoS Prevention (Part 1)", "DDoS Prevention (Part 2)"] },
      { title: "Mobile Device & IoT Security", topics: ["Mobile Security (Part 1-3)", "Secure Development", "IoT Security Basics & Advanced"] },
      { title: "Legal and Compliance", topics: ["Cybersecurity Compliance"] }
    ]
  },
  "internet-of-things": {
    title: "Internet of Things (IoT)",
    description: "Learn IoT architecture, edge computing, smart manufacturing, and IoT security.",
    duration: "10 Weeks", lessons: "85+ Lessons", level: "Intermediate", students: "800+",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "IoT Basics and Evolution", topics: ["Introduction to IoT", "IoT Evolution and Importance", "IoT Applications", "IoT Challenges and Opportunities"] },
      { title: "IoT Networking and Connectivity", topics: ["Networking Basics in IoT", "IoT Connectivity Modules", "Short and Long-Range IoT Communication", "IoT Application Layer Protocols"] },
      { title: "IoT Cloud & Edge Computing", topics: ["Cloud Platforms in IoT", "IoT Data Collection and Processing", "Edge Computing in IoT", "Fog Computing in IoT"] },
      { title: "IoT Security and Device Management", topics: ["IoT Security Overview", "IoT Device Management", "Privacy Enhancing Technologies in IoT", "Cryptography in IoT"] },
      { title: "IoT Applications in Industries", topics: ["Smart Manufacturing in IoT", "Smart Cities and IoT Applications", "IoT in Healthcare", "Smart Farming with IoT"] },
      { title: "IoT Optimization and Advanced Tech", topics: ["Power and Data Optimization in IoT", "IoT Product Design and Prototyping", "IoT and AR/VR Integration", "IoT and Big Data", "Blockchain in IoT Security"] }
    ]
  },
  "embedded-systems": {
    title: "Embedded Systems",
    description: "Master microcontrollers, C/C++ programming, IoT sensors, and PCB design.",
    duration: "12 Weeks", lessons: "100+ Lessons", level: "Advanced", students: "900+",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=2069",
    modules: [
      { title: "Introduction to Embedded Systems", topics: ["Embedded Systems Overview", "Microcontrollers vs Microprocessors"] },
      { title: "Electronics and Circuit Design", topics: ["Digital and Analog Electronics Basics", "Circuit Design and Prototyping"] },
      { title: "Programming for Embedded Systems", topics: ["Intro to C and C++", "Syntax, Variables and Functions", "Compiling and Debugging Code"] },
      { title: "Microcontroller Architecture and Peripherals", topics: ["CPU, Memory and IO Peripherals", "Clock Systems and Timers", "Interfacing with Peripherals", "PWM and Motor Control", "Communication Protocols (UART, SPI, I2C)"] },
      { title: "Embedded Software and RTOS", topics: ["Embedded Software and RTOS", "Task Scheduling and Memory Optimization", "Sensors and Actuators", "Sensor Data and IoT"] },
      { title: "Communication, Power & System Design", topics: ["Wireless Communication (Bluetooth, WiFi, Zigbee)", "Power Supply and Voltage Regulation", "Battery Management and Energy Harvesting", "System Co-Design and PCB"] }
    ]
  },
  "hybrid-electric-vehicles": {
    title: "Hybrid and Electric Vehicles",
    description: "Learn EV motor tech, battery management systems (BMS), and vehicle dynamics.",
    duration: "10 Weeks", lessons: "90+ Lessons", level: "Intermediate", students: "1,100+",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072",
    modules: [
      { title: "Introduction to Electric and Hybrid Vehicles", topics: ["Vehicle Overview", "History of HEVs and EVs", "Environmental Impact & Sustainability", "Global Market Trends & Regulations"] },
      { title: "Automotive Engineering Foundations", topics: ["Basics of Automotive Engineering", "Vehicle Dynamics", "Engines vs. Electric Motors", "Transmission & Drivetrains", "Aerodynamics & Efficiency"] },
      { title: "Electric Vehicle Technology", topics: ["EV Motor Technology", "Battery Technology & BMS", "Charging Infrastructure"] },
      { title: "Hybrid Vehicle Technology", topics: ["Hybrid Systems & Power Management", "Vehicle Electrification Components", "Energy Management and Control"] },
      { title: "Testing, Design and Modeling", topics: ["Testing & Validation Procedures", "Design & Modeling Methodologies", "Simulation & Collaborative Tools"] },
      { title: "Manufacturing, Maintenance & Future", topics: ["Manufacturing & Assembly Processes", "Maintenance & Service Techniques", "Vehicle-to-Grid (V2G) Technology", "Autonomous & Connected Vehicles"] }
    ]
  },
  "robotics": {
    title: "Robotics",
    description: "Master kinematics, ROS programming, computer vision, and machine learning in robotics.",
    duration: "12 Weeks", lessons: "115+ Lessons", level: "Advanced", students: "750+",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to Robotics", topics: ["Introduction & History of Robotics", "Mechanical Components & Power Systems", "End Effectors & 3D Printing in Robotics"] },
      { title: "Kinematics and Control Systems", topics: ["Kinematics & Motion Control", "Degrees of Freedom & Dynamic Control", "Control & Trajectory Planning"] },
      { title: "Robotics Programming & Interfacing", topics: ["Intro to Robot Programming Languages", "Control Structures & Debugging", "Microcontrollers & I/O Interfaces", "Sensor & Actuator Interfacing"] },
      { title: "Computer Vision and AI", topics: ["Computer Vision & Object Recognition", "Camera Calibration & 3D Vision", "Machine Learning in Robotics", "Learning Techniques & Neural Networks"] },
      { title: "Mapping, Localization, and Interaction", topics: ["Mapping, Localization & Obstacle Avoidance", "Human-Robot Interaction & Interfaces", "Emotional Intelligence & Ethics in Robotics", "IoT Integration & Cloud Robotics"] },
      { title: "Simulation & Industrial Robotics", topics: ["Simulation Tools & Virtual Prototyping", "CAD Integration", "Industrial Robots & Automation", "Robotics Startups & Entrepreneurship"] }
    ]
  },
  "autocad": {
    title: "AutoCAD & Civil 3D",
    description: "Master 2D/3D drafting, corridor design, pipe networks, and surveying tools.",
    duration: "8 Weeks", lessons: "70+ Lessons", level: "Beginner to Intermediate", students: "1,850+",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2071",
    modules: [
      { title: "Introduction to Civil 3D and Basic Tools", topics: ["Civil 3D Overview and Project Setup", "Basic Drawing Tools", "Editing Tools Overview"] },
      { title: "Surveying and Surface Modeling", topics: ["Surveying and Importing Data", "Managing Point Groups", "Surface Creation and Editing", "Surface Analysis Basics"] },
      { title: "Roadway Design and Profiles", topics: ["Roadway Alignments and Profiles", "Profile Views and Superimposing"] },
      { title: "Corridor and Grading Design", topics: ["Corridor Design Introduction", "Building Corridors and Regions", "Grading Tools and Cut/Fill", "Grading Analysis"] },
      { title: "Pipe Networks and Cross Sections", topics: ["Storm and Sewer System Design", "Editing Pipe Networks", "Cross Sections and Earthwork", "Mass Haul Diagrams"] },
      { title: "Data Management, BIM & Sheets", topics: ["Sheet Setup and Layouts", "Parcel Creation and Layouts", "Data Import/Export and Collaboration", "BIM 360 Collaboration", "Introduction to Styles and Settings"] }
    ]
  },
  "construction-planning": {
    title: "Construction Planning Management",
    description: "Learn CPM, PERT, BIM, contract management, and sustainable construction practices.",
    duration: "10 Weeks", lessons: "85+ Lessons", level: "Intermediate", students: "1,050+",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to Construction Management", topics: ["Construction Industry Overview", "Planning and Project Life Cycle", "Construction Standards in India"] },
      { title: "Project Planning and Scheduling", topics: ["Financial Planning and WBS", "Scheduling and Gantt Charts", "Critical Path Method (CPM)", "Floats, PERT and Resource Allocation"] },
      { title: "Risk, BIM and Contracts", topics: ["Risk Management in Construction", "BIM and Construction Technologies", "Contract Types and Vendor Selection", "Supply Chain Management"] },
      { title: "Health, Safety, and Quality Control", topics: ["Health and Safety in Construction", "Emergency Response and QA/QC", "Lean Construction and Improvement", "Team Building and Cost Control"] },
      { title: "Environmental & Project Closure", topics: ["Environmental Compliance and Waste Management", "Energy Efficiency and Green Building", "Progress Monitoring and KPIs", "Project Closure and GIS"] },
      { title: "Future of Construction", topics: ["Automation and AR/VR in Construction", "Smart Buildings and Future of Construction"] }
    ]
  },
  "finance": {
    title: "Finance & Financial Modeling",
    description: "Master financial statements, derivatives, taxation, FinTech, and banking operations.",
    duration: "10 Weeks", lessons: "95+ Lessons", level: "Beginner to Advanced", students: "2,600+",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Finance Foundations", topics: ["Finance Overview and Functions", "Financial Statements and Ratio Analysis", "Capital Budgeting and M&A"] },
      { title: "Banking and Financial Markets", topics: ["Indian Banking System", "Stock Exchanges and Mutual Funds", "Derivatives and Risk Management"] },
      { title: "Taxation and Foreign Exchange", topics: ["Taxation and GST in India", "Foreign Exchange and Trade Finance", "Currency Risk and Global Impact"] },
      { title: "Personal Finance and FinTech", topics: ["Personal Finance and Investment Options", "FinTech and Financial Modeling", "Microfinance and MSME Financing"] },
      { title: "Insurance, Real Estate & Startups", topics: ["Insurance Industry Overview", "Indian Startup Ecosystem", "Real Estate and Infrastructure Financing"] },
      { title: "Ethics and Corporate Social Responsibility", topics: ["Ethics in Finance and CSR - Part 1", "Ethics in Finance and CSR - Part 2"] }
    ]
  },
  "human-resources": {
    title: "Human Resources (HR)",
    description: "Learn talent acquisition, labor laws, performance management, and HR analytics.",
    duration: "8 Weeks", lessons: "75+ Lessons", level: "Beginner", students: "1,900+",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Foundations of HRM", topics: ["Intro to HRM & Its Importance", "Evolution & Strategic HRM"] },
      { title: "Recruitment, Training & Performance", topics: ["Recruitment Strategies & Selection Process", "Training Needs & Program Design", "Employee Development & Career Planning", "Performance Management & Appraisal"] },
      { title: "Compensation, Compliance & Engagement", topics: ["Salary & Payroll Management", "Employee Benefits & Compensation Compliance", "Employee Relations & Conflict Resolution", "Labor Laws & Compliance in India"] },
      { title: "Diversity, Inclusion & Wellness", topics: ["Diversity & Inclusion", "Managing Cross-Cultural Teams", "Workplace Safety & Wellness"] },
      { title: "HR Tech, Analytics & Global HRM", topics: ["Talent Acquisition & Analytics", "HR Technology & Automation", "Data Analytics & Cybersecurity in HR", "Global HRM & International Assignments", "Ethics & Corporate Social Responsibility"] }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Master SEO, SEM, content strategy, programmatic advertising, and marketing analytics.",
    duration: "8 Weeks", lessons: "80+ Lessons", level: "Beginner", students: "3,100+",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    modules: [
      { title: "Introduction to Digital Marketing", topics: ["Intro to Digital Marketing", "Digital vs. Traditional Marketing", "Website Creation and UX/UI", "SEO and Mobile Optimization"] },
      { title: "Content and Social Media Marketing", topics: ["Content Marketing Basics", "Video and Podcast Marketing", "Social Media Marketing Overview", "Social Media Advertising"] },
      { title: "Search Engine Marketing (SEM)", topics: ["Intro to SEM and PPC", "Keyword Research and Ad Copywriting"] },
      { title: "Email, Affiliate & Programmatic", topics: ["Email Marketing Basics & Automation", "Affiliate and Influencer Marketing", "Building Marketing Partnerships", "Online, Display & Programmatic Ads"] },
      { title: "Data, Analytics & Advanced Strategies", topics: ["E-commerce and Mobile Marketing", "Analytics and Data-Driven Marketing", "Conversion Rate Optimization", "Chatbots, AR/VR Marketing & Voice Search", "Data Privacy and Marketing Ethics"] }
    ]
  },
  "stock-marketing": {
    title: "Stock Marketing",
    description: "Master technical analysis, derivative trading, market timing, and risk management.",
    duration: "8 Weeks", lessons: "70+ Lessons", level: "Intermediate", students: "2,800+",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070",
    modules: [
      { title: "Introduction to Indian Financial Markets", topics: ["Indian Financial Market Overview", "Issue Process and Public Issues"] },
      { title: "Market Operations and Intermediaries", topics: ["Market Intermediaries and Trade Execution", "Corporate Actions and Cross Margining"] },
      { title: "Mutual Funds and Investment Approaches", topics: ["Mutual Funds and Regulations", "Investment Approaches and Processes"] },
      { title: "Derivatives and Risk Management", topics: ["Derivatives: Products, Trading, and Risks"] },
      { title: "Technical Analysis: Market and Charts", topics: ["Key Technical Indicators", "Advanced Technical Indicators", "Chart Patterns and Market Structure"] },
      { title: "Trading, Risk and Valuation", topics: ["Risk Management in Trading", "Evaluating Companies: Economic Moat and Debt", "Valuation and Market Timing"] },
      { title: "Market Timing and Regulations", topics: ["Stock Market Laws and SEBI", "Insider Trading and Penalties"] }
    ]
  }
};

export default function CourseDetailsPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || "";
  const [openModule, setOpenModule] = useState<number | null>(0); 

  // --- SMART SLUG MATCHER ---
  const normalizedSlug = rawSlug.toLowerCase();
  
  const slugMap: Record<string, string> = {
    "data-analytics": "data-science",
  };

  const finalKey = slugMap[normalizedSlug] || normalizedSlug || rawSlug;
  const course = courseDatabase[finalKey] || courseDatabase[rawSlug];

  // 404 FALLBACK
  if (!course) {
    return (
      <main className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="h-24 w-24 bg-[#0B3B7A]/10 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="h-10 w-10 text-[#0B3B7A]" />
        </div>
        <h1 className="text-4xl font-bold text-[#0B3B7A] mb-4 text-center">Course Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-8 text-center max-w-md">We are currently updating the curriculum for "{rawSlug}". Check back shortly!</p>
        <Link href="/courses">
          <Button className="bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white rounded-full px-8 h-12 font-bold">Return to Courses</Button>
        </Link>
      </main>
    );
  }

  const defaultResults = [
    "Build and deploy scalable projects from scratch.",
    "Develop a strong, employer-ready portfolio.",
    "Master highly in-demand industry tools and techniques.",
    "Gain an industry-recognized internship completion certificate."
  ];

  const defaultFaqs = [
    { question: "Do I need prior experience?", answer: "Our programs accommodate beginners while providing deep insights for intermediate learners. We start with basics and progress to advanced topics." },
    { question: "Are the projects based on real-world scenarios?", answer: "Absolutely. You will work on real datasets and scenarios to solve actual business and technical problems." },
    { question: "Will I get an internship certificate?", answer: "Yes, upon successful completion of the course and your capstone project, you will receive a verified internship certificate." }
  ];

  return (
    <main className="min-h-screen bg-white pb-20 scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B3B7A] text-white pt-24 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/courses" className="inline-flex items-center text-blue-200 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-bold text-[#38BDF8]">
                <Star className="w-4 h-4 fill-current text-yellow-400" /> Rating: 4.9
                <span className="mx-2 text-white/30">|</span>
                <Users className="w-4 h-4" /> {course.students} enrolled
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-white">
                <div className="flex items-center gap-2"><Clock className="text-[#38BDF8] h-5 w-5" /> {course.duration}</div>
                <div className="flex items-center gap-2"><PlayCircle className="text-[#38BDF8] h-5 w-5" /> {course.lessons}</div>
                <div className="flex items-center gap-2"><Trophy className="text-[#38BDF8] h-5 w-5" /> {course.level}</div>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* 2. STICKY NAVIGATION BAR */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm hidden md:block">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex space-x-8 overflow-x-auto py-4 font-bold text-gray-600 text-sm uppercase tracking-wider">
            <li><a href="#about" className="hover:text-[#38BDF8] transition-colors">About</a></li>
            <li><a href="#curriculum" className="hover:text-[#38BDF8] transition-colors">Syllabus</a></li>
            <li><a href="#result" className="hover:text-[#38BDF8] transition-colors">Outcomes</a></li>
            <li><a href="#faq" className="hover:text-[#38BDF8] transition-colors">FAQ</a></li>
            <li><a href="#instructor" className="hover:text-[#38BDF8] transition-colors">Instructor</a></li>
          </ul>
        </div>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <section className="py-12 md:py-20 relative z-20 -mt-10 lg:-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (Detailed Content) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Image Banner */}
              <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] border-4 border-white shadow-xl relative z-20 bg-gray-100">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* SECTION: ABOUT */}
              <section id="about" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <MonitorPlay className="w-8 h-8 text-[#38BDF8]" /> About the course
                </h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    This premium internship track offers a fantastic opportunity to dive deep into {course.title}. By focusing on real-world applications and modern industry tools, you will acquire the essential skills needed to build robust solutions and deploy them live. This practical experience will not only enhance your technical abilities but also make you highly attractive to employers. Through this internship, you'll develop a career-ready skill set with expert guidance, ensuring you are well-equipped to take on high-demand roles.
                  </p>
                </div>
              </section>

              {/* SECTION: CURRICULUM (Dynamic Accordion) */}
              <section id="curriculum" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <Layers className="w-8 h-8 text-[#38BDF8]" /> Course Syllabus
                </h2>
                <div className="space-y-4">
                  {course.modules.map((module: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      <button 
                        onClick={() => setOpenModule(openModule === index ? null : index)}
                        className="w-full px-6 py-5 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 text-left transition-colors"
                      >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#0B3B7A]/10 text-[#0B3B7A] font-bold rounded-full flex items-center justify-center text-sm shrink-0">
                                {index + 1}
                            </div>
                            <h3 className="font-bold text-gray-900 md:text-lg">{module.title}</h3>
                        </div>
                        {openModule === index ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                        )}
                      </button>
                      
                      {openModule === index && (
                        <div className="px-6 py-5 bg-white border-t border-gray-100">
                          <ul className="space-y-4">
                            {module.topics.map((topic: string, tIndex: number) => (
                              <li key={tIndex} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 mr-3 text-[#38BDF8] shrink-0 mt-0.5" />
                                <span className="text-gray-600 font-medium">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: RESULT */}
              <section id="result" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-[#38BDF8]" /> Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {defaultResults.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-[#38BDF8]/30 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-[#38BDF8]" /> FAQ
                </h2>
                <div className="space-y-4">
                  {defaultFaqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: INSTRUCTOR */}
              <section id="instructor" className="scroll-mt-24">
                <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-2 flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-[#38BDF8]" /> Instructor
                </h2>
                <p className="text-[#38BDF8] font-bold uppercase tracking-wider text-sm mb-8 ml-11">Learn from the Best</p>
                
                <div className="bg-[#0B3B7A] p-8 md:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8] rounded-full -mr-20 -mt-20 opacity-20 z-0"></div>
                  
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-md flex-shrink-0 relative z-10 bg-white">
                    <img src="https://ui-avatars.com/api/?name=Kranthi+Kunta&background=38BDF8&color=0B3B7A&size=200" alt="Kranthi Kunta" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="text-center md:text-left relative z-10 flex-grow text-white">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                      <h3 className="text-2xl font-extrabold">Kranthi Kunta</h3>
                      <span className="bg-[#38BDF8]/20 text-[#38BDF8] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                        Lead Mentor
                      </span>
                    </div>
                    <p className="text-blue-100 leading-relaxed mb-6 font-medium">
                      An industry expert with extensive experience bridging the gap between academic learning and corporate demands. Kranthi focuses heavily on hands-on deployment and real-world problem solving.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column (Sticky Enrollment Sidebar) */}
            <div className="lg:col-span-4 lg:-mt-32">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-2xl z-30">
                <div className="text-[#0B3B7A] font-bold text-sm uppercase tracking-wider mb-2">Enrollment</div>
                <div className="flex items-end gap-3 mb-6">
                    <div className="text-4xl font-black text-gray-900">₹4,999/-</div>
                    <div className="text-lg font-bold text-gray-400 line-through mb-1">₹9,999</div>
                </div>
                
                <div className="space-y-4 mb-8 text-sm font-medium text-gray-700">
                  <div className="flex items-start gap-3"><div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-600" /></div> Lifetime Access</div>
                  <div className="flex items-start gap-3"><div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-600" /></div> Access From Any Device</div>
                  <div className="flex items-start gap-3"><div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-600" /></div> Internship Certificate</div>
                  <div className="flex items-start gap-3"><div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-600" /></div> 1-on-1 Mentorship Sessions</div>
                </div>

                <div className="space-y-3">
                  <Link href="#expert-form" className="block">
                    <Button className="w-full bg-[#38BDF8] hover:bg-[#0B3B7A] text-[#0B3B7A] hover:text-white font-bold h-14 text-lg rounded-xl shadow-lg transition-all">
                      Enroll Now
                    </Button>
                  </Link>
                  <Link href="#expert-form" className="block">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 rounded-xl shadow-md transition-all">
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ENROLLMENT / EXPERT FORM */}
      <section id="expert-form" className="py-20 bg-gray-50 scroll-mt-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0B3B7A] mb-4">Ready to Start Your Journey?</h2>
              <p className="text-gray-600">Fill out the form below to enroll or talk to our academic counselors.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent outline-none" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent outline-none" placeholder="+91 98765 43210" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent outline-none" placeholder="john@example.com" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Course of Interest</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 outline-none" value={course.title} readOnly />
              </div>
              
              <Button type="submit" className="w-full bg-[#0B3B7A] hover:bg-[#0B3B7A]/90 text-white font-bold h-14 text-lg rounded-xl shadow-lg transition-all">
                Submit Details
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">By submitting, you agree to our terms and privacy policy. Our team will contact you within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}