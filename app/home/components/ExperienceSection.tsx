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
            date: "Aug 2025 – Present",
            title: "Senior Software Engineer Intern",
            company: "Northeastern University (NExT Consulting)",
            link: "https://nunext.dev/",
            logo: "/images/company-logos/next_logo.png",
            responsibilities: [
              "Delivering technical leadership to 6 student development teams, guiding architectural decisions and best practices",
              "Mentoring 30+ undergraduate developers through complex software challenges and professional skills development",
              "Evaluating code quality, system design, and client communications to maintain high delivery standards for industry partner",
            ],
            skills: [
              "Go",
              "Python",
              "REST APIs",
              "PostgreSQL",
              "React",
              "Typescript",
              "Docker",
            ],
          },
          {
            date: "Jun 2025 – Aug 2025",
            title: "Software Engineer Intern",
            company: "Fidelity Investments",
            link: "https://www.fidelity.com/",
            logo: "/images/company-logos/fidelity_logo.jpeg",
            responsibilities: [
              "Developed request money and spending insight features for Fidelity’s Android app, enabling parents to monitor and manage youth financial activity",
              "Streamlined teen user experience by implementing role-based feature flags to dynamically suppress or customize features",
              "Prototyped Kotlin Multiplatform migration for a critical internal CMS service to evaluate cross-platform development viability",
            ],
            skills: [
              "Android",
              "Kotlin",
              "Jetpack Compose",
              "Gradle",
              "Android Studio",
              "REST APIs",
              "LaunchDarkly",
            ],
          },
          {
            date: "Sep 2024 – Dec 2024",
            title: "Software Engineer Intern",
            company: "Northeastern University (NExT Consulting)",
            link: "https://nunext.dev/",
            logo: "/images/company-logos/next_logo.png",
            responsibilities: [
              "Developed GitMarks, an educational platform that integrates GitHub workflows into classroom coding assignments",
              "Gathered requirements from professors and deployed a pilot program across several Northeastern University CS/DS courses",
              "Integrated with GitHub API to enable automatic student repository creation, assignment setup/distribution, submission deadlines, and grade-enabled pull requests with TA feedback",
            ],
            skills: [
              "Go",
              "Fiber",
              "REST APIs",
              "PostgreSQL",
              "React",
              "Typescript",
              "Docker",
              "JWT",
            ],
          },
          {
            date: "Jul 2024 – Sep 2024",
            title: "Software Engineer Intern",
            company: "State Street",
            link: "https://www.statestreet.com/us/en/individual",
            logo: "/images/company-logos/statestreet_logo.jpeg",
            responsibilities: [
              "Designed a scalable internal notification management system, enhancing communication efficiency of 3000+ users",
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
              "Mentored 250+ students in CS 3200 Database Design, providing support through Piazza discussions and one-on-one office hours",
              "Evaluated assignments, labs, and exams, offering constructive feedback to improve student learning outcomes",
            ],
            skills: ["Python", "Flask", "MySQL", "Docker", "Git", "REST APIs"],
          },
          {
            date: "Jul 2023 – Dec 2023",
            title: "Research and Development Intern",
            company: "Nano-C, Inc.",
            link: "https://www.nano-c.com/",
            logo: "/images/company-logos/nanoc_logo.png",
            responsibilities: [
              "Optimized techniques for surfactant-free Single Walled Carbon Nanotube inks, improving R/T performance by 11%",
              "Developed novel chemical separation and purification methods to drive product refinement",
            ],
            skills: [
              "Nano-Technology",
              "Data Analysis",
              "Wet Lab Techniques",
              "DOE",
            ],
          },
          {
            date: "Sep 2022 – May 2023",
            title: "FYELIC Teaching Assistant",
            company: "Northeastern University",
            link: "https://makerspaces.northeastern.edu/spaces/fyelic/",
            logo: "/images/company-logos/nu_coe_logo.png",
            responsibilities: [
              "Guided 200+ students in C++ programming and electrical prototyping for the Cornerstone of Engineering course",
              "Managed advanced fabrication equipment including 3D printers, laser-cutters, and woodworking machinery",
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
