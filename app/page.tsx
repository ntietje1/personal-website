import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import headshot from "../public/images/headshot.jpg";
import education from "../public/images/education_light.png";
import { ExperienceCardStack, CenteredIconCardRow } from "./components/card";
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
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="w-full max-w-md pb-6">
              <Image
                src={headshot}
                alt=""
                width={200}
                height={200}
                className="rounded-full border-2 border-white/50"
              />
            </div>
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
        <main id="content" className="pt-24 lg:w-2/3 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div className="max-w-4xl mx-auto pt-2 pb-8">
              <p>
                I'm Nick, a Software Engineering Intern at State Street and a
                fourth-year student at Northeastern University. I'm Nick, a
                Software Engineering Intern at State Street and a fourth-year
                student at Northeastern University. I'm Nick, a Software
                Engineering Intern at State Street and a fourth-year student at
                Northeastern University. I'm Nick, a Software Engineering Intern
                at State Street and a fourth-year student at Northeastern
                University. I'm Nick, a Software Engineering Intern at State
                Street and a fourth-year student at Northeastern University. I'm
                Nick, a Software Engineering Intern at State Street and a
                fourth-year student at Northeastern University. I'm Nick, a
                Software Engineering Intern at State Street and a fourth-year
                student at Northeastern University. I'm Nick, a Software
                Engineering Intern at State Street and a fourth-year student at
                Northeastern University. I'm Nick, a Software Engineering Intern
                at State Street and a fourth-year student at Northeastern
                University.
              </p>
            </div>
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
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
                    company: "CoMoChEng at Northeastern University",
                    link: "https://rmg.mit.edu/",
                    responsibilities: [
                      "Contributed to RMG-Py, an open-source scientific software by implementing code optimizations and feature development",
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
  return (
    <section className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 gap-8">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
        <div className="w-full max-w-md">
          <Image
            src={headshot}
            alt=""
            width={400}
            height={400}
            className="rounded-full mx-auto border-4 border-white/50"
          />
        </div>
        <div className="w-full max-w-md space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">Nick Tietje</h1>
          <p className="text-xl text-purple-100">
            I'm Nick, a Software Engineering Intern at State Street and a
            fourth-year student at Northeastern University.
          </p>
          <ContactMenu />
          <a
            href="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="w-5 h-5 mr-2"
              />
              <span>Download Resume</span>
            </button>
          </a>
        </div>
      </div>
      <div className="pt-12 sm:w-7/8 md:w-6/8 lg:w-7/8 mx-auto max-w-7xl">
        <CenteredIconCardRow
          props={[
            {
              icon: <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />,
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
              body: `Northeastern University\nM.S. in Computer Science\nB.S. in Computer Science and Chemical Engineering`,
            },
          ]}
        ></CenteredIconCardRow>
      </div>

      {/* <div className="pt-12">
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
      </div> */}
    </section>
  );
}
