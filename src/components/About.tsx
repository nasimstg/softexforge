import React from 'react'

export default function About() {
  return (
    <section id="about" className="mb-10 scroll-mt-10 md:mb-16 lg:mb-20 lg:scroll-mt-20" aria-label="About me">
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
    </div>
    <div>
      <p className="mb-1">
      Our team of experienced engineers and developers specializes in a wide range of programming languages, from compiled languages to object-oriented, functional, interpreted, and even assembly languages.
      Our services include:
      </p>
        <ul className="ml-8 mb-4 list-disc space-y-1">
          <li>
              <span className="font-semibold text-blue-400">Desktop Applications:</span> 
              <span className="ml-2">MFC, Electron, Qt, WinForms, CLR, JavaFX, .NET, PyQt, Tkinter, Kivy.</span>
          </li>
          <li>
              <span className="font-semibold text-blue-400">Mobile Applications:</span> 
              <span className="ml-2">Java, Kotlin, React Native, Flutter.</span>
          </li>
          <li>
              <span className="font-semibold text-blue-400">Web Frontend:</span> 
              <span className="ml-2">React, Next.js, Vue, Angular.</span>
          </li>
          <li>
              <span className="font-semibold text-blue-400">Web Backend:</span> 
              <span className="ml-2">Node.js, Express.js, Java Spring Boot, ASP.NET.</span>
          </li>
          <li>
              <span className="font-semibold text-blue-400">Game Development:</span> 
              <span className="ml-2">Unity2D, Unity3D, Unreal Engine.</span>
          </li>
          <li>
              <span className="font-semibold text-blue-400">Database Management:</span> 
              <span className="ml-2">MySQL, PostgreSQL, MongoDB, SQLite, Firebase Firestore.</span>
          </li>
          <li>
              <span className="font-semibold text-blue-400">DevOps:</span> 
              <span className="ml-2">Docker, Kubernetes, Jenkins, GitLab CI/CD.</span>
          </li>
      </ul>
    </div>
  </section>
  )
}
