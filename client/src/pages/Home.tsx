import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, ExternalLink, Code2, Database, Palette, BarChart3, BookOpen, Award, Star, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Portfolio Design: Modern Minimalist with White/Black and Teal Accents
 * Color Palette: White background, Black text, Teal (#00d9ff) accents
 * Typography: Poppins (headings) + Inter (body)
 * Layout: Clean, minimal asymmetric grid
 */

interface GitHubProject {
  name: string;
  description: string;
  url: string;
  languages: string[];
  primaryLanguage: string;
  category: string;
}

const GITHUB_PROJECTS: GitHubProject[] = [
  {
    name: "Integrated-Deep-Vision-System",
    description: "Deep learning vision system for image analysis and computer vision tasks using advanced neural networks",
    url: "https://github.com/Vinoothna-01/Integrated-Deep-Vision-System",
    languages: ["Python", "TensorFlow"],
    primaryLanguage: "Python",
    category: "Machine Learning"
  },
  {
    name: "Customer_Churn_Analysis",
    description: "Comprehensive data analysis project for customer churn prediction with visualization dashboards",
    url: "https://github.com/Vinoothna-01/Customer_Churn_Analysis",
    languages: ["Python", "Pandas", "Scikit-learn"],
    primaryLanguage: "Python",
    category: "Data Analytics"
  },
  {
    name: "Advanced_Cryptography_Project",
    description: "Implementation of advanced cryptographic algorithms and security protocols",
    url: "https://github.com/Vinoothna-01/Advanced_Cryptograhpy_project",
    languages: ["Python"],
    primaryLanguage: "Python",
    category: "Security"
  },
  {
    name: "CS_6045_Project",
    description: "Advanced algorithms and data structures implementation for complex computational problems",
    url: "https://github.com/Vinoothna-01/CS_6045_Project",
    languages: ["Python"],
    primaryLanguage: "Python",
    category: "Algorithms"
  },
  {
    name: "CS6041_TOC_Project",
    description: "Theory of Computation project with formal language analysis and automata implementation",
    url: "https://github.com/Vinoothna-01/CS6041_TOC_Project",
    languages: ["Python"],
    primaryLanguage: "Python",
    category: "Theory"
  },
  {
    name: "My-portfolio",
    description: "Professional portfolio website built with modern web technologies",
    url: "https://github.com/Vinoothna-01/My-portfolio",
    languages: ["HTML", "TypeScript", "React"],
    primaryLanguage: "TypeScript",
    category: "Web Development"
  }
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = Array.from(new Set(GITHUB_PROJECTS.map(p => p.category)));
  const filteredProjects = selectedCategory 
    ? GITHUB_PROJECTS.filter(p => p.category === selectedCategory)
    : GITHUB_PROJECTS;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-white"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-display text-2xl font-bold text-black">Vinoothna</div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-black hover:text-cyan-500 transition-colors font-medium">About</a>
            <a href="#experience" className="text-black hover:text-cyan-500 transition-colors font-medium">Experience</a>
            <a href="#projects" className="text-black hover:text-cyan-500 transition-colors font-medium">Projects</a>
            <a href="#skills" className="text-black hover:text-cyan-500 transition-colors font-medium">Skills</a>
            <a href="#contact" className="text-black hover:text-cyan-500 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-cyan-500 font-accent text-lg font-semibold">Welcome to my portfolio</p>
              <h1 className="text-6xl font-display font-bold text-black leading-tight">
                Vinoothna Dudam
              </h1>
              <p className="text-2xl text-gray-700 font-accent">Data Analyst & UX/UI Designer</p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Master's student in Computer Science with expertise in data analytics, machine learning, and user experience design. Passionate about transforming complex data into actionable insights and building intuitive digital experiences.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a href="#contact">
                <Button className="bg-cyan-500 text-black hover:bg-cyan-600 px-8 py-6 text-lg font-semibold">
                  Get In Touch
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold">
                  View My Work
                </Button>
              </a>
            </div>
            
            <div className="flex gap-6 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-cyan-500 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/Vinoothna-01" target="_blank" rel="noopener noreferrer" className="text-black hover:text-cyan-500 transition-colors">
                <Github size={28} />
              </a>
              <a href="mailto:vinoothnaaadhya@gmail.com" className="text-black hover:text-cyan-500 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-200">
              <img src="/images/data-analytics-visual.png" alt="Analytics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-display font-bold text-black mb-8">About Me</h2>
            <div className="h-1 w-20 bg-cyan-500 mb-8"></div>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a Master's student in Computer Science at Kennesaw State University (GPA: 3.6/4.0), combining technical expertise with creative problem-solving. My journey spans from data analytics at Goldman Sachs to developing community-focused applications and conducting impactful research.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a Graduate Teaching Assistant, I mentor students in technical concepts while collaborating with faculty to enhance course materials and learning outcomes. I'm driven by the intersection of data, design, and technology—transforming complex information into meaningful experiences.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-cyan-500 mt-1" size={24} />
                    <div>
                      <h3 className="font-accent text-lg text-black mb-2 font-semibold">Education</h3>
                      <p className="text-gray-700">M.S. Computer Science, Kennesaw State University</p>
                      <p className="text-sm text-gray-500">Aug 2024 – May 2026</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start gap-4">
                    <Code2 className="text-cyan-500 mt-1" size={24} />
                    <div>
                      <h3 className="font-accent text-lg text-black mb-2 font-semibold">Expertise</h3>
                      <p className="text-gray-700">Data Analytics, Machine Learning, UX/UI Design</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-black mb-8">Professional Experience</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12"></div>
          
          <div className="space-y-8 max-w-4xl">
            {/* Crane Worldwide Logistics Internship */}
            <div className="grid grid-cols-3 gap-8 items-start">
              <div className="col-span-1">
                <p className="text-cyan-500 font-accent text-sm uppercase tracking-wide font-semibold">Summer 2026</p>
                <h3 className="font-display text-2xl font-bold text-black mt-2">College Internship Program</h3>
                <p className="text-gray-600 mt-1 font-semibold">Crane Worldwide Logistics</p>
                <p className="text-gray-500 text-sm mt-1">Atlanta, GA</p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-gray-700">Upcoming internship opportunity with Crane Worldwide Logistics, a leading provider of integrated logistics solutions. Expected to contribute to supply chain optimization, data analysis, and business intelligence projects.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Logistics</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Data Analysis</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Supply Chain</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-300"></div>

            {/* Graduate Teaching Assistant */}
            <div className="grid grid-cols-3 gap-8 items-start">
              <div className="col-span-1">
                <p className="text-cyan-500 font-accent text-sm uppercase tracking-wide font-semibold">Jan 2025 – Present</p>
                <h3 className="font-display text-2xl font-bold text-black mt-2">Graduate Teaching Assistant</h3>
                <p className="text-gray-600 mt-1 font-semibold">Kennesaw State University</p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-gray-700">Led weekly lab sessions emphasizing problem-solving, structured analysis, and documentation of technical concepts.</p>
                <p className="text-gray-700">Collaborated with faculty to improve course web content usability, clarity, and consistency—aligning materials with student learning metrics.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Teaching</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Mentoring</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Course Development</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-300"></div>

            {/* Goldman Sachs Summer Analyst */}
            <div className="grid grid-cols-3 gap-8 items-start">
              <div className="col-span-1">
                <p className="text-cyan-500 font-accent text-sm uppercase tracking-wide font-semibold">Jun 2023 – Aug 2023</p>
                <h3 className="font-display text-2xl font-bold text-black mt-2">Summer Analyst</h3>
                <p className="text-gray-600 mt-1 font-semibold">Goldman Sachs</p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-gray-700">Engineered and optimized REST APIs to support reliable data flow and system performance monitoring.</p>
                <p className="text-gray-700">Produced structured technical documentation to support data quality, cross-team communication, and long-term system scalability.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">API Development</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Data Engineering</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-black mb-8">GitHub Projects</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12"></div>
          
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-accent font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-cyan-500 text-black"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              All Projects
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-accent font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-cyan-500 border-2 border-gray-300 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-cyan-500 font-accent text-xs uppercase tracking-wider font-semibold mb-2">{project.category}</p>
                        <h3 className="font-display text-xl font-bold text-black group-hover:text-cyan-500 transition-colors">
                          {project.name.replace(/_/g, " ")}
                        </h3>
                      </div>
                      <GitBranch className="text-gray-400 group-hover:text-cyan-500 transition-colors" size={20} />
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.languages.slice(0, 3).map((lang, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-200 text-black text-xs rounded-full font-medium">
                          {lang}
                        </span>
                      ))}
                      {project.languages.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 text-black text-xs rounded-full font-medium">
                          +{project.languages.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-cyan-500 text-sm font-accent font-semibold pt-2 group-hover:gap-3 transition-all">
                      View Repository
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-black mb-8">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12"></div>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl">
            {/* Technical Skills */}
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-cyan-500" size={28} />
                <h3 className="font-display text-xl font-bold text-black">Technical</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• SQL & Database Systems</li>
                <li>• Python Programming</li>
                <li>• Excel & Google Sheets</li>
                <li>• Data Cleaning</li>
                <li>• API Development</li>
                <li>• REST Architecture</li>
              </ul>
            </Card>

            {/* Analytics & Visualization */}
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-cyan-500" size={28} />
                <h3 className="font-display text-xl font-bold text-black">Analytics</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Power BI</li>
                <li>• Tableau</li>
                <li>• Data Visualization</li>
                <li>• Dashboard Development</li>
                <li>• Data Interpretation</li>
                <li>• Machine Learning</li>
              </ul>
            </Card>

            {/* Design & Communication */}
            <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="text-cyan-500" size={28} />
                <h3 className="font-display text-xl font-bold text-black">Design</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• UX/UI Design</li>
                <li>• Adobe Creative Suite</li>
                <li>• Canva</li>
                <li>• Graphic Design</li>
                <li>• Data Storytelling</li>
                <li>• Wireframing</li>
              </ul>
            </Card>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 max-w-5xl">
            <h3 className="font-display text-2xl font-bold text-black mb-6">Tools & Methodologies</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-accent text-black mb-3 font-semibold">Collaboration & Project Management</p>
                <p className="text-gray-700">JIRA, Agile Methodologies, Stakeholder Communication, Cross-functional Collaboration</p>
              </div>
              <div>
                <p className="font-accent text-black mb-3 font-semibold">Research & Analysis</p>
                <p className="text-gray-700">Qualitative & Quantitative Research, Data Interpretation, User Research, Usability Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-black mb-8">Certifications</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12"></div>
          
          <div className="grid grid-cols-2 gap-8 max-w-3xl">
            <Card className="p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow bg-white">
              <h3 className="font-accent text-lg text-black mb-2 font-semibold">Career Essentials in Data Analysis</h3>
              <p className="text-gray-700">Microsoft</p>
            </Card>
            
            <Card className="p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow bg-white">
              <h3 className="font-accent text-lg text-black mb-2 font-semibold">Introduction to Career Skills in Data Analytics</h3>
              <p className="text-gray-700">Professional Development</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          
          <div className="space-y-6 max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center gap-4">
              <Mail size={24} className="text-cyan-500" />
              <a href="mailto:vinoothnaaadhya@gmail.com" className="text-lg hover:text-cyan-500 transition-colors">
                vinoothnaaadhya@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <Phone size={24} className="text-cyan-500" />
              <a href="tel:+14709825686" className="text-lg hover:text-cyan-500 transition-colors">
                (470) 982-5686
              </a>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/Vinoothna-01" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
              <Github size={32} />
            </a>
          </div>
          
          <a href="mailto:vinoothnaaadhya@gmail.com">
            <Button className="bg-cyan-500 text-black hover:bg-cyan-600 px-8 py-6 text-lg font-semibold">
              Send Me an Email
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Vinoothna Dudam. All rights reserved.</p>
          <p className="text-sm mt-2">Designed & developed with attention to detail</p>
        </div>
      </footer>
    </div>
  );
}
