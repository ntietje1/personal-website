import Image from "next/image";
import headshot_clear from "../../public/images/headshot_clear.png";
import {
  ExperienceCardStack,
  ProjectCardStack,
  HoverableButton,
} from "../components/card";
import ContactMenu from "./contact";
import NavMenu from "./nav";
import Footer from "./footer";
import Link from "next/link";
import { LinkWithArrow } from "../components/link";
import lifelinked_preview from "../../public/images/lifelinked_preview.jpg";
import gitmarks_preview from "../../public/images/gitmarks_preview.png";
import HoverableCard from "app/components/card";
import { Container } from "app/components/layout";
import Headshot from "app/components/headshot";

export default function Page() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative py-16 md:py-24">
        <Container className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-32 md:gap-12">
            {/* Left content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-2xl">
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-lg md:text-xl font-medium text-white">
                    Hi, my name is
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-2">
                    Nick Tietje
                  </h1>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  I'm a Software Engineer.
                </h2>

                <p className="text-lg text-white max-w-lg">
                  I like to build full-stack web and mobile experiences.
                </p>
              </div>

              {/* Headshot */}
              <Headshot
                className="md:hidden mb-8 mt-10 h-64 w-64"
                imageOffset="5rem"
                hoverOffset="3"
              />

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <HoverableButton
                  href="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </HoverableButton>
                <ContactMenu className="flex gap-4 pl-2" />
              </div>
            </div>

            {/* Headshot (hidden on mobile) */}
            <Headshot
              className="hidden md:block h-72 w-72"
              imageOffset="7rem"
              hoverOffset="5"
            />
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" aria-label="About me">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <HoverableCard>
            <div className="prose prose-invert max-w-none px-4 pb-6">
              <p className="text-lg text-slate-200 leading-relaxed">
                Hi! I'm Nick Tietje, and I love building things. I've always
                been a curious and analytical person, which initially drew me to
                Chemical Engineering. However, after dabbling in programming, I
                discovered my true passion for software development and made the
                switch to a combined major in Computer Science and Chemical
                Engineering. As a natural problem solver, this was a perfect
                fit. My unique education has given me the ability to understand
                complex systems and develop solutions to problems in both the
                real world and the digital world.
              </p>

              <p className="text-lg text-slate-200 leading-relaxed">
                I'm an incoming computer science Master's student at
                Northeastern University and I'm currently employed as a Software
                Engineering Intern at Fidelity Investments. In my free time, I
                enjoy developing my own projects/tools, reading, and playing
                board games. Here are some of my interests:
              </p>

              <ul className="space-y-4 text-lg text-slate-200 pt-2">
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <span>
                    <span className="text-white font-semibold">
                      Software Development:
                    </span>{" "}
                    Web apps, mobile apps, and other random tools.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <span>
                    <span className="text-white font-semibold">
                      Board Games:
                    </span>{" "}
                    My favorites include Magic: The Gathering, Wingspan,
                    Dominion, Sheriff of Nottingham, and Star Realms.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <span>
                    <span className="text-white font-semibold">Reading:</span>{" "}
                    Science fiction, fantasy, dystopian/political fiction
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <span>
                    <span className="text-white font-semibold">Fitness:</span>{" "}
                    Cycling, hiking, and general strength training.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <span>
                    <span className="text-white font-semibold">Cooking:</span>{" "}
                    Experimenting with new recipes and setting off the smoke
                    alarm.
                  </span>
                </li>
              </ul>
            </div>
          </HoverableCard>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20" aria-label="Projects">
        <Container maxWidth="lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <ProjectCardStack
              projects={[
                {
                  title: "LifeLinked: A MTG Life Tracking App",
                  descriptions: [
                    "Engineered and launched a cross-platform mobile app, attracting over 1000 active users across Google Play and App Store",
                    "Leveraged Compose Multiplatform to share both native UI and back-end logic between iOS and Android platforms",
                  ],
                  link: "https://github.com/ntietje1/MTG_Life_Total_App",
                  imageSrc: lifelinked_preview,
                  imageAlt: "LifeLinked",
                  skills: [
                    "Kotlin",
                    "Android",
                    "Kotlin Multiplatform",
                    "Compose Multiplatform",
                    "iOS",
                    "Gradle",
                  ],
                },
                {
                  title: "Marks: A GitHub-Integrated Educational Platform",
                  descriptions: [
                    "Developed a GitHub-integrated educational platform to support automated grading, assignment management, and analytics",
                    "Architected multi-tenant back-end in Go, creating RESTful endpoints for classroom creation and management workflows",
                  ],
                  link: "https://gitmarks.org/",
                  imageSrc: gitmarks_preview,
                  imageAlt: "GitMarks",
                  skills: ["Go", "React", "TypeScript", "PostgreSQL"],
                },
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <LinkWithArrow>
              <Link
                href="https://github.com/ntietje1"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xl font-semibold"
              >
                View All Projects
              </Link>
            </LinkWithArrow>
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20" aria-label="Work experience">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Experience
          </h2>
          <ExperienceCardStack
            experiences={[
              {
                date: "Jun 2025 – Present",
                title: "Software Engineer Intern",
                company: "Fidelity Investments",
                link: "https://www.fidelity.com/",
                responsibilities: [
                  "Developing and maintaining features for the Fidelity Youth app under the Experience Engineering business unit",
                ],
                skills: [
                  "Android",
                  "Kotlin",
                  "Jetpack Compose",
                  "Gradle",
                  "Android Studio",
                  "REST APIs",
                ],
              },
              {
                date: "Sep 2024 – Dec 2024",
                title: "Software Engineer Intern",
                company: "Northeastern University",
                link: "https://gitmarks.org/",
                responsibilities: [
                  "Developed a GitHub-integrated educational platform to support automated grading, assignment management, and analytics",
                  "Architected multi-tenant back-end in Go, creating RESTful endpoints for classroom creation and management workflows",
                  "Engineered classroom creation workflow with role-based access control and secure, time-sensitive invite links, streamlining course setup and student onboarding",
                ],
                skills: [
                  "Go",
                  "Fiber",
                  "REST APIs",
                  "PostgreSQL",
                  "React",
                  "Typescript",
                  "Docker",
                ],
              },
              {
                date: "Jul 2024 – Sep 2024",
                title: "Software Engineer Intern",
                company: "State Street",
                link: "https://www.statestreet.com/us/en/individual",
                responsibilities: [
                  "Architected and implemented a scalable notification management system as a full-stack SaaS product for State Street, enhancing communication efficiency of 3000+ users across multiple departments",
                  "Collaborated with cross-functional teams to gather requirements, ensuring alignment with diverse user needs and strict financial industry compliance standards",
                ],
                skills: [
                  "Java",
                  "MySQL",
                  "REST APIs",
                  "AWS",
                  "React",
                  "Javascript",
                ],
              },
              {
                date: "Feb 2024 – Jul 2024",
                title: "Undergraduate Researcher",
                company: "Northeastern University",
                link: "https://rmg.mit.edu/",
                responsibilities: [
                  "Contributed to RMG-Py, an open-source computational modeling software, by developing features and code optimizations",
                  "Led migration of output file format to YAML, improving cross-application interoperability",
                  "Implemented efficient string and file handling techniques, achieving up to 50% reduction in execution time",
                ],
                skills: ["Python", "Git", "Linux"],
              },
              {
                date: "Jan 2024 – May 2024",
                title: "Khoury Teaching Assistant",
                company: "Northeastern University",
                link: "https://www.khoury.northeastern.edu/",
                responsibilities: [
                  "Mentored cohort of 250+ students in CS 3200 Database Design, providing technical support via Piazza and office hours",
                  "Evaluated assignments, labs, and exams, offering constructive feedback to enhance student learning outcomes",
                ],
                skills: ["Python", "MySQL", "Docker", "Git", "REST APIs"],
              },
              {
                date: "Jul 2023 – Dec 2023",
                title: "Inks and Coatings Engineering Intern",
                company: "Nano-C, Inc.",
                link: "https://www.nano-c.com/",
                responsibilities: [
                  "Optimized techniques for surfactant-free Single Walled Carbon Nanotube inks, improving R/T performance by 11%",
                  "Developed novel chemical separation and purification methods to drive product refinement",
                ],
                skills: [
                  "Nano-Technology",
                  "Data Analysis",
                  "Wet Lab Techniques",
                ],
              },
              {
                date: "Sep 2022 – May 2023",
                title: "FYELIC Teaching Assistant",
                company: "Northeastern University",
                link: "https://makerspaces.northeastern.edu/spaces/fyelic/",
                responsibilities: [
                  "Guided 200+ students in C++ programming and electrical prototyping for the Cornerstone of Engineering course",
                  "Managed and maintained advanced fabrication equipment including 3D printers, laser-cutters, and woodworking machinery",
                ],
                skills: [
                  "C++",
                  "Arduino",
                  "MATLAB",
                  "3D Printing",
                  "Laser Cutting",
                ],
              },
            ]}
          />
          <div className="text-center mt-12">
            <LinkWithArrow>
              <Link
                href="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xl font-semibold"
              >
                View Full Resume
              </Link>
            </LinkWithArrow>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" aria-label="Contact">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Let's Connect
          </h2>
          <HoverableCard className="text-center py-8">
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or just
              having a chat about technology.
            </p>
            <ContactMenu className="justify-center mt-8" />
          </HoverableCard>
        </Container>
      </section>

      <footer className="py-8">
        <Container>
          <Footer className="text-center" />
        </Container>
      </footer>
    </div>
  );
}
