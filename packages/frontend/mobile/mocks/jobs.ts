// Sample job listings data

// Helper function to generate random job IDs
const generateJobId = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Helper function to generate random dates within last 3 months
const generateRandomDate = () => {
  const now = new Date();
  const monthsAgo = new Date();
  monthsAgo.setMonth(now.getMonth() - 3);

  const randomTime =
    monthsAgo.getTime() + Math.random() * (now.getTime() - monthsAgo.getTime());
  const randomDate = new Date(randomTime);

  return randomDate.toISOString().split("T")[0];
};

// Sample descriptions and qualifications
const createDescription = (role, company, specialization = "") => {
  return `
    ${company} is seeking an experienced ${role}${
    specialization ? ` specializing in ${specialization}` : ""
  } to join our team. 
    
    As a ${role} at ${company}, you will be responsible for designing, developing, and maintaining high-quality solutions that meet business requirements and technical specifications. You'll collaborate with cross-functional teams to deliver innovative products and services that drive our business forward.
    
    Responsibilities:
    • Design, develop, and implement robust solutions using industry best practices
    • Collaborate with product managers, designers, and other stakeholders to understand requirements
    • Write clean, efficient, and maintainable code
    • Perform code reviews and provide constructive feedback to peers
    • Troubleshoot and resolve technical issues in a timely manner
    • Stay up-to-date with emerging trends and technologies
    • Mentor junior team members and contribute to knowledge sharing
    • Document technical specifications and architecture decisions
    • Participate in agile ceremonies and continuous improvement initiatives
    
    Join our dynamic team and contribute to cutting-edge projects while growing your career at ${company}.
  `;
};

const createQualification = (
  yearsExperience,
  primarySkill,
  additionalSkills = []
) => {
  const additionalSkillsText =
    additionalSkills.length > 0
      ? `\n    • Experience with ${additionalSkills.join(", ")}`
      : "";

  return `
    Qualifications:
    • Bachelor's degree in Computer Science, Engineering, or related field
    • ${yearsExperience}+ years of professional experience in software development
    • Strong proficiency in ${primarySkill}
    • Solid understanding of data structures, algorithms, and software design principles
    • Experience with version control systems (Git)
    • Excellent problem-solving and analytical skills${additionalSkillsText}
    • Strong communication and teamwork skills
    • Self-motivated with ability to work independently and in a team environment
    • Passion for learning new technologies and continuous improvement
  `;
};

// Sample skills by category
const frontendSkills = [
  "React",
  "Angular",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Redux",
  "Webpack",
  "SASS/LESS",
  "UI/UX Design",
  "Responsive Design",
  "Jest",
  "Cypress",
];
const backendSkills = [
  "Node.js",
  "Python",
  "Java",
  "C#",
  ".NET",
  "Ruby on Rails",
  "PHP",
  "Django",
  "Express.js",
  "Spring Boot",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "SQL",
  "NoSQL",
];
const devopsSkills = [
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitLab CI/CD",
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Linux",
  "Shell Scripting",
  "Infrastructure as Code",
];
const dataSkills = [
  "SQL",
  "Python",
  "R",
  "Pandas",
  "NumPy",
  "Tableau",
  "Power BI",
  "Hadoop",
  "Spark",
  "ETL",
  "Data Modeling",
  "Data Warehousing",
  "Machine Learning",
  "Statistical Analysis",
];
const mobileSkills = [
  "Swift",
  "Kotlin",
  "React Native",
  "Flutter",
  "iOS Development",
  "Android Development",
  "Mobile UI Design",
  "App Store Optimization",
  "Push Notifications",
  "Mobile Security",
  "Offline Storage",
  "Mobile Testing",
];
const securitySkills = [
  "Network Security",
  "Penetration Testing",
  "OWASP",
  "Security Auditing",
  "Encryption",
  "Authentication",
  "Authorization",
  "Threat Modeling",
  "Security Compliance",
  "Vulnerability Assessment",
];
const designSkills = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "User Testing",
  "Information Architecture",
  "Accessibility",
  "Design Systems",
];
const pmSkills = [
  "Agile",
  "Scrum",
  "Kanban",
  "JIRA",
  "Confluence",
  "Product Roadmapping",
  "Sprint Planning",
  "User Stories",
  "Stakeholder Management",
  "Requirements Gathering",
  "Market Research",
  "Data Analysis",
  "A/B Testing",
];

// Generate random skills based on role category
const generateSkills = (category, count = 7) => {
  let skillsPool;
  switch (category) {
    case "frontend":
      skillsPool = frontendSkills;
      break;
    case "backend":
      skillsPool = backendSkills;
      break;
    case "fullstack":
      skillsPool = [...frontendSkills, ...backendSkills];
      break;
    case "devops":
      skillsPool = devopsSkills;
      break;
    case "data":
      skillsPool = dataSkills;
      break;
    case "mobile":
      skillsPool = mobileSkills;
      break;
    case "security":
      skillsPool = securitySkills;
      break;
    case "design":
      skillsPool = designSkills;
      break;
    case "pm":
      skillsPool = pmSkills;
      break;
    default:
      skillsPool = [...frontendSkills, ...backendSkills];
  }

  // Shuffle and pick random skills
  const shuffled = [...skillsPool].sort(() => 0.5 - Math.random());
  // Return skills as objects with skill and matched properties
  return shuffled.slice(0, count).map((skill) => ({
    skill: skill,
    matched: Math.random() > 0.5, // Randomly set some skills as matched
  }));
};

