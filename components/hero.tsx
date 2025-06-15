"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  //State to control visibility for fade-in animation
  const [isVisible, setIsVisible] = useState(false)

  //Trigger visibility on mount for entry animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    //Full-screen hero section with background gradient
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/*Animated container with transition on load*/}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/*Profile Image Section*/}
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/Pictures.png"
                    alt="Messam Raza - Profile Picture"
                    className="w-full h-full object-cover hover:scale-100 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/*Name with gradient text*/}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Messam Raza
              </span>
            </h1>

            {/*Subtitle: Profession*/}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Computer Science Student & Software Developer
            </p>

            {/*Description Paragraph*/}
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through code. Currently pursuing BS Computer Science at
              FAST-NUCES Islamabad, with expertise in mobile development, web technologies, and software engineering.
            </p>

            {/*Action Buttons: View Work / Contact*/}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/*Scroll to Projects section*/}
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>

              {/*Scroll to Contact section*/}
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
