import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Menu, X, ExternalLink, Award, Briefcase, GraduationCap, Code, User } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const skills = {
    programming: ['Java', 'C', 'Python'],
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js'],
    database: ['MySQL'],
    design: ['Blender (3D Modeling)', 'Canva'],
    tools: ['Visual Studio Code', 'GitHub'],
    soft: ['Project Coordination', 'Excellent Communication', 'Quick Learner']
  };

  const projects = [
    {
      title: 'Sainath Photo Studio',
      description: 'Photography Portfolio & Service Website',
      details: [
        'Developed a responsive multi-page portfolio website using React.js',
        'Designed pages for Gallery, Services, Pricing, About, and Contact',
        'Integrated functional contact form with email delivery',
        'Modern UI/UX design with smooth navigation'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'SamaySathi',
      description: 'Task Management Web App',
      details: [
        'Full CRUD features with React, Tailwind CSS, Node.js, Express, and MySQL',
        'Clean, responsive UI for task operations',
        'RESTful APIs with validation',
        'Sorting, filtering, pagination, and CSV export'
      ],
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL']
    },
    {
      title: 'Core Fitness',
      description: 'Responsive Gym Website (MCA Project)',
      details: [
        'Collaborative team project for local fitness center',
        'Designed e-commerce shopping section',
        'Product listings with cart functionality and purchase flow',
        'Responsive design with intuitive layout'
      ],
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Goa Business School, Goa University',
      period: '2024 - Present (Pursuing)',
      grade: 'SGPA (SEM 2): 8.4'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: "St. Xavier's College, Mapusa-Goa",
      period: '2021 - 2024',
      grade: 'CGPA: 8.86'
    },
    {
      degree: 'Commerce (HSS)',
      institution: "SV's Purushottom Walawalkar Higher Secondary School, Mapusa-Goa",
      period: '2019 - 2021',
      grade: ''
    }
  ];

  const certifications = [
    'Python Workshop – CodeWise',
    'Excel Crash Course (30 Days) – CoursePe',
    'SQL using AI workshop – AI for Techies'
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MANUJA NAGVEKAR
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-purple-400"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'text-purple-400 bg-slate-700'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-slate-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
               <img src={process.env.PUBLIC_URL + '/manuja.png'} alt="Manuja Nagvekar" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Manuja Nagvekar
              </h1>
              <p className="text-2xl text-purple-300 mb-6">
                Full Stack Developer & Creative Designer
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Aspiring to build a successful career in computer science by applying technical knowledge, 
                continuously learning new skills, and contributing to organizational growth and success.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/manuja-nagvekar-a66245253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Professional Background</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently pursuing my Master of Computer Applications at Goa Business School with an 
                impressive 8.4 SGPA. With a strong foundation in full-stack development and a passion for 
                creating user-centric applications, I specialize in React.js, Node.js, and modern web technologies.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Beyond Coding</h3>
              <p className="text-gray-300 leading-relaxed">
                Beyond development, I'm a professional Mehendi artist specializing in bridal and festive designs. 
                I also enjoy poster making, wall painting, and DIY crafts. I'm fluent in English, Konkani, Marathi, 
                and Hindi, which helps me collaborate effectively in diverse environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Programming Languages" skills={skills.programming} icon={<Code />} />
            <SkillCard title="Frontend Development" skills={skills.frontend} icon={<Code />} />
            <SkillCard title="Database" skills={skills.database} icon={<Code />} />
            <SkillCard title="Design & 3D" skills={skills.design} icon={<Code />} />
            <SkillCard title="Tools & Platforms" skills={skills.tools} icon={<Code />} />
            <SkillCard title="Soft Skills" skills={skills.soft} icon={<User />} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </div>
          
          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all">
                  <div className="flex items-start gap-3">
                    <Award className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-300">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ContactCard
              icon={<Mail />}
              title="Email"
              value="manujanagvekar@gmail.com"
              link="mailto:manujanagvekar@gmail.com"
            />
            <ContactCard
              icon={<Phone />}
              title="Phone/WhatsApp"
              value="+91 8208892153"
              link="tel:+918208892153"
            />
            <ContactCard
              icon={<Linkedin />}
              title="LinkedIn"
              value="Connect with me"
              link="https://www.linkedin.com/in/manuja-nagvekar-a66245253"
            />
            <ContactCard
              icon={<MapPin />}
              title="Location"
              value="Mapusa, Goa, India"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Manuja Nagvekar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills, icon }) {
  return (
    <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-purple-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all h-full flex flex-col">
      <div className="flex items-start gap-3 mb-4">
        <Briefcase className="text-purple-400 flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-purple-300 text-sm">{project.description}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-4 flex-grow">
        {project.details.map((detail, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationCard({ education }) {
  return (
    <div className="bg-slate-900/50 rounded-xl p-8 backdrop-blur-sm hover:shadow-xl transition-all">
      <div className="flex items-start gap-4">
        <GraduationCap className="text-purple-400 flex-shrink-0 mt-1" size={32} />
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-white mb-2">{education.degree}</h3>
          <p className="text-purple-300 mb-2">{education.institution}</p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span>{education.period}</span>
            {education.grade && <span className="text-purple-300 font-semibold">{education.grade}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105 block"
    >
      <div className="flex items-center gap-4">
        <div className="text-purple-400">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300">{value}</p>
        </div>
        {link.startsWith('http') && <ExternalLink className="text-gray-400 ml-auto" size={20} />}
      </div>
    </a>
  );
}