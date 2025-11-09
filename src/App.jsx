import React from "react";
import { useState, useEffect } from "react";
export default function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = 'service_tthlhj7';
    const TEMPLATE_ID = 'template_tfo8tlc';
    const PUBLIC_KEY = 'ja0N9tz63i6uaexBl';

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        })
      });

      if (response.ok) {
        alert('Message sent successfully! ✅');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again. ❌');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
     

   <div className="font-sans text-gray-800 scroll-smooth">
  
  <section
    id="home"
    className="relative h-screen bg-cover bg-center text-white flex flex-col"
    style={{ backgroundImage: "url('/Image/IMG_3553 (1).jpeg')" }}
  >
   
    <div className="absolute inset-0 bg-black/60"></div>

  
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold text-white">
          Penny<span className="text-blue-600">Tech</span>
        </h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      
      <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        
    </nav>
    <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start p-8 mt-16 space-y-6">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          ></div>
        )}
    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center">
      <h2 className="text-5xl font-bold mb-4">I'm <span className="font-display text-2xl text-blue-600">Penny</span> frontEnd Developer</h2>
      <p className="text-lg text-gray-200 max-w-xl animate-fade-in-up animation-delay-200">
        A creative web designer & developer passionate about building modern, responsive websites.
      </p>
      <a
  href="#about"
  className="mt-6 inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-full bg-transparent hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
  Get to Know Me
</a>
    </div>
  </section>
<style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .skill-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .skill-card:nth-child(1) { animation-delay: 0.1s; }
        .skill-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-card:nth-child(3) { animation-delay: 0.3s; }
        .skill-card:nth-child(4) { animation-delay: 0.4s; }
        .skill-card:nth-child(5) { animation-delay: 0.5s; }
        .skill-card:nth-child(6) { animation-delay: 0.6s; }

        .project-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        .project-card:nth-child(5) { animation-delay: 0.5s; }
        .project-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>


      {/* About Me*/}
     <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          
          <div className="flex justify-center md:justify-start">
            <img
              src="/Image/IMG_3553 (1).jpeg"
              alt="Your Name"
              className="w-64 h-64 rounded-xl shadow-lg object-cover"
            />
          </div>

         
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-gray-600 mb-4">
              Hi! I’m <span className="font-semibold">Mukaila Ibrahim Damilare (<span className="text-blue-600 font-poppins">Penny</span>)</span>, a passionate Frontend and WordPress Designer. I specialize in creating modern, responsive, and user-friendly websites that help businesses stand out online.
            </p>
            <p className="text-gray-600 mb-4">
              With experience in <span className="font-semibold">React, Tailwind CSS, HTML, CSS, JavaScript</span>, and <span className="font-semibold">WordPress themes & plugins</span>, I bring creative ideas to life while focusing on performance and usability.
            </p>
            <p className="text-gray-600 mb-6">
              I love turning complex problems into simple, intuitive designs. Whether it’s building a custom WordPress site or developing a sleek frontend application, I aim to deliver quality work that exceeds expectations.
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
             <a
              href="https://www.freecodecamp.org/certification/fcc00d2a7dd-0baf-48b8-ac59-8e9ec6355546/javascript-algorithms-and-data-structures-v8"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 gap-4 ml-4"
            >
              Check Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
          <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">My Services</h2>
            <h2 className="text-4xl text-gray-800 mb-3">Why Choose My Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              I bring a diverse skill set to deliver high-quality web solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="skill-card text-center p-8 hover:shadow-lg transition-all duration-300 rounded-lg transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              
                <span className="text-2xl font-bold text-blue-600">JS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">JavaScript</h3>
              <p className="text-gray-600 text-sm mb-6">
                Expert in modern ES6+ features, DOM manipulation, and async programming for dynamic web experiences
              </p>
              <div className="mb-2">
                <div className="flex justify-between mb-2 px-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

           
          <div className="skill-card text-center p-8 hover:shadow-lg transition-all duration-300 rounded-lg transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              
                <span className="text-2xl font-bold text-orange-600">{'<>'}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">HTML</h3>
              <p className="text-gray-600 text-sm mb-6">
                Semantic markup, accessibility standards, and modern HTML5 features for well-structured websites
              </p>
              <div className="mb-2">
                <div className="flex justify-between mb-2 px-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            
            <div className="skill-card text-center p-8 hover:shadow-lg transition-all duration-300 rounded-lg transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              
                <span className="text-2xl font-bold text-purple-600">{'{}'}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">CSS</h3>
              <p className="text-gray-600 text-sm mb-6">
                Responsive design, Flexbox, Grid, animations, and modern CSS techniques for beautiful interfaces
              </p>
              <div className="mb-2">
                <div className="flex justify-between mb-2 px-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="skill-card text-center p-8 hover:shadow-lg transition-all duration-300 rounded-lg transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              
                <span className="text-2xl font-bold text-cyan-600">⚛</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">React</h3>
              <p className="text-gray-600 text-sm mb-6">
                Component architecture, hooks, state management, and React ecosystem for modern applications
              </p>
              <div className="mb-2">
                <div className="flex justify-between mb-2 px-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            {/* WordPress */}
           <div className="skill-card text-center p-8 hover:shadow-lg transition-all duration-300 rounded-lg transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              
                <span className="text-2xl font-bold text-blue-700">W</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">WordPress</h3>
              <p className="text-gray-600 text-sm mb-6">
                Theme customization, plugin integration, and content management systems for powerful websites
              </p>
              <div className="mb-2">
                <div className="flex justify-between mb-2 px-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>

            {/* Python */}
            <div className="skill-card text-center p-8 hover:shadow-lg transition-all duration-300 rounded-lg transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              
                <span className="text-2xl font-bold text-yellow-600">Py</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Python</h3>
              <p className="text-gray-600 text-sm mb-6">
                Basic syntax, scripting, and exploring backend development fundamentals for versatile solutions
              </p>
              <div className="mb-2">
                <div className="flex justify-between mb-2 px-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">My Projects</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Here are some of my recent works showcasing my skills and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
  className="h-48 bg-cover bg-center"
  style={{ backgroundImage: "url('/Image/Screenshot 2025-11-09 135913.png')" }}
