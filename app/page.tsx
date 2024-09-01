import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import headshot from "../public/images/headshot.jpg";
import education from "../public/images/education_light.png";
import { ExperienceCardStack, CenteredIconCardRow } from "./components/card";

export default function Page() {
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

      <div className="pt-12">
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
      </div>
    </section>
  );
}
