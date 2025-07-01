import { HoverableButton } from "../../components/HoverableCard";
import ContactMenu from "./ContactMenu";
import Headshot from "./Headshot";

function Name({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <span className="text-2xl font-medium text-white pb-8">
        Hi, my name is
      </span>
      <h1 className="text-6xl font-bold tracking-tight text-white">
        Nick Tietje
      </h1>
    </div>
  );
}

function Description({ className }: { className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h2 className="text-3xl font-semibold text-white mt-4">
        I'm a Software Engineer.
      </h2>

      <p className="text-lg font-medium text-white">
        I like to build full-stack web and mobile experiences.
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="flex flex-col items-center pb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-32 lg:gap-12">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl">
            <div className="mb-8">
              <Name className="mb-4" />
              <Description className="hidden lg:block" />
            </div>

            {/* Headshot */}
            <Headshot className="lg:hidden mt-8 h-64 w-64" imageOffset="5rem" />

            <Description className="lg:hidden mb-4" />

            <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
              <HoverableButton
                className="whitespace-nowrap"
                href="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </HoverableButton>
              <ContactMenu className="flex gap-4 pl-0 lg:pl-2" />
            </div>
          </div>

          {/* Headshot (hidden on mobile) */}
          <Headshot className="hidden lg:block h-72 w-72" imageOffset="7rem" />
        </div>
      </div>
    </section>
  );
}
