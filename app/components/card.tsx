import React from "react";
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
        <div className="absolute right-8 top-8">
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

          <div className="pb-2 pt-2 pl-6 group/link">
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
              className="relative group grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-purple-500/10  lg:group-hover:backdrop-blur lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <div className="z-10 sm:col-span-8">
                <h3 className="font-medium leading-snug">
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl min-w-xl">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
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
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <span className="inline-block">
                <ArrowIcon />
              </span>
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <a
          className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${installs} (opens in a new tab)`}
        >
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
        </a>
      </div>
      <img
        alt={imageAlt}
        loading="lazy"
        width="200"
        height="48"
        decoding="async"
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        style={{ color: "transparent" }}
        src={imageSrc}
      />
    </div>
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

{
  /* <ol className="group/list">
  <li className="mb-12">
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label="2024 to Present"
      >
        2024 — Present
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href="https://www.klaviyo.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                Senior Frontend Engineer, Accessibility ·{" "}
                <span className="inline-block">Klaviyo</span>
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">
          Build and maintain critical components used to construct Klaviyo's
          frontend, across the whole product. Work closely with cross-functional
          teams, including developers, designers, and product managers, to
          implement and advocate for best practices in web accessibility.
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {["JavaScript", "TypeScript", "React", "Storybook"].map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>
  {/* More experience items can be added here */
}
// </ol>; */}
