"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false) //State to manage dark mode
  //useEffect to load saved theme preference from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")  //  Apply dark mode class to <html>
    }
  }, [])

  //toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark") //Save preference in localStorage
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light") //Save preference in localStorage
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
