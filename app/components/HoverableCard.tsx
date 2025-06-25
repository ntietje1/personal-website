import { LinkWithArrow } from "./LinkWithArrow";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface HoverableCardProps {
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
  intense?: boolean;
}

export default function HoverableCard({
  children,
  className,
  compact = false,
  intense = false,
}: HoverableCardProps) {
  return (
    <div className={`relative flex group/link group ${className}`}>
      {/* Gradient */}
      <div
        className={`${compact ? "absolute inset-0" : "absolute -inset-1"} ${
          intense
            ? "group-hover:opacity-90 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-pink-500/60"
            : "group-hover:opacity-70 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
        } opacity-40 rounded-xl blur-md transition-opacity duration-200`}
      />

      {/* Glass effect */}
      <div
        className={`${
          compact
            ? "absolute inset-0"
            : "absolute -inset-x-4 -inset-y-4 lg:-inset-x-6"
        } rounded-xl border-2 border-white/10 bg-black/10 backdrop-blur-lg shadow-[0_6px_24px_0_rgba(0,0,0,0.15)] transition-all duration-200 group-hover:border-white/15 group-hover:bg-black/8 motion-reduce:transition-none`}
      />

      {/* Content */}
      <div className="relative w-full">{children}</div>
    </div>
  );
}

interface TechBadgeProps {
  tech: string;
  className?: string;
}

function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <div
      className={`flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium leading-5 text-slate-200 border border-white/10 transition-all duration-200 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white ${className}`}
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
    <div className={`mb-8 flex pl-0 sm:pl-32 ${className}`}>
      {/* Date on the left: only show on sm and up */}
      <div className="hidden sm:flex text-right flex-shrink-0 relative top-0.5 pl-6">
        <div className="absolute right-6 top-12">
          <span className="text-slate-200 font-semibold whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
      <div className="flex-grow relative w-full">
        {/* Vertical line: always show */}
        <div className="absolute ml-2.5 -top-1 -bottom-7 w-1 bg-white/50 m-0" />
        <div className="relative ml-8 w-full group">
          {/* Logo: always show */}
          <div className="absolute -left-10 top-6 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center z-10 transition-all duration-200 group-hover:scale-110 group-hover:bg-white/70 overflow-hidden">
            {logo ? (
              <Image
                src={logo}
                alt={`${company} logo`}
                width={36}
                height={36}
                className="w-full h-full object-cover rounded-full p-0.5"
              />
            ) : (
              <div className="w-2 h-2 rounded-full bg-white/70" />
            )}
          </div>

          <HoverableCard className="mt-6 ml-8 sm:ml-10 transition-transform duration-200 group-hover:translate-x-1 w-full">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
              className="flex flex-col"
            >
              <div className="z-10 sm:col-span-8">
                <h3 className="font-semibold leading-snug">
                  <LinkWithArrow>
                    {title} · <span className="inline-block">{company}</span>
                  </LinkWithArrow>
                </h3>
                {/* Date inside card for mobile */}
                <span className="block sm:hidden text-slate-200 font-semibold italic mb-2">
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
    <div className="min-w-full">
      {experiences.map((experience, index) => (
        <ExperienceCard className="w-full pr-16" key={index} {...experience} />
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
        className="flex flex-col sm:flex-row"
      >
        {/* Image: on top for mobile, left for desktop */}
        <div className="w-full sm:w-1/5 h-auto pr-0 md:pr-4 pb-4 pt-2 z-10 flex-shrink-0">
          <div className="sm:order-1 sm:col-span-2 sm:translate-y-1">
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
        <div className="pl-0 sm:pl-4 w-full sm:w-4/5 z-10 flex flex-col justify-center">
          <div className="pb-2 pt-2">
            <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="z-10 sm:col-span-8">
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
    </HoverableCard>
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
        <ProjectCard className="w-full" key={index} {...project} />
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
    <HoverableCard className={className} compact intense>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="w-full px-6 py-3 text-center text-white font-semibold text-md md:text-lg flex items-center justify-center"
      >
        {children}
      </Link>
    </HoverableCard>
  );
}