></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Website</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A fully responsive online store with shopping cart functionality, product filters, and secure checkout process.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">JavaScript</span>
                </div>
<a 
  href="https://e-cpennys-projectsommerce.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-600 font-medium hover:text-blue-700"
>
  View Project →
</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
  className="h-48 bg-cover bg-center"
  style={{ backgroundImage: "url('/Image/screencapture-localhost-5173-2025-11-09-15_42_33.png')" }}
></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Portfolio Website</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A modern and sleek portfolio site featuring smooth animations, interactive elements, and mobile-first design.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">JavaScript</span>
                </div>
                <button className="text-purple-600 font-medium hover:text-purple-700">View Project →</button>
              </div>
            </div>

            {/* Project 3 
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-6xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A content management system with user authentication, rich text editor, and comment functionality.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">WordPress</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">PHP</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">CSS</span>
                </div>
                <button className="text-green-600 font-medium hover:text-green-700">View Project →</button>
              </div>
            </div>  */}

            {/* Project 4
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-6xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Weather App</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-time weather application with location search, 7-day forecast, and beautiful UI animations.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">API</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">CSS</span>
                </div>
                <button className="text-orange-600 font-medium hover:text-orange-700">View Project →</button>
              </div>
            </div>  */}

            {/* Project 5 */}
            {/*
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <span className="text-white text-6xl">💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Task Manager</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Productivity app with drag-and-drop functionality, task prioritization, and deadline reminders.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">CSS</span>
                </div>
                <button className="text-pink-600 font-medium hover:text-pink-700">View Project →</button>
              </div>
            </div>*/}

            {/* Project 6 */}
            <div className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
  className="h-48 bg-cover bg-center"
  style={{ backgroundImage: "url('/Image/screencapture-pennny-eng-github-io-Dry-Cleaning-app-project-DEMO-2025-11-09-13_48_15.png')" }}
></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Landing Page</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-converting landing page with smooth scrolling, call-to-action buttons, and contact forms.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full">JavaScript</span>
                </div>
               <a 
  href="https://pennny-eng.github.io/Dry-Cleaning-app-project-DEMO-/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-600 font-medium hover:text-blue-700"
>
  View Project →
</a>
              </div>
            </div>
          </div>
        </div>
      </section>

     
          <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Contact Me</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">📞</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Phone Number</h3>
                <p className="text-gray-600 text-sm">+234 8144663199</p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">✉️</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Email Address</h3>
                <p className="text-gray-600 text-sm">mikailibrahim514@gmail.com</p>
              </div>

              {/* Location */}
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600 text-sm">Ibadan, Nigeria</p>
              </div>
            </div>

            {/* Contact Form */}
           <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                ></textarea>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
       <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Penny<span className="text-blue-600">Tech</span>
              </h3>
              <p className="text-gray-400 text-sm">
                A creative frontend developer passionate about building modern, responsive websites and bringing ideas to life.
              </p>
            </div>

            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400 transition text-sm">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition text-sm">About</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 transition text-sm">Services</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition text-sm">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition text-sm">Contact</a>
                </li>
              </ul>
            </div>

           
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
              
                <a
                  href="https://www.instagram.com/penny.mizzy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

               
                <a
                  href="https://x.com/pennymizzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/*
                <a
                  href="https://linkedin.com/in/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>*/}

                
                <a
                  href="https://github.com/Pennny-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 PennyTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
