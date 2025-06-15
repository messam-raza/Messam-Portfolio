"use client"

import { useState, useEffect } from "react"

// Define the shape of a project object
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  details: string
  features: string[]
  link: string
  category: string
}

export default function Projects() {
  // State to track visibility for animation
  const [isVisible, setIsVisible] = useState(false)

  // State for managing modal visibility and selected project
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // IntersectionObserver to trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // List of project data
  const projects: Project[] = [
    {
      id: 1,
      title: "ComfyBuy",
      description: "Android marketplace application similar to OLX, built with modern Android development practices.",
      technologies: ["Kotlin", "XML", "Firebase"],
      details:
        "ComfyBuy is a comprehensive marketplace application that allows users to buy and sell items locally. The app features user authentication, real-time messaging, image uploads, and location-based search functionality.",
      features: [
        "User registration and authentication",
        "Product listing with image uploads",
        "Real-time chat between buyers and sellers",
        "Location-based search and filtering",
        "User profiles and ratings system",
        "Push notifications for new messages",
      ],
      link: "https://github.com/messam-raza",
      category: "Mobile Development",
    },
    {
      id: 2,
      title: "Connect-Me",
      description: "Social media application with real-time features, built using modern Android architecture.",
      technologies: ["Kotlin", "XML", "Firebase"],
      details:
        "Connect-Me is a social networking platform that enables users to connect, share posts, and interact with friends. The app implements modern Android architecture patterns and real-time data synchronization.",
      features: [
        "User profiles and friend connections",
        "Real-time post sharing and commenting",
        "Image and video sharing capabilities",
        "Push notifications for social interactions",
        "Privacy controls and content moderation",
        "Dark mode support",
      ],
      link: "https://github.com/messam-raza",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "Weather Updates",
      description: "Comprehensive weather forecasting application with location-based services and API integration.",
      technologies: ["Kotlin", "XML", "Weather API"],
      details:
        "Weather Updates provides accurate weather forecasts with a clean, intuitive interface. The app integrates with weather APIs to deliver real-time weather data and forecasts.",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Location-based weather detection",
        "Weather alerts and notifications",
        "Multiple location support",
        "Weather maps and radar",
      ],
      link: "https://github.com/messam-raza",
      category: "Mobile Development",
    },
    {
      id: 4,
      title: "CodeFast",
      description: "Desktop platform connecting students, industry professionals, and universities for collaboration.",
      technologies: ["Java", "JavaFX", "MySQL"],
      details:
        "CodeFast is a comprehensive platform designed to bridge the gap between academic learning and industry requirements. It facilitates connections between students, professionals, and educational institutions.",
      features: [
        "User role management (Students, Industry, University)",
        "Project collaboration tools",
        "Skill matching and recommendations",
        "Event and workshop management",
        "Resource sharing platform",
        "Progress tracking and analytics",
      ],
      link: "https://github.com/messam-raza",
      category: "Desktop Application",
    },
    {
      id: 5,
      title: "Space Shooter Game",
      description: "Exciting graphical game with smooth animations and engaging gameplay mechanics.",
      technologies: ["C++", "SFML"],
      details:
        "Space Shooter is an action-packed game featuring smooth graphics, sound effects, and challenging gameplay. Built using C++ and SFML for optimal performance.",
      features: [
        "Smooth 60 FPS gameplay",
        "Multiple enemy types and patterns",
        "Power-ups and weapon upgrades",
        "High score tracking",
        "Sound effects and background music",
        "Progressive difficulty levels",
      ],
      link: "https://github.com/messam-raza",
      category: "Game Development",
    },
    {
      id: 6,
      title: "Gym Management System",
      description: "Comprehensive database-driven system for managing gym operations and member information.",
      technologies: ["C#", "MySQL", "Windows Forms"],
      details:
        "A complete gym management solution with member tracking, payment processing, and administrative tools. Features a user-friendly interface for gym staff and comprehensive reporting capabilities.",
      features: [
        "Member registration and management",
        "Payment tracking and billing",
        "Equipment maintenance scheduling",
        "Staff management and scheduling",
        "Comprehensive reporting system",
        "Backup and data security features",
      ],
      link: "https://github.com/messam-raza",
      category: "Desktop Application",
    },
  ]

  // Open modal with selected project
  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Prevent background scroll
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and description with animation */}
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in various technologies and domains.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(project)}
              >
                <div className="p-6">
                  {/* Project Title and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Short Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Project Category */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              {/* Project Details */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.details}</p>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition-colors duration-300"
                >
                  View on GitHub
                </a>
                <button
                  onClick={closeModal}
                  className="flex-1 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
