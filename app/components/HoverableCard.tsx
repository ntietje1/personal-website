import { LinkWithArrow } from "./LinkWithArrow";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <div
      className={`flex items-center rounded-full bg-slate-100/5 px-3 py-1 text-xs font-medium leading-5 text-slate-200 border border-white/10 transition-all duration-200 group-hover:bg-white/5 group-hover:border-white/20 group-hover:text-white ${className}`}
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
  logo?: string | StaticImageData;
  className?: string;
}

export function ExperienceCard({
  date,
  title,
  company,
  link,
  responsibilities,
  skills,
  logo,
  className,
}: ExperienceCardProps) {
  return (
    <div className={`flex pl-0 lg:ml-4 lg:pl-32 ${className}`}>
      {/* Date on the left: only show on sm and up */}
      <div className="hidden lg:flex text-right flex-shrink-0 relative pl-6">
        <div className="absolute right-5 top-8 pt-0.5">
          <span className="text-white font-semibold whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
      <div className="flex-grow relative w-full mr-2">
        {/* Vertical line: always show */}
        <div className="absolute ml-3.5 -top-1 -bottom-5 w-1 bg-slate-300/80 m-0" />
        <div className="relative ml-8 w-full group">
          {/* Logo: always show */}
          <div className="absolute -left-10 top-6 w-12 h-12 rounded-full bg-slate-300/80 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-white/70 overflow-hidden">
            {logo ? (
              <Image
                src={logo}
                alt={`${company} logo`}
                width={50}
                height={50}
                className="w-full h-full object-cover rounded-full border-2 border-slate-300/80"
              />
            ) : (
              <div className="w-2 h-2 rounded-full bg-slate-300/80" />
            )}
          </div>

          <div className="custom-frosted-dark rounded-xl ml-6 py-2 px-3.5 transition-transform duration-200 group-hover:translate-x-1 w-full">
            <div className="sm:col-span-8">
              <h3 className="font-semibold leading-snug">
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${title} at ${company} (opens in a new tab)`}
                >
                  <LinkWithArrow>
                    {title} · <span className="inline-block">{company}</span>
                  </LinkWithArrow>
                </Link>
              </h3>
              {/* Date inside card for mobile */}
              <span className="block lg:hidden text-slate-100 font-semibold italic mb-2">
                {date}
              </span>
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
    <div className="min-w-full">
      {experiences.map((experience, index) => (
        <ExperienceCard
          className="w-full pr-12 mt-6"
          key={index}
          {...experience}
        />
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
    <div className={`custom-frosted-dark rounded-xl group ${className}`}>
      <div className="flex flex-col sm:flex-row">
        {/* Image: on top for mobile, left for desktop */}
        <div className="w-full sm:w-1/4 h-auto p-4 flex-shrink-0">
          <div className="sm:order-1">
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
          </div>
        </div>
        {/* Text content */}
        <div className="px-4 sm:pl-0 w-full sm:w-3/4 flex flex-col justify-center">
          <div className="pb-2 pt-2">
            <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="sm:col-span-8">
                <h3 className="font-semibold leading-snug">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${title} (opens in a new tab)`}
                  >
                    <LinkWithArrow>{title}</LinkWithArrow>
                  </Link>
                </h3>
                <ul className="list-disc list-inside text-white/75">
                  {descriptions.map((responsibility, idx) => (
                    <div key={idx} className="mt-2 text-sm text-slate-200">
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
      </div>
    </div>
  );
}

export function ProjectCardStack({
  projects,
}: {
  projects: ProjectCardProps[];
}) {
  return (
    <div className="min-w-full">
      {projects.map((project, index) => (
        <ProjectCard className="w-full mt-6" key={index} {...project} />
      ))}
    </div>
  );
}

interface HoverableButtonProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function HoverableButton({
  href,
  children,
  className,
  target,
  rel,
}: HoverableButtonProps) {
  return (
    <div className={`custom-frosted rounded-xl ${className}`}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="w-full px-6 py-3 text-center text-white font-semibold text-md md:text-lg flex items-center justify-center"
      >
        {children}
      </Link>
    </div>
  );
}
