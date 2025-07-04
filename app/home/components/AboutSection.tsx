export default function AboutSection() {
  return (
    <section id="about" className="py-20" aria-label="About me">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        About Me
      </h2>
      <div className="custom-frosted-dark rounded-xl">
        <div className="max-w-none px-8 pb-6 pt-2">
          <p className="text-md text-white leading-relaxed pt-2">
            Hi! I'm Nick Tietje, and I love building things. I've always been a
            curious and analytical person, which initially drew me to Chemical
            Engineering. However, after dabbling in programming, I discovered my
            true passion for software development and made the switch to a
            combined major in Computer Science and Chemical Engineering. As a
            natural problem solver, this was a perfect fit. My unique education
            has given me the ability to understand complex systems and develop
            solutions to problems in both the real world and the digital world.
          </p>

          <p className="text-md text-white leading-relaxed pt-2">
            I'm an incoming computer science Master's student at Northeastern
            University and I'm currently employed as a Software Engineering
            Intern at Fidelity Investments. In my free time, I enjoy developing
            my own projects/tools, reading, and playing board games. Here are
            some of my interests, which I would love to talk about with you:
          </p>

          <ul className="space-y-4 text-md text-white/90 pt-3">
            <li className="flex items-start">
              <span className="text-white/80 font-bold mr-2">•</span>
              <span>
                <span className="text-white font-semibold">
                  Software Development:
                </span>{" "}
                Web apps, mobile apps, and other random tools.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white/80 font-bold mr-2">•</span>
              <span>
                <span className="text-white font-semibold">Board Games:</span>{" "}
                My favorites include Magic: The Gathering, Wingspan, Dominion,
                Sheriff of Nottingham, and Star Realms.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white/80 font-bold mr-2">•</span>
              <span>
                <span className="text-white font-semibold">Reading:</span>{" "}
                Science fiction, fantasy, dystopian/political fiction
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white/80 font-bold mr-2">•</span>
              <span>
                <span className="text-white font-semibold">Video Games:</span>{" "}
                Elden Ring, Expedition 33, Hollow Knight, Dota 2, Minecraft, Terraria, Enter the Gungeon, Stardew Valley, and many more.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white/80 font-bold mr-2">•</span>
              <span>
                <span className="text-white font-semibold">Fitness:</span>{" "}
                Cycling, hiking, and general strength training.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white/80 font-bold mr-2">•</span>
              <span>
                <span className="text-white font-semibold">Cooking:</span>{" "}
                Experimenting with new recipes and setting off the smoke alarm.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
