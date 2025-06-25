import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { LinkWithArrow } from "./LinkWithArrow";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <div
      className={`flex items-center rounded-full bg-white/5 backdrop-blur-sm px-3 py-1 text-xs font-medium leading-5 text-slate-200 border border-white/10 transition-all duration-200 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white ${className}`}
    >
      {tech}
    </div>
  );
}

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  link: string;
  responsibilities: string[];
  skills: string[];
}

export function ExperienceCard({
  date,
  title,
  company,
  link,
  responsibilities,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="mb-8 flex pl-32 group">
      <div className="text-right flex-shrink-0 relative top-1.5 pl-6">
        <div className="absolute right-6 top-12 pt-2.5">
          <span className="text-slate-200 font-semibold whitespace-nowrap transition-colors duration-200 group-hover:text-white">
            {date}
          </span>
        </div>
      </div>
      <div className="flex-grow relative">
        <div className="absolute -top-1 -bottom-7 w-1 bg-white/50 m-0" />
        <div className="relative ml-6">
          <div className="absolute -left-8 top-11 w-5 h-5 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-white/70" />

          <div className="custom-frosted-dark rounded-xl mt-6 ml-7 transition-transform duration-200 group-hover:translate-x-1">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
              className="flex"
            >
              <div className="sm:col-span-8">
                <h3 className="font-semibold leading-snug">
                  <LinkWithArrow>
                    {title} · <span className="inline-block">{company}</span>
                  </LinkWithArrow>
                </h3>
                <ul className="list-disc list-inside text-slate-100">
                  {responsibilities.map((responsibility, idx) => (
                    <div
                      key={idx}
                      className="mt-2 text-sm transition-colors duration-200 group-hover:text-white"
                    >
                      {responsibility}
                    </div>
                  ))}
                </ul>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {skills.map((tech) => (
                    <TechBadge key={tech} tech={tech} className="mr-1.5 mt-2" />
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceCardStack({
  experiences,
}: {
  experiences: ExperienceCardProps[];
}) {
  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  descriptions: string[];
  link: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  skills: string[];
  children?: React.ReactNode;
  className?: string;
}

export function ProjectCard({
  title,
  descriptions,
  link,
  imageSrc,
  imageAlt,
  skills,
  children,
  className,
}: ProjectCardProps) {
  return (
    <div className={`custom-frosted-dark rounded-xl mt-12 ${className}`}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${title} (opens in a new tab)`}
        className="flex"
      >
        <div className="w-1/5 h-full pr-4 pb-4 pt-2">
          <div className=" sm:order-1 sm:col-span-2 sm:translate-y-1">
            {typeof imageSrc === "string" ? (
              <img
                alt={imageAlt}
                loading="lazy"
                width="100%"
                height="auto"
                decoding="async"
                style={{ color: "transparent" }}
                src={imageSrc}
              />
            ) : (
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={200}
                height={100}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>
        <div className="pl-4 w-3/4">
          <div className="pb-2 pt-2">
            <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="sm:col-span-8">
                <h3 className="font-semibold leading-snug">
                  <LinkWithArrow>{title}</LinkWithArrow>
                </h3>
                <ul className="list-disc list-inside text-white/75">
                  {descriptions.map((responsibility, idx) => (
                    <div key={idx} className="mt-2 text-sm">
                      {responsibility}
                    </div>
                  ))}
                  {children}
                </ul>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {skills.map((tech) => (
                    <TechBadge key={tech} tech={tech} className="mr-1.5 mt-2" />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export function ProjectCardStack({
  projects,
}: {
  projects: ProjectCardProps[];
}) {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}