// Companies data with their logo placeholder URLs
const companies = [
  { name: "Google", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Microsoft", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Amazon", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Apple", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Meta", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Netflix", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Spotify", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Twitter", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "LinkedIn", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Airbnb", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Uber", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  {
    name: "Salesforce",
    logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
  },
  { name: "Adobe", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "IBM", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Intel", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Oracle", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Cisco", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "PayPal", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Tesla", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Slack", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Stripe", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Twilio", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Dropbox", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Shopify", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { name: "Zoom", logo: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
];

// Locations
const locations = [
  "San Francisco, CA",
  "New York, NY",
  "Seattle, WA",
  "Austin, TX",
  "Boston, MA",
  "Chicago, IL",
  "Los Angeles, CA",
  "Atlanta, GA",
  "Denver, CO",
  "Portland, OR",
  "Miami, FL",
  "Washington, DC",
  "Dallas, TX",
  "Toronto, Canada",
  "Vancouver, Canada",
  "London, UK",
  "Berlin, Germany",
  "Paris, France",
  "Amsterdam, Netherlands",
  "Dublin, Ireland",
  "Sydney, Australia",
  "Melbourne, Australia",
  "Singapore",
  "Tokyo, Japan",
  "Tel Aviv, Israel",
  "Stockholm, Sweden",
  "Zurich, Switzerland",
  "Barcelona, Spain",
  "Bangalore, India",
  "Mexico City, Mexico",
];

// Job titles with their categories
const jobTitles = [
  { title: "Frontend Developer", category: "frontend" },
  { title: "Senior Frontend Engineer", category: "frontend" },
  { title: "UI Engineer", category: "frontend" },
  { title: "React Developer", category: "frontend" },
  { title: "Angular Developer", category: "frontend" },
  { title: "Backend Developer", category: "backend" },
  { title: "Senior Backend Engineer", category: "backend" },
  { title: "Java Developer", category: "backend" },
  { title: "Python Developer", category: "backend" },
  { title: "Node.js Developer", category: "backend" },
  { title: "Full Stack Developer", category: "fullstack" },
  { title: "Full Stack Engineer", category: "fullstack" },
  { title: "Software Engineer", category: "fullstack" },
  { title: "Senior Software Engineer", category: "fullstack" },
  { title: "Principal Engineer", category: "fullstack" },
  { title: "DevOps Engineer", category: "devops" },
  { title: "Site Reliability Engineer", category: "devops" },
  { title: "Cloud Engineer", category: "devops" },
  { title: "Infrastructure Engineer", category: "devops" },
  { title: "Platform Engineer", category: "devops" },
  { title: "Data Scientist", category: "data" },
  { title: "Data Engineer", category: "data" },
  { title: "Data Analyst", category: "data" },
  { title: "Machine Learning Engineer", category: "data" },
  { title: "Business Intelligence Analyst", category: "data" },
  { title: "iOS Developer", category: "mobile" },
  { title: "Android Developer", category: "mobile" },
  { title: "Mobile App Developer", category: "mobile" },
  { title: "React Native Developer", category: "mobile" },
  { title: "Flutter Developer", category: "mobile" },
  { title: "Security Engineer", category: "security" },
  { title: "Security Analyst", category: "security" },
  { title: "Information Security Specialist", category: "security" },
  { title: "Penetration Tester", category: "security" },
  { title: "Cybersecurity Consultant", category: "security" },
  { title: "UX Designer", category: "design" },
  { title: "UI Designer", category: "design" },
  { title: "Product Designer", category: "design" },
  { title: "Interaction Designer", category: "design" },
  { title: "Visual Designer", category: "design" },
  { title: "Product Manager", category: "pm" },
  { title: "Technical Project Manager", category: "pm" },
  { title: "Scrum Master", category: "pm" },
  { title: "Agile Coach", category: "pm" },
  { title: "Program Manager", category: "pm" },
];

// Work load options
const workLoads = [
  "Full Time",
  "Part Time",
  "Contract",
  "Freelance",
  "Internship",
];

// Work mode options
const workModes = ["Remote", "Hybrid", "On-site"];

// Generate jobs array
const generateJobs = (count) => {
  const jobs = [];

  for (let i = 0; i < count; i++) {
    // Randomly select job details
    const jobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    const company = companies[Math.floor(Math.random() * companies.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const workLoad = workLoads[Math.floor(Math.random() * workLoads.length)];
    const workMode = workModes[Math.floor(Math.random() * workModes.length)];

    // Generate skills based on job category
    const skillsCount = 5 + Math.floor(Math.random() * 5); // 5-9 skills
    const skills = generateSkills(jobTitle.category, skillsCount);

    // Generate years of experience based on if the job title contains "Senior" or "Principal"
    let yearsExperience;
    if (
      jobTitle.title.includes("Principal") ||
      jobTitle.title.includes("Lead")
    ) {
      yearsExperience = 8 + Math.floor(Math.random() * 5); // 8-12 years
    } else if (jobTitle.title.includes("Senior")) {
      yearsExperience = 5 + Math.floor(Math.random() * 4); // 5-8 years
    } else {
      yearsExperience = 2 + Math.floor(Math.random() * 4); // 2-5 years
    }

    // Create job object
    const job = {
      jobId: generateJobId(),
      publishedDate: generateRandomDate(),
      companyLogo: { uri: company.logo },
      title: jobTitle.title,
      companyName: company.name,
      location: location,
      workLoad: workLoad,
      workMode: workMode,
      jobText: {
        description: createDescription(jobTitle.title, company.name),
        qualification: createQualification(
          yearsExperience,
          skills[0],
          skills.slice(1, 4)
        ),
      },
      skills: skills,
    };

    jobs.push(job);
  }

  return jobs;
};

//TODO change when needed
export const JOBS = generateJobs(1);
