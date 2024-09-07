import HoverableCard from "../components/card";
import { LinkWithArrow } from "../components/link";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

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
    <div className="mb-8 flex pl-32">
      <div className="text-right flex-shrink-0 relative top-1.5">
        <div className="absolute right-6 top-12 pt-2">
          <span className="text-purple-300 font-semibold whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
      <div className="flex-grow relative">
        <div className="absolute left-0 -top-1 -bottom-7 w-px bg-purple-400 m-0" />{" "}
        {/* -top-10 */}
        <div className="relative ml-6">
          <div className="absolute -left-9 top-10 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center z-10">
            {/* <BriefcaseIcon className="w-4 h-4 text-purple-900" /> */}
          </div>

          <HoverableCard className="mt-6 ml-7">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
              className="flex"
            >
              <div className="z-10 sm:col-span-8">
                <h3 className="font-semibold leading-snug">
                  <LinkWithArrow>
                    {title} · <span className="inline-block">{company}</span>
                  </LinkWithArrow>
                </h3>
                <ul className="list-disc list-inside text-purple-50">
                  {responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="mt-2 text-sm">
                      {responsibility}
                    </div>
                  ))}
                </ul>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {skills.map((tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </HoverableCard>
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl min-w-xl">
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
    <HoverableCard className={`mt-12 ${className}`}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${title} (opens in a new tab)`}
        className="flex"
      >
        <div className="w-1/5 h-full pr-4 pb-4 pt-2 z-10">
          <div className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
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
                layout="responsive"
                width={200}
                height={100}
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <div className="pl-4 w-3/4 z-10">
          <div className="pb-2 pt-2">
            <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="z-10 sm:col-span-8">
                <h3 className="font-medium leading-snug">
                  <LinkWithArrow>{title}</LinkWithArrow>
                </h3>
                <ul className="list-disc list-inside text-purple-50">
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
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </a>
    </HoverableCard>
  );
}

export function ProjectCardStack({
  projects,
}: {
  projects: ProjectCardProps[];
}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl min-w-xl">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
