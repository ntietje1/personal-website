// import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import NavMenu from './components/nav'
import Footer from './components/footer'
import ContactMenu from './components/contact'
import { ExperienceCardStack } from './components/card'
import { Link, LinkWithArrow } from './components/link'

export default function Home() {
  return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
            Skip to Content
          </a>
          <div className="lg:flex lg:justify-between lg:gap-4">
            {/* Left side */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  <a href="/">Nick Tietje</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Software Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  I build all sorts of software.
                </p>
                <NavMenu />
              </div>
             <ContactMenu /> 
            </header>
            {/* Right side */}
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                </div>
                <div>
                  <p className="mb-4 min-h-80">
                    I'm Nick, a Software Engineering Intern at State Street and a
            fourth-year student at Northeastern University.
                  </p>
                </div>
              </section>
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <div>
                   <ExperienceCardStack
          experiences={[
            {
              date: "Jul 2024 – Present",
              title: "Software Engineer Intern",
              company: "State Street",
              responsibilities: [
                "Architected and implemented a scalable notification management system as a full-stack SaaS product for State Street, enhancing communication efficiency of 3000+ users across multiple departments",
                "Collaborated with cross-functional teams to gather requirements, ensuring alignment with diverse user needs and strict financial industry compliance standards",
              ],
            },
            {
              date: "Feb 2024 – Jul 2024",
              title: "Undergraduate Researcher",
              company:
                "Computational Modeling in Chemical Engineering at Northeastern University",
              responsibilities: [
                "Contributed to RMG-Py, an open-source scientific software by implementing code optimizations and feature development",
                "Led migration of output file format to YAML, improving cross-application interoperability",
                "Implemented efficient string and file handling techniques, achieving up to 50% reduction in execution time",
              ],
            },
            {
              date: "Jan 2024 – May 2024",
              title: "Khoury Teaching Assistant",
              company: "Northeastern University",
              responsibilities: [
                "Mentored cohort of 250+ students in CS 3200 Database Design, providing technical support via Piazza and office hours",
                "Evaluated assignments, labs, and exams, offering constructive feedback to enhance student learning outcomes",
              ],
            },
            {
              date: "Jul 2023 – Dec 2023",
              title: "Inks and Coatings Engineering Intern",
              company: "Nano-C, Inc.",
              responsibilities: [
                "Optimized techniques for surfactant-free Single Walled Carbon Nanotube inks, improving R/T performance by 11%",
                "Developed novel chemical separation and purification methods to drive product refinement",
              ],
            },
            {
              date: "Sep 2022 – May 2023",
              title: "FYELIC Teaching Assistant",
              company: "Northeastern University",
              responsibilities: [
                "Guided 200+ students in C++ programming and electrical prototyping for the Cornerstone of Engineering course",
                "Managed and maintained advanced fabrication equipment including 3D printers, laser-cutters, and woodworking machinery",
              ],
            },
          ]}
        />
                  
                  <div className="mt-12">
                    <LinkWithArrow href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)">
        <p>
          View Full Resume
        </p>
      </LinkWithArrow>
                  </div>
                </div>
              </section>
             <Footer /> 
            </main>
          </div>
         </div>
  )
}