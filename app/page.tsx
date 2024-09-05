import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import headshot from "../public/images/headshot.jpg";
import education from "../public/images/education_light.png";
import {
  ExperienceCardStack,
  CenteredIconCardRow,
  ProjectCardStack,
} from "./components/card";
import ContactMenu from "./components/contact";
import NavMenu from "./components/nav";
import Footer from "./components/footer";
import { Link, LinkWithArrow } from "./components/link";

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left side */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24 pb-4">
          <div>
            <div className="w-full max-w-md pb-6">
              <Image
                src={headshot}
                alt=""
                width={200}
                height={200}
                className="rounded-full border-2 border-purple-200/50"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-purple-50 sm:text-5xl">
              <a href="/">Nick Tietje</a>
            </h1>
            <h2 className="mt-3 text-lg font-semibold tracking-tight text-purple-50 sm:text-xl">
              Software Engineer
            </h2>
            <p className="mt-4 max-w-xs font-normal leading-normal text-purple-50/90 sm:text-lg">
              I build web and mobile apps that make life easier.
            </p>
            <NavMenu />
          </div>
          <ContactMenu />
        </header>
        {/* Right side */}
        <main id="content" className="pt-30 lg:w-2/3 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-200 lg:sr-only">
                About
              </h2>
            </div>
            <div className="max-w-4xl mx-auto pt-2 pb-8 font-medium text-lg text-purple-50/85">
              <p className="pb-2 ">
                Three years ago, I was a Chemical Engineering student who had
                never written a line of code. Today, I'm a Software Engineering
                Intern at State Street, while completing both my B.S. in
                Computer Science and Chemical Engineering at Northeastern
                University and my M.S. in Computer Science.
              </p>
              <p className="pb-2">
                I love building tools that I find useful, then sharing them with
                the rest of the world. In my free time, I've released a mobile
                app for tracking Magic: The Gathering games that is quickly
                approaching 1000 installs. I've also contributed to open-source
                projects like RMG-Py, a computational modeling software used by
                researchers at MIT and Northeastern University.
              </p>
              <p className="pb-2">
                When I'm not at the computer, you can find me playing board
                games, reading, biking, or trying out new recipes in the
                kitchen.
              </p>
              {/* <div className="pt-12 px-4 mx-auto">
                <CenteredIconCardRow
                  props={[
                    {
                      icon: (
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="w-8 h-8"
                        />
                      ),
                      title: "Experience",
                      body: `2+ years\nSoftware Engineering Experience\nFull-Stack, Back-End, and Mobile App Development`,
                    },
                    {
                      icon: (
                        <Image
                          src={education}
                          alt=""
                          width={200}
                          height={200}
                          className="w-9 h-9"
                        />
                      ),
                      title: "Education",
                      body: `Northeastern University\nM.S. in Computer Science\nB.S. in Computer Science & Chemical Engineering`,
                    },
                  ]}
                ></CenteredIconCardRow>
              </div> */}
            </div>
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ExperienceCardStack
                experiences={[
                  {
                    date: "Jul 2024 – Present",
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
              <div className="mt-12">
                <LinkWithArrow
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Resume (opens in a new tab)"
                >
                  View Full Resume
                </LinkWithArrow>
              </div>
            </div>
          </section>
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <div>
              <ProjectCardStack
                projects={[
                  {
                    title: "LifeLinked",
                    description: "Description here",
                    link: "https://github.com/ntietje1/MTG_Life_Total_App",
                    imageSrc: "https://via.placeholder.com/150x100",
                    imageAlt: "Placeholder",
                    skills: ["Kotlin", "Android", "Compose Multiplatform"],
                    installs: "800+",
                  },
                  {
                    title: "LifeLinked",
                    description: "Description here",
                    link: "https://github.com/ntietje1/MTG_Life_Total_App",
                    imageSrc: "https://via.placeholder.com/150x100",
                    imageAlt: "Placeholder",
                    skills: ["Kotlin", "Android", "Compose Multiplatform"],
                    installs: "800+",
                  },
                  {
                    title: "LifeLinked",
                    description: "Description here",
                    link: "https://github.com/ntietje1/MTG_Life_Total_App",
                    imageSrc: "https://via.placeholder.com/150x100",
                    imageAlt: "Placeholder",
                    skills: ["Kotlin", "Android", "Compose Multiplatform"],
                    installs: "800+",
                  },
                  {
                    title: "LifeLinked",
                    description: "Description here",
                    link: "https://github.com/ntietje1/MTG_Life_Total_App",
                    imageSrc: "https://via.placeholder.com/150x100",
                    imageAlt: "Placeholder",
                    skills: ["Kotlin", "Android", "Compose Multiplatform"],
                    installs: "800+",
                  },
                ]}
              />
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
