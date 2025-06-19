import { HoverableButton } from "../../components/HoverableCard";
import ContactMenu from "./ContactMenu";
import Headshot from "./Headshot";

function Name({ className }: { className?: string }) {
  return (
    <div className={`space-y-2 md:space-y-4 ${className}`}>
      <span className="text-lg md:text-2xl font-medium text-white">
        Hi, my name is
      </span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white md:mt-2 md:ml-[-5px]">
        Nick Tietje
      </h1>
    </div>
  )
}

function Description({ className }: { className?: string }) {
  return (
    <div className={`space-y-1 md:space-y-2 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4 md:mt-0">
        I'm a Software Engineer.
      </h2>

      <p className="text-lg text-white max-w-lg">
        I like to build full-stack web and mobile experiences.
      </p>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative py-16 md:py-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-32 md:gap-12">
          {/* Left content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-2xl">
            <div className="mb-8">
              <Name className="mb-4"/>
              <Description className="hidden md:block"/>
            </div>

            {/* Headshot */}
            <Headshot
              className="md:hidden mt-8 h-64 w-64"
              imageOffset="5rem"
            />

            <Description className="md:hidden mb-4"/>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <HoverableButton
                href="https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </HoverableButton>
              <ContactMenu className="flex gap-4 pl-2" />
            </div>
          </div>

          {/* Headshot (hidden on mobile) */}
          <Headshot
            className="hidden md:block h-72 w-72"
            imageOffset="7rem"
          />
        </div>
      </div>
    </section>
  );
} 