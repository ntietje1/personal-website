import Link from "next/link";
import { ExperienceCardStack } from "../../components/HoverableCard";
import { LinkWithArrow } from "../../components/LinkWithArrow";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20" aria-label="Work experience">
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
            logo: "/images/company-logos/fidelity_logo.jpeg",
            responsibilities: [
              "Developing youth features for the flagship Fidelity app, brokerage technology experience engineering",
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
            logo: "/images/company-logos/nu_logo.webp",
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
            logo: "/images/company-logos/statestreet_logo.jpeg",
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
            logo: "/images/company-logos/nu_comocheng_logo.png",
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
            logo: "/images/company-logos/nu_khoury_logo.jpg",
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
            logo: "/images/company-logos/nanoc_logo.png",
            responsibilities: [
              "Optimized techniques for surfactant-free Single Walled Carbon Nanotube inks, improving R/T performance by 11%",
              "Developed novel chemical separation and purification methods to drive product refinement",
            ],
            skills: ["Nano-Technology", "Data Analysis", "Wet Lab Techniques"],
          },
          {
            date: "Sep 2022 – May 2023",
            title: "FYELIC Teaching Assistant",
            company: "Northeastern University",
            link: "https://makerspaces.northeastern.edu/spaces/fyelic/",
            logo: "/images/company-logos/nu_coe_logo.png",
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
      <div className="text-center mt-8">
        <LinkWithArrow className="group">
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
    </section>
  );
}
