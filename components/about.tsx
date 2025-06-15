"use client"

import { useEffect, useState } from "react"

//Main About component
export default function About() {
  const [isVisible, setIsVisible] = useState(false) //State to manage visibility for animation when the section comes into view

  useEffect(() => { //Runing once after component mounts: sets up an IntersectionObserver
    const observer = new IntersectionObserver( //An observer to detect when the 'about' section enters the viewport
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)//Triggering animation by updating state
        }
      },
      { threshold: 0.1 },//Triggering when 10% of the element is visible
    ) //This is ensuring responsiveness 

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)//Observing the element
    }

    return () => observer.disconnect()//Cleaning observer on component unmount
  }, [])

  //Skills List
  const skills = ["C++/C", "Java", "Kotlin", "Python", "JavaScript", "HTML/CSS", "MySQL", "PHP", "Assembly Language"]

  //Tools List 
  const tools = ["Android Studio", "VS Code", "Visual Studio", "Eclipse", "MySQL Server", "MongoDB", "Ubuntu", "XAMPP"]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science at FAST-NUCES Islamabad, where I've been
                developing my passion for software development and technology innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My experience includes leadership roles in FAST Gaming Club as Vice Head Marketing and as an officer in
                FAST Computing Society, where I've honed my teamwork and project management skills.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400">Bachelor of Computer Science</h5>
                    <p className="text-gray-600 dark:text-gray-300">FAST-NUCES Islamabad (2022-2026)</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400">FCS Pre-Engineering</h5>
                    <p className="text-gray-600 dark:text-gray-300">Punjab College Blue Area (2020-2022)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Developer Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
