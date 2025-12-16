import Link from "next/link";
import { ProjectCardStack } from "../../components/HoverableCard";
import { LinkWithArrow } from "../../components/LinkWithArrow";
import lifelinked_preview from "../../../public/images/lifelinked_preview.jpg";
import gitmarks_preview from "../../../public/images/gitmarks_preview.png";
import wizard_archive_preview from "../../../public/images/wizard_archive_preview.png";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20" aria-label="Projects">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-8">
        <ProjectCardStack
          projects={[
            {
              title: "(WIP) The Wizard's Archive: A TTRPG Notes Manager for DMs and Players",
              descriptions: [
                "Developed a real-time collaborative React web application for note taking with block-level sharing",
                "Designed virtual file system and highly interactive editor for notes, maps, files, and more",
                "Built novel tagging and templating system for sharing, sessions, and custom categories",
              ],
              link: "https://github.com/ntietje1/dnd-notes-tool",
              imageSrc: wizard_archive_preview,
              imageAlt: "The Wizard's Archive",
              skills: [
                "React",
                "TypeScript",
                "Convex",
                "Blocknote.js",
                "Tailwind CSS",
                "Tanstack Query",
                "Shadcn/UI",
              ],
            },
            {
              title: "LifeLinked: A MTG Life Tracking App",
              descriptions: [
                "Engineered and launched a cross-platform mobile app, attracting over 8000 installs across Google Play and App Store",
                "Leveraged Compose Multiplatform to share both native UI and back-end logic between iOS and Android platforms",
                "Adhered to Android/iOS design and quality standards by performing beta testing and applying clean architecture techniques",
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
                "SQLite",
                "Koin",
                "Dependency Injection",
                "MVVM",
              ],
            },
            {
              title: "GitMarks: A GitHub-Integrated Educational Platform",
              descriptions: [
                "Developed a GitHub-integrated educational platform to support automated grading, assignment management, and analytics",
                "Deployed in a pilot program across several Northeastern University CS/DS courses",
                "Implemented a comprehensive authentication system using JWTs, GoFiber, and extensive integration with the GitHub API for secure user and classroom management",
              ],
              link: "https://github.com/NUSpecialProjects/gitmarks",
              imageSrc: gitmarks_preview,
              imageAlt: "GitMarks",
              skills: [
                "Go",
                "React",
                "TypeScript",
                "PostgreSQL",
                "AWS",
                "GoFiber",
                "JWT",
                "Docker",
                "React Query",
              ],
            },
          ]}
        />
      </div>
      <div className="text-center mt-8">
        <LinkWithArrow className="group">
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
    </section>
  );
}
