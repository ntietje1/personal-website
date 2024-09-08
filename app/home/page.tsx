import Image from "next/image";
import headshot from "../../public/images/headshot.jpg";
import { ExperienceCardStack, ProjectCardStack } from "./card";
import ContactMenu from "./contact";
import NavMenu from "./nav";
import Footer from "./footer";
import Link from "next/link";
import { LinkWithArrow } from "../components/link";
import lifelinked_preview from "../../public/images/lifelinked_preview.jpg";
import huskerly_preview from "../../public/images/huskerly_preview.jpg";
import portfolio_preview from "../../public/images/portfolio_preview.png";

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-8 font-sans md:px-12 md:py-16 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left side */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-w-64 lg:flex-col lg:justify-between lg:pt-24 lg:pb-6 pb-4">
          <div className="w-full max-w-md pb-6">
            <Image
              src={headshot}
              alt=""
              width={200}
              height={200}
              className="rounded-full border-2 border-purple-200/50"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>

          <h1>
            <Link
              href="/"
              className="text-4xl font-bold tracking-tight text-purple-50 sm:text-5xl"
            >
              Nick Tietje
            </Link>
          </h1>
          <h2 className="mt-3 text-lg font-semibold tracking-tight text-purple-50 sm:text-xl">
            Software Engineer
          </h2>
          <p className="mt-4 max-w-xs font-normal leading-normal text-purple-50/90 sm:text-lg">
            Building the next generation of web and mobile experiences.
          </p>
          <div className="flex flex-col h-full">
            <NavMenu className="pt-6" />
            <ContactMenu className="lg:pt-4 lg:mt-auto lg:-ml-4" />
          </div>
        </header>
        {/* Right side */}
        <main id="content" className="pt-30 lg:pt-24">
          <section
            id="about"
            className="mb-12 scroll-mt-16 md:mb-16 lg:mb-24 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-200 lg:sr-only">
                About
              </h2>
            </div>
            <div className="max-w-4xl mx-auto mt-8 pb-8 lg:ml-10 font-medium text-lg text-gray-200">
              <p className="pb-2">
                Three years ago, I was a Chemical Engineering student who had
                never written a line of code. Today, I'm a Software Engineering
                Intern at State Street, while completing both my B.S. in
                Computer Science and Chemical Engineering at Northeastern
                University and my M.S. in Computer Science.
              </p>
              <p className="pb-2">
                I love creating practical tools and sharing them with the world.
                In my free time, I've released a mobile app for tracking Magic:
                The Gathering games, which is quickly approaching 1000 installs.
                I've also contributed to open-source projects like RMG-Py, a
                computational modeling software used and developed by
                researchers at MIT and Northeastern University.
              </p>
              <p className="pb-2">
                Beyond coding, I'm an avid board gamer, reader, cyclist, and
                amateur chef, always seeking new challenges and experiences.
              </p>
            </div>
          </section>
          <section
            id="experience"
            className="mb-12 scroll-mt-16 md:mb-16 lg:mb-24 lg:scroll-mt-24"
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
              <div className="mt-12 ml-3 group group/link">
                <LinkWithArrow>
                  <Link
                    href="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Resume (opens in a new tab)"
                    className="font-semibold text-lg"
                  >
                    View Full Resume
                  </Link>
                </LinkWithArrow>
              </div>
            </div>
          </section>
          <section
            id="projects"
            className="mb-12 scroll-mt-16 md:mb-16 lg:mb-24 lg:scroll-mt-24"
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
                    title: "LifeLinked: A MTG Life Tracking App",
                    descriptions: [
                      "Engineered and launched a cross-platform mobile app, attracting over 500 active users across Google Play and App Store",
                      "Leveraged Compose Multiplatform to share both native UI and back-end logic between iOS and Android platforms",
                      "Adhered to Android/iOS design and quality standards by performing beta testing and applying clean architecture techniques",
                    ],
                    link: "https://github.com/ntietje1/MTG_Life_Total_App",
                    imageSrc: lifelinked_preview,
                    imageAlt: "LifeLinked",
                    skills: [
                      "Kotlin",
                      "Android",
                      "Compose Multiplatform",
                      "Gradle",
                      "Ktor",
                      "Koin",
                      "Android Studio",
                      "XCode",
                      "S3",
                      "Lambda",
                      "API Gateway",
                    ],
                    children: (
                      <div className="flex">
                        <div className="relative mt-3 inline-flex items-center text-sm font-medium text-purple-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                          </svg>
                          <span>{"800+"}</span>
                        </div>
                        {/* <div className="mt-3 flex space-x-2 ml-4">
                          <img
                            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                            alt="Get it on Android"
                            className="h-12 -mt-2 -mb-2"
                          />

                          <a
                            href="https://apps.apple.com/us/app/lifelinked-mtg-life-counter/id6503708612"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                              alt="Get it on iOS"
                              className="h-8"
                            />
                          </a>
                        </div> */}
                      </div>
                    ),
                  },
                  {
                    title: "Huskerly: A Real-Time Messaging App",
                    descriptions: [
                      "Architected and developed a feature-rich real-time messaging platform with organization management, channels, direct messaging, and OAuth 2.0 authentication",
                      "Designed and deployed a microservice-based cloud application with Kubernetes on AWS EKS to efficiently handle varying workloads and ensure high availability and reliability",
                    ],
                    link: "https://github.com/kennybc/huskerly-microservices",
                    imageSrc: huskerly_preview,
                    imageAlt: "Huskerly",
                    skills: [
                      "Python",
                      "Javascript",
                      "React",
                      "RESTful APIs",
                      "Websockets",
                      "MySQL",
                      "Terraform",
                      "Kubernetes",
                      "EKS",
                      "RDS",
                      "DynamoDB",
                      "S3",
                    ],
                    // installs: "800+",
                  },
                  {
                    title: "My Personal Portfolio: nicktietje.com",
                    descriptions: [
                      "Designed and developed a personal portfolio website using Next.js, React.js, and Tailwind CSS hosted with Vercel",
                      "Implemented responsive design and accessibility features to ensure optimal user experience across all devices and screen readers",
                    ],
                    link: "",
                    imageSrc: portfolio_preview,
                    imageAlt: "Portfolio",
                    skills: ["Typescript", "React", "Next.js", "Tailwind CSS"],
                    children: <div></div>,
                  },
                ]}
              />
            </div>
            <div className="mt-12 ml-3 group group/link">
              <LinkWithArrow>
                <Link
                  href="https://github.com/ntietje1"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View All My Projects (opens in a new tab)"
                  className="font-semibold text-lg"
                >
                  View All Projects
                </Link>
              </LinkWithArrow>
            </div>
          </section>
          <Footer className="mb-6 pl-3" />
        </main>
      </div>
    </div>
  );
}
