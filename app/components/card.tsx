"use client";
import React, { useState } from "react";
import { LinkWithArrowNoAnchor, ArrowIcon } from "./link";

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <div
    className={`p-4 rounded-lg shadow-lg backdrop-blur ${className}`}
    style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
  >
    {children}
  </div>
);

const CardHeader: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => <div className={`mb-0 ${className}`}>{children}</div>;

const CardTitle: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>;

const CardContent: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className, children }) => (
  <div className={`mt-0 ${className}`}>{children}</div>
);

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
        <div className="absolute right-8 top-16 pt-2">
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

          <HoverableCard className="mt-6 ml-6">
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
              className="flex"
            >
              <div className="z-10 sm:col-span-8">
                <h3 className="font-semibold leading-snug">
                  <LinkWithArrowNoAnchor>
                    {title} · <span className="inline-block">{company}</span>
                  </LinkWithArrowNoAnchor>
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
            </a>
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

interface HoverableCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverableCard({ children, className }: HoverableCardProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const gradientStyle = isHovered
    ? {
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(163, 66, 255, 0.11), rgba(156, 116, 194, 0.08))`,
      }
    : {};

  return (
    <div
      className={`relative flex group/link group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={gradientStyle}
        className="absolute -inset-x-4 -inset-y-4 z-0 hidden p-4 transition-all bg-white/4 shadow-md backdrop-blur rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-bg"
      ></div>
      {children}
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  skills: string[];
  installs: string;
}

export function ProjectCard({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  skills,
  installs,
}: ProjectCardProps) {
  return (
    <HoverableCard className="mt-12">
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${title} (opens in a new tab)`}
        className="flex"
      >
        <div className="w-1/5 h-full pr-4 pb-4 pt-2 z-10">
          <div className="rounded border-3 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
            <img
              alt={imageAlt}
              loading="lazy"
              width="100%"
              height="auto"
              decoding="async"
              style={{ color: "transparent" }}
              src={imageSrc}
            />
          </div>
        </div>
        <div className="pl-4 w-3/4 z-10">
          <div className="pb-2 pt-2">
            <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="z-10 sm:col-span-8">
                <h3 className="font-medium leading-snug">
                  <LinkWithArrowNoAnchor>{title}</LinkWithArrowNoAnchor>
                </h3>
                <ul className="list-disc list-inside text-purple-50">
                  <div className="mt-2 text-sm">{description}</div>
                  <div className="relative mt-2 inline-flex items-center text-sm font-medium text-purple-50">
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
                    <span>{installs}</span>
                  </div>
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

interface CenteredIconCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}

export const CenteredIconCard: React.FC<CenteredIconCardProps> = ({
  icon,
  title,
  body,
  className,
}) => {
  return (
    <Card
      className={`relative bg-white/10 border-purple-400 w-1/2 h-1/2 items-center justify-center ${className}`}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/8 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white text-center mt-8">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-purple-50 text-center whitespace-pre-line">{body}</p>
      </CardContent>
    </Card>
  );
};

export const CenteredIconCardRow: React.FC<{
  props: CenteredIconCardProps[];
}> = ({ props }) => {
  return (
    <div className="flex flex-row gap-4">
      {props.map((prop, index) => (
        <CenteredIconCard key={index} {...prop} />
      ))}
    </div>
  );
};
