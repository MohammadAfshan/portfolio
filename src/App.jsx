import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Mail, Linkedin, ExternalLink, ChevronRight, Send, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Img from './assets/afshan.jpg';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const typewriterTexts = ["Student at SNIST", "Deputy Corporate Lead", "Treasurer"];
  const [currentTypewriterText, setCurrentTypewriterText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const journeyRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Typewriter effect
  useEffect(() => {
    const text = typewriterTexts[typewriterIndex];
    
    if (isTyping) {
      if (currentTypewriterText.length < text.length) {
        const timeout = setTimeout(() => {
          setCurrentTypewriterText(text.substring(0, currentTypewriterText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentTypewriterText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentTypewriterText(currentTypewriterText.substring(0, currentTypewriterText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setTypewriterIndex((typewriterIndex + 1) % typewriterTexts.length);
      }
    }
  }, [currentTypewriterText, isTyping, typewriterIndex, typewriterTexts]);

  // Scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Project data
  const projects = [
    {
      title: "Hotstar Clone",
      image: "/api/placeholder/500/300",
      link: "https://afshan-jio-hotstar.netlify.app/"
    },
    {
      title: "Netflix Clone",
      image: "/api/placeholder/500/300",
      link: "https://mdafshan-ntflixclone-1.netlify.app/"
    },
    {
      title: "Google Clone",
      image: "/api/placeholder/500/300",
      link: "https://afshan-google-clone.netlify.app/"
    },
    {
      title: "Shoe Website",
      image: "/api/placeholder/500/300",
      link: "https://afshan-shoe-website-bs1.netlify.app/"
    }
  ];

  // Journey data
  const journey = [
    {
      date: "November 2021",
      title: "Joined SNIST"
    },
    {
      date: "November 2022",
      title: "Volunteer at Bachpan Prayas NGO"
    },
    {
      date: "December 2024",
      title: "Student Placement Committee Member"
    },
    {
      date: "February 2025",
      title: "Deputy Corporate Lead at Career Development Centre"
    }
  ];

  // Technical skills data
  const technicalSkills = [
    { name: "C", icon: "🖥️" },
    { name: "Java (Beginner)", icon: "☕" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "SQL", icon: "🗄️" },
    { name: "Figma", icon: "🖌️" },
    { name: "UI/UX", icon: "📱" },
    { name: "Git", icon: "📊" },
    { name: "Data Structures", icon: "📚" }
  ];

  // Soft skills data
  const softSkills = [
    { name: "Communication", icon: "🗣️" },
    { name: "Teamwork", icon: "👥" },
    { name: "Leadership", icon: "🚀" },
    { name: "Problem-Solving", icon: "🧩" }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-all duration-300`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900 shadow-gray-800' : 'bg-white shadow-gray-200'} shadow-md transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-serif font-semibold tracking-wide"
          >
            Mohammed Afshan
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`pt-28 pb-16 px-4 md:px-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-2">
              Hi, I'm Mohammed Afshan 👋 | Let's Connect!
            </h2>
            <div className="h-12 mb-6">
              <h3 className="text-xl md:text-2xl font-light text-blue-400">
                {currentTypewriterText}
                <span className="animate-blink">|</span>
              </h3>
            </div>
            <div className="flex space-x-4 mt-6">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="mailto:mohammadafshan323@gmail.com" 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com/MohammadAfshan" 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/mohammed-afshan1/" 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Java'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(aboutRef)}
                className={`px-6 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} transition-all duration-300 flex items-center`}
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400"
            >
              <img src={Img } alt="Mohammed Afshan" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed"
          >
            <p className="mb-4">
              Highly motivated B.Tech ECE student with strong programming skills in C, Java, and Python. Proficient in data structures, algorithms, and web development (HTML, CSS, SQL). Excellent soft skills in teamwork, communication, and problem-solving. Passionate about digital technologies and innovation.
            </p>
            <p>
              With a strong desire to make a positive impact, I actively participate in social causes and volunteer work, helping those in need and contributing to the betterment of my community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
                className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300`}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} transition-all duration-300`}
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey (Timeline) Section */}
      <section ref={journeyRef} className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Journey
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {journey.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-4 relative">
                  <div className={`w-4 h-4 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} relative z-10`}></div>
                  {index !== journey.length - 1 && (
                    <div className={`absolute top-4 left-2 w-0.5 h-full -translate-x-1/2 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  )}
                </div>
                <div className={`p-4 rounded-lg mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-6 text-center"
              >
                Technical Skills
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg flex flex-col items-center justify-center text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300`}
                  >
                    <span className="text-2xl mb-2">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-6 text-center"
              >
                Soft Skills
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg flex flex-col items-center justify-center text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300`}
                  >
                    <span className="text-2xl mb-2">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section ref={contactRef} className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center mb-8"
            >
              <Mail size={20} className="mr-2" />
              <a href="mailto:mohammadafshan323@gmail.com" className="hover:underline">
                mohammadafshan323@gmail.com
              </a>
            </motion.div>
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-lg`}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                type="button" 
                className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} flex items-center justify-center transition-all duration-300`}
              >
                Send Message <Send size={16} className="ml-2" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="container mx-auto px-4 text-center">
          <a href="mailto:mohammadafshan323@gmail.com" className="hover:underline">
            mohammadafshan323@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}