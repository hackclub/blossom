import Faq from "../components/faq";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Photos from "../components/photo";

export default function Home() {
  return (
    <>
      <HeadObject />
      <Nav />
      <main>
        {/* Hero */}
        <section className="mb-16 flex flex-col items-center justify-center gap-2 lg:mb-28">
          <img
            src="/blossomlogo.png"
            alt="A pink flower with the word 'blossom' to the right of it."
            className="w-2/3 lg:w-1/3"
          />
          <div className="text-xl font-bold lowercase">
            A Hack Club Day of Service
          </div>
          <div className="">March 16th | Atlanta, GA</div>
        </section>

        {/* What is a Day of Service */}
        <section className="mx-auto mb-16 flex w-11/12 flex-col items-center gap-4 sm:w-3/4 lg:w-2/3 lg:flex-row lg:items-start xl:w-1/2">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <h2>What is a Day of Service?</h2>
            <p className="px-3 text-lg md:text-xl">
              Blossom is a <span>gender-focused hackathon</span> (social coding
              event) open to all Girl Scouts! We welcome you come together for a
              day to discover the joy of code, build awesome projects, and share
              them with one another.
            </p>
          </div>
          <img
            src="/dos-girls.png"
            alt="Four young girl scouts smiling at the camera in their tan-colored vests."
            className="w-8/12 lg:w-1/2"
          />
        </section>

        {/* Past Events */}
        <section className="flex flex-col items-center" id="past-dos">
          <h2>Past Events</h2>
          <Photos />
        </section>

        {/* Workshop Tracks */}
        <section className="mb-16 flex flex-col items-center gap-4">
          <h2>Workshop Tracks</h2>
          <div className="md:3/4 flex w-11/12 flex-col items-center gap-5 md:flex-row xl:w-1/2">
            <img
              src="/pcb.png"
              alt="pcb"
              className="w-8/12 md:w-1/3 xl:w-1/2"
            />
            <div className="flex flex-col">
              <h3>Circuit Board Design w/ OnBoard</h3>
              <p>
                In this workshop, participants will learn the fundamentals of
                circuit board design with Hack Club's OnBoard program. They’ll
                use EasyEDA, a free circuit design software, to complete this.
                With this track, attendees will learn to use that software as
                well as the basics of PCB design. As a bonus, after students
                complete this track, they’ll be shipped their PCB to have a
                physical copy of their creation!
              </p>
            </div>
          </div>
          <div className="md:3/4 flex w-11/12 flex-col items-center gap-5 md:flex-row-reverse xl:w-1/2">
            <img
              src="/blot.png"
              alt="blot"
              className="w-8/12 md:w-1/3 xl:w-1/2"
            />
            <div className="flex flex-col">
              <h3>computer-generated art w/ blot</h3>
              <p>
                In this workshop, participants will learn to create
                computer-generated art by drawing a flower (or squares or a
                tree). They’ll use Blot, a robotic arm created by Hack Club that
                translates code to creation. With this track, attendees will
                learn JavaScript and digital fabrication. After students
                complete this track, they’ll be shipped their own robot arm to
                draw out their creation!
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-4 pb-16">
          <h2 id="faq">FAQ</h2>
          <Faq />
        </section>
      </main>
      <footer className="bg-dark-pink flex items-center justify-center bg-opacity-20 py-4">
        <p className="">
          🌸 This website is open source at{" "}
          <a href="https://github.com/hackclub/blossom">
            <span>hackclub/blossom</span>
          </a>
          .
        </p>
      </footer>
    </>
  );
}
