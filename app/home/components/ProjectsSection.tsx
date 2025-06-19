import Link from "next/link";
import { ProjectCardStack } from "../../components/HoverableCard";
import { LinkWithArrow } from "../../components/LinkWithArrow";
import lifelinked_preview from "../../../public/images/lifelinked_preview.jpg";
import gitmarks_preview from "../../../public/images/gitmarks_preview.png";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20" aria-label="Projects">
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
    </section>
  );
} 