import React from "react";

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  responsibilities: string[];
}

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <div
    className={`p-4 rounded-lg shadow-lg backdrop-blur ${className}`}
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)' }}
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

export function ExperienceCard({
  date,
  title,
  company,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="mb-8 flex pl-20">
      <div className="pr-4 text-right flex-shrink-0 relative top-1.5">
        <div className="absolute right-6 top-8">
          <span className="text-purple-300 font-semibold whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
      <div className="flex-grow relative">
        <div className="absolute left-0 -top-4 -bottom-4 w-px bg-purple-400 m-0" />{" "}
        {/* -top-10 */}
        <div className="relative ml-6">
          <div className="absolute -left-9 top-10 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center z-10">
            {/* <BriefcaseIcon className="w-4 h-4 text-purple-900" /> */}
          </div>
          <Card className="bg-white/10 border-purple-400 flex-grow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-50 mb-2 text-l italic">{company}</p>
              <ul className="list-disc list-inside text-purple-50">
                {responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="mb-1">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
